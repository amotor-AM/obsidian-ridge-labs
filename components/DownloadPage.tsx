import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getProductReleaseLabel, products } from '../data/products';
import { collectionFaqs } from '../data/faqs';
import SEO, { buildBreadcrumbs, buildCollectionPage, buildFAQSchema, SITE_URL } from './SEO';
import SiteFaq from './SiteFaq';
import CollectionDirectory from './CollectionDirectory';
import { collection, collectionAvailability, collectionDescription } from '../data/collection';
import '../styles/luminous-products.css';

const featured = [
  {
    id: 'echochamber',
    name: 'Echo Chamber',
    role: 'Find the words you came back for.',
    description: 'Echo Chamber transcribes recordings on your Apple device. Search the original words, turn a conversation into notes, or ask a question about what was said.',
    facts: [
      ['For', 'Supported iPhone, iPad, and Mac'],
      ['The work', 'Recording · searchable transcripts · notes'],
      ['Offer', 'Free download · optional Pro'],
    ],
  },
  {
    id: 'mettle',
    name: 'Mettle',
    role: 'Know what to lift next.',
    description: 'Mettle uses your recent sets to plan the next reps and weight. “Why this?” shows the progression rule and the training history behind the recommendation.',
    facts: [
      ['Built for', 'iPhone · Apple Watch workout remote'],
      ['Requires', 'iOS 26.1 · Apple Intelligence'],
      ['The work', 'Programming · set logging · progression'],
    ],
  },
  {
    id: 'memora',
    name: 'Memora',
    role: 'Learn from the notes you already have.',
    description: 'Turn notes, photos, and PDFs with selectable text into draft flashcards. Choose which to add, then study with a schedule that responds to your recall.',
    facts: [
      ['Built for', 'iOS 26 · Apple Intelligence-capable iPhone'],
      ['Bring', 'Notes · text-layer PDFs · photos'],
      ['Your choice', 'Select drafts · edit saved cards'],
    ],
  },
];

const DownloadPage: React.FC = () => {
  const breadcrumbs = buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'The collection', url: '/download' }]);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The Obsidian Ridge Labs collection',
    description: collectionDescription,
    numberOfItems: products.length,
    itemListElement: collection.map((app, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `${SITE_URL}/apps/${app.id}#software`,
        '@type': ['SoftwareApplication', 'MobileApplication'],
        name: app.name,
        url: `${SITE_URL}/apps/${app.id}`,
        description: app.description,
        creativeWorkStatus: app.releaseStatus === 'app-store' ? 'Released' : 'In development',
      },
    })),
  };

  return (
    <div className="collection-page trilogy-collection lp-collection">
      <SEO
        title="Private AI Apps for Apple Devices: The Collection"
        description={collectionDescription}
        keywords={['private AI apps for iPhone', 'offline AI apps', 'on-device AI app collection', 'local-first Apple apps', 'AI apps with no account']}
        jsonLd={[
          breadcrumbs,
          buildCollectionPage('The Obsidian Ridge Labs collection', collectionDescription, '/download'),
          buildFAQSchema(collectionFaqs, '/download'),
          itemList,
        ]}
      />

      <header className="lp-collection__hero section-frame">
        <p className="lp-eyebrow"><span className="lp-local-dot" /> The collection · Local by design.</p>
        <h1 data-reveal-words>Find your next everyday app.</h1>
        <p className="lp-collection__intro">
          For the things you want to remember, the plans you want to keep, and the work you want to make easier. Explore private AI apps built for Apple devices.
        </p>
        <div className="lp-collection__availability"><span>{collectionAvailability}</span></div>
        <a href="#all-apps" className="lp-link">Browse all apps <ArrowDown size={16} aria-hidden="true" /></a>
      </header>

      <section id="all-apps" className="lp-collection__directory section-frame" aria-labelledby="all-apps-title">
        <h2 id="all-apps-title">The full collection</h2>
        <p>See what each app does, where your data goes, and what you’ll need to run it. Every app’s current availability is shown below.</p>
        <CollectionDirectory />
      </section>
      <div className="lp-collection__spotlight section-frame"><h2>A closer look</h2><p>See how Echo Chamber, Mettle, and Memora work in these app previews.</p></div>
      <div className="lp-feature-grid section-frame">
        {featured.map(({ id, name, role, description, facts }) => {
          const app = products.find((item) => item.id === id)!;
          const Icon = app.icon;
          return (
            <section id={id} key={id} className={`lp-feature lp-feature--${id}`} aria-labelledby={`collection-${id}-title`}>
              <div className="lp-feature__copy">
                <div className="lp-feature__identity"><span className="lp-app-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><span className={`lp-status${app.releaseStatus === 'app-store' ? ' lp-status--released' : ''}`}>{getProductReleaseLabel(app)}</span></div>
                <h2 id={`collection-${id}-title`} data-reveal-words>{name}</h2>
                <p className="lp-feature__role">{role}</p>
                <p className="lp-feature__description">{description}</p>
                <div className="lp-actions">
                  <Link to={`/apps/${id}`} className="lp-button">Explore {name} <ArrowRight size={17} aria-hidden="true" /></Link>
                  {app.appStoreUrl ? <a href={app.appStoreUrl} className="lp-link" target="_blank" rel="noopener noreferrer">Get {name} <ArrowUpRight size={16} aria-hidden="true" /></a> : <Link to={`/apps/${id}#requirements`} className="lp-link">Check requirements <ArrowUpRight size={16} aria-hidden="true" /></Link>}
                </div>
              </div>
              <figure className={`lp-feature__preview lp-preview lp-preview--${id}`}>
                <div className="lp-screen-stage">
                  {app.screenshots?.map((shot, index) => (
                    <div key={shot.file} className={`lp-screen lp-screen--${index === 0 ? 'center' : index === 1 ? 'left' : 'right'}${id === 'echochamber' ? ' lp-screen--framed' : ' lp-screen--phone'}`}>
                      <img
                        src={`/images/${id}/${shot.file}-960.webp`}
                        srcSet={`/images/${id}/${shot.file}-480.webp ${id === 'echochamber' ? '480' : '220'}w, /images/${id}/${shot.file}-960.webp ${id === 'echochamber' ? '960' : '441'}w`}
                        sizes="(max-width: 600px) 44vw, (max-width: 1000px) 28vw, 260px"
                        alt={`${name}: ${shot.title.toLowerCase()}`}
                        width={id === 'echochamber' ? 960 : 441}
                        height={id === 'echochamber' ? 1707 : 960}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
                <figcaption>{id === 'echochamber' ? 'Record. Read the transcript. Ask about the conversation.' : 'Screens from the current build · In development'}</figcaption>
              </figure>
              <dl className="lp-feature__facts">
                {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
            </section>
          );
        })}
      </div>

      <section className="lp-questions section-frame" aria-labelledby="collection-faq-title">
        <div><p className="lp-eyebrow">Before you choose</p><h2 id="collection-faq-title" data-reveal-words>App availability and requirements</h2></div>
        <SiteFaq items={collectionFaqs} tone="dark" />
      </section>

    </div>
  );
};

export default DownloadPage;
