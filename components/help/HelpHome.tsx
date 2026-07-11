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
    <div className="min-h-screen bg-obsidian pt-32 pb-20 px-6 md:px-12">
      <SEO
        title="Help Center"
        description="Setup, privacy, troubleshooting, and feature guides for Echo Chamber, plus clearly labeled preview documentation for apps still in development."
        canonical="https://obsidianridgelabs.com/help"
        jsonLd={jsonLd}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-neon text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-neon rounded-full animate-pulse" /> Help Center
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6 leading-[0.95]">How can we help?</h1>
        <p className="text-gray-400 font-display text-xl leading-relaxed max-w-2xl mb-16">
          Clear, friendly guides for every app: how to set things up, get the most from each feature, and understand
          exactly where your data lives.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {knowledgeBases.map((kb) => {
            const product = getProduct(kb.appId);
            const AppIcon = product?.icon;
            return (
              <Link
                key={kb.appId}
                to={`/help/${kb.appId}`}
                className="group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 p-8 transition-colors overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-0.5 opacity-70"
                  style={{ background: `linear-gradient(90deg, ${kb.accent}, transparent)` }}
                />
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${kb.accent}1f`, color: kb.accent }}
                  >
                    {AppIcon ? <AppIcon size={24} /> : <Icon name="help" size={24} />}
                  </span>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-neon transition-colors">
                      {kb.appName}
                    </h2>
                    <div className="text-gray-500 text-[11px] font-mono uppercase tracking-widest">
                      {kb.articles.length} guides
                      {product && ['pre-release', 'concept'].includes(product.releaseStatus) ? ' · in development' : ''}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 font-display leading-relaxed mb-6">{product?.description || kb.intro}</p>
                <div className="flex items-center gap-2 text-neon text-xs font-mono uppercase tracking-widest">
                  Browse guides <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 border border-white/10 bg-white/[0.02] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <div className="text-white font-display font-bold text-lg">Can’t find what you need?</div>
            <p className="text-gray-400 font-display text-sm mt-1">We read every message and a real person will reply.</p>
          </div>
          <a href="mailto:support@obsidianridgelabs.com" className="apple-button whitespace-nowrap">
            <Icon name="mail" size={16} /> Email support
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpHome;
