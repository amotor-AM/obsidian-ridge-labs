import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Download, ShieldCheck } from 'lucide-react';
import { getProductReleaseLabel, products } from '../data/products';
import { collectionFaqs } from '../data/faqs';
import type { Product } from '../types';
import SEO, { buildBreadcrumbs, buildCollectionPage, buildFAQSchema, SITE_URL } from './SEO';
import MotionReveal from './home/MotionReveal';
import SiteFaq from './SiteFaq';

type ProductPresentation = {
  description: string;
  capabilities: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  /** Intrinsic height of the 960px-wide asset, so the card reserves the right space. */
  imageHeight?: number;
};

const PRODUCT_PRESENTATION: Record<string, ProductPresentation> = {
  echochamber: {
    description: 'Private transcription for live recordings, audio, and video with targeted speech enhancement, on-device Parakeet TDT, and local transcript intelligence.',
    capabilities: ['Approximately 4.5% enhanced pipeline WER', 'Apple Intelligence with Bonsai 1.7B fallback', 'Audio and video upload', '$79.99 Lifetime option'],
    image: '/images/echochamber/transcription-details-960.webp',
    imageAlt: 'Echo Chamber transcript screen with audio controls, speaker labels, and searchable text',
    imageCaption: 'Searchable transcript with audio controls and speaker labels',
    imageHeight: 1707,
  },
  vault: {
    description: 'Budget with on-device receipt capture, safe-to-spend planning, cash-flow forecasts, and optional Plaid sync instead of a mandatory bank connection.',
    capabilities: ['On-device receipt text recognition', 'Safe-to-spend and budget warnings', 'Estimated cash-flow forecasting', 'Optional Plaid, never required'],
    image: '/images/vault/today-960.webp',
    imageAlt: 'Vault today screen showing a safe-to-spend figure and a purchase check',
    imageCaption: 'A safe-to-spend figure and a purchase check before you commit',
    imageHeight: 2087,
  },
  molehill: {
    description: 'Turn an overwhelming task into one clear next step with private, on-device help and no streaks, shame, or behavioral profile.',
    capabilities: ['On-device task breakdown', 'Split a step that is still too big', 'Spoken brain dumps, transcribed locally', 'No streak mechanics'],
    image: '/images/molehill/today-960.webp',
    imageAlt: 'Molehill today screen showing a single next step and a start focus button',
    imageCaption: 'One next step, its time estimate, and a way to start it',
    imageHeight: 2087,
  },
  cove: {
    description: 'Write, reflect, and rediscover your own words with a private journal, grounded questions, app lock, and export you control.',
    capabilities: ['Writing is never paywalled', 'On-device reflection with fallback', 'Semantic search and weekly reflections', 'Local store, optional private iCloud'],
    image: '/images/cove/reflection-960.webp',
    imageAlt: 'Cove entry screen showing an on-device reflection beneath a journal entry',
    imageCaption: 'A restrained on-device reflection beneath the entry you wrote',
    imageHeight: 2087,
  },
  wove: {
    description: 'Turn a local closet into daily looks, capsules, packing plans, and real-wear insights without a remote wardrobe-analysis server.',
    capabilities: ['Several garments from one photo', 'Deterministic styling fallback', 'Optional WeatherKit context', 'A remembered "not this" signal'],
    image: '/images/wove/closet-960.webp',
    imageAlt: 'Wove closet grid showing garments lifted from their photo backgrounds',
    imageCaption: 'Every garment lifted off its background and tagged automatically',
    imageHeight: 2087,
  },
  mettle: {
    description: 'Train with adaptive programming, deterministic prescriptions, explainable progression, and a private reason behind every number.',
    capabilities: ['Engine-owned sets, reps, and loads', '"Why this?" on every prescription', 'Apple Watch rep timing and rest', 'CSV training export'],
    image: '/images/mettle/today-960.webp',
    imageAlt: 'Mettle today screen showing the next session and a coach insight',
    imageCaption: 'The next session, its sets, and the reason it looks like this',
    imageHeight: 2087,
  },
  memora: {
    description: 'Create reviewable flashcard drafts from your own material on-device, then schedule the right memory at the right time with FSRS.',
    capabilities: ['Notes, text-layer PDFs, and photos', 'Human review before saving', 'FSRS, never paywalled', 'Anki, Quizlet, and CSV import'],
    image: '/images/memora/review-960.webp',
    imageAlt: 'Memora draft review screen showing generated cards awaiting approval',
    imageCaption: 'Generated cards proposed for review before they enter a deck',
    imageHeight: 2087,
  },
  trove: {
    description: 'Build a private record of belongings, receipts, serials, warranties, and values before a claim, move, or repair makes the evidence urgent.',
    capabilities: ['Scan a whole room in one photo', 'Local item catalog', 'Warranty reminders and coverage check', 'Claim report and CSV export'],
    image: '/images/trove/home-960.webp',
    imageAlt: 'Trove home dashboard showing recorded value, rooms, and documentation progress',
    imageCaption: 'Recorded value, rooms, and documentation progress in one view',
    imageHeight: 2087,
  },
  kith: {
    description: 'Remember people without a sales pipeline through humane reach-out cadences, private context, important dates, and on-device helpers.',
    capabilities: ['Inner, Close, and Wider circles', 'Warmth Ring and Orbit planning', 'On-device message and memory helpers', 'Widgets, Siri, and local reminders'],
    image: '/images/kith/orbit-960.webp',
    imageAlt: 'Kith orbit view showing people arranged around you by closeness',
    imageCaption: 'People arranged by closeness, cooling gently as time passes',
    imageHeight: 2087,
  },
  mise: {
    description: 'Keep a private recipe box, plan the week, build an aisle-sorted grocery list, and cook with an on-device sous chef that knows your kitchen.',
    capabilities: ['Share sheet, paste, and photo import', 'On-device recipe parsing', 'Weekly planner and grocery list', 'Cook mode with live timers'],
    image: '/images/mise/recipes-960.webp',
    imageAlt: 'Mise recipe box showing saved recipes and the on-device sous chef',
    imageCaption: 'The recipe box, with the on-device sous chef at the top',
    imageHeight: 2087,
  },
};

const getStatusLabel = (product: Product) => {
  return getProductReleaseLabel(product);
};

const getStatusRank = (product: Product) => {
  if (product.appStoreUrl) return 0;
  if (product.releaseStatus === 'source-only') return 1;
  return 2;
};

const getPresentation = (product: Product): ProductPresentation =>
  PRODUCT_PRESENTATION[product.id] ?? {
    description: product.description,
    capabilities: product.specs.map((spec) => `${spec.label}: ${spec.value}`),
  };

const DownloadPage: React.FC = () => {
  const apps = [...products].sort((a, b) => getStatusRank(a) - getStatusRank(b));
  const faqItems = collectionFaqs;

  const breadcrumbs = buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Apps', url: '/download' }]);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Obsidian Ridge Labs Apps',
    description: 'Private, offline-first AI apps built for Apple platforms.',
    numberOfItems: apps.length,
    itemListElement: apps.map((app, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `${SITE_URL}/apps/${app.id}#software`,
        '@type': ['SoftwareApplication', 'MobileApplication'],
        name: app.name,
        url: `${SITE_URL}/apps/${app.id}`,
        description: app.description,
        creativeWorkStatus: app.appStoreUrl ? 'Released' : 'In development',
      },
    })),
  };

  return (
    <div className="collection-page">
      <SEO
        title="Private AI App Collection for Apple"
        description="Explore private, offline-first AI apps for iPhone, iPad, and Mac, with on-device intelligence and clearly disclosed optional connections."
        jsonLd={[
          breadcrumbs,
          buildCollectionPage('Private AI App Collection for Apple', 'Available and in-development private AI apps for Apple platforms.', '/download'),
          buildFAQSchema(faqItems),
          itemList,
        ]}
      />

      <header className="collection-hero">
        <div className="section-frame">
          <div className="section-index"><span>The app collection</span><span>Obsidian Ridge Labs</span></div>
          <MotionReveal className="collection-hero__copy">
            <p className="section-kicker">Your AI. Your device. Your business.</p>
            <h1>Private intelligence.<br /><em>On your terms.</em></h1>
            <p>
              Download Echo Chamber today and explore eight privacy-first apps in development.
              Every product solves a different problem. Every one begins with the same private standard.
            </p>
          </MotionReveal>
          <dl className="collection-hero__principles">
            <div><dt>Core intelligence</dt><dd>On-device</dd></div>
            <div><dt>Core workflows</dt><dd>Offline-ready</dd></div>
            <div><dt>Connections</dt><dd>Explicit</dd></div>
          </dl>
        </div>
      </header>

      <div className="collection-list section-frame">
        {apps.map((app, index) => {
          const presentation = getPresentation(app);
          const Icon = app.icon;
          return (
            <MotionReveal key={app.id} className="collection-card" amount={0.12}>
              <article>
                <div className="collection-card__header">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{app.category}</span>
                  <span className={app.appStoreUrl ? 'is-live' : ''}>{getStatusLabel(app)}</span>
                </div>
                <div className="collection-card__body">
                  <div className="collection-card__title">
                    <Icon aria-hidden="true" />
                    <h2>{app.name}</h2>
                    <p>{app.tagline}</p>
                  </div>
                  <div className="collection-card__copy">
                    <p>{presentation.description}</p>
                    <ul aria-label={`${app.name} capabilities`}>
                      {presentation.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                    </ul>
                    <dl>
                      <div><dt>Platforms</dt><dd>{app.platforms?.join(' · ') || 'To be announced'}</dd></div>
                      <div><dt>Minimum OS</dt><dd>{app.minOS || 'To be announced'}</dd></div>
                      <div><dt>Pricing</dt><dd>{app.price || 'To be announced'}</dd></div>
                    </dl>
                    <div className="collection-card__actions">
                      {app.appStoreUrl && (
                        <a href={app.appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">
                          <Download size={18} /> App Store
                        </a>
                      )}
                      <Link to={`/apps/${app.id}`} className="button button--quiet">
                        Product details <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                  {presentation.image && presentation.imageAlt && (
                    <figure className="collection-card__media">
                      <div>
                        <img
                          src={presentation.image}
                          alt={presentation.imageAlt}
                          width="960"
                          height={presentation.imageHeight || 2087}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </div>
                      <figcaption>{presentation.imageCaption || presentation.imageAlt}</figcaption>
                    </figure>
                  )}
                </div>
              </article>
            </MotionReveal>
          );
        })}
      </div>

      <section className="collection-faq" aria-labelledby="collection-faq-title">
        <div className="section-frame collection-faq__grid">
          <div>
            <ShieldCheck size={34} aria-hidden="true" />
            <p className="section-kicker">Before you install</p>
            <h2 id="collection-faq-title">Questions, answered plainly.</h2>
          </div>
          <SiteFaq items={faqItems} tone="moss" />
        </div>
      </section>

      <section className="collection-close">
        <div className="section-frame">
          <p className="section-kicker section-kicker--dark">The standard behind the software</p>
          <h2>Choose the tool that keeps<br />your data closest.</h2>
          <div>
            <Link to="/privacy" className="button button--dark">Read the privacy model <ArrowRight size={18} /></Link>
            <Link to="/journal" className="text-link text-link--dark">Explore the journal <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
