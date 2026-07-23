import type { BlogPost } from '../types';
import { coreBlogPosts } from './blog/core';
import { echoVaultMolehillPosts } from './blog/cluster-echo-vault-molehill';
import { coveWoveMettlePosts } from './blog/cluster-cove-wove-mettle';
import { memoraTroveKithPosts } from './blog/cluster-memora-trove-kith';
import { babyLoveGrowthPosts } from './babylovegrowth';

/**
 * Editorial ordering is deliberate: foundational guides lead, followed by the
 * released product and then each in-development product cluster. Routes,
 * sitemap entries, article schema, and discovery files all consume this list.
 * BabyLoveGrowth articles (synced at build time) append after editorial posts
 * and never override an existing editorial slug.
 */
const editorialBlogPosts: BlogPost[] = [
  ...coreBlogPosts,
  ...echoVaultMolehillPosts,
  ...coveWoveMettlePosts,
  ...memoraTroveKithPosts,
].map((post) => ({ ...post, source: post.source || 'editorial' }));

const editorialIds = new Set(editorialBlogPosts.map((post) => post.id));
const syncedGrowthPosts = babyLoveGrowthPosts.filter((post) => !editorialIds.has(post.id));

export const blogPosts: BlogPost[] = [
  ...editorialBlogPosts,
  ...syncedGrowthPosts,
];

export const getBlogPost = (id: string) => blogPosts.find((post) => post.id === id);
export const isBabyLoveGrowthPost = (post: BlogPost) => post.source === 'babylovegrowth';
