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
  version: string;
  releaseDate: string;
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