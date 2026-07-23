import { ReactNode, ElementType } from 'react';

export interface ProductFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export type ReleaseStatus = 'app-store' | 'source-only' | 'pre-release' | 'concept';

export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  description: string;
  fullDescription: string;
  icon: ElementType;
  specs: { label: string; value: string }[];
  features: ProductFeature[];
  workflow: WorkflowStep[];
  /** Canonical distribution state used by UI, schema, sitemaps, and AI-readable exports. */
  releaseStatus: ReleaseStatus;
  /** Per-app accent (hex) used for subtle theming. */
  accent?: string;
  /** Real App Store URL when the app is listed; empty string otherwise. */
  appStoreUrl?: string;
  /** Public GitHub repo for the app (README + changelog), used for the icon link and schema sameAs. */
  githubUrl?: string;
  /** Whether a help knowledge base exists for deep-linking from inside the app. */
  hasKnowledgeBase?: boolean;
  /** Apple platforms the app runs on. */
  platforms?: string[];
  minOS?: string;
  /** Short price summary, e.g. "Free · Plus from $2.99/mo". */
  price?: string;
  /** Present for live apps; coming-soon apps may omit these. */
  version?: string;
  releaseDate?: string;
  /** For coming-soon apps: the line shown on the placeholder page. */
  comingSoonBlurb?: string;
  /** For coming-soon apps: roughly when. */
  eta?: string;
  primaryColor: string; // Tailwind class-like string for dynamic styling
}

export interface AiResponse {
  analysis: string;
  feasibilityScore: number;
  recommendation: string;
}

export type BlogContentType = 'guide' | 'comparison' | 'listicle' | 'analysis';

export type BlogBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; content: string }
  | { type: 'quote'; content: string }
  | { type: 'code'; content: string }
  | { type: 'list'; content: string[] }
  | { type: 'answer'; title: string; content: string }
  | { type: 'callout'; title: string; content: string; variant?: 'note' | 'warning' | 'privacy' }
  | {
      type: 'comparison';
      caption: string;
      columns: string[];
      rows: { label: string; cells: string[] }[];
    }
  | { type: 'faq'; content: { question: string; answer: string }[] }
  | { type: 'sources'; content: string[] }
  | { type: 'cta'; content: string; ctaAppId: string };

export interface BlogPost {
  id: string;
  title: string;
  /** Optional search-result title when the editorial headline is intentionally longer. */
  seoTitle?: string;
  date: string;
  modified?: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  /** Optional search/social description; falls back to the visible excerpt. */
  seoDescription?: string;
  contentType: BlogContentType;
  /** Product cluster for internal linking and SoftwareApplication relationships. */
  appId?: string;
  /** Primary conversational query the article answers. */
  searchIntent: string;
  keyTakeaways: string[];
  relatedIds?: string[];
  listItems?: { name: string; description: string }[];
  blocks: BlogBlock[];
  /** Editorial journal posts vs BabyLoveGrowth-synced articles. */
  source?: 'editorial' | 'babylovegrowth';
  /** Pre-rendered HTML body from BabyLoveGrowth (never built from blocks). */
  htmlContent?: string;
  /** Optional hero image supplied by BabyLoveGrowth. */
  heroImageUrl?: string;
  /** Optional Article JSON-LD payload from BabyLoveGrowth. */
  jsonLd?: Record<string, unknown> | null;
  /** Optional FAQ JSON-LD payload from BabyLoveGrowth. */
  faqJsonLd?: Record<string, unknown> | null;
}

/* ── Knowledge base ───────────────────────────────────────────────────────────
   Help-centre content. Icons are referenced by string name (see lib/icons.tsx)
   so the data files stay free of JSX and remain safe to render on the server. */

export type KBBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; level: 2 | 3; content: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'steps'; items: { title: string; description: string }[] }
  | {
      type: 'callout';
      variant: 'info' | 'tip' | 'warning' | 'privacy';
      title?: string;
      content: string;
    }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface KBArticle {
  id: string; // slug
  title: string;
  description: string;
  category: string; // KBCategory id
  keywords?: string[];
  updated?: string;
  blocks: KBBlock[];
  related?: string[]; // other article ids
}

export interface KBCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface KnowledgeBase {
  appId: string;
  appName: string;
  accent: string;
  status: 'ready' | 'coming-soon';
  /** Warm intro shown on the KB home for the app. */
  intro: string;
  categories: KBCategory[];
  articles: KBArticle[];
}
