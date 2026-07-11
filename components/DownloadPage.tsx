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
    description: 'Record live or upload audio and video, then transcribe with Parakeet TDT, summarize, search, and export on your Apple device.',
    capabilities: ['≈3% observed WER in testing', 'Audio and video upload', 'Local AI notes and summaries', 'Four export formats'],
    image: '/images/echochamber/transcription-details-960.webp',
    imageAlt: 'Echo Chamber transcript screen with audio controls, speaker labels, and searchable text',
  },
  vault: {
    description: 'An in-development finance app designed for local spending analysis, statement import, cash-flow forecasts, and clearly disclosed optional Plaid sync.',
    capabilities: ['In-development product', 'Planned statement import', 'Estimated cash-flow forecasting', 'Optional Plaid direction'],
  },
  molehill: {
    description: 'An in-development focus app that turns an overwhelming task into one clear next step—without streaks, shame, or behavioral tracking.',
    capabilities: ['On-device task breakdown', 'One-step focus', 'Brain-dump organization', 'No streak mechanics'],
  },
  cove: {
    description: 'An in-development iPhone journal with local reflections, mood and theme patterns, grounded journal questions, app lock, and export.',
    capabilities: ['Writing, photos, and voice memos', 'On-device reflection with fallback', 'Semantic search and patterns', 'Local storage in the current build'],
  },
  wove: {
    description: 'An in-development private wardrobe for local garment capture, daily and occasion styling, real-wear insights, capsules, and packing.',
    capabilities: ['Vision garment cut-out', 'Deterministic styling fallback', 'Optional WeatherKit context', 'No complete photo-sync claim'],
  },
  mettle: {
    description: 'An in-development private strength coach with adaptive programming, deterministic prescriptions, explainable progression, and live workout continuity.',
    capabilities: ['Engine-owned sets, reps, and loads', 'On-device coaching fallback', 'Apple Watch workout remote', 'CSV training export'],
  },
  memora: {
    description: 'An in-development private study companion that creates reviewable flashcard drafts from your own material and schedules recall with FSRS.',
    capabilities: ['Notes, text-layer PDFs, selected photos', 'Human review before saving', 'FSRS spaced repetition', 'Local decks with no current iCloud sync'],
  },
  trove: {
    description: 'An in-development home inventory for photographing belongings, organizing evidence, tracking warranties and values, and preparing useful exports.',
    capabilities: ['Vision and barcode capture', 'Local item catalog', 'Warranty and value context', 'Planned insurance-ready export'],
  },
  kith: {
    description: 'An in-development relationship manager with gentle reach-out cadences, private notes, important dates, and optional on-device helpers.',
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
            <p className="section-kicker">Private tools for Apple</p>
            <h1>Focused intelligence.<br /><em>Clear boundaries.</em></h1>
            <p>
              Explore the available software and the products still taking shape in the lab.
              Release status, compatibility, and optional connections are stated plainly.
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
                      <figcaption>Authentic Echo Chamber interface · Transcription detail</figcaption>
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
          <h2>Understand the boundary<br />before you trust the tool.</h2>
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
