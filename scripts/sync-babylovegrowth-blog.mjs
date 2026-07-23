/**
 * Build-time sync for BabyLoveGrowth published articles.
 *
 * Uses babylovegrowth-next-js-blog BlogClient with the server-only
 * BABYLOVEGROWTH_BLOG_API_KEY. Never expose this key to the client bundle.
 *
 * When the key is missing (local builds without secrets), writes an empty
 * article list so the site still builds from editorial journal content.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  BlogClient,
  readingTimeMinutes,
} from 'babylovegrowth-next-js-blog';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(root, 'data', 'babylovegrowth.generated.json');

const toJournalDate = (isoValue) => {
  const date = new Date(isoValue);
  if (Number.isNaN(date.getTime())) return '1970.01.01';
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

const toTags = (article) => {
  const keywords = [article.seedKeyword, ...(article.keywords || [])]
    .filter((value) => Boolean(value && String(value).trim()));
  const unique = [...new Set(keywords.map((keyword) => String(keyword).trim()))];
  return unique.slice(0, 12).map((keyword) => {
    const slug = keyword.replace(/^#/, '').replace(/\s+/g, '-').toUpperCase();
    return `#${slug}`;
  });
};

const mapArticle = (article) => {
  const minutes = readingTimeMinutes(article.content_html || article.content_markdown || '');
  const excerpt = (article.excerpt || article.meta_description || '').trim();
  return {
    id: article.slug,
    title: article.title,
    seoTitle: article.title,
    date: toJournalDate(article.created_at),
    modified: toJournalDate(article.updated_at || article.created_at),
    readTime: `${minutes} MIN READ`,
    category: 'GROWTH',
    tags: toTags(article),
    excerpt,
    seoDescription: (article.meta_description || excerpt).trim(),
    contentType: 'guide',
    searchIntent: article.seedKeyword || article.title,
    keyTakeaways: [],
    blocks: [],
    source: 'babylovegrowth',
    htmlContent: article.content_html || '',
    heroImageUrl: article.hero_image_url || '',
    jsonLd: article.jsonLd || null,
    faqJsonLd: article.faqJsonLd || null,
  };
};

const writeArticles = (articles) => {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(articles, null, 2)}\n`, 'utf8');
};

const apiKey = process.env.BABYLOVEGROWTH_BLOG_API_KEY?.trim();
if (!apiKey) {
  console.log('BabyLoveGrowth sync: BABYLOVEGROWTH_BLOG_API_KEY not set; writing empty article list.');
  writeArticles([]);
  process.exit(0);
}

const client = new BlogClient({
  apiKey,
  baseUrl: process.env.BABYLOVEGROWTH_BLOG_API_URL,
  revalidate: false,
});

try {
  const summaries = await client.getAllArticles({ publishedOnly: true });
  const articles = [];
  for (const summary of summaries) {
    const full = await client.getArticleBySlug(summary.slug);
    if (!full || !full.published) continue;
    articles.push(mapArticle(full));
  }
  writeArticles(articles);
  console.log(`BabyLoveGrowth sync: wrote ${articles.length} published article(s) to ${path.relative(root, outputPath)}`);
} catch (error) {
  console.error(`BabyLoveGrowth sync failed: ${error instanceof Error ? error.message : error}`);
  process.exit(1);
}
