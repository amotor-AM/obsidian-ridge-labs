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
  <div className="mt-16 border border-white/10 bg-white/[0.02] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
    <div>
      <div className="text-white font-display font-bold text-lg">Still need a hand?</div>
      <p className="text-gray-400 font-display text-sm mt-1">
        Email{' '}
        <a href="mailto:support@obsidianridgelabs.com" className="text-neon hover:underline">support@obsidianridgelabs.com</a>
        , a real person will reply.
      </p>
    </div>
    <Link to={`/apps/${kb.appId}`} className="apple-button whitespace-nowrap">View {kb.appName}</Link>
  </div>
);

const ArticleView: React.FC<{ kb: KnowledgeBase; article: KBArticle }> = ({ kb, article }) => {
  const cat = kb.categories.find((c) => c.id === article.category);
  const related = (article.related || [])
    .map((id) => kb.articles.find((a) => a.id === id))
    .filter((a): a is KBArticle => Boolean(a));

  return (
    <article>
      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neon mb-4">
        {cat && (
          <>
            <Icon name={cat.icon} size={13} /> {cat.title}
          </>
        )}
      </div>
      <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.05] mb-4">{article.title}</h1>
      <p className="text-gray-400 font-display text-lg md:text-xl leading-relaxed mb-3">{article.description}</p>
      {article.updated && <div className="text-gray-600 text-xs font-mono uppercase tracking-wider mb-8">Updated {article.updated}</div>}
      <div className="h-px bg-white/10 mb-8" />
      <KbBlocks blocks={article.blocks} />

      {related.length > 0 && (
        <div className="mt-14 pt-8 border-t border-white/10">
          <h2 className="text-neon text-[11px] font-mono uppercase tracking-widest mb-5">Related guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/help/${kb.appId}/${r.id}`}
                className="group border border-white/10 bg-white/[0.02] hover:border-neon/40 p-5 transition-colors"
              >
                <div className="text-white font-display font-bold group-hover:text-neon transition-colors">{r.title}</div>
                <div className="text-gray-500 text-sm font-display mt-1">{r.description}</div>
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
  <div>
    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neon mb-4">Help &amp; guides</div>
    <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-5">{kb.appName}</h1>
    <p className="text-gray-400 font-display text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">{kb.intro}</p>

    <div className="space-y-12">
      {kb.categories.map((cat) => {
        const arts = kb.articles.filter((a) => a.category === cat.id);
        if (!arts.length) return null;
        return (
          <section key={cat.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-md bg-neon/10 text-neon flex items-center justify-center flex-shrink-0">
                <Icon name={cat.icon} size={18} />
              </span>
              <div>
                <h2 className="text-white font-display font-bold text-xl tracking-tight">{cat.title}</h2>
                <p className="text-gray-500 text-sm font-display">{cat.description}</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {arts.map((a) => (
                <li key={a.id}>
                  <Link
                    to={`/help/${kb.appId}/${a.id}`}
                    className="flex items-center justify-between gap-3 bg-obsidian hover:bg-white/[0.03] p-4 h-full group transition-colors"
                  >
                    <span className="text-gray-300 font-display group-hover:text-white transition-colors">{a.title}</span>
                    <Icon name="arrow-right" size={15} className="text-gray-600 group-hover:text-neon flex-shrink-0 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>

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
        .filter((b): b is Extract<KBArticle['blocks'][number], { type: 'faq' }> => b.type === 'faq')
        .flatMap((b) => b.items.map((i) => ({ question: i.q, answer: i.a })))
    : [];

  // Preserve machine-readable steps for semantics and assistive retrieval.
  const howToSteps = article
    ? (article.blocks.find((b) => b.type === 'steps') as Extract<KBArticle['blocks'][number], { type: 'steps' }> | undefined)?.items
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
    <div className="help-shell min-h-screen bg-obsidian pt-24 md:pt-28 pb-16 md:pb-24">
      <SEO
        title={article ? `${article.title} · ${kb.appName}` : `${kb.appName}: Help & Guides`}
        description={article?.description || kb.intro}
        keywords={article?.keywords}
        canonical={`https://obsidianridgelabs.com/help/${kb.appId}${article ? '/' + article.id : ''}`}
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-8 lg:gap-12">
          {/* Desktop rail */}
          {!collapsed && (
            <aside className="hidden lg:flex flex-col w-72 flex-shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] pr-6 border-r border-white/5">
              <HelpSidebar kb={kb} currentArticleId={article?.id} />
            </aside>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 lg:py-2">
            <div className="hidden lg:flex items-center gap-4 mb-8">
              <button
                onClick={() => setCollapsed((c) => !c)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-neon text-[11px] font-mono uppercase tracking-widest transition-colors"
              >
                <Icon name={collapsed ? 'menu' : 'arrow-left'} size={14} />
                {collapsed ? 'Show contents' : 'Hide contents'}
              </button>
            </div>

            <div className="max-w-3xl">
              {isPreviewDocs && (
                <p className="mb-8 border border-amber-300/25 bg-amber-300/[0.06] px-5 py-4 text-base leading-relaxed text-amber-100">
                  Preview documentation for a product in development. Features, compatibility, and exact steps may change before release.
                </p>
              )}
              {article ? <ArticleView kb={kb} article={article} /> : <LandingView kb={kb} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile contents button (FAB) */}
      <button
        ref={openButtonRef}
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-neon text-black font-display font-bold uppercase tracking-wider text-sm px-5 py-3 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.35)]"
        aria-label="Open help contents"
      >
        <Icon name="menu" size={16} /> Contents
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          ref={drawerRef}
          className="lg:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Help contents"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="absolute left-0 top-0 bottom-0 w-[86%] max-w-xs bg-obsidian-light border-r border-white/10 p-6 pt-5 overflow-hidden flex flex-col">
            <button
              ref={closeButtonRef}
              onClick={() => setMobileOpen(false)}
              className="absolute top-2 right-2 grid w-11 h-11 place-items-center text-gray-400 hover:text-white"
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
