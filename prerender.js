import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render, routes, products, blogPosts } from './dist-server/entry-server.js';

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
  const description = context.description || 'Obsidian Ridge Labs builds privacy-first, offline AI apps for iPhone and Android.';
  const canonicalUrl = context.canonical || `https://obsidianridgelabs.com${route}`;
  const robots = context.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';
  
  let headTags = `
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="robots" content="${robots}" />
  <meta property="og:title" content="${context.title || 'Obsidian Ridge Labs'}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${context.ogType || 'website'}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${context.ogImage || 'https://obsidianridgelabs.com/og-default.png'}" />
  <meta property="og:image:alt" content="${context.ogImageAlt || context.title || 'Obsidian Ridge Labs'}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${context.title || 'Obsidian Ridge Labs'}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${context.ogImage || 'https://obsidianridgelabs.com/og-default.png'}" />
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

// Generate llms-full.txt
console.log('Generating llms-full.txt...');

let llmsContent = `# Obsidian Ridge Labs — Full Content Directory

> Boutique mobile app studio specializing in private, offline-first AI architecture.

This document contains the complete details of all products, the development philosophy, and all articles published by Obsidian Ridge Labs.

---

## Products

`;

for (const p of products) {
  llmsContent += `### ${p.name} (${p.shortName})
- **Tagline**: ${p.tagline}
- **Category**: ${p.category}
- **Version**: ${p.version} (Released: ${p.releaseDate})
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

1. **Data Gravity** — Data must remain where it is created. The physics of privacy dictates that once data moves, it is vulnerable.
2. **Nullius in Verba** — "Take nobody's word for it." Verification is behavioral: judge the system by what it refuses to exfiltrate.
3. **Offline Default** — Connectivity is a feature, not a requirement. Intelligence should function anywhere.
4. **Ephemerality** — Digital permanence is a bug. Systems should know how to forget.

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

fs.writeFileSync(path.join(clientDist, 'llms-full.txt'), llmsContent, 'utf8');
console.log('llms-full.txt generated successfully!');

// Clean up temporary server build files
try {
  fs.rmSync(path.resolve(__dirname, './dist-server'), { recursive: true, force: true });
  console.log('Temporary SSR build files cleaned up.');
} catch (err) {
  console.warn('Warning: Could not clean up temporary SSR files:', err.message);
}
