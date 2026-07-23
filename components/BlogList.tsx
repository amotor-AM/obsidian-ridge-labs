import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Check, Clock, Layers3, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { products } from '../data/products';
import type { BlogContentType, BlogPost } from '../types';
import SEO, { buildBreadcrumbs, buildCollectionPage, ORGANIZATION_ID, SITE_URL } from './SEO';

type Filter = 'all' | BlogContentType;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All research' },
  { id: 'comparison', label: 'Comparisons' },
  { id: 'listicle', label: 'Best-app guides' },
  { id: 'guide', label: 'How-to guides' },
  { id: 'analysis', label: 'Analysis' },
];

const PostCard: React.FC<{ post: BlogPost; index?: number }> = ({ post, index }) => (
  <Link to={`/journal/${post.id}`} className="journal-card">
    <div className="journal-card__meta">
      <span>{post.contentType}</span>
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
    'The Obsidian Ridge Journal',
    'Evidence-led comparisons and practical guides to private AI, offline software, transcription, personal finance, journaling, study, home inventory, fitness, wardrobe, relationships, and focused work.',
    '/journal',
  );
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/journal#blog`,
    name: 'The Obsidian Ridge Journal',
    description: 'Source-backed comparisons and guides to private, on-device AI applications.',
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
        description="Source-backed comparisons and practical guides to private, offline, and on-device AI apps for Apple devices, complete with limitations and primary sources."
        ogImage="https://obsidianridgelabs.com/blog-og.png"
        ogImageAlt="Obsidian Ridge Labs Journal: private AI comparisons and guides"
        jsonLd={[breadcrumbs, collectionPage, blogSchema, articleIndex]}
      />

      <header className="journal-index-hero">
        <div className="journal-index-hero__orb" aria-hidden="true" />
        <div className="section-frame">
          <div className="journal-index-hero__topline">
            <span><Sparkles size={16} aria-hidden="true" /> Research for private software decisions</span>
            <span>{blogPosts.length} source-backed guides · updated for 2026</span>
          </div>
          <div className="journal-index-hero__grid">
            <div>
              <p className="section-kicker">The Obsidian Ridge Journal</p>
              <h1>Privacy first.<br /><em>Evidence always.</em></h1>
            </div>
            <div className="journal-index-hero__intro">
              <p>See why Obsidian Ridge Labs builds each category around a shorter data path. Every guide compares real capabilities, cites primary sources, and makes the privacy tradeoff explicit.</p>
              <ul>
                <li><Check size={16} aria-hidden="true" /> Primary sources linked</li>
                <li><Check size={16} aria-hidden="true" /> Product-first privacy verdicts</li>
                <li><Check size={16} aria-hidden="true" /> Every release status clear</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        {featured && (
          <section className="section-frame journal-feature" aria-labelledby="featured-heading">
            <div className="section-index"><span>Start here</span><span>01 / Foundation</span></div>
            <Link to={`/journal/${featured.id}`} className="journal-feature__card">
              <div className="journal-feature__signal" aria-hidden="true">
                <span>LOCAL</span><i /><i /><i />
              </div>
              <div className="journal-feature__copy">
                <span className="journal-feature__label"><BookOpen size={16} aria-hidden="true" /> Essential guide</span>
                <h2 id="featured-heading">{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div><span><Clock size={15} aria-hidden="true" /> {featured.readTime}</span><span className="text-link">Read the guide <ArrowRight size={15} aria-hidden="true" /></span></div>
              </div>
            </Link>
          </section>
        )}

        <section className="journal-library" aria-labelledby="library-heading">
          <div className="section-frame">
            <div className="section-index"><span>Decision library</span><span>02 / Compare</span></div>
            <div className="journal-library__heading">
              <div>
                <p className="section-kicker">Research by intent</p>
                <h2 id="library-heading">See where private architecture changes the category.</h2>
              </div>
              <p>Every Obsidian Ridge app has a direct comparison and a broader buyer&apos;s guide built around privacy, capability, and the exact data path.</p>
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
                        <span>10</span>
                      </div>
                      <div className="journal-cluster__icon"><Layers3 size={24} aria-hidden="true" /></div>
                      <div className="journal-cluster__copy">
                        <h3>Foundations</h3>
                        <p>How local AI architecture actually works.</p>
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
                        <span>11</span>
                      </div>
                      <div className="journal-cluster__icon"><Sparkles size={24} aria-hidden="true" /></div>
                      <div className="journal-cluster__copy">
                        <h3>Growth</h3>
                        <p>Articles published through BabyLoveGrowth.</p>
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
          <div className="section-index"><span>Editorial standard</span><span>03 / Evidence</span></div>
          <div className="journal-standards__grid">
            <h2 id="standards-heading">A strong recommendation<br /><em>should survive inspection.</em></h2>
            <div>
              <p>We make the case for Obsidian Ridge Labs with architecture, product evidence, and a clear privacy advantage. We do not invent tests or call an unreleased product reviewed. Every recommendation states the release status and the tradeoff behind it.</p>
              <Link to="/philosophy" className="text-link">Read our product philosophy <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogList;
