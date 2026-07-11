import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductReleaseLabel, products } from '../data/products';
import MotionReveal from './home/MotionReveal';

const productOrder = ['echochamber', 'vault', 'molehill', 'cove', 'wove', 'mettle', 'memora', 'trove', 'kith'];

const homepageCopy: Record<string, { proposition: string; detail: string; platforms: string }> = {
  echochamber: {
    proposition: 'Private transcription that stays on your device.',
    detail: 'Record live or upload audio and video, then transcribe with Parakeet TDT, search, summarize, and export locally.',
    platforms: 'iPhone · iPad · Mac',
  },
  vault: {
    proposition: 'Understand your money without surrendering it.',
    detail: 'An in-development local-first finance tool with a planned manual path and clearly disclosed optional bank sync.',
    platforms: 'iPhone · iPad',
  },
  molehill: {
    proposition: 'Break overwhelming work into one doable next step.',
    detail: 'A gentle focus tool designed around on-device task breakdown, without streaks or shame.',
    platforms: 'iPhone',
  },
  cove: {
    proposition: 'Reflect on your life without uploading it.',
    detail: 'A private journal with local reflection, mood and theme patterns, grounded recall, and a clear non-clinical boundary.',
    platforms: 'iPhone',
  },
  wove: {
    proposition: 'Turn the closet you own into looks you will wear.',
    detail: 'Local garment capture, weather-aware outfits, capsules, packing, and insights shaped by real wear history.',
    platforms: 'iPhone · iPad',
  },
  mettle: {
    proposition: 'Follow the program—and understand every prescription.',
    detail: 'A private strength coach where deterministic progression owns the numbers and on-device AI explains the plan.',
    platforms: 'iPhone · Apple Watch',
  },
  memora: {
    proposition: 'Turn your material into cards. Review before you forget.',
    detail: 'Local flashcard drafts from notes, text-layer PDFs, and selected photos, paired with FSRS scheduling.',
    platforms: 'iPhone',
  },
  trove: {
    proposition: 'Document what you own before you need the record.',
    detail: 'A private home inventory for belongings, receipts, serials, values, warranties, and insurance-ready evidence.',
    platforms: 'iPhone · iPad',
  },
  kith: {
    proposition: 'Stay close without turning relationships into a CRM cloud.',
    detail: 'Gentle reach-out cadences, private context, and on-device helpers for the people who matter.',
    platforms: 'iPhone',
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
          <span>02 / The collection</span>
          <span>{products.length} focused instruments</span>
        </div>

        <div className="products-section__intro">
          <MotionReveal>
            <p className="section-kicker">The work</p>
            <h2 id="products-title">Different tools.<br /><em>One clear boundary.</em></h2>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <p>
              Each product solves a specific problem. Every one is designed to keep core
              intelligence close to its source and disclose the connections it does make.
            </p>
          </MotionReveal>
        </div>

        <div className="product-ledger" role="list">
          {orderedProducts.map((product, index) => {
            const copy = homepageCopy[product.id];
            return (
              <MotionReveal key={product.id} className="product-ledger__reveal" delay={index * 0.04} amount={0.18}>
                <Link to={`/apps/${product.id}`} className="product-ledger__row" role="listitem">
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
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal className="product-ledger__foot">
          <p>
            Products in development are presented as direction, not promise. Final capabilities,
            compatibility, and network behavior are published before release.
          </p>
          <Link to="/download" className="text-link">
            Compare every app <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
};

export default Products;
