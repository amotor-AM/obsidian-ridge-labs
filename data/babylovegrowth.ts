import type { BlogPost } from '../types';
import generatedArticles from './babylovegrowth.generated.json';

/**
 * Articles published via BabyLoveGrowth and synced at build time by
 * scripts/sync-babylovegrowth-blog.mjs (server-only API key).
 */
export const babyLoveGrowthPosts = generatedArticles as BlogPost[];
