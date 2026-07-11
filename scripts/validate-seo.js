import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const origin = 'https://obsidianridgelabs.com';
const errors = [];
const warnings = [];
const expectedAppIds = ['echochamber', 'vault', 'molehill', 'cove', 'wove', 'mettle', 'memora', 'trove', 'kith'];
const expectedAppNames = ['ECHO CHAMBER', 'VAULT', 'MOLEHILL', 'COVE', 'WOVE', 'METTLE', 'MEMORA', 'TROVE', 'KITH'];
const expectedBlogPostCount = 20;
const schemaGraphsByRoute = new Map();
const visibleTextByRoute = new Map();

const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const fullPath = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(fullPath) : [fullPath];
});

const getRoute = (file) => {
  const relative = path.relative(dist, file);
  if (relative === 'index.html') return '/';
  return `/${path.dirname(relative).split(path.sep).join('/')}`;
};

const allMatches = (html, expression) => [...html.matchAll(expression)];
const textValue = (value) => String(value || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&quot;|&#34;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();

const typesOf = (node) => Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']].filter(Boolean);
const pageTypes = new Set(['WebPage', 'AboutPage', 'CollectionPage', 'ContactPage', 'ProfilePage', 'SearchResultsPage']);

if (!fs.existsSync(dist)) {
  console.error('dist/ does not exist. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith(`${path.sep}index.html`) || file === path.join(dist, 'index.html'));
const canonicalRoutes = new Map();
const noindexRoutes = new Set();
const indexableRoutes = new Set();

for (const file of htmlFiles) {
  const route = getRoute(file);
  const html = fs.readFileSync(file, 'utf8');
  const titles = allMatches(html, /<title>([\s\S]*?)<\/title>/gi);
  const descriptions = allMatches(html, /<meta name="description" content="([^"]*)"\s*\/>/gi);
  const canonicals = allMatches(html, /<link rel="canonical" href="([^"]*)"\s*\/>/gi);
  const jsonLdScripts = allMatches(html, /<script type="application\/ld\+json" data-seo-jsonld="true">([\s\S]*?)<\/script>/gi);
  const h1Count = allMatches(html, /<h1(?:\s|>)/gi).length;
  const robots = html.match(/<meta name="robots" content="([^"]*)"\s*\/>/i)?.[1] || '';
  const isNoindex = robots.includes('noindex');
  visibleTextByRoute.set(route, textValue(html));

  if (titles.length !== 1) errors.push(`${route}: expected 1 title, found ${titles.length}`);
  if (descriptions.length !== 1) errors.push(`${route}: expected 1 meta description, found ${descriptions.length}`);
  if (canonicals.length !== 1) errors.push(`${route}: expected 1 canonical, found ${canonicals.length}`);
  if (jsonLdScripts.length !== 1) errors.push(`${route}: expected 1 JSON-LD graph, found ${jsonLdScripts.length}`);
  if (h1Count !== 1) errors.push(`${route}: expected 1 h1, found ${h1Count}`);
  if (/meta name="keywords"/i.test(html)) errors.push(`${route}: obsolete meta keywords tag is present`);

  const title = textValue(titles[0]?.[1]);
  const description = textValue(descriptions[0]?.[1]);
  if (!isNoindex && title.length > 75) warnings.push(`${route}: title is ${title.length} characters`);
  if (!isNoindex && description.length > 165) warnings.push(`${route}: description is ${description.length} characters`);
  if (!isNoindex && description.length && description.length < 50) warnings.push(`${route}: description is only ${description.length} characters`);

  const canonical = canonicals[0]?.[1];
  if (canonical) {
    if (canonicalRoutes.has(canonical)) errors.push(`${route}: canonical duplicates ${canonicalRoutes.get(canonical)}`);
    canonicalRoutes.set(canonical, route);
  }

  if (isNoindex) noindexRoutes.add(route);
  else indexableRoutes.add(route);

  if (jsonLdScripts.length === 1) {
    try {
      const graphDocument = JSON.parse(jsonLdScripts[0][1]);
      const graph = graphDocument['@graph'];
      if (graphDocument['@context'] !== 'https://schema.org' || !Array.isArray(graph)) {
        errors.push(`${route}: JSON-LD must be one schema.org @graph document`);
        continue;
      }
      schemaGraphsByRoute.set(route, graph);

      for (const requiredType of ['Organization', 'WebSite']) {
        if (!graph.some((node) => typesOf(node).includes(requiredType))) errors.push(`${route}: missing ${requiredType} node`);
      }
      const organization = graph.find((node) => typesOf(node).includes('Organization'));
      if (
        organization?.address?.addressLocality !== 'Las Vegas'
        || organization?.address?.addressRegion !== 'NV'
        || organization?.address?.addressCountry !== 'US'
      ) {
        errors.push(`${route}: Organization headquarters address must identify Las Vegas, Nevada, US`);
      }
      const pageNode = graph.find((node) => typesOf(node).some((type) => pageTypes.has(type)) && node['@id'] === `${canonical}#webpage`);
      if (!pageNode) errors.push(`${route}: missing canonical #webpage node`);

      const ids = graph.map((node) => node['@id']).filter(Boolean);
      if (new Set(ids).size !== ids.length) errors.push(`${route}: duplicate top-level @id values in graph`);

      const faq = graph.find((node) => typesOf(node).includes('FAQPage'));
      if (faq) {
        const visibleText = textValue(html);
        for (const question of faq.mainEntity || []) {
          if (!visibleText.includes(textValue(question.name))) errors.push(`${route}: FAQ schema question is not visible: ${question.name}`);
        }
      }
    } catch (error) {
      errors.push(`${route}: JSON-LD parse failure: ${error.message}`);
    }
  }
}

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapRoutes = new Set(allMatches(sitemap, /<loc>([^<]+)<\/loc>/g).map((match) => {
  const url = new URL(match[1]);
  return url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
}));

for (const route of noindexRoutes) {
  if (sitemapRoutes.has(route)) errors.push(`${route}: noindex route appears in sitemap`);
}
for (const route of indexableRoutes) {
  if (!sitemapRoutes.has(route)) errors.push(`${route}: indexable route is missing from sitemap`);
}
if (!noindexRoutes.has('/404')) errors.push('/404: expected noindex');
if (noindexRoutes.size !== 1) {
  errors.push(`expected /404 to be the only noindex route, found: ${[...noindexRoutes].sort().join(', ') || 'none'}`);
}
if (sitemapRoutes.size !== htmlFiles.length - 1) {
  errors.push(`sitemap should contain every prerendered page except /404: found ${sitemapRoutes.size} URLs for ${htmlFiles.length} HTML routes`);
}

for (const appId of expectedAppIds) {
  const appRoute = `/apps/${appId}`;
  const appFile = path.join(dist, 'apps', appId, 'index.html');
  if (!fs.existsSync(appFile)) {
    errors.push(`${appRoute}: prerendered app page is missing`);
    continue;
  }
  if (!sitemapRoutes.has(appRoute)) errors.push(`${appRoute}: app page is missing from sitemap`);

  const appHtml = fs.readFileSync(appFile, 'utf8');
  const productArticleLinks = new Set(
    allMatches(appHtml, /href="(\/blog\/[^"#?]+)"/g).map((match) => match[1]),
  );
  if (productArticleLinks.size !== 2) {
    errors.push(`${appRoute}: expected exactly 2 product-specific journal links, found ${productArticleLinks.size}`);
  }
  const schemaSource = appHtml.match(/<script type="application\/ld\+json" data-seo-jsonld="true">([\s\S]*?)<\/script>/i)?.[1];
  if (!schemaSource) {
    errors.push(`${appRoute}: JSON-LD graph is missing`);
    continue;
  }
  try {
    const graph = JSON.parse(schemaSource)['@graph'] || [];
    if (!graph.some((node) => typesOf(node).includes('SoftwareApplication'))) {
      errors.push(`${appRoute}: SoftwareApplication schema is missing`);
    }
    if (!graph.some((node) => typesOf(node).includes('FAQPage'))) {
      errors.push(`${appRoute}: FAQPage schema is missing`);
    }
  } catch (error) {
    errors.push(`${appRoute}: could not validate product schema: ${error.message}`);
  }
}

const blogArticleRoutes = [...indexableRoutes]
  .filter((route) => route.startsWith('/blog/'))
  .sort();
if (blogArticleRoutes.length !== expectedBlogPostCount) {
  errors.push(`journal should expose ${expectedBlogPostCount} indexable articles, found ${blogArticleRoutes.length}`);
}

const clusterGenres = new Map(expectedAppIds.map((appId) => [appId, new Set()]));
for (const blogRoute of blogArticleRoutes) {
  const graph = schemaGraphsByRoute.get(blogRoute) || [];
  const article = graph.find((node) => typesOf(node).includes('BlogPosting'));
  const faq = graph.find((node) => typesOf(node).includes('FAQPage'));
  const list = graph.find((node) => typesOf(node).includes('ItemList'));
  const visibleText = visibleTextByRoute.get(blogRoute) || '';

  if (!article) {
    errors.push(`${blogRoute}: BlogPosting schema is missing`);
    continue;
  }
  if (!faq || !Array.isArray(faq.mainEntity) || faq.mainEntity.length < 3) {
    errors.push(`${blogRoute}: visible FAQPage schema should contain at least 3 questions`);
  }
  if (!Number.isFinite(article.wordCount) || article.wordCount < 650) {
    errors.push(`${blogRoute}: article should contain at least 650 substantive schema-counted words; found ${article.wordCount || 0}`);
  }
  if (!Array.isArray(article.citation) || article.citation.length < 2) {
    errors.push(`${blogRoute}: article should cite at least 2 source URLs`);
  }
  if (article.image !== `${origin}/blog-og.png`) {
    errors.push(`${blogRoute}: journal social image is missing from BlogPosting schema`);
  }
  for (const visibleSection of ['Question this guide answers', 'Key takeaways', 'Sources and further reading']) {
    if (!visibleText.includes(visibleSection)) errors.push(`${blogRoute}: missing visible editorial section: ${visibleSection}`);
  }
  if (['comparison', 'listicle'].includes(article.genre) && !visibleText.includes('How this guide was built')) {
    errors.push(`${blogRoute}: comparison/listicle methodology disclosure is missing`);
  }
  if (article.genre === 'listicle' && !list) {
    errors.push(`${blogRoute}: listicle is missing ItemList schema`);
  }

  const aboutId = article.about?.['@id'];
  const appId = typeof aboutId === 'string' ? aboutId.match(/\/apps\/([^/#]+)#software$/)?.[1] : null;
  if (appId && clusterGenres.has(appId)) clusterGenres.get(appId).add(article.genre);
}

for (const [appId, genres] of clusterGenres) {
  if (!genres.has('comparison') || !genres.has('listicle') || genres.size !== 2) {
    errors.push(`/apps/${appId}: journal cluster must contain one comparison and one listicle; found ${[...genres].join(', ') || 'none'}`);
  }
}

const rssPath = path.join(dist, 'feed.xml');
const jsonFeedPath = path.join(dist, 'feed.json');
if (!fs.existsSync(rssPath) || !fs.existsSync(jsonFeedPath)) {
  errors.push('journal RSS and JSON feeds must both be generated');
} else {
  const rss = fs.readFileSync(rssPath, 'utf8');
  const feed = JSON.parse(fs.readFileSync(jsonFeedPath, 'utf8'));
  const rssItems = allMatches(rss, /<item>/g).length;
  if (rssItems !== expectedBlogPostCount) errors.push(`feed.xml: expected ${expectedBlogPostCount} items, found ${rssItems}`);
  if (!Array.isArray(feed.items) || feed.items.length !== expectedBlogPostCount) {
    errors.push(`feed.json: expected ${expectedBlogPostCount} items, found ${feed.items?.length || 0}`);
  }
}

for (const retiredRoute of ['/apps/mind', '/apps/nexus', '/blog/notion-vs-mindpalace']) {
  if (sitemapRoutes.has(retiredRoute)) errors.push(`${retiredRoute}: retired route appears in sitemap`);
  const retiredFile = path.join(dist, retiredRoute.replace(/^\//, ''), 'index.html');
  if (fs.existsSync(retiredFile)) errors.push(`${retiredRoute}: retired route was prerendered instead of redirected`);
}

const echoHtml = fs.readFileSync(path.join(dist, 'apps', 'echochamber', 'index.html'), 'utf8');
for (const expected of ['upload an existing audio or video file', 'approximately 3% WER', '6.32% average English WER', '7.44% for OpenAI Whisper large-v3']) {
  if (!textValue(echoHtml).toLowerCase().includes(expected.toLowerCase())) errors.push(`/apps/echochamber: missing required product fact: ${expected}`);
}

const homeText = visibleTextByRoute.get('/') || '';
if (!homeText.includes('Independent studio · Las Vegas, Nevada')) {
  errors.push('/: homepage must identify the studio as based in Las Vegas, Nevada');
}

const philosophyHtml = fs.readFileSync(path.join(dist, 'philosophy', 'index.html'), 'utf8');
if (!philosophyHtml.includes('countermeasure-sequence')) errors.push('/philosophy: countermeasure sequence is missing');
if (philosophyHtml.includes('ResizeObserver')) errors.push('/philosophy: horizontal-scroll implementation leaked into HTML');

const llmsFull = fs.readFileSync(path.join(dist, 'llms-full.txt'), 'utf8');
const llmsIndex = fs.readFileSync(path.join(dist, 'llms.txt'), 'utf8');
for (const expected of ['approximately 3% word error rate', 'upload an existing audio or video file', 'Preview documentation']) {
  if (!llmsFull.toLowerCase().includes(expected.toLowerCase())) errors.push(`llms-full.txt: missing ${expected}`);
}
for (const appName of expectedAppNames) {
  if (!llmsFull.includes(`### ${appName}`)) errors.push(`llms-full.txt: missing product section for ${appName}`);
  if (!llmsIndex.includes(`[${appName}]`)) errors.push(`llms.txt: missing product link for ${appName}`);
}
for (const forbidden of ['Apple is the only platform where privacy', 'no chance of interception', 'Otter training']) {
  if (llmsFull.toLowerCase().includes(forbidden.toLowerCase())) errors.push(`llms-full.txt: contains retired claim: ${forbidden}`);
}
for (const retired of ['Mind Palace', 'Decision Nexus', '/apps/mind', '/apps/nexus', 'notion-vs-mindpalace']) {
  if (llmsFull.includes(retired) || llmsIndex.includes(retired) || sitemap.includes(retired)) {
    errors.push(`public discovery files contain retired product reference: ${retired}`);
  }
}

if (warnings.length) {
  console.warn(`SEO validation warnings (${warnings.length}):`);
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error(`SEO validation failed (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`SEO validation passed for ${htmlFiles.length} prerendered routes and ${sitemapRoutes.size} sitemap URLs.`);
