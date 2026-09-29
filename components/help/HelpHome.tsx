import React from 'react';
import { Link } from 'react-router-dom';
import { knowledgeBases } from '../../data/kb';
import { getProduct } from '../../data/products';
import { collectionAvailability, upcomingApps } from '../../data/collection';
import { Icon } from '../../lib/icons';
import SEO, { buildBreadcrumbs, buildCollectionPage } from '../SEO';

const HelpHome: React.FC = () => {
  const jsonLd = [
    buildBreadcrumbs([
      { name: 'Home', url: '/' },
      { name: 'Help', url: '/help' },
    ]),
    buildCollectionPage('Help Center', 'Setup, privacy, and troubleshooting guides for every Obsidian Ridge Labs app.', '/help'),
  ];

  return (
    <div className="help-index">
      <SEO
        title="Help Center"
        description={`Set up your app, manage storage and sync, or troubleshoot a problem. ${collectionAvailability}.`}
        canonical="https://obsidianridgelabs.com/help"
        jsonLd={jsonLd}
      />

      <header className="help-index__hero">
        <div className="section-frame">
          <div className="section-index">
            <span>Support</span>
            <span>Setup · Storage · Troubleshooting</span>
          </div>
          <p className="section-kicker">Help Center</p>
          <h1>How can we help?</h1>
          <p>
            Set up your app, find a missing recording, or check what happens when you turn on sync.
            {upcomingApps.length > 0 && ` Preview guides for ${upcomingApps.length} ${upcomingApps.length === 1 ? 'app' : 'apps'} describe work in development.`}
          </p>
          <Link to="/philosophy#boundary-check" className="text-link">
            Run the Boundary Check <Icon name="arrow-right" size={16} />
          </Link>
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
              <small>Read the guides <Icon name="arrow-right" size={14} /></small>
            </Link>
          );
        })}
      </div>

      <div className="section-frame">
        <div className="help-cta">
          <div>
            <strong>Still stuck?</strong>
            <p>Tell us which app and device you use, and what happened. A person will reply.</p>
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
