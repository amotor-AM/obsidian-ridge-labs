import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Download, ShieldCheck } from 'lucide-react';
import { getProductReleaseLabel, products } from '../data/products';
import { collectionFaqs } from '../data/faqs';
import type { Product } from '../types';
import SEO, { buildBreadcrumbs, buildCollectionPage, buildFAQSchema, SITE_URL } from './SEO';
import MotionReveal from './home/MotionReveal';

type ProductPresentation = {
  description: string;
  capabilities: string[];
  image?: string;
  imageAlt?: string;
};

const PRODUCT_PRESENTATION: Record<string, ProductPresentation> = {
  echochamber: {
    description: 'Private transcription for live recordings, audio, and video with targeted speech enhancement, on-device Parakeet TDT, and local transcript intelligence.',
    capabilities: ['Approximately 4.5% enhanced pipeline WER', 'Apple Intelligence with Bonsai 1.7B fallback', 'Audio and video upload', '$79.99 Lifetime option'],
    image: '/images/echochamber/transcription-details-960.webp',
    imageAlt: 'Echo Chamber transcript screen with audio controls, speaker labels, and searchable text',
  },
  vault: {
    description: 'Budget with local spending intelligence, on-device document import, cash-flow forecasts, and optional Plaid sync instead of a mandatory bank connection.',
    capabilities: ['In-development product', 'Planned statement import', 'Estimated cash-flow forecasting', 'Optional Plaid direction'],
  },
  molehill: {
    description: 'Turn an overwhelming task into one clear next step with private, on-device help and no streaks, shame, or behavioral profile.',
    capabilities: ['On-device task breakdown', 'One-step focus', 'Brain-dump organization', 'No streak mechanics'],
  },
  cove: {
    description: 'Write, reflect, and rediscover your own words with a local iPhone journal, grounded questions, app lock, and export.',
    capabilities: ['Writing, photos, and voice memos', 'On-device reflection with fallback', 'Semantic search and patterns', 'Local storage in the current build'],
  },
  wove: {
    description: 'Turn a local closet into daily looks, capsules, packing plans, and real-wear insights without a remote wardrobe-analysis server.',
    capabilities: ['Vision garment cut-out', 'Deterministic styling fallback', 'Optional WeatherKit context', 'No complete photo-sync claim'],
  },
  mettle: {
    description: 'Train with adaptive programming, deterministic prescriptions, explainable progression, and a private reason behind every number.',
    capabilities: ['Engine-owned sets, reps, and loads', 'On-device coaching fallback', 'Apple Watch workout remote', 'CSV training export'],
  },
  memora: {
    description: 'Create reviewable flashcard drafts from your own material on-device, then schedule the right memory at the right time with FSRS.',
    capabilities: ['Notes, text-layer PDFs, selected photos', 'Human review before saving', 'FSRS spaced repetition', 'Local decks with no current iCloud sync'],
  },
  trove: {
    description: 'Build a private record of belongings, receipts, serials, warranties, and values before a claim, move, or repair makes the evidence urgent.',
    capabilities: ['Vision and barcode capture', 'Local item catalog', 'Warranty and value context', 'Planned insurance-ready export'],
  },
  kith: {
    description: 'Remember people without a sales pipeline through humane reach-out cadences, private context, important dates, and on-device helpers.',
    capabilities: ['Inner, Close, and Wider circles', 'Warmth-based reach-out planning', 'On-device message and memory helpers', 'Widgets, Siri, and local reminders'],
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
                          height="1707"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      </div>
                      <figcaption>Searchable transcript with audio controls and speaker labels</figcaption>
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
          <div className="collection-faq__list">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<i /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="collection-close">
        <div className="section-frame">
          <p className="section-kicker section-kicker--dark">The standard behind the software</p>
          <h2>Choose the tool that keeps<br />your data closest.</h2>
          <div>
            <Link to="/privacy" className="button button--dark">Read the privacy model <ArrowRight size={18} /></Link>
            <Link to="/blog" className="text-link text-link--dark">Explore the journal <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
