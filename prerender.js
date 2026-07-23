import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render, routes, products, blogPosts, knowledgeBases, collectionFaqs, echoFaqs, homeFaqs, philosophyFaqs, productFaqs } from './dist-server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Paths
const clientDist = path.resolve(__dirname, './dist');
const templatePath = path.resolve(clientDist, 'index.html');
const SITE_ORIGIN = 'https://obsidianridgelabs.com';

console.log('Starting prerendering...');

if (!fs.existsSync(templatePath)) {
  console.error(`Error: template not found at ${templatePath}`);
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Strip default SEO tags from template to avoid duplicates
function stripDefaultMeta(html) {
  return html
    .replace(/<title>.*?<\/title>/gi, '')
    .replace(/<meta name="description" content=".*?" \/>/gi, '')
    .replace(/<meta name="keywords" content=".*?" \/>/gi, '')
    .replace(/<meta name="author" content=".*?" \/>/gi, '')
    .replace(/<meta name="robots" content=".*?" \/>/gi, '')
    .replace(/<link rel="canonical" href=".*?" \/>/gi, '')
    .replace(/<meta property="og:.*?" content=".*?" \/>/gi, '')
    .replace(/<meta name="twitter:.*?" content=".*?" \/>/gi, '');
}

const strippedTemplate = stripDefaultMeta(template);

const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const safeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c');
const indexableRoutes = new Set();
const getDocumentTitle = (title) => {
  const branded = `${title} | Obsidian Ridge Labs`;
  return branded.length <= 68 ? branded : title;
};

// Prerender each route
for (const route of routes) {
  const context = {
    title: '',
    description: '',
    canonical: '',
    ogType: '',
    ogImage: '',
    ogImageAlt: '',
    article: null,
    jsonLd: null,
    keywords: null,
    noindex: false
  };

  console.log(`Prerendering: ${route}`);
  
  let appHtml = '';
  try {
    appHtml = render(route, context);
  } catch (err) {
    console.error(`Error rendering route ${route}:`, err);
    process.exit(1);
  }

  // Fallback to default meta if SEO component didn't write anything
  const title = context.title ? getDocumentTitle(context.title) : 'Obsidian Ridge Labs | Private AI Apps for Apple';
  const description = context.description || 'Obsidian Ridge Labs builds privacy-first, offline AI apps for Apple devices.';
  const canonicalUrl = context.canonical || `https://obsidianridgelabs.com${route}`;
  const robots = context.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  if (route !== '/404') {
    if (context.noindex) {
      throw new Error(`Public route ${route} was marked noindex. Every valid public page must be indexable.`);
    }
    indexableRoutes.add(route);
  }
  
  let headTags = `
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <link rel="alternate" type="application/rss+xml" title="The Obsidian Ridge Journal" href="https://obsidianridgelabs.com/feed.xml" />
  <meta name="robots" content="${robots}" />
  <meta property="og:site_name" content="Obsidian Ridge Labs" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="${escapeHtml(context.title || 'Obsidian Ridge Labs')}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="${escapeHtml(context.ogType || 'website')}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta property="og:image" content="${escapeHtml(context.ogImage || 'https://obsidianridgelabs.com/og-v2.png')}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escapeHtml(context.ogImageAlt || context.title || 'Obsidian Ridge Labs')}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(context.title || 'Obsidian Ridge Labs')}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(context.ogImage || 'https://obsidianridgelabs.com/og-v2.png')}" />
  <meta name="twitter:image:alt" content="${escapeHtml(context.ogImageAlt || context.title || 'Obsidian Ridge Labs')}" />
  `;

  if (context.article) {
    headTags += `
  <meta property="article:published_time" content="${escapeHtml(context.article.publishedTime)}" />
  ${context.article.modifiedTime ? `<meta property="article:modified_time" content="${escapeHtml(context.article.modifiedTime)}" />` : ''}
  <meta property="article:section" content="${escapeHtml(context.article.section)}" />
  <meta property="article:author" content="Obsidian Ridge Labs" />
  ${context.article.tags.map((tag) => `<meta property="article:tag" content="${escapeHtml(tag)}" />`).join('\n  ')}
    `;
  }

  if (context.jsonLd) {
    headTags += `
  <script type="application/ld+json" data-seo-jsonld="true">${safeJson(context.jsonLd)}</script>
    `;
  }

  let html = strippedTemplate;
  
  // Inject head tags
  const headIndex = html.indexOf('<head>');
  if (headIndex !== -1) {
    html = html.slice(0, headIndex + 6) + headTags + html.slice(headIndex + 6);
  }

  // Inject body html
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Write file
  // For homepage (/), write directly to dist/index.html instead of dist//index.html
  if (route === '/') {
    fs.writeFileSync(path.join(clientDist, 'index.html'), html, 'utf8');
  } else {
    const routeDir = path.join(clientDist, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  }
}

console.log('Prerendering routes completed!');

// Static GitHub Pages has no worker redirects, so keep legacy /blog URLs alive
// with lightweight HTML redirects to /journal.
const writeLegacyRedirect = (fromPath, toPath) => {
  const absoluteTarget = `${SITE_ORIGIN}${toPath}`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Moved to ${escapeHtml(toPath)}</title>
  <link rel="canonical" href="${escapeHtml(absoluteTarget)}" />
  <meta http-equiv="refresh" content="0;url=${escapeHtml(toPath)}" />
  <meta name="robots" content="noindex, follow" />
  <script>location.replace(${JSON.stringify(toPath)});</script>
</head>
<body>
  <p>This page has moved to <a href="${escapeHtml(toPath)}">${escapeHtml(toPath)}</a>.</p>
</body>
</html>
`;
  const routeDir = path.join(clientDist, fromPath.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
};

writeLegacyRedirect('/blog', '/journal');
for (const post of blogPosts) {
  writeLegacyRedirect(`/blog/${post.id}`, `/journal/${post.id}`);
}
writeLegacyRedirect('/blog/notion-vs-mindpalace', '/journal/private-ai-journal-guide');
console.log(`legacy /blog redirects written: ${blogPosts.length + 2}`);


// Generate sitemap.xml from the prerendered routes so it is always in sync.
// Only emit lastmod when the underlying content has an explicit editorial date.
// A build timestamp is not a content modification date and creates false freshness
// signals for search engines.
console.log('Generating sitemap.xml...');

const normalizeSitemapDate = (value) => {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().replace(/\./g, '-');
  return /^\d{4}-\d{2}-\d{2}$/.test(normalized) ? normalized : null;
};

const latestDate = (values) => {
  const validDates = values.map(normalizeSitemapDate).filter(Boolean).sort();
  return validDates.length ? validDates[validDates.length - 1] : null;
};

const lastmodByRoute = new Map();

for (const post of blogPosts) {
  const editorialDate = normalizeSitemapDate(post.modified || post.date);
  if (editorialDate) lastmodByRoute.set(`/journal/${post.id}`, editorialDate);
}

const latestBlogDate = latestDate(blogPosts.map((post) => post.modified || post.date));
if (latestBlogDate) lastmodByRoute.set('/journal', latestBlogDate);

for (const kb of knowledgeBases) {
  for (const article of kb.articles) {
    const updatedDate = normalizeSitemapDate(article.updated);
    if (updatedDate) {
      lastmodByRoute.set(`/help/${kb.appId}/${article.id}`, updatedDate);
    }
  }

  const latestKbDate = latestDate(kb.articles.map((article) => article.updated));
  if (latestKbDate) lastmodByRoute.set(`/help/${kb.appId}`, latestKbDate);
}

const latestHelpDate = latestDate(
  knowledgeBases.flatMap((kb) => kb.articles.map((article) => article.updated)),
);
if (latestHelpDate) lastmodByRoute.set('/help', latestHelpDate);

const sitemapUrls = routes
  .filter((route) => indexableRoutes.has(route))
  .map((route) => {
    const loc = route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}`;
    const lastmod = lastmodByRoute.get(route);
    const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n  </url>`;
  })
  .join('\n');
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
fs.writeFileSync(path.join(clientDist, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`sitemap.xml generated: ${indexableRoutes.size} indexable urls, ${lastmodByRoute.size} routes with source-backed dates`);

// Publish a lightweight standards-based feed for readers, feed clients, and
// discovery systems. The feed uses editorial dates rather than build time.
console.log('Generating journal feeds...');
const escapeXml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');
const toRssDate = (value) => {
  const normalized = normalizeSitemapDate(value);
  return normalized ? new Date(`${normalized}T00:00:00.000Z`).toUTCString() : '';
};
const feedPosts = [...blogPosts].sort((left, right) => (
  (normalizeSitemapDate(right.date) || '').localeCompare(normalizeSitemapDate(left.date) || '')
));
const feedItems = feedPosts.map((post) => `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${SITE_ORIGIN}/journal/${post.id}</link>
    <guid isPermaLink="true">${SITE_ORIGIN}/journal/${post.id}</guid>
    <pubDate>${toRssDate(post.date)}</pubDate>
    <category>${escapeXml(post.category)}</category>
    <description>${escapeXml(post.seoDescription || post.excerpt)}</description>
  </item>`).join('\n');
const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>The Obsidian Ridge Journal</title>
  <link>${SITE_ORIGIN}/journal</link>
  <description>Source-backed comparisons and practical guides to private, offline, and on-device AI apps.</description>
  <language>en-us</language>
  <lastBuildDate>${toRssDate(latestBlogDate)}</lastBuildDate>
${feedItems}
</channel>
</rss>
`;
fs.writeFileSync(path.join(clientDist, 'feed.xml'), rssXml, 'utf8');

const jsonFeed = {
  version: 'https://jsonfeed.org/version/1.1',
  title: 'The Obsidian Ridge Journal',
  home_page_url: `${SITE_ORIGIN}/journal`,
  feed_url: `${SITE_ORIGIN}/feed.json`,
  description: 'Source-backed comparisons and practical guides to private, offline, and on-device AI apps.',
  language: 'en-US',
  authors: [{ name: 'Obsidian Ridge Labs', url: `${SITE_ORIGIN}/` }],
  items: feedPosts.map((post) => ({
    id: `${SITE_ORIGIN}/journal/${post.id}`,
    url: `${SITE_ORIGIN}/journal/${post.id}`,
    title: post.title,
    summary: post.seoDescription || post.excerpt,
    date_published: `${normalizeSitemapDate(post.date)}T00:00:00.000Z`,
    ...(post.modified ? { date_modified: `${normalizeSitemapDate(post.modified)}T00:00:00.000Z` } : {}),
    tags: post.tags.map((tag) => tag.replace(/^#/, '')),
  })),
};
fs.writeFileSync(path.join(clientDist, 'feed.json'), `${JSON.stringify(jsonFeed, null, 2)}\n`, 'utf8');
console.log(`journal feeds generated: ${blogPosts.length} entries`);

// Generate llms-full.txt
console.log('Generating llms-full.txt...');

let llmsContent = `# Obsidian Ridge Labs: Full Content Directory

> Boutique mobile app studio specializing in private, offline-first AI architecture.

This document contains the complete details of all products, the development philosophy, and all articles published by Obsidian Ridge Labs.

---

## Products

`;

const releaseLabel = (product) => {
  switch (product.releaseStatus) {
    case 'app-store': return 'Available on the App Store';
    case 'source-only': return 'Source available';
    case 'pre-release': return 'In development';
    case 'concept': return 'Concept in development';
    default: return 'Release status not announced';
  }
};

for (const p of products) {
  llmsContent += `### ${p.name} (${p.shortName})
- **Tagline**: ${p.tagline}
- **Category**: ${p.category}
- **Status**: ${releaseLabel(p)}
- **Description**: ${p.fullDescription}

#### Key Features
`;
  for (const f of p.features) {
    llmsContent += `- **${f.title}**: ${f.description}\n`;
  }
  llmsContent += `\n#### Workflow\n`;
  for (const w of p.workflow) {
    llmsContent += `- **${w.title}**: ${w.description}\n`;
  }
  llmsContent += `\n`;
}

llmsContent += `---

## Philosophy

Obsidian Ridge Labs operates on four product constraints:

1. **Data has gravity**. Core processing should happen where private data is created whenever the hardware can do the work.
2. **The cloud must earn its place**. Core features should work locally, permissions should appear in context, and optional network connections should be narrow and user-controlled.
3. **Offline should be excellent**. After required setup, important work should continue without the network.
4. **Memory should be deliberate**. Retention and deletion should be understandable and under user control.

For supported features, app-bundled models and Apple frameworks perform core processing on the device. Product pages separately disclose optional connections such as model downloads, App Store verification, encrypted iCloud sync, Plaid bank sync, and user-initiated support.

---

## Conversational Questions & Answers

`;

const appendFaqs = (title, url, faqs) => {
  llmsContent += `### ${title}\n- **URL**: ${url}\n\n`;
  for (const faq of faqs) {
    llmsContent += `**Q: ${faq.question}**\n\n${faq.answer}\n\n`;
  }
};

appendFaqs('Private AI and on-device processing', `${SITE_ORIGIN}/`, homeFaqs);
appendFaqs('Local-first AI philosophy', `${SITE_ORIGIN}/philosophy`, philosophyFaqs);
appendFaqs('App collection', `${SITE_ORIGIN}/download`, collectionFaqs);
appendFaqs('Echo Chamber', `${SITE_ORIGIN}/apps/echochamber`, echoFaqs);
for (const [productId, faqs] of Object.entries(productFaqs)) {
  const product = products.find((item) => item.id === productId);
  if (product) appendFaqs(product.name, `${SITE_ORIGIN}/apps/${productId}`, faqs);
}

llmsContent += `

---

## Blog Articles

`;

for (const post of blogPosts) {
  llmsContent += `### ${post.title}
- **URL**: ${SITE_ORIGIN}/journal/${post.id}
- **Date**: ${post.date}
${post.modified ? `- **Updated**: ${post.modified}\n` : ''}- **Read Time**: ${post.readTime}
- **Category**: ${post.category}
- **Content Type**: ${post.contentType}
- **Primary Question**: ${post.searchIntent}
- **Tags**: ${post.tags.join(', ')}
- **Excerpt**: ${post.excerpt}

#### Key Takeaways

${post.keyTakeaways.map((takeaway) => `- ${takeaway}`).join('\n')}

${post.listItems?.length ? `#### Items Compared\n\n${post.listItems.map((item, index) => `${index + 1}. **${item.name}**: ${item.description}`).join('\n')}\n\n` : ''}
#### Full Article Content

`;
  
  for (const block of post.blocks) {
    if (block.type === 'paragraph') {
      llmsContent += `${block.content}\n\n`;
    } else if (block.type === 'h2') {
      llmsContent += `#### ${block.content}\n\n`;
    } else if (block.type === 'quote') {
      llmsContent += `> ${block.content}\n\n`;
    } else if (block.type === 'list') {
      for (const item of block.content) {
        llmsContent += `- ${item}\n`;
      }
      llmsContent += `\n`;
    } else if (block.type === 'answer') {
      llmsContent += `#### ${block.title}\n\n${block.content}\n\n`;
    } else if (block.type === 'callout') {
      llmsContent += `> **${block.title}**: ${block.content}\n\n`;
    } else if (block.type === 'comparison') {
      llmsContent += `#### ${block.caption}\n\n`;
      llmsContent += `| ${block.columns.join(' | ')} |\n`;
      llmsContent += `| ${block.columns.map(() => '---').join(' | ')} |\n`;
      for (const row of block.rows) {
        const cells = [row.label, ...row.cells].slice(0, block.columns.length);
        llmsContent += `| ${cells.join(' | ')} |\n`;
      }
      llmsContent += `\n`;
    } else if (block.type === 'faq') {
      llmsContent += `#### Frequently Asked Questions\n\n`;
      for (const item of block.content) {
        llmsContent += `**Q: ${item.question}**\n\n${item.answer}\n\n`;
      }
    } else if (block.type === 'sources') {
      llmsContent += `#### Sources & Further Reading\n\n`;
      for (const source of block.content) {
        const [label, url] = source.split('|');
        llmsContent += `- [${label}](${url})\n`;
      }
      llmsContent += `\n`;
    } else if (block.type === 'cta') {
      llmsContent += `> **Call to Action**: ${block.content} (App ID: ${block.ctaAppId})\n\n`;
    }
  }
  llmsContent += `\n---\n\n`;
}

// Help center / knowledge base: full article text for AI ingestion.
llmsContent += `## Help Center & Knowledge Base\n\n`;

const renderKbBlock = (block) => {
  switch (block.type) {
    case 'paragraph':
      return `${block.content}\n\n`;
    case 'heading':
      return `${block.level === 2 ? '####' : '#####'} ${block.content}\n\n`;
    case 'list':
      return block.items.map((it) => `- ${it}`).join('\n') + '\n\n';
    case 'steps':
      return block.items.map((s, i) => `${i + 1}. **${s.title}**: ${s.description}`).join('\n') + '\n\n';
    case 'callout':
      return `> ${block.title ? `**${block.title}** ` : ''}${block.content}\n\n`;
    case 'faq':
      return block.items.map((f) => `**Q: ${f.q}**\nA: ${f.a}`).join('\n\n') + '\n\n';
    default:
      return '';
  }
};

for (const kb of knowledgeBases) {
  const kbProduct = products.find((item) => item.id === kb.appId);
  const previewNotice = kbProduct && ['pre-release', 'concept'].includes(kbProduct.releaseStatus)
    ? '> **Preview documentation:** This product is in development. Features, compatibility, and exact steps may change before release.\n\n'
    : '';
  llmsContent += `### ${kb.appName}: Help Guides\n\n${kb.intro}\n\n`;
  llmsContent += previewNotice;
  for (const article of kb.articles) {
    const cat = kb.categories.find((c) => c.id === article.category);
    llmsContent += `#### ${article.title}\n`;
    llmsContent += `- **Topic**: ${cat ? cat.title : article.category}\n`;
    llmsContent += `- **Summary**: ${article.description}\n`;
    llmsContent += `- **URL**: ${SITE_ORIGIN}/help/${kb.appId}/${article.id}\n\n`;
    for (const block of article.blocks) {
      llmsContent += renderKbBlock(block);
    }
    llmsContent += `\n`;
  }
  llmsContent += `---\n\n`;
}

let llmsIndex = `# Obsidian Ridge Labs

> Independent Apple software studio building private, offline-first AI apps whose core intelligence runs on-device.

- [Full content directory](${SITE_ORIGIN}/llms-full.txt): Complete product facts, conversational answers, articles, and help documentation.
- [App collection](${SITE_ORIGIN}/download): Current availability, compatibility, pricing, and connection disclosures.
- [Local-first philosophy](${SITE_ORIGIN}/philosophy): The principles behind on-device processing and offline-ready software.
- [Privacy model](${SITE_ORIGIN}/privacy): Product-specific local processing and optional network connections.
- [Help center](${SITE_ORIGIN}/help): Setup, privacy, troubleshooting, and feature guides.

## Products

`;

for (const product of products) {
  llmsIndex += `- [${product.name}](${SITE_ORIGIN}/apps/${product.id}): ${releaseLabel(product)}. ${product.description}\n`;
}

llmsIndex += `
## Frequently asked

`;
for (const faq of homeFaqs) {
  llmsIndex += `- **${faq.question}** ${faq.answer}\n`;
}

llmsIndex += `
## Contact

- Support: support@obsidianridgelabs.com
- Website source: https://github.com/amotor-AM/obsidian-ridge-labs
`;

fs.writeFileSync(path.join(clientDist, 'llms.txt'), llmsIndex, 'utf8');
fs.writeFileSync(path.join(clientDist, 'llms-full.txt'), llmsContent, 'utf8');
console.log('llms.txt and llms-full.txt generated successfully!');

// Clean up temporary server build files
try {
  fs.rmSync(path.resolve(__dirname, './dist-server'), { recursive: true, force: true });
  console.log('Temporary SSR build files cleaned up.');
} catch (err) {
  console.warn('Warning: Could not clean up temporary SSR files:', err.message);
}
