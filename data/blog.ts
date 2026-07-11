import type { BlogPost } from '../types';
import { coreBlogPosts } from './blog/core';
import { echoVaultMolehillPosts } from './blog/cluster-echo-vault-molehill';
import { coveWoveMettlePosts } from './blog/cluster-cove-wove-mettle';
import { memoraTroveKithPosts } from './blog/cluster-memora-trove-kith';

/**
 * Editorial ordering is deliberate: foundational guides lead, followed by the
 * released product and then each in-development product cluster. Routes,
 * sitemap entries, article schema, and discovery files all consume this list.
 */
export const blogPosts: BlogPost[] = [
  ...coreBlogPosts,
  ...echoVaultMolehillPosts,
  ...coveWoveMettlePosts,
  ...memoraTroveKithPosts,
];

export const getBlogPost = (id: string) => blogPosts.find((post) => post.id === id);
