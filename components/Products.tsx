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
    proposition: 'Private transcription without a cloud copy of your voice.',
    detail: 'Record live or upload audio and video. Parakeet TDT transcribes on-device, then local AI helps you search, polish, summarize, and export.',
    platforms: 'iPhone · iPad · Mac',
  },
  vault: {
    proposition: 'Budget with insight, not surveillance.',
    detail: 'Track manually, import statements or receipts on-device, forecast cash flow, and keep automatic Plaid bank sync strictly optional.',
    platforms: 'iPhone · iPad',
  },
  molehill: {
    proposition: 'Get unstuck without feeding a productivity profile.',
    detail: 'Turn a brain dump into one manageable next step with private, on-device help and no streak pressure.',
    platforms: 'iPhone',
  },
  cove: {
    proposition: 'A journal that can reflect without reading from the cloud.',
    detail: 'Write, remember, and find patterns with on-device reflection, grounded recall, and no Cove account or remote AI service.',
    platforms: 'iPhone · iPad · Watch',
  },
  wove: {
    proposition: 'Your closet. Your style. Your device.',
    detail: 'Capture garments locally, compose outfits from what you own, plan capsules and packing, and learn from real wear history.',
    platforms: 'iPhone · iPad · Watch',
  },
  mettle: {
    proposition: 'A strength coach that shows its work.',
    detail: 'Deterministic training logic owns every prescription. On-device intelligence explains the plan and adapts the coaching to you.',
    platforms: 'iPhone · Apple Watch',
  },
  memora: {
    proposition: 'Make smarter flashcards without uploading your study material.',
    detail: 'Generate editable drafts locally from notes, text-layer PDFs, and selected photos, then schedule recall with FSRS.',
    platforms: 'iPhone',
  },
  trove: {
    proposition: 'A private record of everything worth protecting.',
    detail: 'Capture belongings, receipts, serials, values, and warranties locally so the evidence is ready when a claim, move, or repair makes it matter.',
    platforms: 'iPhone · iPad',
  },
  kith: {
    proposition: 'Remember people, not sales prospects.',
    detail: 'Keep private context, follow a humane reach-out cadence, and use on-device helpers to show up with more care.',
    platforms: 'iPhone',
  },
  mise: {
    proposition: 'Your recipes, on your device, cooked with you.',
    detail: 'Save recipes from anywhere, plan the week, build an aisle-sorted grocery list, and ask an on-device sous chef that knows your kitchen.',
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
            <p className="section-kicker">The work</p>
            <h2 id="products-title">A few small apps.<br /><em>Built one at a time.</em></h2>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <p>
              We're a small studio that cares about where your data goes. That shows up
              differently in each app below, since a budgeting tool and a journal don't have the
              same privacy problem to solve. You'll always find the specifics on the product's
              own page, not a shared promise.
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
            Products in development are clearly labeled. Each one's page covers what's actually
            built so far, plus final compatibility, pricing, and connected services before release.
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
