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

export type AppStatus = 'live' | 'coming-soon';

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
  /** Whether the app is live on the App Store or still on the way. */
  status: AppStatus;
  /** Per-app accent (hex) used for subtle theming. */
  accent?: string;
  /** Real App Store URL when the app is listed; empty string otherwise. */
  appStoreUrl?: string;
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

export type BlogBlockType = 'paragraph' | 'h2' | 'quote' | 'code' | 'list' | 'cta';

export interface BlogBlock {
  type: BlogBlockType;
  content: string | string[]; // string for text, array for lists
  ctaAppId?: string; // Optional: Link a specific app to this block for conversion
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  blocks: BlogBlock[];
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
