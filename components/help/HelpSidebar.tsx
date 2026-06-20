import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { KnowledgeBase, KBArticle } from '../../types';
import { Icon } from '../../lib/icons';

/* The persistent help navigation. Lists every category and article so readers
   can jump anywhere without going back to a hub. Used both in the desktop rail
   and the mobile drawer; `onNavigate` lets the drawer close on selection. */

interface Props {
  kb: KnowledgeBase;
  currentArticleId?: string;
  onNavigate?: () => void;
}

const HelpSidebar: React.FC<Props> = ({ kb, currentArticleId, onNavigate }) => {
  const [query, setQuery] = useState('');

  const byCategory = useMemo(() => {
    const map: Record<string, KBArticle[]> = {};
    for (const a of kb.articles) (map[a.category] ||= []).push(a);
    return map;
  }, [kb]);

  const q = query.trim().toLowerCase();
  const matches = (a: KBArticle) =>
    !q ||
    a.title.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q) ||
    (a.keywords || []).some((k) => k.toLowerCase().includes(q));

  const anyMatches = kb.articles.some(matches);

  return (
    <div className="flex flex-col h-full min-h-0">
      <Link
        to="/help"
        onClick={onNavigate}
        className="flex items-center gap-2 text-gray-500 hover:text-neon text-[11px] font-mono uppercase tracking-widest mb-5 transition-colors"
      >
        <Icon name="arrow-left" size={13} /> All help
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <span
          className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
          style={{ background: `${kb.accent}1f`, color: kb.accent }}
        >
          <Icon name="help" size={18} />
        </span>
        <div className="min-w-0">
          <div className="text-white font-display font-bold leading-tight truncate">{kb.appName}</div>
          <div className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Help &amp; guides</div>
        </div>
      </div>

      <div className="relative mb-5">
        <Icon name="search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides"
          aria-label="Search guides"
          className="w-full bg-black/40 border border-white/10 focus:border-neon/50 rounded-md pl-9 pr-3 py-2 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
        />
      </div>

      <nav className="flex-1 overflow-y-auto -mr-2 pr-2 space-y-6 no-scrollbar">
        {!anyMatches && <p className="text-gray-500 text-sm font-display">No guides match “{query}”.</p>}
        {kb.categories.map((cat) => {
          const arts = (byCategory[cat.id] || []).filter(matches);
          if (!arts.length) return null;
          return (
            <div key={cat.id}>
              <div className="flex items-center gap-2 text-gray-400 text-[10px] font-mono uppercase tracking-widest mb-2">
                <Icon name={cat.icon} size={13} className="text-neon/70" /> {cat.title}
              </div>
              <ul className="space-y-px border-l border-white/10 ml-1.5">
                {arts.map((a) => {
                  const active = a.id === currentArticleId;
                  return (
                    <li key={a.id}>
                      <Link
                        to={`/help/${kb.appId}/${a.id}`}
                        onClick={onNavigate}
                        aria-current={active ? 'page' : undefined}
                        className={`block pl-4 -ml-px border-l py-1.5 text-sm leading-snug transition-colors ${
                          active
                            ? 'border-neon text-neon font-medium'
                            : 'border-transparent text-gray-400 hover:text-white hover:border-white/40'
                        }`}
                      >
                        {a.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default HelpSidebar;
