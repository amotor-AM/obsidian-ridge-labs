import React, { useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, FileDown } from 'lucide-react';
import type { Product } from '../types';
import { getProductReleaseLabel, products } from '../data/products';
import { productFaqs } from '../data/faqs';
import { productStories, type ProductStory } from '../data/product-stories';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildSoftwareApp } from './SEO';
import SiteFaq from './SiteFaq';
import '../styles/luminous-products.css';

const relatedReading: Record<string, { id: string; title: string }> = {
  mettle: { id: 'mettle-vs-fitbod-alpha-progression-boostcamp-hevy', title: 'Compare approaches to strength training' },
  memora: { id: 'memora-vs-anki-quizlet-remnote-knowt', title: 'Compare flashcard workflows' },
  molehill: { id: 'molehill-vs-goblin-tools-tiimo-structured-todoist', title: 'Compare task-breakdown tools' },
  cove: { id: 'cove-vs-day-one-rosebud-stoic-mindsera', title: 'Compare journal and reflection tools' },
  vault: { id: 'vault-vs-ynab-monarch-copilot-actual', title: 'Compare budgeting and bank-sync models' },
  kith: { id: 'kith-vs-personal-crm-apps', title: 'Compare tools for staying in touch' },
  mise: { id: 'mise-vs-paprika-pestle-mela-anylist', title: 'Compare recipe managers' },
  trove: { id: 'trove-vs-home-inventory-apps', title: 'Compare home inventory tools' },
  wove: { id: 'wove-vs-stylebook-whering-indyx-acloset', title: 'Compare digital wardrobe tools' },
};

const artwork: Record<string, string> = {
  mettle: '/images/luminous/mettle-machined-plates.webp',
  memora: '/images/luminous/memora-glass-cards.webp',
};

/** A selector between real captures, not a simulated application interface. */
const ProductPreview: React.FC<{ product: Product; story: ProductStory }> = ({ product, story }) => {
  const shots = Object.keys(story.screens)
    .map((file) => product.screenshots?.find((shot) => shot.file === file))
    .filter((shot): shot is NonNullable<Product['screenshots']>[number] => Boolean(shot));
  const [active, setActive] = useState(story.defaultScreen);
  const selected = shots.find((shot) => shot.file === active) ?? shots[0];
  const releaseLabel = getProductReleaseLabel(product);
  if (!selected) return null;

  return (
    <figure className={`lp-preview lp-detail-preview lp-detail-preview--${product.id}`} id="screens">
      <div className="lp-screen-stage lp-detail-stage">
        {artwork[product.id] ? (
          <img className="lp-detail-artwork" src={artwork[product.id]} alt="" width="1200" height="800" decoding="async" />
        ) : <div className="lp-detail-disc" aria-hidden="true" />}
        {shots.map((shot) => (
          <div key={shot.file} id={`screen-${product.id}-${shot.file}`} className="lp-screen lp-screen--phone lp-detail-screen" hidden={selected.file !== shot.file}>
            <img
              src={`/images/${product.id}/${shot.file}-960.webp`}
              srcSet={`/images/${product.id}/${shot.file}-480.webp 220w, /images/${product.id}/${shot.file}-960.webp 441w`}
              sizes="(max-width: 520px) 64vw, 258px"
              alt={`${product.name}: ${shot.title}. App preview with example content. ${releaseLabel}.`}
              width="441" height="960"
              loading={shot.file === story.defaultScreen ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>
      <div className="lp-preview__selectors" role="group" aria-label={`Inspect ${product.name} screens`}>
        {shots.map((shot) => (
          <button type="button" key={shot.file} aria-pressed={selected.file === shot.file} aria-controls={`screen-${product.id}-${shot.file}`} onClick={() => setActive(shot.file)}>
            {story.screens[shot.file].label}
          </button>
        ))}
      </div>
      <figcaption>
        <span aria-live="polite" aria-atomic="true">{story.screens[selected.file].caption}</span>
        <small>App preview · Example content · {releaseLabel}</small>
      </figcaption>
    </figure>
  );
};

const Portability: React.FC<{ story: ProductStory }> = ({ story }) => (
  <section className="lp-story-section lp-story-portability" aria-labelledby="portability-title">
    <div className="lp-story-portability__icon" aria-hidden="true"><FileDown size={28} strokeWidth={1.4} /></div>
    <div>
      <h2 data-reveal-words id="portability-title">{story.portability.title}</h2>
      <p>{story.portability.body}</p>
      {story.portability.note && <p className="lp-story-note">{story.portability.note}</p>}
    </div>
  </section>
);

const ProductPage: React.FC<{ product: Product; story: ProductStory }> = ({ product, story }) => {
  const faqs = productFaqs[product.id] ?? [];
  const related = relatedReading[product.id];
  const earlyPortability = ['memora', 'vault', 'trove', 'mise'].includes(product.id);
  const platformNames: Record<string, string> = { iOS: 'iPhone', iPadOS: 'iPad', watchOS: 'Apple Watch companion' };
  const platform = product.platforms?.map((item) => platformNames[item] ?? item).join(' · ') ?? 'Apple devices';
  const Icon = product.icon;
  const pageStyle = { '--lp-app-color': product.accent ?? '#c7ff3e' } as React.CSSProperties;
  const released = product.releaseStatus === 'app-store';
  const inDevelopment = product.releaseStatus === 'pre-release' || product.releaseStatus === 'concept';
  const releaseLabel = getProductReleaseLabel(product);
  const appStoreUrl = released ? product.appStoreUrl : undefined;
  const statusClassName = `lp-status${released ? ' lp-status--released' : ''}`;

  return (
    <div className={`product-page trilogy-product-page luminous-product-page lp-product-page lp-product-page--${product.id}`} style={pageStyle}>
      <SEO title={story.seo.title} description={story.seo.description} keywords={story.seo.keywords} ogType="product"
        jsonLd={[
          buildSoftwareApp(product),
          buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Apps', url: '/download' }, { name: product.name, url: `/apps/${product.id}` }]),
          buildFAQSchema(faqs),
        ]}
      />
      <header className={`trilogy-product-hero lp-product-hero lp-product-hero--${product.id}`}>
        <div className="section-frame">
          <div className="lp-product-nav">
            <Link to="/download">The collection <span>/</span> {product.name}</Link>
            <span className={statusClassName}>{releaseLabel}</span>
          </div>
          <div className="lp-product-hero__layout">
            <div className="lp-product-hero__copy">
              <p className="lp-product-identity"><span className="lp-app-icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span>{product.name}</p>
              <p className="lp-detail-category">{story.category}</p>
              <h1 data-reveal-words>{story.title}</h1>
              <p className="lp-product-hero__description">{story.intro}</p>
              <div className="lp-actions">
                {appStoreUrl
                  ? <a href={appStoreUrl} className="lp-button" target="_blank" rel="noopener noreferrer">Get {product.name} <ArrowUpRight size={17} aria-hidden="true" /></a>
                  : <a href="#workflow" className="lp-button">Explore {product.name} <ArrowDownRight size={17} aria-hidden="true" /></a>}
                <a href="#requirements" className="lp-link">Check requirements <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
              <div className="lp-detail-boundary-summary">
                <span className="lp-local-dot" aria-hidden="true" />
                <p>{story.local} <a href="#boundary">Full boundary <ArrowUpRight size={12} aria-hidden="true" /></a></p>
              </div>
              <p className="lp-detail-availability">{platform}<br />{inDevelopment ? 'In development. Not yet available to install.' : `${releaseLabel}.`}</p>
            </div>
            <ProductPreview product={product} story={story} />
          </div>
        </div>
      </header>

      <div className="lp-story-body section-frame">
        <section className="lp-story-section lp-story-mechanism" id="workflow" aria-labelledby="mechanism-title">
          <div className="lp-story-heading">
            <div><p className="lp-eyebrow">{story.mechanism.eyebrow}</p><h2 data-reveal-words id="mechanism-title">{story.mechanism.title}</h2></div>
            <p>{story.mechanism.intro}</p>
          </div>
          <ol className="lp-story-trace">
            {story.mechanism.steps.map((step, index) => (
              <li key={step.title}>
                <span className="lp-story-trace__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3><p>{step.body}</p>
              </li>
            ))}
          </ol>
          {story.mechanism.note && <p className="lp-story-note lp-story-mechanism__note">{story.mechanism.note}</p>}
        </section>

        <section className="lp-story-benefits" aria-label={`More ways to use ${product.name}`}>
          {story.benefits.map((benefit) => (
            <article className="lp-story-benefit" key={benefit.title}>
              <h2 data-reveal-words>{benefit.title}</h2>
              <p>{benefit.badge && <><span className="lp-story-benefit__tier">{benefit.badge}</span>{' '}</>}{benefit.body}</p>
              {benefit.detail && <p className="lp-story-note">{benefit.detail}</p>}
            </article>
          ))}
        </section>

        {earlyPortability && <Portability story={story} />}

        <section className="lp-story-section lp-story-offer" id="requirements" aria-labelledby="offer-title">
          <div className="lp-story-heading">
            <div><p className="lp-eyebrow">{released ? 'Plans and availability' : `Free and ${story.offer.paidName}`}</p><h2 data-reveal-words id="offer-title">{released ? `Get ${product.name}.` : story.offer.title}</h2></div>
            <div className="lp-story-offer__status"><span className={statusClassName}>{releaseLabel}</span><p>{released ? 'Check the App Store and the offer in the app for current plans, features, allowances, and your local price.' : 'Planned features and limits are shown below. Pricing and compatibility will be confirmed before release.'}</p></div>
          </div>
          {released ? (appStoreUrl && <a href={appStoreUrl} className="lp-button" target="_blank" rel="noopener noreferrer">View {product.name} on the App Store <ArrowUpRight size={17} aria-hidden="true" /></a>) : <>
          <div className="lp-story-plans">
            {[{ name: 'Free', items: story.offer.free }, { name: story.offer.paidName, items: story.offer.paid }].map((plan) => (
              <div className="lp-story-plan" key={plan.name}>
                <h3>{plan.name}</h3>
                <ul>{plan.items.map((item) => <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>)}</ul>
              </div>
            ))}
          </div>
          {product.price && <p className="lp-story-price">{product.price}</p>}
          {story.offer.note && <p className="lp-story-note">{story.offer.note}</p>}
          </>}
          <div className="lp-story-requirements"><h3>What you will need</h3><p>{story.requirements}</p></div>
        </section>

        {!earlyPortability && <Portability story={story} />}

        <section className="lp-story-section lp-story-boundary" id="boundary" aria-labelledby="boundary-title">
          <div className="lp-story-heading">
            <div><p className="lp-eyebrow">The Boundary Check</p><h2 data-reveal-words id="boundary-title">How {product.name} handles your records.</h2></div>
            <p>Where the work happens, where your records live, and which features use a connection.</p>
          </div>
          <dl>
            <div><dt>Where does the processing happen?</dt><dd>{story.boundary.processing}</dd></div>
            <div><dt>Where does the storage live?</dt><dd>{story.boundary.storage}</dd></div>
            <div><dt>What connects to the network, and when?</dt><dd>{story.boundary.connections}</dd></div>
          </dl>
          <Link className="lp-link" to="/privacy">Read the collection’s privacy model <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>

        {faqs.length > 0 && <section className="lp-story-section lp-story-faq" aria-labelledby="faq-title">
          <div><p className="lp-eyebrow">{released ? 'Before you download' : inDevelopment ? 'Before release' : 'Practical questions'}</p><h2 data-reveal-words id="faq-title">Questions about {product.name}.</h2></div>
          <SiteFaq items={faqs} />
        </section>}

        <nav className="lp-story-next" aria-label={`${product.name} further reading`}>
          {product.hasKnowledgeBase && <Link to={`/help/${product.id}`}>Read the {product.name} guide <ArrowUpRight size={17} aria-hidden="true" /></Link>}
          {related && <Link to={`/journal/${related.id}`}>{related.title} <ArrowUpRight size={17} aria-hidden="true" /></Link>}
          <Link to="/download">Explore the collection <ArrowRight size={17} aria-hidden="true" /></Link>
        </nav>
      </div>
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const story = product ? productStories[product.id] : undefined;
  if (!product || !story) return <Navigate to="/download" replace />;
  // A route change starts the new product on its own selected capture.
  return <ProductPage key={product.id} product={product} story={story} />;
};

export default ProductDetail;
