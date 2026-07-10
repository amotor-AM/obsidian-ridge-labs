import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Obsidian Ridge Labs';
const SITE_URL = 'https://obsidianridgelabs.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;

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
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || `${SITE_URL}${pathname}`;

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
    serverSEOContext.jsonLd = jsonLd;
    serverSEOContext.noindex = noindex;
  }

  useEffect(() => {
    document.title = fullTitle;

    // Basic meta
    setMeta('name', 'description', description);
    if (keywords && keywords.length) setMeta('name', 'keywords', keywords.join(', '));
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:alt', ogImageAlt || title);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_US');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:image:alt', ogImageAlt || title);

    // Article-specific OG
    if (article) {
      setMeta('property', 'article:published_time', article.publishedTime);
      if (article.modifiedTime) setMeta('property', 'article:modified_time', article.modifiedTime);
      setMeta('property', 'article:section', article.section);
      setMeta('property', 'article:author', SITE_NAME);
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
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.seoJsonld = 'true';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove());
    };
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, ogImageAlt, keywords, article, jsonLd, noindex, title]);

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
  status?: 'live' | 'coming-soon';
  price?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: product.name,
  url: `${SITE_URL}/apps/${product.id}`,
  description: product.fullDescription,
  applicationCategory: mapCategory(product.category),
  operatingSystem: product.minOS
    ? `${product.minOS} or later`
    : (product.platforms && product.platforms.length ? product.platforms.join(', ') : 'iOS'),
  ...(product.status !== 'coming-soon' ? {
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      ...(product.price ? { description: product.price } : {}),
      ...(product.appStoreUrl ? { url: product.appStoreUrl } : {}),
    },
  } : {}),
  ...(product.version ? { softwareVersion: product.version.replace('v', '') } : {}),
  ...(product.releaseDate ? { datePublished: formatSchemaDate(product.releaseDate) } : {}),
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  inLanguage: 'en-US',
  featureList: getFeatureList(product.id),
  ...(product.appStoreUrl ? { downloadUrl: product.appStoreUrl, installUrl: product.appStoreUrl } : {}),
  ...(() => {
    const links = [product.appStoreUrl, product.githubUrl].filter(Boolean) as string[];
    return links.length ? { sameAs: links } : {};
  })(),
});

/** Article / TechArticle schema for a help-centre guide. */
export const buildTechArticle = (a: {
  title: string;
  description: string;
  appId: string;
  appName: string;
  articleId: string;
  updated?: string;
  keywords?: string[];
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
  ...(a.updated ? { dateModified: formatSchemaDate(a.updated), datePublished: formatSchemaDate(a.updated) } : {}),
  ...(a.keywords && a.keywords.length ? { keywords: a.keywords.join(', ') } : {}),
  about: {
    '@type': 'SoftwareApplication',
    name: a.appName,
    url: `${SITE_URL}/apps/${a.appId}`,
    applicationCategory: 'MobileApplication',
    operatingSystem: 'iOS',
  },
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
  },
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

export const buildBlogPosting = (post: {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  url: `${SITE_URL}/blog/${post.id}`,
  datePublished: formatSchemaDate(post.date),
  dateModified: formatSchemaDate(post.date),
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/${post.id}`,
  },
  articleSection: post.category,
  keywords: post.tags.map(t => t.replace('#', '')).join(', '),
  wordCount: estimateWordCount(post.readTime),
  image: `${SITE_URL}/og.png`,
  inLanguage: 'en-US',
});

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
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  inLanguage: 'en-US',
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatSchemaDate(date: string): string {
  // Convert "2024.06.28" to "2024-06-28"
  return date.replace(/\./g, '-');
}

function estimateWordCount(readTime: string): number {
  const minutes = parseInt(readTime) || 8;
  return minutes * 250;
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
    'Focus & tasks': 'ProductivityApplication',
    'Private journal': 'LifestyleApplication',
    'Clearer decisions': 'BusinessApplication',
  };
  return map[category] || 'MobileApplication';
}

function getFeatureList(productId: string): string {
  const features: Record<string, string> = {
    vault: 'On-device AI finance analysis, PDF statement scanning, AI balance forecasting, biometric lock, zero data collection, offline-first',
    mind: 'Private AI journal, pattern recognition, semantic search by feeling, biometric encryption, unlimited entries, never connected to cloud',
    echochamber: 'On-device live transcription, AI-polished readable transcripts, local AI notes and summaries, automatic pause and speaker detection, bookmarks, full-text recording search, TXT Markdown PDF and DOCX export, audio and video import with Pro, Face ID access control, AES-256-GCM audio encryption at rest, optional encrypted iCloud sync',
    nexus: 'Visual decision mapping, AI adversarial thinking, scenario simulation, private PDF export, strategic logic canvas, offline strategy tool',
  };
  return features[productId] || '';
}

export { SITE_URL, SITE_NAME };
export default SEO;
