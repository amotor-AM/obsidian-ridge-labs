import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductReleaseLabel, products } from '../data/products';
import MotionReveal from './home/MotionReveal';
import { SpotlightCard } from './ui/spotlight-card';
import { TextMarquee } from './ui/text-marquee';

const productOrder = ['echochamber', 'vault', 'molehill', 'cove', 'wove', 'mettle', 'memora', 'trove', 'kith', 'mise'];

const homepageCopy: Record<string, { proposition: string; detail: string; platforms: string }> = {
  echochamber: {
    proposition: 'Transcribe anything you hear, on the device you heard it on.',
    detail: 'Record live or import a file. Get a searchable transcript, notes, and summaries without a server ever hearing a word.',
    platforms: 'iPhone · iPad · Mac',
  },
  vault: {
    proposition: 'Your finances, understood on your phone.',
    detail: 'Photograph receipts, plan spending, forecast cash flow. Every number computed on your device, with bank sync strictly optional.',
    platforms: 'iPhone · iPad',
  },
  molehill: {
    proposition: 'For the task too big to start.',
    detail: 'Speak the swirl, get one small next step, and split it smaller when it still is. No streaks, no shame, no profile.',
    platforms: 'iPhone',
  },
  cove: {
    proposition: 'A journal that reflects with you, not about you.',
    detail: 'Write, look back, notice patterns. Reflection happens on your device, from entries only you can read.',
    platforms: 'iPhone · iPad · Watch',
  },
  wove: {
    proposition: 'A stylist who has seen your whole closet and tells no one.',
    detail: 'Photograph what you own once, then get weather-aware outfits, capsules, and packing lists composed on your phone.',
    platforms: 'iPhone · iPad · Watch',
  },
  mettle: {
    proposition: 'A strength coach that shows its work.',
    detail: 'Every set, rep, and load comes with a stated reason. Deterministic programming, on-device explanations, your record on your device.',
    platforms: 'iPhone · Apple Watch',
  },
  memora: {
    proposition: 'Turn the notes you already have into the memory you want.',
    detail: 'Flashcard drafts generated on your phone from your notes, PDFs, and photos. FSRS schedules the reviews.',
    platforms: 'iPhone',
  },
  trove: {
    proposition: 'The record of everything you own, ready before you need it.',
    detail: 'Scan a room, log warranties and values, and walk into any claim with the evidence in hand.',
    platforms: 'iPhone · iPad',
  },
  kith: {
    proposition: 'Stay close to your people without a pipeline between you.',
    detail: 'Remember the details that matter, nudge yourself to reach out, and draft messages on your phone, not on a server.',
    platforms: 'iPhone',
  },
  mise: {
    proposition: 'Every recipe you have ever saved, cooking with you.',
    detail: 'Save from anywhere, plan the week, shop by aisle, and ask a sous chef that knows your kitchen.',
    platforms: 'iPhone · iPad · Watch',
  },
};

const getStatus = (product: (typeof products)[number]) => {
  const label = getProductReleaseLabel(product);
  return label === 'Available on the App Store' ? 'Available now' : label;
};

const Products: React.FC = () => {
  const orderedProducts = productOrder
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  return (
    <section id="products" className="products-section" aria-labelledby="products-title">
      <div className="section-frame">
        <div className="section-index">
          <span>02 / What we're building</span>
          <span>{products.length} apps, each its own thing</span>
        </div>

          <div className="products-section__intro">
          <MotionReveal>
            <p className="section-kicker">The collection</p>
            <h2 id="products-title">Ten apps. One for every part of<br /><em>life you&apos;d rather keep.</em></h2>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <p>
              A budget app and a journal do not share the same privacy problem, so each app
              draws its own boundary and states it on its own page. What they all share: the
              intelligence runs on your device, and nothing connects in secret.
            </p>
          </MotionReveal>
        </div>

        <div className="product-ledger" role="list">
          {orderedProducts.map((product, index) => {
            const copy = homepageCopy[product.id];
            return (
              <MotionReveal key={product.id} className="product-ledger__reveal" delay={index * 0.04} amount={0.18} role="listitem">
                <SpotlightCard className="product-ledger__spot">
                  <Link to={`/apps/${product.id}`} className="product-ledger__row">
                    <div className="product-ledger__number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="product-ledger__name">
                      <span>{product.category}</span>
                      <h3>{product.name}</h3>
                    </div>
                    <div className="product-ledger__copy">
                      <strong>{copy.proposition}</strong>
                      <p>{copy.detail}</p>
                    </div>
                    <div className="product-ledger__meta">
                      <span className={product.appStoreUrl ? 'is-live' : ''}>{getStatus(product)}</span>
                      <small>{copy.platforms}</small>
                    </div>
                    <div className="product-ledger__arrow" aria-hidden="true">
                      <ArrowUpRight size={24} />
                    </div>
                  </Link>
                </SpotlightCard>
              </MotionReveal>
            );
          })}
        </div>

        <TextMarquee
          label="Obsidian Ridge Labs applications"
          items={orderedProducts.map((product) => product.name)}
        />

        <MotionReveal className="product-ledger__foot">
          <p>
            Development status sits on every card. Each product page states exactly what is
            built today, what connects, and what it costs.
          </p>
          <Link to="/download" className="text-link">
            See what's available now <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
};

export default Products;
