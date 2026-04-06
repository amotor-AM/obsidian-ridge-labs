import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Obsidian Ridge Labs';
const SITE_URL = 'https://obsidianridgelabs.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  article?: {
    publishedTime: string;
    tags: string[];
    section: string;
  };
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

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
  article,
  jsonLd,
  noindex = false,
}) => {
  const { pathname } = useLocation();
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || `${SITE_URL}${pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    // Basic meta
    setMeta('name', 'description', description);
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
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, ogImageAlt, article, jsonLd, noindex, title]);

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
  version: string;
  releaseDate: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: product.name,
  url: `${SITE_URL}/apps/${product.id}`,
  description: product.fullDescription,
  applicationCategory: mapCategory(product.category),
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  softwareVersion: product.version.replace('v', ''),
  datePublished: formatSchemaDate(product.releaseDate),
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
  featureList: getFeatureList(product.id),
  permissions: 'no-internet-required',
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
      url: `${SITE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/${post.id}`,
  },
  articleSection: post.category,
  keywords: post.tags.map(t => t.replace('#', '')).join(', '),
  wordCount: estimateWordCount(post.readTime),
  image: `${SITE_URL}/og-blog-${post.id}.png`,
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
  };
  return map[category] || 'MobileApplication';
}

function getFeatureList(productId: string): string {
  const features: Record<string, string> = {
    vault: 'On-device AI finance analysis, PDF statement scanning, AI balance forecasting, biometric lock, zero data collection, offline-first',
    mind: 'Private AI journal, pattern recognition, semantic search by feeling, biometric encryption, unlimited entries, never connected to cloud',
    echo: 'On-device AI transcription (Parakeet TDT v3), real-time speech to text, 25-language support, speaker diarization, voice profiles, 6 AI summary formats (Cornell Notes, Outline, Meeting Minutes, Bullet Points, Q&A, Executive Summary), AI transcript chat, 7 export formats (PDF, SRT, VTT, Markdown, JSON), audio/video import (MP3 M4A WAV AAC MP4 MOV AIFF CAF), translation to 15+ languages, Face ID lock, Apple Watch, calendar view, iCloud sync, full-text search, Spotlight integration, widgets, Live Activities, recording recovery, zero cloud dependency',
    nexus: 'Visual decision mapping, AI adversarial thinking, scenario simulation, private PDF export, strategic logic canvas, offline strategy tool',
  };
  return features[productId] || '';
}

export { SITE_URL, SITE_NAME };
export default SEO;
