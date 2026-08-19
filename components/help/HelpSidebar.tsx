import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { KnowledgeBase, KBArticle } from '../../types';
import { Icon } from '../../lib/icons';

interface Props {
  kb: KnowledgeBase;
  currentArticleId?: string;
  onNavigate?: () => void;
}

const HelpSidebar: React.FC<Props> = ({ kb, currentArticleId, onNavigate }) => {
  const [query, setQuery] = useState('');

  const byCategory = useMemo(() => {
    const map: Record<string, KBArticle[]> = {};
    for (const article of kb.articles) (map[article.category] ||= []).push(article);
    return map;
  }, [kb]);

  const normalizedQuery = query.trim().toLowerCase();
  const matches = (article: KBArticle) =>
    !normalizedQuery ||
    article.title.toLowerCase().includes(normalizedQuery) ||
    article.description.toLowerCase().includes(normalizedQuery) ||
    (article.keywords || []).some((keyword) => keyword.toLowerCase().includes(normalizedQuery));

  const anyMatches = kb.articles.some(matches);

  return (
    <div className="help-rail">
      <Link to="/help" onClick={onNavigate} className="help-rail__back">
        <Icon name="arrow-left" size={13} /> All help
      </Link>

      <div className="help-rail__app">
        <span aria-hidden="true"><Icon name="help" size={18} /></span>
        <div>
          <strong>{kb.appName}</strong>
          <small>Help &amp; guides</small>
        </div>
      </div>

      <label className="help-rail__search">
        <span className="sr-only">Search guides</span>
        <Icon name="search" size={15} aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search guides"
        />
      </label>

      <nav className="help-rail__nav" aria-label={`${kb.appName} help`}>
        {!anyMatches && <p>No guides match “{query}”.</p>}
        {kb.categories.map((category) => {
          const articles = (byCategory[category.id] || []).filter(matches);
          if (!articles.length) return null;
          return (
            <div key={category.id}>
              <p>
                <Icon name={category.icon} size={13} aria-hidden="true" /> {category.title}
              </p>
              <ul>
                {articles.map((article) => {
                  const active = article.id === currentArticleId;
                  return (
                    <li key={article.id}>
                      <Link
                        to={`/help/${kb.appId}/${article.id}`}
                        onClick={onNavigate}
                        aria-current={active ? 'page' : undefined}
                      >
                        {article.title}
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
