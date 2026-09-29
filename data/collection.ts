import { products } from './products';
import type { Product } from '../types';

// Editorial spotlights are a choice, not a permanent limit on the collection.
export const spotlightIds = ['echochamber', 'mettle', 'memora'];
export const isReleased = (app: Product) => app.releaseStatus === 'app-store';

export function orderCollection(apps: Product[]): Product[] {
  return [...apps].sort((a, b) => {
    const releaseOrder = Number(isReleased(b)) - Number(isReleased(a));
    if (releaseOrder) return releaseOrder;
    const aSpotlight = spotlightIds.indexOf(a.id);
    const bSpotlight = spotlightIds.indexOf(b.id);
    return (aSpotlight < 0 ? spotlightIds.length : aSpotlight) - (bSpotlight < 0 ? spotlightIds.length : bSpotlight);
  });
}

export const collection = orderCollection(products);
export const releasedApps = collection.filter(isReleased);
export const upcomingApps = collection.filter(app => !isReleased(app));
export const collectionAvailability = [
  releasedApps.length ? `${releasedApps.length} ${releasedApps.length === 1 ? 'app' : 'apps'} available` : '',
  upcomingApps.length ? `${upcomingApps.length} in development` : '',
].filter(Boolean).join(' · ');
export const collectionDescription = `Private AI apps for Apple: transcription, training, study, recipes, and more. ${collectionAvailability}.`;

export const collectionJobs: Record<string, string> = {
  echochamber: 'Record, transcribe, and return to a conversation.',
  mettle: 'Plan your training around the sets you log.',
  memora: 'Make flashcards from your own study material.',
  vault: 'Track spending and see what a purchase changes.',
  molehill: 'Break a task into steps you can start.',
  cove: 'Write a journal you can return to and ask about.',
  wove: 'Find outfits in the clothes you already own.',
  trove: 'Keep a record of your things and their receipts.',
  kith: 'Remember the people you want to keep up with.',
  mise: 'Save your recipes and plan what to cook.',
};
