import { KnowledgeBase, KBArticle } from '../../types';
import { vaultKb } from './vault';
import { echochamberKb } from './echochamber';
import { molehillKb } from './molehill';

/** Every knowledge base, keyed for lookup by app id. */
export const knowledgeBases: KnowledgeBase[] = [vaultKb, echochamberKb, molehillKb];

const byAppId: Record<string, KnowledgeBase> = Object.fromEntries(
  knowledgeBases.map((kb) => [kb.appId, kb]),
);

/** Returns the knowledge base for an app, or undefined if none exists. */
export function getKb(appId: string): KnowledgeBase | undefined {
  return byAppId[appId];
}

/** Returns a single article within an app's knowledge base, or undefined. */
export function getArticle(appId: string, articleId: string): KBArticle | undefined {
  return getKb(appId)?.articles.find((article) => article.id === articleId);
}

export { vaultKb, echochamberKb, molehillKb };
