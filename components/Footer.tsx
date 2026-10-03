import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductReleaseLabel, products } from '../data/products';
import { collection } from '../data/collection';
import Brand from './Brand';

const collectionMidpoint = Math.ceil(collection.length / 2);

const productStatus = (product: (typeof products)[number]) => {
  const label = getProductReleaseLabel(product);
  return label === 'Available on the App Store' ? 'Available' : label;
};
const productName = (name: string) => name.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase());

const Footer: React.FC = () => (
  <footer className="site-footer site-chrome">
    <div className="site-footer__halo" aria-hidden="true" />
    <div className="section-frame">
      <div className="site-footer__top">
        <div>
          <Link to="/" className="site-wordmark" aria-label="Obsidian Ridge Labs home">
            <Brand />
          </Link>
          <p>Apps that mind their own business.</p>
          <a href="mailto:support@obsidianridgelabs.com" className="site-footer__contact">
            Get in touch <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-footer__links">
        <nav aria-label="Applications">
          <p>Apps</p>
          {collection.slice(0, collectionMidpoint).map((product) => (
            <Link key={product.id} to={`/apps/${product.id}`}>
              {productName(product.name)}<span>{productStatus(product)}</span>
            </Link>
          ))}
          <Link to="/download" className="site-footer__all-apps">The collection <ArrowUpRight size={13} aria-hidden="true" /></Link>
        </nav>
        <nav aria-label="More applications" className="site-footer__lab">
          <p>More apps</p>
          {collection.slice(collectionMidpoint).map((product) => (
            <Link key={product.id} to={`/apps/${product.id}`}>
              {productName(product.name)}<span>{productStatus(product)}</span>
            </Link>
          ))}
        </nav>
        <nav aria-label="Explore">
          <p>Studio</p>
          <Link to="/philosophy">The standard</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/help">Help center</Link>
        </nav>
        <nav aria-label="Company and policies">
          <p>Details</p>
          <Link to="/privacy">Privacy model</Link>
          <Link to="/terms">Terms of service</Link>
          <a href="https://github.com/amotor-AM/obsidian-ridge-labs" target="_blank" rel="noreferrer">Website source <ArrowUpRight size={13} aria-hidden="true" /></a>
          <a href="mailto:support@obsidianridgelabs.com">Support <ArrowUpRight size={13} aria-hidden="true" /></a>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Obsidian Ridge Labs</span>
        <span className="site-footer__status"><i aria-hidden="true" />Local by design.</span>
        <span>Las Vegas, Nevada</span>
      </div>
    </div>
  </footer>
);

export default Footer;
