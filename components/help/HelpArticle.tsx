import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getKb, getArticle } from '../../data/kb';
import { getProduct } from '../../data/products';
import { KnowledgeBase, KBArticle } from '../../types';
import { Icon } from '../../lib/icons';
import HelpSidebar from './HelpSidebar';
import KbBlocks from './KbBlocks';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildCollectionPage, buildTechArticle, buildHowTo } from '../SEO';

const FooterCta: React.FC<{ kb: KnowledgeBase }> = ({ kb }) => (
  <div className="help-cta">
    <div>
      <strong>Still need a hand?</strong>
      <p>
        Email <a href="mailto:support@obsidianridgelabs.com">support@obsidianridgelabs.com</a>
        , a real person will reply.
      </p>
    </div>
    <Link to={`/apps/${kb.appId}`} className="button button--primary">View {kb.appName}</Link>
  </div>
);

const ArticleView: React.FC<{ kb: KnowledgeBase; article: KBArticle }> = ({ kb, article }) => {
  const category = kb.categories.find((item) => item.id === article.category);
  const related = (article.related || [])
    .map((id) => kb.articles.find((item) => item.id === id))
    .filter((item): item is KBArticle => Boolean(item));

  return (
    <article className="help-article">
      <p className="section-kicker">
        {category && (
          <>
            <Icon name={category.icon} size={13} aria-hidden="true" /> {category.title}
          </>
        )}
      </p>
      <h1>{article.title}</h1>
      <p className="help-article__lede">{article.description}</p>
      {article.updated && <p className="help-article__meta">Updated {article.updated}</p>}
      <KbBlocks blocks={article.blocks} />

      {related.length > 0 && (
        <div className="help-related">
          <p className="section-kicker">Related guides</p>
          <div>
            {related.map((item) => (
              <Link key={item.id} to={`/help/${kb.appId}/${item.id}`}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <FooterCta kb={kb} />
    </article>
  );
};

const LandingView: React.FC<{ kb: KnowledgeBase }> = ({ kb }) => (
  <div className="help-article">
    <p className="section-kicker">Help &amp; guides</p>
    <h1>{kb.appName}</h1>
    <p className="help-article__lede">{kb.intro}</p>

    {kb.categories.map((category) => {
      const articles = kb.articles.filter((article) => article.category === category.id);
      if (!articles.length) return null;
      return (
        <section key={category.id} className="help-category">
          <div className="help-category__head">
            <span aria-hidden="true"><Icon name={category.icon} size={18} /></span>
            <div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
          </div>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link to={`/help/${kb.appId}/${article.id}`}>
                  {article.title}
                  <Icon name="arrow-right" size={15} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      );
    })}

    <FooterCta kb={kb} />
  </div>
);

const HelpArticle: React.FC = () => {
  const { appId, articleId } = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
      if (event.key === 'Tab' && drawerRef.current) {
        const focusable = Array.from(
          drawerRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])'),
        ) as HTMLElement[];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      openButtonRef.current?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  const kb = appId ? getKb(appId) : undefined;
  if (!kb) return <Navigate to="/help" replace />;
  const product = getProduct(kb.appId);
  const isPreviewDocs = Boolean(product && ['pre-release', 'concept'].includes(product.releaseStatus));
  const article = articleId ? getArticle(appId!, articleId) : undefined;
  if (articleId && !article) return <Navigate to={`/help/${appId}`} replace />;

  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Help', url: '/help' },
    { name: kb.appName, url: `/help/${kb.appId}` },
  ];
  if (article) crumbs.push({ name: article.title, url: `/help/${kb.appId}/${article.id}` });

  const faqItems = article
    ? article.blocks
        .filter((block): block is Extract<KBArticle['blocks'][number], { type: 'faq' }> => block.type === 'faq')
        .flatMap((block) => block.items.map((item) => ({ question: item.q, answer: item.a })))
    : [];

  const howToSteps = article
    ? (article.blocks.find((block) => block.type === 'steps') as Extract<KBArticle['blocks'][number], { type: 'steps' }> | undefined)?.items
    : undefined;

  const jsonLd: Record<string, unknown>[] = [buildBreadcrumbs(crumbs)];
  if (article) {
    jsonLd.push(
      buildTechArticle({
        title: article.title,
        description: article.description,
        appId: kb.appId,
        appName: kb.appName,
        articleId: article.id,
        updated: article.updated,
        keywords: article.keywords,
        releaseStatus: product?.releaseStatus,
      }),
    );
    if (howToSteps && howToSteps.length > 1) {
      jsonLd.push(
        buildHowTo({
          name: article.title,
          description: article.description,
          url: `https://obsidianridgelabs.com/help/${kb.appId}/${article.id}`,
          steps: howToSteps,
        }),
      );
    }
  }
  if (faqItems.length) jsonLd.push(buildFAQSchema(faqItems));
  if (!article) jsonLd.push(buildCollectionPage(`${kb.appName} Help`, kb.intro, `/help/${kb.appId}`));

  return (
    <div className="help-shell">
      <SEO
        title={article ? `${article.title} · ${kb.appName}` : `${kb.appName}: Help & Guides`}
        description={article?.description || kb.intro}
        keywords={article?.keywords}
        canonical={`https://obsidianridgelabs.com/help/${kb.appId}${article ? '/' + article.id : ''}`}
        jsonLd={jsonLd}
      />

      <div className="section-frame help-shell__layout">
        {!collapsed && (
          <aside className="help-shell__rail">
            <HelpSidebar kb={kb} currentArticleId={article?.id} />
          </aside>
        )}

        <div className="help-shell__content">
          <button
            type="button"
            className="help-shell__toggle"
            onClick={() => setCollapsed((current) => !current)}
          >
            <Icon name={collapsed ? 'menu' : 'arrow-left'} size={14} />
            {collapsed ? 'Show contents' : 'Hide contents'}
          </button>

          {isPreviewDocs && (
            <p className="help-preview">
              Preview documentation for a product in development. Features, compatibility, and exact steps may change before release.
            </p>
          )}
          {article ? <ArticleView kb={kb} article={article} /> : <LandingView kb={kb} />}
        </div>
      </div>

      <button
        ref={openButtonRef}
        type="button"
        onClick={() => setMobileOpen(true)}
        className="help-shell__fab"
        aria-label="Open help contents"
      >
        <Icon name="menu" size={16} /> Contents
      </button>

      {mobileOpen && (
        <div
          ref={drawerRef}
          className="help-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Help contents"
        >
          <button type="button" className="help-drawer__backdrop" onClick={() => setMobileOpen(false)} aria-label="Close help contents" />
          <div className="help-drawer__panel">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close contents"
            >
              <Icon name="x" size={20} />
            </button>
            <HelpSidebar kb={kb} currentArticleId={article?.id} onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpArticle;
