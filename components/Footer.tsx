import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductReleaseLabel, products } from '../data/products';

const productStatus = (product: (typeof products)[number]) => {
  const label = getProductReleaseLabel(product);
  return label === 'Available on the App Store' ? 'Available' : label;
};

const Footer: React.FC = () => (
  <footer className="site-footer site-chrome">
    <div className="section-frame">
      <div className="site-footer__top">
        <div>
          <Link to="/" className="site-wordmark" aria-label="Obsidian Ridge Labs home">
            <span className="site-wordmark__name">OBSIDIAN<span aria-hidden="true">/</span>RIDGE</span>
            <span className="site-wordmark__labs">LABS</span>
          </Link>
          <p>
            Private AI for Apple devices. Core intelligence stays on the hardware
            in your hands, and optional connections are explained before you choose them.
          </p>
        </div>
        <a href="mailto:support@obsidianridgelabs.com" className="site-footer__contact">
          Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="site-footer__links">
        <nav aria-label="Applications">
          <p>Applications</p>
          {products.map((product) => (
            <Link key={product.id} to={`/apps/${product.id}`}>
              {product.name}<span>{productStatus(product)}</span>
            </Link>
          ))}
        </nav>
        <nav aria-label="Explore">
          <p>Explore</p>
          <Link to="/philosophy">Philosophy</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/help">Help center</Link>
          <Link to="/download">All downloads</Link>
        </nav>
        <nav aria-label="Company and policies">
          <p>Company</p>
          <Link to="/privacy">Privacy model</Link>
          <Link to="/terms">Terms of service</Link>
          <a href="https://github.com/amotor-AM/obsidian-ridge-labs" target="_blank" rel="noreferrer">Website source <ArrowUpRight size={13} /></a>
          <a href="mailto:support@obsidianridgelabs.com">Email us <ArrowUpRight size={13} /></a>
        </nav>
      </div>

      <div className="site-footer__statement" aria-label="Obsidian Ridge Labs">
        <span>OBSIDIAN</span>
        <span>RIDGE</span>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Obsidian Ridge Labs</span>
        <span className="site-footer__status"><i /> Local intelligence, thoughtfully made</span>
        <span>Las Vegas, Nevada · Apple platforms</span>
      </div>
    </div>
  </footer>
);

export default Footer;
