import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Footer: React.FC = () => (
  <footer className="site-footer site-chrome">
    <div className="section-frame">
      <div className="site-footer__top">
        <div>
          <Link to="/" className="site-wordmark">
            <span className="site-wordmark__mark" aria-hidden="true"><i /><i /><i /></span>
            <span>Obsidian Ridge <b>Labs</b></span>
          </Link>
          <p>
            Independent Apple software studio building private, offline-first AI apps.
            Core intelligence stays close to the data it serves.
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
              {product.name}<span>{product.status === 'live' ? 'Available' : 'In the lab'}</span>
            </Link>
          ))}
        </nav>
        <nav aria-label="Explore">
          <p>Explore</p>
          <Link to="/philosophy">Philosophy</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/help">Help center</Link>
          <Link to="/download">All downloads</Link>
        </nav>
        <nav aria-label="Company and policies">
          <p>Company</p>
          <Link to="/privacy">Privacy model</Link>
          <Link to="/terms">Terms of service</Link>
          <a href="https://github.com/obsidian-ridge-labs" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
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
        <span>California · Apple platforms</span>
      </div>
    </div>
  </footer>
);

export default Footer;
