import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Calendar,
  Check,
  Clock,
  Download,
  ExternalLink,
  ListChecks,
  Share2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { blogPosts, isBabyLoveGrowthPost } from '../data/blog';
import { getProductReleaseLabel, products } from '../data/products';
import type { BlogBlock } from '../types';
import SEO, {
  buildArticleItemList,
  buildBlogPosting,
  buildBreadcrumbs,
  buildFAQSchema,
} from './SEO';

const formatDate = (value: string) => {
  const [year, month, day] = value.split('.').map(Number);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
};

const blockFaqs = (blocks: BlogBlock[]) => blocks.flatMap((block) => (
  block.type === 'faq' ? block.content : []
));

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find((candidate) => candidate.id === id);
  const [bookmarked, setBookmarked] = useState(false);
  const [shareStatus, setShareStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    setBookmarked(window.localStorage.getItem(`orl:bookmark:${id}`) === 'true');
    setShareStatus('');
  }, [id]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const explicit = (post.relatedIds || [])
      .map((relatedId) => blogPosts.find((candidate) => candidate.id === relatedId))
      .filter((candidate): candidate is NonNullable<typeof candidate> => Boolean(candidate));
    const contextual = blogPosts.filter((candidate) => (
      candidate.id !== post.id
      && !explicit.some((related) => related.id === candidate.id)
      && (
        (post.appId && candidate.appId === post.appId)
        || candidate.tags.some((tag) => post.tags.includes(tag))
      )
    ));
    return [...explicit, ...contextual].slice(0, 4);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const isGrowthPost = isBabyLoveGrowthPost(post);
  const product = post.appId ? products.find((item) => item.id === post.appId) : undefined;
  const faqs = blockFaqs(post.blocks);
  const itemList = buildArticleItemList(post);
  const tableOfContents = post.blocks.flatMap((block, index) => (
    block.type === 'h2' ? [{ label: block.content, id: `section-${index}` }] : []
  ));
  const structuredData = [
    ...(post.jsonLd ? [post.jsonLd] : [buildBlogPosting(post)]),
    buildBreadcrumbs([
      { name: 'Home', url: '/' },
      { name: 'Journal', url: '/blog' },
      { name: post.title, url: `/blog/${post.id}` },
    ]),
    ...(post.faqJsonLd ? [post.faqJsonLd] : faqs.length ? [buildFAQSchema(faqs)] : []),
    ...(itemList ? [itemList] : []),
  ];

  const toggleBookmark = () => {
    const next = !bookmarked;
    setBookmarked(next);
    window.localStorage.setItem(`orl:bookmark:${post.id}`, String(next));
  };

  const sharePost = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, text: post.excerpt, url });
        setShareStatus('Shared');
      } else {
        await navigator.clipboard.writeText(url);
        setShareStatus('Link copied');
      }
    } catch (error) {
      if ((error as DOMException).name !== 'AbortError') setShareStatus('Sharing unavailable');
    }
  };

  const renderBlock = (block: BlogBlock, index: number) => {
    const sectionId = `section-${index}`;
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="journal-prose__paragraph">{block.content}</p>;
      case 'h2':
        return <h2 key={index} id={sectionId} className="journal-prose__heading">{block.content}</h2>;
      case 'answer':
        return (
          <section key={index} className="journal-answer" aria-labelledby={`answer-${index}`}>
            <span className="journal-answer__label"><Sparkles size={15} aria-hidden="true" /> Direct answer</span>
            <h2 id={`answer-${index}`}>{block.title}</h2>
            <p>{block.content}</p>
          </section>
        );
      case 'callout': {
        const Icon = block.variant === 'privacy' ? ShieldCheck : ListChecks;
        return (
          <aside key={index} className={`journal-callout journal-callout--${block.variant || 'note'}`}>
            <Icon size={22} aria-hidden="true" />
            <div>
              <h3>{block.title}</h3>
              <p>{block.content}</p>
            </div>
          </aside>
        );
      }
      case 'quote':
        return <blockquote key={index} className="journal-quote">{block.content}</blockquote>;
      case 'code':
        return <pre key={index} className="journal-code"><code>{block.content}</code></pre>;
      case 'list':
        return (
          <ul key={index} className="journal-list">
            {block.content.map((item) => (
              <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>
            ))}
          </ul>
        );
      case 'comparison':
        return (
          <figure key={index} className="journal-table-wrap">
            <div className="journal-table-scroll" tabIndex={0} role="region" aria-label={block.caption}>
              <table className="journal-table">
                <caption>{block.caption}</caption>
                <thead>
                  <tr>{block.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.cells.map((cell, cellIndex) => <td key={`${row.label}-${cellIndex}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="journal-table-hint">Scroll horizontally to read the complete comparison on smaller screens.</p>
          </figure>
        );
      case 'faq':
        return (
          <section key={index} className="journal-faq" aria-labelledby={`faq-heading-${index}`}>
            <div className="journal-faq__intro">
              <span>People also ask</span>
              <h2 id={`faq-heading-${index}`}>Questions, answered plainly</h2>
            </div>
            <div>
              {block.content.map((item, itemIndex) => (
                <details key={item.question} className="journal-faq__item" open={itemIndex === 0}>
                  <summary>{item.question}<span aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        );
      case 'sources':
        return (
          <section key={index} className="journal-sources" aria-labelledby={`sources-${index}`}>
            <div>
              <span>Source ledger</span>
              <h2 id={`sources-${index}`}>Sources and further reading</h2>
              <p>Primary documentation is preferred. Product features and prices can change; verify details before deciding.</p>
            </div>
            <ol>
              {block.content.map((entry) => {
                const separator = entry.indexOf('|');
                const label = separator >= 0 ? entry.slice(0, separator) : entry;
                const url = separator >= 0 ? entry.slice(separator + 1) : entry;
                return (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noreferrer">
                      <span>{label}</span><ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      case 'cta': {
        const ctaProduct = products.find((item) => item.id === block.ctaAppId);
        if (!ctaProduct) return null;
        const isAvailable = ctaProduct.releaseStatus === 'app-store' && Boolean(ctaProduct.appStoreUrl);
        return (
          <section key={index} className="journal-cta">
            <div className="journal-cta__icon">
              {React.createElement(ctaProduct.icon, { size: 32, 'aria-hidden': true })}
            </div>
            <div className="journal-cta__copy">
              <span>{getProductReleaseLabel(ctaProduct)}</span>
              <h2>Meet {ctaProduct.name}</h2>
              <p>{block.content}</p>
            </div>
            {isAvailable ? (
              <a href={ctaProduct.appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">
                <Download size={17} aria-hidden="true" /> App Store
              </a>
            ) : (
              <Link to={`/apps/${ctaProduct.id}`} className="button button--primary">
                Explore the app <ArrowRight size={17} aria-hidden="true" />
              </Link>
            )}
          </section>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="journal-article">
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        ogType="article"
        ogImage={post.heroImageUrl || 'https://obsidianridgelabs.com/blog-og.png'}
        ogImageAlt="Obsidian Ridge Labs Journal: evidence-led guides to private, on-device AI"
        keywords={post.tags.map((tag) => tag.replace('#', '').replaceAll('-', ' '))}
        article={{
          publishedTime: post.date.replace(/\./g, '-'),
          modifiedTime: post.modified?.replace(/\./g, '-'),
          tags: post.tags.map((tag) => tag.replace('#', '')),
          section: post.category,
        }}
        jsonLd={structuredData}
      />

      <header className="journal-hero">
        <div className="journal-hero__glow" aria-hidden="true" />
        <div className="section-frame journal-hero__inner">
          <Link to="/blog" className="journal-back"><ArrowLeft size={16} aria-hidden="true" /> Journal index</Link>
          <div className="journal-hero__eyebrow">
            <span>{isGrowthPost ? 'growth' : post.contentType}</span>
            {product && <Link to={`/apps/${product.id}`}>{product.name}</Link>}
            <span>{post.readTime.replace(' READ', '').toLowerCase()}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="journal-hero__dek">{post.excerpt}</p>
          <div className="journal-hero__meta">
            <span><Calendar size={16} aria-hidden="true" /> Published {formatDate(post.date)}</span>
            {post.modified && <span><Clock size={16} aria-hidden="true" /> Reviewed {formatDate(post.modified)}</span>}
            <span>{isGrowthPost ? 'Published with BabyLoveGrowth' : 'By Obsidian Ridge Labs Editorial'}</span>
          </div>
          {post.searchIntent && !isGrowthPost && (
            <div className="journal-query">
              <span>Question this guide answers</span>
              <p>{post.searchIntent}</p>
            </div>
          )}
        </div>
      </header>

      <div className="section-frame journal-layout">
        <aside className="journal-rail journal-rail--left" aria-label="Article controls and contents">
          <div className="journal-actions">
            <button type="button" onClick={toggleBookmark} aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this article'} aria-pressed={bookmarked}>
              <Bookmark size={19} fill={bookmarked ? 'currentColor' : 'none'} aria-hidden="true" />
            </button>
            <button type="button" onClick={sharePost} aria-label="Share this article"><Share2 size={19} aria-hidden="true" /></button>
            <span aria-live="polite">{shareStatus}</span>
          </div>
          {tableOfContents.length > 1 && (
            <nav className="journal-toc" aria-label="On this page">
              <span>On this page</span>
              {tableOfContents.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
            </nav>
          )}
        </aside>

        <main>
          <article className="journal-prose">
            {post.keyTakeaways.length > 0 && (
              <section className="journal-takeaways" aria-labelledby="takeaways-heading">
                <div>
                  <span>Read this first</span>
                  <h2 id="takeaways-heading">Key takeaways</h2>
                </div>
                <ul>
                  {post.keyTakeaways.map((takeaway) => <li key={takeaway}><Check size={17} aria-hidden="true" />{takeaway}</li>)}
                </ul>
              </section>
            )}

            {!isGrowthPost && (post.contentType === 'comparison' || post.contentType === 'listicle') && (
              <aside className="journal-method">
                <strong>How this guide was built</strong>
                <p>We compared current official product pages, documentation, privacy policies, and pricing pages against the implementation facts available for our own product. This is an editorial comparison, not paid placement or a claim of independent hands-on testing. Numbering is for navigation, not a test score. Recheck linked sources because products change.</p>
              </aside>
            )}

            {post.listItems?.length ? (
              <nav className="journal-shortlist" aria-label="Products in this guide">
                <span>The shortlist</span>
                <ol>
                  {post.listItems.map((item, index) => (
                    <li key={item.name} id={`item-${index + 1}`}>
                      <b>{String(index + 1).padStart(2, '0')}</b>
                      <div><strong>{item.name}</strong><p>{item.description}</p></div>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            {post.htmlContent ? (
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
            ) : (
              post.blocks.map(renderBlock)
            )}

            <footer className="journal-byline">
              <div className="site-wordmark__mark" aria-hidden="true"><i /><i /><i /></div>
              <div>
                <strong>{isGrowthPost ? 'BabyLoveGrowth article' : 'Obsidian Ridge Labs Editorial'}</strong>
                <p>
                  {isGrowthPost
                    ? 'This article was published through BabyLoveGrowth and synced onto the Obsidian Ridge Labs journal at build time.'
                    : 'We write from product documentation, implementation evidence, and clearly labeled limitations. No rankings are purchased.'}
                </p>
              </div>
            </footer>
          </article>
        </main>

        <aside className="journal-rail journal-rail--right">
          <section>
            <span className="journal-rail__label">Continue researching</span>
            <div className="journal-related">
              {relatedPosts.map((related) => (
                <Link key={related.id} to={`/blog/${related.id}`}>
                  <span>{related.contentType}</span>
                  <h2>{related.title}</h2>
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
          {product && (
            <Link className="journal-product-link" to={`/apps/${product.id}`}>
              <span>Product profile</span>
              <strong>{product.name}</strong>
              <p>{product.tagline}</p>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          )}
        </aside>
      </div>

      <section className="section-frame journal-next" aria-labelledby="related-reading-heading">
        <div className="section-index"><span>Related reading</span><span>{relatedPosts.length} next steps</span></div>
        <h2 id="related-reading-heading">Keep the question open.</h2>
        <div className="journal-next__grid">
          {relatedPosts.slice(0, 3).map((related, index) => (
            <Link key={related.id} to={`/blog/${related.id}`}>
              <span>{String(index + 1).padStart(2, '0')} / {related.contentType}</span>
              <h3>{related.title}</h3>
              <p>{related.excerpt}</p>
              <span className="text-link">Read the guide <ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
