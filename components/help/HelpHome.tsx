import React from 'react';
import { Link } from 'react-router-dom';
import { knowledgeBases } from '../../data/kb';
import { getProduct } from '../../data/products';
import { Icon } from '../../lib/icons';
import SEO, { buildBreadcrumbs, buildCollectionPage } from '../SEO';

const HelpHome: React.FC = () => {
  const jsonLd = [
    buildBreadcrumbs([
      { name: 'Home', url: '/' },
      { name: 'Help', url: '/help' },
    ]),
    buildCollectionPage('Help Center', 'Guides and answers for every Obsidian Ridge Labs app.', '/help'),
  ];

  return (
    <div className="help-index">
      <SEO
        title="Help Center"
        description="Setup, privacy, troubleshooting, and feature guides for Echo Chamber, plus clearly labeled preview documentation for apps still in development."
        canonical="https://obsidianridgelabs.com/help"
        jsonLd={jsonLd}
      />

      <header className="help-index__hero">
        <div className="section-frame">
          <div className="section-index">
            <span>Support</span>
            <span>Guides, not a ticket maze</span>
          </div>
          <p className="section-kicker">Help Center</p>
          <h1>How can we help?</h1>
          <p>
            Clear guides for every app: how to set things up, get the most from each feature,
            and understand exactly where your data lives.
          </p>
        </div>
      </header>

      <div className="section-frame help-index__grid">
        {knowledgeBases.map((kb) => {
          const product = getProduct(kb.appId);
          const AppIcon = product?.icon;
          const inDevelopment = Boolean(product && ['pre-release', 'concept'].includes(product.releaseStatus));
          return (
            <Link key={kb.appId} to={`/help/${kb.appId}`} className="help-card">
              <div className="help-card__icon" aria-hidden="true">
                {AppIcon ? <AppIcon size={22} /> : <Icon name="help" size={22} />}
              </div>
              <div className="help-card__copy">
                <span>{kb.articles.length} guides{inDevelopment ? ' · in development' : ''}</span>
                <h2>{kb.appName}</h2>
                <p>{product?.description || kb.intro}</p>
              </div>
              <small>Browse guides <Icon name="arrow-right" size={14} /></small>
            </Link>
          );
        })}
      </div>

      <div className="section-frame">
        <div className="help-cta">
          <div>
            <strong>Can’t find what you need?</strong>
            <p>We read every message and a real person will reply.</p>
          </div>
          <a href="mailto:support@obsidianridgelabs.com" className="button button--primary">
            <Icon name="mail" size={16} /> Email support
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpHome;
