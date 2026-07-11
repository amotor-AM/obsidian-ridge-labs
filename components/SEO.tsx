import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { BlogBlock, BlogPost } from '../types';

const SITE_NAME = 'Obsidian Ridge Labs';
const SITE_URL = 'https://obsidianridgelabs.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const getDocumentTitle = (title: string) => {
  const branded = `${title} | ${SITE_NAME}`;
  return branded.length <= 68 ? branded : title;
};

const PAGE_TYPES = new Set(['AboutPage', 'CollectionPage', 'ContactPage', 'ProfilePage', 'SearchResultsPage']);

const getTypes = (node: Record<string, unknown>) => {
  const value = node['@type'];
  return Array.isArray(value) ? value.map(String) : value ? [String(value)] : [];
};

const stripContext = (node: Record<string, unknown>) => {
  const { ['@context']: _context, ...rest } = node;
  return rest;
};

const buildOrganizationNode = () => ({
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: `${SITE_URL}/`,
  description: 'Independent Apple software studio building private, offline-first AI apps whose core intelligence runs on-device.',
  foundingDate: '2024',
  slogan: 'AI without the audience.',
  email: 'support@obsidianridgelabs.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: `${SITE_URL}/apple-touch-icon.png`,
    contentUrl: `${SITE_URL}/apple-touch-icon.png`,
    width: 180,
    height: 180,
    caption: SITE_NAME,
  },
  sameAs: ['https://github.com/amotor-AM/obsidian-ridge-labs'],
  knowsAbout: [
    'On-device artificial intelligence',
    'Offline-first software',
    'Privacy-preserving machine learning',
    'Apple Neural Engine applications',
    'Private voice transcription',
    'Local-first mobile applications',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@obsidianridgelabs.com',
    availableLanguage: ['English'],
  },
});

const buildWebsiteNode = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: 'Obsidian Ridge',
  description: 'Private, offline-first AI apps for iPhone, iPad, and Mac.',
  inLanguage: 'en-US',
  publisher: { '@id': ORGANIZATION_ID },
});

const buildSchemaGraph = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  keywords,
  article,
  jsonLd,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  keywords?: string[];
  article?: SEOProps['article'];
  jsonLd?: SEOProps['jsonLd'];
}) => {
  const supplied = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const normalized = supplied.map(stripContext);
  const breadcrumbIndex = normalized.findIndex((node) => getTypes(node).includes('BreadcrumbList'));
  const primaryIndex = normalized.findIndex((node) => getTypes(node).some((type) => PAGE_TYPES.has(type)));
  const breadcrumb = breadcrumbIndex >= 0
    ? { ...normalized[breadcrumbIndex], '@id': `${canonicalUrl}#breadcrumb` }
    : null;
  const suppliedPrimary = primaryIndex >= 0 ? normalized[primaryIndex] : null;
  const pageId = `${canonicalUrl}#webpage`;
  const pageNode: Record<string, unknown> = {
    '@type': suppliedPrimary?.['@type'] || 'WebPage',
    '@id': pageId,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      '@id': `${canonicalUrl}#primaryimage`,
      url: ogImage,
      contentUrl: ogImage,
      width: 1200,
      height: 630,
    },
    ...(breadcrumb ? { breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` } } : {}),
    ...(keywords?.length ? { keywords: keywords.join(', ') } : {}),
    ...(article ? {
      datePublished: article.publishedTime,
      ...(article.modifiedTime ? { dateModified: article.modifiedTime } : {}),
    } : {}),
    ...(suppliedPrimary || {}),
  };

  const extras = normalized
    .filter((_node, index) => index !== breadcrumbIndex && index !== primaryIndex)
    .map((node, index) => {
      const types = getTypes(node);
      if (types.includes('FAQPage')) {
        return { ...node, '@id': node['@id'] || `${canonicalUrl}#faq`, isPartOf: { '@id': pageId } };
      }
      if (types.includes('SoftwareApplication') || types.includes('MobileApplication')) {
        return { ...node, '@id': node['@id'] || `${canonicalUrl}#software`, mainEntityOfPage: { '@id': pageId } };
      }
      if (types.includes('BlogPosting') || types.includes('TechArticle') || types.includes('Article')) {
        return { ...node, '@id': node['@id'] || `${canonicalUrl}#article`, mainEntityOfPage: { '@id': pageId } };
      }
      if (types.includes('ItemList')) {
        return { ...node, '@id': node['@id'] || `${canonicalUrl}#list-${index + 1}` };
      }
      if (types.includes('Blog')) {
        return {
          ...node,
          '@id': node['@id'] || `${canonicalUrl}#blog`,
          isPartOf: { '@id': WEBSITE_ID },
          publisher: { '@id': ORGANIZATION_ID },
        };
      }
      return node;
    });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      pageNode,
      ...(breadcrumb ? [breadcrumb] : []),
      ...extras,
    ],
  };
};

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    tags: string[];
    section: string;
  };
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

let serverSEOContext: any = null;

export const setServerSEOContext = (context: any) => {
  serverSEOContext = context;
};

const setMeta = (attr: string, key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  keywords,
  article,
  jsonLd,
  noindex = false,
}) => {
  const { pathname } = useLocation();
  const fullTitle = getDocumentTitle(title);
  const canonicalUrl = canonical || `${SITE_URL}${pathname}`;
  const structuredData = buildSchemaGraph({ title, description, canonicalUrl, ogImage, keywords, article, jsonLd });
  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');

  // Capture SEO metadata on the server
  if (typeof window === 'undefined' && serverSEOContext) {
    serverSEOContext.title = title;
    serverSEOContext.description = description;
    serverSEOContext.canonical = canonicalUrl;
    serverSEOContext.ogType = ogType;
    serverSEOContext.ogImage = ogImage;
    serverSEOContext.ogImageAlt = ogImageAlt;
    serverSEOContext.keywords = keywords;
    serverSEOContext.article = article;
    serverSEOContext.jsonLd = structuredData;
    serverSEOContext.noindex = noindex;
  }

  useEffect(() => {
    document.title = fullTitle;

    // Basic meta
    setMeta('name', 'description', description);
    document.querySelector('meta[name="keywords"]')?.remove();
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:alt', ogImageAlt || title);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_US');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:image:alt', ogImageAlt || title);

    // Article-specific OG
    document.querySelectorAll('meta[property^="article:"]').forEach((element) => element.remove());
    if (article) {
      setMeta('property', 'article:published_time', article.publishedTime);
      if (article.modifiedTime) setMeta('property', 'article:modified_time', article.modifiedTime);
      setMeta('property', 'article:section', article.section);
      setMeta('property', 'article:author', SITE_NAME);
      article.tags.forEach((tag) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.content = tag;
        document.head.appendChild(meta);
      });
    }

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // JSON-LD structured data
    document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove());
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = 'true';
    script.textContent = structuredDataJson;
    document.head.appendChild(script);

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove());
    };
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, ogImageAlt, article, noindex, title, structuredDataJson]);

  return null;
};

// ─── Structured Data Factories ───────────────────────────────────────────────

export const buildBreadcrumbs = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`,
  })),
});

export const buildSoftwareApp = (product: {
  name: string;
  id: string;
  description: string;
  fullDescription: string;
  category: string;
  version?: string;
  releaseDate?: string;
  platforms?: string[];
  minOS?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  hasKnowledgeBase?: boolean;
  releaseStatus: 'app-store' | 'source-only' | 'pre-release' | 'concept';
  price?: string;
}) => {
  const appUrl = `${SITE_URL}/apps/${product.id}`;
  const released = product.releaseStatus === 'app-store' && Boolean(product.appStoreUrl);
  const featureList = getFeatureList(product.id);
  const operatingSystem = product.minOS
    ? `${product.minOS} or later${product.platforms?.length ? `; ${product.platforms.join(', ')}` : ''}`
    : product.platforms?.length
      ? product.platforms.join(', ')
      : undefined;
  const links = [product.appStoreUrl, product.githubUrl].filter(Boolean) as string[];

  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'MobileApplication'],
    '@id': `${appUrl}#software`,
    name: product.name,
    url: appUrl,
    mainEntityOfPage: appUrl,
    description: product.fullDescription,
    applicationCategory: mapCategory(product.category),
    creativeWorkStatus: product.releaseStatus === 'app-store'
      ? 'Released'
      : product.releaseStatus === 'source-only'
        ? 'Source available'
        : 'In development',
    ...(operatingSystem ? { operatingSystem } : {}),
    ...(released ? {
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: product.appStoreUrl,
        ...(product.price ? { description: product.price } : {}),
      },
      isAccessibleForFree: true,
      downloadUrl: product.appStoreUrl,
      installUrl: product.appStoreUrl,
      ...(product.version ? { softwareVersion: product.version.replace(/^v/, '') } : {}),
      ...(product.releaseDate ? { datePublished: formatSchemaDate(product.releaseDate) } : {}),
    } : {}),
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-US',
    ...(featureList ? { featureList } : {}),
    ...(product.hasKnowledgeBase ? { softwareHelp: `${SITE_URL}/help/${product.id}` } : {}),
    ...(product.id === 'echochamber' ? {
      screenshot: [
        `${SITE_URL}/images/echochamber/record-screen-960.webp`,
        `${SITE_URL}/images/echochamber/transcription-details-960.webp`,
        `${SITE_URL}/images/echochamber/ai-chat-960.webp`,
      ],
    } : {}),
    ...(links.length ? { sameAs: links } : {}),
  };
};

/** Article / TechArticle schema for a help-centre guide. */
export const buildTechArticle = (a: {
  title: string;
  description: string;
  appId: string;
  appName: string;
  articleId: string;
  updated?: string;
  keywords?: string[];
  releaseStatus?: 'app-store' | 'source-only' | 'pre-release' | 'concept';
}) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: a.title,
  description: a.description,
  url: `${SITE_URL}/help/${a.appId}/${a.articleId}`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/help/${a.appId}/${a.articleId}`,
  },
  ...(a.updated ? { dateModified: formatSchemaDate(a.updated) } : {}),
  ...(a.keywords && a.keywords.length ? { keywords: a.keywords.join(', ') } : {}),
  creativeWorkStatus: a.releaseStatus === 'app-store' || a.releaseStatus === 'source-only' ? 'Published' : 'Preview',
  isAccessibleForFree: true,
  about: {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/apps/${a.appId}#software`,
    name: a.appName,
    url: `${SITE_URL}/apps/${a.appId}`,
  },
  author: { '@id': ORGANIZATION_ID },
  publisher: { '@id': ORGANIZATION_ID },
  image: `${SITE_URL}/og.png`,
  inLanguage: 'en-US',
});

/** HowTo schema built from an ordered list of {title, description} steps. */
export const buildHowTo = (howTo: {
  name: string;
  description: string;
  url: string;
  steps: { title: string; description: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  url: howTo.url,
  inLanguage: 'en-US',
  step: howTo.steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.description,
    url: `${howTo.url}#step-${i + 1}`,
  })),
});

export const buildBlogPosting = (post: BlogPost) => {
  const citations = extractBlockCitations(post.blocks);
  const readingMinutes = Number.parseInt(post.readTime, 10);
  const articleUrl = `${SITE_URL}/blog/${post.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    abstract: post.excerpt,
    url: articleUrl,
    datePublished: formatSchemaDate(post.date),
    ...(post.modified ? { dateModified: formatSchemaDate(post.modified) } : {}),
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'The Obsidian Ridge Journal',
      url: `${SITE_URL}/blog`,
    },
    ...(post.appId ? {
      about: {
        '@type': ['SoftwareApplication', 'MobileApplication'],
        '@id': `${SITE_URL}/apps/${post.appId}#software`,
        url: `${SITE_URL}/apps/${post.appId}`,
      },
    } : {}),
    articleSection: post.category,
    genre: post.contentType,
    keywords: post.tags.map(t => t.replace('#', '')).join(', '),
    wordCount: countBlockWords(post.blocks),
    ...(Number.isFinite(readingMinutes) ? { timeRequired: `PT${readingMinutes}M` } : {}),
    ...(citations.length ? { citation: citations } : {}),
    audience: {
      '@type': 'Audience',
      audienceType: 'People evaluating private, offline-first, or on-device AI software',
    },
    isAccessibleForFree: true,
    image: `${SITE_URL}/blog-og.png`,
    inLanguage: 'en-US',
  };
};

export const buildArticleItemList = (post: BlogPost) => post.listItems?.length ? ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE_URL}/blog/${post.id}#item-list`,
  name: post.title,
  numberOfItems: post.listItems.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: post.listItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    description: item.description,
    url: `${SITE_URL}/blog/${post.id}#item-${index + 1}`,
  })),
}) : null;

export const buildFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const buildCollectionPage = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name,
  description,
  url: `${SITE_URL}${url}`,
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en-US',
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatSchemaDate(date: string): string {
  // Convert "2024.06.28" to "2024-06-28"
  return date.replace(/\./g, '-');
}

function countBlockWords(blocks: BlogBlock[]): number {
  return blocks.reduce((count, block) => {
    const text = getBlogBlockText(block);
    return count + text.trim().split(/\s+/).filter(Boolean).length;
  }, 0);
}

function extractBlockCitations(blocks: BlogBlock[]): string[] {
  return blocks
    .filter((block): block is Extract<BlogBlock, { type: 'sources' }> => block.type === 'sources')
    .flatMap((block) => block.content.map((source) => source.split('|')[1]).filter(Boolean));
}

function getBlogBlockText(block: BlogBlock): string {
  switch (block.type) {
    case 'paragraph':
    case 'h2':
    case 'quote':
    case 'code':
      return block.content;
    case 'list':
    case 'sources':
      return block.content.join(' ');
    case 'answer':
    case 'callout':
      return `${block.title} ${block.content}`;
    case 'comparison':
      return `${block.caption} ${block.columns.join(' ')} ${block.rows.map((row) => `${row.label} ${row.cells.join(' ')}`).join(' ')}`;
    case 'faq':
      return block.content.map((item) => `${item.question} ${item.answer}`).join(' ');
    case 'cta':
      return block.content;
  }
}

function mapCategory(category: string): string {
  const map: Record<string, string> = {
    'Smart Finance': 'FinanceApplication',
    'Personal Growth': 'LifestyleApplication',
    'Business Intelligence': 'BusinessApplication',
    'Strategic Logic': 'BusinessApplication',
    'Offline Transcription': 'BusinessApplication',
    'Personal finance': 'FinanceApplication',
    'Voice transcription': 'BusinessApplication',
    'Focus & tasks': 'LifestyleApplication',
    'Focus & Tasks': 'LifestyleApplication',
    'Private Journaling': 'LifestyleApplication',
    'Private Wardrobe': 'LifestyleApplication',
    'Strength Coaching': 'HealthApplication',
    'Private Learning': 'EducationalApplication',
    'Home Inventory': 'LifestyleApplication',
    'Relationships': 'LifestyleApplication',
    'Private journal': 'LifestyleApplication',
    'Clearer decisions': 'BusinessApplication',
  };
  return map[category] || 'MobileApplication';
}

function getFeatureList(productId: string): string {
  const features: Record<string, string> = {
    vault: 'On-device financial analysis, PDF statement import, local forecasting, biometric access control, offline-first workflow',
    echochamber: 'On-device live transcription with NVIDIA Parakeet TDT 0.6B v3, approximately 3% observed WER in Echo Chamber testing, 6.32% average English WER versus 7.44% for Whisper large-v3 on the current Hugging Face Open ASR evaluation, AI-polished readable transcripts, local AI notes and summaries, speaker detection, bookmarks, full-text recording search, audio and video file upload with Pro, TXT Markdown PDF and DOCX export, Face ID access control, AES-256-GCM audio encryption at rest, optional encrypted iCloud sync',
    molehill: 'In-development on-device task breakdown, editable brain-dump organization, one-step focus, deterministic fallback, no streak mechanics, and a non-clinical productivity boundary',
    cove: 'In-development local journaling, on-device reflection with NaturalLanguage fallback, mood and theme patterns, semantic search, grounded journal questions, app lock, and Markdown or JSON export',
    wove: 'In-development local garment cut-out and tagging, daily and occasion-based outfit planning, deterministic styling fallback, wear history, capsules, packing lists, shopping context, and optional WeatherKit forecasts',
    mettle: 'In-development adaptive strength programming, deterministic sets reps loads and deloads, explainable prescriptions, on-device coaching fallback, live workout logging, Apple Watch remote, optional HealthKit, and CSV export',
    memora: 'In-development local flashcard drafts from notes embedded PDF text and selected-photo OCR, human review before saving, NaturalLanguage fallback, FSRS scheduling, cloze and image-occlusion cards, and local deck sharing',
    trove: 'In-development local home inventory, Vision OCR and barcode capture, reviewable structured item extraction, warranty and value context, local search, Ask Trove, and planned insurance-ready CSV or PDF export',
    kith: 'In-development private relationship manager with closeness circles, adjustable reach-out cadences, Warmth Ring planning, important dates, on-device message and memory helpers, widgets, Siri, Shortcuts, and local reminders',
  };
  return features[productId] || '';
}

export { SITE_URL, SITE_NAME, ORGANIZATION_ID, WEBSITE_ID };
export default SEO;
