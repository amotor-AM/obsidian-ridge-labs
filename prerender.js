import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render, routes, products, blogPosts, knowledgeBases } from './dist-server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Paths
const clientDist = path.resolve(__dirname, './dist');
const templatePath = path.resolve(clientDist, 'index.html');

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
  const title = context.title ? `${context.title} | Obsidian Ridge Labs` : 'Obsidian Ridge Labs | Privacy-First Offline AI Apps';
  const description = context.description || 'Obsidian Ridge Labs builds privacy-first, offline AI apps for Apple devices.';
  const canonicalUrl = context.canonical || `https://obsidianridgelabs.com${route}`;
  const robots = context.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';
  
  const keywords = Array.isArray(context.keywords) && context.keywords.length
    ? context.keywords.join(', ')
    : '';

  let headTags = `
  <title>${title}</title>
  <meta name="description" content="${description}" />${keywords ? `\n  <meta name="keywords" content="${keywords.replace(/"/g, '&quot;')}" />` : ''}
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="robots" content="${robots}" />
  <meta property="og:title" content="${context.title || 'Obsidian Ridge Labs'}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${context.ogType || 'website'}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${context.ogImage || 'https://obsidianridgelabs.com/og.png'}" />
  <meta property="og:image:alt" content="${context.ogImageAlt || context.title || 'Obsidian Ridge Labs'}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${context.title || 'Obsidian Ridge Labs'}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${context.ogImage || 'https://obsidianridgelabs.com/og.png'}" />
  <meta name="twitter:image:alt" content="${context.ogImageAlt || context.title || 'Obsidian Ridge Labs'}" />
  `;

  if (context.article) {
    headTags += `
  <meta property="article:published_time" content="${context.article.publishedTime}" />
  <meta property="article:section" content="${context.article.section}" />
  <meta property="article:author" content="Obsidian Ridge Labs" />
    `;
  }

  if (context.jsonLd) {
    const schemas = Array.isArray(context.jsonLd) ? context.jsonLd : [context.jsonLd];
    schemas.forEach(schema => {
      headTags += `
  <script type="application/ld+json" data-seo-jsonld="true">${JSON.stringify(schema)}</script>
      `;
    });
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

// Generate sitemap.xml from the prerendered routes so it is always in sync.
// Only emit lastmod when the underlying content has an explicit editorial date.
// A build timestamp is not a content modification date and creates false freshness
// signals for search engines.
console.log('Generating sitemap.xml...');
const SITE_ORIGIN = 'https://obsidianridgelabs.com';

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
  const publishedDate = normalizeSitemapDate(post.date);
  if (publishedDate) lastmodByRoute.set(`/blog/${post.id}`, publishedDate);
}

const latestBlogDate = latestDate(blogPosts.map((post) => post.date));
if (latestBlogDate) lastmodByRoute.set('/blog', latestBlogDate);

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
  .map((route) => {
    const loc = route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}`;
    const lastmod = lastmodByRoute.get(route);
    const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n  </url>`;
  })
  .join('\n');
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
fs.writeFileSync(path.join(clientDist, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`sitemap.xml generated: ${routes.length} urls, ${lastmodByRoute.size} with source-backed lastmod dates`);

// Generate llms-full.txt
console.log('Generating llms-full.txt...');

let llmsContent = `# Obsidian Ridge Labs: Full Content Directory

> Boutique mobile app studio specializing in private, offline-first AI architecture.

This document contains the complete details of all products, the development philosophy, and all articles published by Obsidian Ridge Labs.

---

## Products

`;

for (const p of products) {
  llmsContent += `### ${p.name} (${p.shortName})
- **Tagline**: ${p.tagline}
- **Category**: ${p.category}
- **Status**: ${p.status === 'live' ? 'Available on the App Store' : 'Coming soon'}
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

Obsidian Ridge Labs operates on four core axioms:

1. **Data Gravity**. Data must remain where it is created. The physics of privacy dictates that once data moves, it is vulnerable.
2. **Nullius in Verba**. "Take nobody's word for it." Verification is behavioral: judge the system by what it refuses to exfiltrate.
3. **Offline Default**. Connectivity is a feature, not a requirement. Intelligence should function anywhere.
4. **Ephemerality**. Digital permanence is a bug. Systems should know how to forget.

We use Core ML for optimized model inference, local SQLite for encrypted local storage, and the hardware Neural Engine to keep LLM inference entirely on the device.

---

## Blog Articles

`;

for (const post of blogPosts) {
  llmsContent += `### ${post.title}
- **Date**: ${post.date}
- **Read Time**: ${post.readTime}
- **Category**: ${post.category}
- **Tags**: ${post.tags.join(', ')}
- **Excerpt**: ${post.excerpt}

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
    } else if (block.type === 'cta') {
      llmsContent += `> **Call to Action**: ${block.content} (App ID: ${block.ctaAppId})\n\n`;
    }
  }
  llmsContent += `\n---\n\n`;
}

// Help center / knowledge base — full article text for AI ingestion.
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
      return block.items.map((s, i) => `${i + 1}. **${s.title}** — ${s.description}`).join('\n') + '\n\n';
    case 'callout':
      return `> ${block.title ? `**${block.title}** ` : ''}${block.content}\n\n`;
    case 'faq':
      return block.items.map((f) => `**Q: ${f.q}**\nA: ${f.a}`).join('\n\n') + '\n\n';
    default:
      return '';
  }
};

for (const kb of knowledgeBases) {
  llmsContent += `### ${kb.appName} — Help Guides\n\n${kb.intro}\n\n`;
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

fs.writeFileSync(path.join(clientDist, 'llms-full.txt'), llmsContent, 'utf8');
console.log('llms-full.txt generated successfully!');

// Clean up temporary server build files
try {
  fs.rmSync(path.resolve(__dirname, './dist-server'), { recursive: true, force: true });
  console.log('Temporary SSR build files cleaned up.');
} catch (err) {
  console.warn('Warning: Could not clean up temporary SSR files:', err.message);
}
