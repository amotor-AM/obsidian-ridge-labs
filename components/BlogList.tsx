import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Layers3 } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { products } from '../data/products';
import type { BlogContentType, BlogPost } from '../types';
import '../styles/journal-refinement.css';
import SEO, { buildBreadcrumbs, buildCollectionPage, ORGANIZATION_ID, SITE_URL } from './SEO';

type Filter = 'all' | BlogContentType;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'comparison', label: 'Head to head' },
  { id: 'listicle', label: 'Category guides' },
  { id: 'guide', label: 'How to' },
  { id: 'analysis', label: 'Explainers' },
];

const contentLabels: Record<BlogContentType, string> = { comparison: 'Comparison', listicle: 'App guide', guide: 'Practical guide', analysis: 'Explainer' };

const PostCard: React.FC<{ post: BlogPost; index?: number }> = ({ post, index }) => (
  <Link to={`/journal/${post.id}`} className="journal-card">
    <div className="journal-card__meta">
      <span>{contentLabels[post.contentType]}</span>
      <span>{post.readTime.replace(' READ', '')}</span>
    </div>
    {typeof index === 'number' && <span className="journal-card__index">{String(index + 1).padStart(2, '0')}</span>}
    <h3>{post.title}</h3>
    <p>{post.excerpt}</p>
    <div className="journal-card__foot">
      <span>Updated {post.modified || post.date}</span>
      <ArrowRight size={19} aria-hidden="true" />
    </div>
  </Link>
);

const BlogList: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const featured = blogPosts.find((post) => post.id === 'apple-ecosystem-privacy') || blogPosts[0];
  const growthPosts = blogPosts.filter((post) => post.source === 'babylovegrowth');
  const pillars = blogPosts.filter((post) => (
    !post.appId
    && post.source !== 'babylovegrowth'
    && post.id !== featured?.id
  ));
  const filteredPosts = useMemo(() => (
    filter === 'all' ? blogPosts : blogPosts.filter((post) => post.contentType === filter)
  ), [filter]);
  const productClusters = products.map((product) => ({
    product,
    posts: blogPosts.filter((post) => post.appId === product.id),
  })).filter((cluster) => cluster.posts.length);

  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Journal', url: '/journal' },
  ]);
  const collectionPage = buildCollectionPage(
    'The Obsidian Ridge Labs Journal',
    'App comparisons and practical guides to choosing private software for everyday work.',
    '/journal',
  );
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/journal#blog`,
    name: 'The Obsidian Ridge Labs Journal',
    description: 'App comparisons and practical guides to choosing private software for everyday work.',
    url: `${SITE_URL}/journal`,
    publisher: { '@id': ORGANIZATION_ID },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/journal/${post.id}`,
      datePublished: post.date.replace(/\./g, '-'),
      ...(post.modified ? { dateModified: post.modified.replace(/\./g, '-') } : {}),
    })),
  };
  const articleIndex = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/journal#article-index`,
    name: 'Obsidian Ridge Labs research and comparison guides',
    numberOfItems: blogPosts.length,
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: post.title,
      url: `${SITE_URL}/journal/${post.id}`,
    })),
  };

  return (
    <div className="journal-index-page">
      <SEO
        title="Private AI App Comparisons & Guides"
        description="Compare apps by the work you need to do: recording, studying, training, planning, and keeping personal records. Practical guides from Obsidian Ridge Labs."
        ogImage="https://obsidianridgelabs.com/blog-og.png"
        ogImageAlt="The Obsidian Ridge Labs Journal: app comparisons and practical guides"
        jsonLd={[breadcrumbs, collectionPage, blogSchema, articleIndex]}
      />

      <header className="journal-index-hero">
        <div className="section-frame">
          <div className="journal-index-hero__topline">
            <span>Obsidian Ridge Labs</span>
            <span>{blogPosts.length} articles</span>
          </div>
          <p className="section-kicker">The Obsidian Ridge Labs Journal</p>
          <h1>Find the app that fits the work.</h1>
          <p className="journal-index-hero__dek">
            A better way to keep a recording, study your notes, or plan the next workout.
            Our guides compare what the apps help you do, where they differ, and what
            happens to the information you put into them.
          </p>
          <ul className="journal-index-hero__facts">
            <li>Choosing an app</li>
            <li>Building for Apple</li>
            <li>Keeping work on-device</li>
          </ul>
        </div>
      </header>

      <div>
        {featured && (
          <section className="section-frame journal-feature" aria-labelledby="featured-heading">
            <div className="section-index"><span>Start here</span><span>01 / Foundation</span></div>
            <Link to={`/journal/${featured.id}`} className="journal-feature__card">
              <div className="journal-feature__signal" aria-hidden="true">
                <span>LOCAL</span><i /><i /><i />
              </div>
              <div className="journal-feature__copy">
                <span className="journal-feature__label"><BookOpen size={16} aria-hidden="true" /> Start here</span>
                <h2 id="featured-heading">{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div><span><Clock size={15} aria-hidden="true" /> {featured.readTime}</span><span className="text-link">Read the guide <ArrowRight size={15} aria-hidden="true" /></span></div>
              </div>
            </Link>
          </section>
        )}

        <section className="journal-library" aria-labelledby="library-heading">
          <div className="section-frame">
            <div className="section-index"><span>The articles</span><span>02 / Read</span></div>
            <div className="journal-library__heading">
              <div>
                <p className="section-kicker">Browse by app or subject</p>
                <h2 id="library-heading">Start with what you need to do.</h2>
              </div>
              <p>Compare a few options for the same job, or explore how on-device AI works before choosing an app.</p>
            </div>

            <div className="journal-filters" role="group" aria-label="Filter journal articles">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={filter === item.id ? 'is-active' : ''}
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                  <span>{item.id === 'all' ? blogPosts.length : blogPosts.filter((post) => post.contentType === item.id).length}</span>
                </button>
              ))}
            </div>

            {filter === 'all' ? (
              <div className="journal-clusters">
                {productClusters.map(({ product, posts }, clusterIndex) => (
                  <section
                    key={product.id}
                    className="journal-cluster"
                  >
                    <div className="journal-cluster__head">
                      <div className="journal-cluster__head-bar">
                        <span>{String(clusterIndex + 1).padStart(2, '0')}</span>
                        <Link to={`/apps/${product.id}`} aria-label={`Explore ${product.name}`}><ArrowRight size={19} aria-hidden="true" /></Link>
                      </div>
                      <div className="journal-cluster__icon">{React.createElement(product.icon, { size: 24, 'aria-hidden': true })}</div>
                      <div className="journal-cluster__copy">
                        <h3>{product.name}</h3>
                        <p>{product.tagline}</p>
                      </div>
                    </div>
                    <div className="journal-cluster__posts">
                      {posts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
                    </div>
                  </section>
                ))}
                {pillars.length > 0 && (
                  <section className="journal-cluster journal-cluster--foundation">
                    <div className="journal-cluster__head">
                      <div className="journal-cluster__head-bar">
                        <span>{String(productClusters.length + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="journal-cluster__icon"><Layers3 size={24} aria-hidden="true" /></div>
                      <div className="journal-cluster__copy">
                        <h3>Foundations</h3>
                        <p>The models, chips, and storage behind on-device AI.</p>
                      </div>
                    </div>
                    <div className="journal-cluster__posts">
                      {pillars.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
                    </div>
                  </section>
                )}
                {growthPosts.length > 0 && (
                  <section className="journal-cluster">
                    <div className="journal-cluster__head">
                      <div className="journal-cluster__head-bar">
                        <span>{String(productClusters.length + (pillars.length ? 2 : 1)).padStart(2, '0')}</span>
                      </div>
                      <div className="journal-cluster__icon"><Layers3 size={24} aria-hidden="true" /></div>
                      <div className="journal-cluster__copy">
                        <h3>More from the journal</h3>
                        <p>Further reading on private software.</p>
                      </div>
                    </div>
                    <div className="journal-cluster__posts">
                      {growthPosts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
                    </div>
                  </section>
                )}
              </div>
            ) : (
              <div className="journal-results" aria-live="polite">
                <p>{filteredPosts.length} {filteredPosts.length === 1 ? 'guide' : 'guides'} in this view</p>
                <div>{filteredPosts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}</div>
              </div>
            )}
          </div>
        </section>

        <section className="section-frame journal-standards" aria-labelledby="standards-heading">
          <div className="section-index"><span>The Obsidian Ridge Labs standard</span><span>03 / Why we build</span></div>
          <div className="journal-standards__grid">
            <h2 id="standards-heading">From the people building the apps.</h2>
            <div>
              <p>Obsidian Ridge Labs makes the ten apps featured in these comparisons. Echo Chamber is on the App Store; the other nine are in development. We explain their intended fit alongside established alternatives and link to the documentation behind each comparison.</p>
              <Link to="/philosophy" className="text-link">Read the standard <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogList;
