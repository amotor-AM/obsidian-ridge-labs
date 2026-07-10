import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import MotionReveal from './home/MotionReveal';
import ProductVisual from './home/ProductVisual';

const productOrder = ['echochamber', 'vault', 'molehill', 'mind', 'nexus'];

const homepageCopy: Record<string, { eyebrow: string; headline: string; body: string; facts: string[] }> = {
  echochamber: {
    eyebrow: 'Private transcription',
    headline: 'Every word captured. Nothing sent to us.',
    body: 'Record audio, follow a live transcript, polish it with AI, search every word, and export the result—all on your Apple device. No required cloud processing. No audio uploaded to Obsidian Ridge Labs.',
    facts: ['Live transcription', 'AI notes & summaries', 'iPhone · iPad · Mac'],
  },
  vault: {
    eyebrow: 'Personal finance',
    headline: 'Understand your money without becoming the product.',
    body: 'Vault categorizes spending, forecasts cash flow, and offers private financial guidance on-device. Track manually and stay fully local, or enable Plaid bank sync when automatic updates are worth the connection.',
    facts: ['On-device forecasts', 'Biometric lock', 'Optional bank sync'],
  },
  molehill: {
    eyebrow: 'Focus & momentum',
    headline: 'Make the next step smaller.',
    body: 'Turn an overwhelming brain dump into one clear, doable action. On-device AI breaks work down without streaks, shame, or behavioral tracking.',
    facts: ['One step at a time', 'Works offline', 'No behavior tracking'],
  },
  mind: {
    eyebrow: 'Private reflection',
    headline: 'A journal that connects the dots—privately.',
    body: 'A private AI journal concept designed to surface patterns across your writing locally and under biometric protection.',
    facts: ['Local pattern finding', 'Semantic recall', 'Biometric protection'],
  },
  nexus: {
    eyebrow: 'Strategic thinking',
    headline: 'Put important decisions under pressure.',
    body: 'A visual decision workspace concept with local red-team intelligence that challenges assumptions before the stakes are real.',
    facts: ['Decision mapping', 'Red-team analysis', 'Local simulation'],
  },
};

const ProductCard: React.FC<{ productId: string; featured?: boolean; index: number }> = ({ productId, featured = false, index }) => {
  const product = products.find((item) => item.id === productId);
  if (!product) return null;
  const copy = homepageCopy[product.id];
  const style = { '--product-accent': product.accent || '#c7ff3e' } as React.CSSProperties;
  const status = product.status === 'live' ? 'Available now' : 'Inside the lab';

  return (
    <MotionReveal className={`product-story ${featured ? 'product-story--featured' : ''}`} amount={0.18}>
      <article style={style}>
        <div className="product-story__copy">
          <div className="product-story__meta">
            <span>0{index + 1}</span>
            <span>{copy.eyebrow}</span>
            <span className={product.status === 'live' ? 'is-live' : ''}><i /> {status}</span>
          </div>
          <div className="product-story__heading">
            <p>{product.name}</p>
            <h3>{copy.headline}</h3>
          </div>
          <p className="product-story__body">{copy.body}</p>
          <ul className="product-story__facts" aria-label={`${product.name} highlights`}>
            {copy.facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
          <div className="product-story__actions">
            <Link to={`/apps/${product.id}`} className="button button--outline">
              Explore {product.shortName} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            {product.appStoreUrl && (
              <a href={product.appStoreUrl} target="_blank" rel="noreferrer" className="text-link">
                App Store <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <ProductVisual productId={product.id} />
      </article>
    </MotionReveal>
  );
};

const Products: React.FC = () => (
  <section id="products" className="products-section" aria-labelledby="products-title">
    <div className="section-frame">
      <div className="section-index">
        <span>02 / The collection</span>
        <span>Five focused instruments</span>
      </div>

      <div className="products-section__intro">
        <MotionReveal>
          <p className="section-kicker">Built for what matters</p>
          <h2 id="products-title">A private toolkit for modern life.</h2>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <p>
            Different jobs. One principle: keep the intelligence close to the data.
            Available products are shown first; experiments in development live inside the lab.
          </p>
        </MotionReveal>
      </div>

      <div className="products-section__available" aria-label="Available applications">
        <ProductCard productId={productOrder[0]} featured index={0} />
        <ProductCard productId={productOrder[1]} featured index={1} />
      </div>

      <div className="lab-heading">
        <span>Inside the lab</span>
        <p>Three ideas in active development, each built around the same local-first standard.</p>
      </div>
      <div className="products-section__lab">
        {productOrder.slice(2).map((productId, index) => (
          <ProductCard key={productId} productId={productId} index={index + 2} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;
