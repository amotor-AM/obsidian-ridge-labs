import { KnowledgeBase, KBArticle } from '../../types';
import { vaultKb } from './vault';
import { echochamberKb } from './echochamber';
import { molehillKb } from './molehill';
import { coveKb } from './cove';
import { woveKb } from './wove';
import { mettleKb } from './mettle';
import { memoraKb } from './memora';
import { troveKb } from './trove';
import { kithKb } from './kith';
import { miseKb } from './mise';

/**
 * Every knowledge base, keyed for lookup by app id. Ordered to match the app
 * collection so the help index reads in the same sequence as /download.
 */
export const knowledgeBases: KnowledgeBase[] = [
  echochamberKb,
  vaultKb,
  molehillKb,
  coveKb,
  woveKb,
  mettleKb,
  memoraKb,
  troveKb,
  kithKb,
  miseKb,
];

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

export {
  vaultKb,
  echochamberKb,
  molehillKb,
  coveKb,
  woveKb,
  mettleKb,
  memoraKb,
  troveKb,
  kithKb,
  miseKb,
};
