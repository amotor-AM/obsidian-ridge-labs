import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Globe2, LockKeyhole, MoveUpRight, Sparkles } from 'lucide-react';
import { collection, collectionAvailability, collectionJobs } from '../../data/collection';
import { products } from '../../data/products';
import { productStories } from '../../data/product-stories';
import type { Product } from '../../types';
import type { FAQItem } from '../../data/faqs';
import OrbitScene from './OrbitScene';
import { homeFaqs } from '../../data/faqs';

const colors = [
  '#d9c7ff', '#ffceaa', '#b5dbed', '#e4f2a7', '#ffc8d6', '#c1e9cf',
  '#c4d4fb', '#f9d68e', '#d6cfef', '#c2ebec', '#f3c5a8',
];
const cardNumbers = Object.fromEntries(collection.map((app, i) => [app.id, String(i + 1).padStart(2, '0')]));
const stageColors: Record<string, string> = {
  echochamber: '#e9c7f9', memora: '#c7dbff', mettle: '#f6b7a8',
  vault: '#b8e7cb', molehill: '#f8d9a1', cove: '#d7c9fc',
  wove: '#fed5be', trove: '#cde0ef', kith: '#f6c5d2',
  mise: '#dfecab', mile: '#c7cffe',
};
const categories: Record<string, string> = {
  echochamber: 'Words / Memory', memora: 'Learning / Recall', mettle: 'Body / Progress',
  vault: 'Money / Clarity', molehill: 'Focus / Momentum', cove: 'Reflection / Self',
  wove: 'Style / Expression', trove: 'Things / Belonging', kith: 'People / Connection',
  mise: 'Food / Ritual', mile: 'Movement / Records',
};
const imagesFor = (app: Product, file?: string) => '/images/' + app.id + '/' + (file || app.screenshots?.[0]?.file || 'home') + '-960.webp';
const isLive = (app: Product) => app.releaseStatus === 'app-store';

const Eyebrow: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light }) =>
  <span className={'kin-eyebrow' + (light ? ' kin-eyebrow--light' : '')}><span className="kin-eyebrow__asterisk" aria-hidden="true">✳</span>{children}</span>;

const Status: React.FC<{ app: Product }> = ({ app }) => (
  <span className={'kin-status ' + (isLive(app) ? 'kin-status--live' : 'kin-status--soon')}>
    <i aria-hidden="true" />{isLive(app) ? 'Available now' : 'In development'}
  </span>
);

export const AppCard: React.FC<{ app: Product; index?: number; priority?: boolean }> = ({ app, index, priority = false }) => {
  const screen = app.screenshots?.[0];
  const color = colors[(index ?? collection.indexOf(app)) % colors.length];
  return (
    <Link className="kin-app-card" to={'/apps/' + app.id}
      style={{ '--kin-tile': color } as React.CSSProperties}
      aria-label={'Explore ' + app.name + ' - ' + (isLive(app) ? 'available now' : 'in development')}>
      <div className="kin-app-card__head">
        <span className="kin-app-card__number">{cardNumbers[app.id]}</span>
        <span className="kin-app-card__category">{categories[app.id] || app.category}</span>
        <ArrowUpRight size={20} aria-hidden="true" />
      </div>
      <div className="kin-app-card__art" aria-hidden="true">
        <span className="kin-app-card__halo" />
        {screen ? <img src={imagesFor(app)} width="441" height="960" loading={priority ? 'eager' : 'lazy'} decoding="async"
          alt="" fetchPriority={priority ? 'high' : undefined} /> : <span className="kin-app-card__fallback"><app.icon size={76} strokeWidth={1} /></span>}
      </div>
      <div className="kin-app-card__bottom">
        <div><h3>{app.name}</h3><p>{collectionJobs[app.id] || app.description}</p></div>
        <span className="kin-card-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
      </div>
      <Status app={app} />
    </Link>
  );
};

export const CollectionGrid: React.FC<{ showFilter?: boolean }> = ({ showFilter = false }) => {
  const [filter, setFilter] = useState<'all' | 'live' | 'soon'>('all');
  const visible = useMemo(() =>
    collection.filter(app => filter === 'all' || (filter === 'live' ? isLive(app) : !isLive(app))), [filter]);
  return (
    <>
      {showFilter && <div className="kin-filters" aria-label="Filter applications">
        {([
          ['all', 'Every app', collection.length],
          ['live', 'Available now', collection.filter(isLive).length],
          ['soon', 'In development', collection.filter(a => !isLive(a)).length],
        ] as const).map(([key, label, count]) =>
          <button type="button" key={key} className={filter === key ? 'is-active' : ''} aria-pressed={filter === key}
            onClick={() => setFilter(key)}>{label}<sup>{count}</sup></button>
        )}
      </div>}
      <div className="kin-catalogue">
        {visible.map((app, index) => <AppCard key={app.id} app={app} index={collection.indexOf(app)} priority={false} />)}
      </div>
      <p className="kin-collection-note">Screens are real product previews with example content. Availability is shown for each app.</p>
    </>
  );
};

export const WorldHome: React.FC = () => {
  const [motionEnabled, setMotionEnabled] = useState(true);
  return (
    <div className="kin-page kin-home">
      <section className="kin-hero" aria-labelledby="hero-heading">
        <div className="kin-hero__grid" aria-hidden="true" />
        <div className="kin-hero__topline"><Eyebrow>Independent software studio / Las Vegas, NV</Eyebrow><span>EST. 2024 - STILL HUMAN.</span></div>
        <div className="kin-hero__layout">
          <div className="kin-hero__copy">
            <p className="kin-kicker"><span className="kin-kicker__dot" /> 11 worlds. One point of view.</p>
            <h1 id="hero-heading">YOUR LIFE<br />IS NOT A<br /><em>DATASET<span className="kin-period">.</span></em></h1>
            <p className="kin-hero__lead">Beautifully capable, quietly personal apps. Made for the life you actually live, with intelligence that stays close.</p>
            <div className="kin-actions">
              <Link className="kin-button kin-button--dark" to="/download">Explore the collection <ArrowUpRight size={20} aria-hidden="true" /></Link>
              <Link className="kin-text-link" to="/philosophy">Why we build this way <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="kin-hero__visual">
            <div className="kin-hero__scene"><OrbitScene active={motionEnabled} /></div>
            <span className="kin-visual-mark kin-visual-mark--top">ON / DEVICE / INTELLIGENCE</span>
            <span className="kin-visual-mark kin-visual-mark--bottom">FIG. 001 - THE INNER UNIVERSE</span>
            <div className="kin-floating-card kin-floating-card--a" aria-hidden="true"><span>01 /</span><strong>Think freely.</strong><small>Nothing to prove.</small></div>
            <div className="kin-floating-card kin-floating-card--b" aria-hidden="true"><span>11 /</span><strong>Live fully.</strong><small>Everything to keep.</small></div>
            <button className="kin-motion-toggle" type="button" onClick={() => setMotionEnabled(v => !v)}
              aria-label={motionEnabled ? 'Pause animated sculpture' : 'Resume animated sculpture'}>
              <span aria-hidden="true">{motionEnabled ? 'Ⅱ' : '▶'}</span>{motionEnabled ? 'Pause motion' : 'Resume motion'}
            </button>
          </div>
        </div>
        <div className="kin-hero__bottom"><span>PRIVATE BY ARCHITECTURE. NOT BY PROMISE.</span><a href="#collection">SCROLL TO EXPLORE <ArrowDown size={16} aria-hidden="true" /></a><span>01 / 04</span></div>
      </section>

      <section className="kin-intro" aria-labelledby="intro-heading">
        <div className="kin-intro__label"><Eyebrow>Small apps. Big feelings.</Eyebrow><span>01 - THE IDEA</span></div>
        <div><h2 id="intro-heading">TECHNOLOGY SHOULD FEEL LIKE <em>AN EXTENSION OF YOU.</em><span className="kin-star" aria-hidden="true">✳</span></h2>
          <div className="kin-intro__footer"><p>Not an audience. Not a data source. Just tools that make your day a little more yours.</p><span className="kin-scribble">a different kind of software company.</span></div>
        </div>
      </section>

      <section id="collection" className="kin-collection-section" aria-labelledby="collection-heading">
        <div className="kin-section-head">
          <div><Eyebrow>The entire collection / 001-011</Eyebrow><h2 id="collection-heading">A UNIVERSE<br />OF <em>USEFUL.</em></h2></div>
          <div className="kin-section-head__side"><p>Eleven independent little worlds. Each one built around something real. None of them need to know the rest of your life.</p><Link to="/download" className="kin-round-link" aria-label="View the complete collection"><ArrowUpRight size={30} /></Link></div>
        </div>
        <CollectionGrid />
        <div className="kin-catalogue-footer"><span>THAT'S EVERY APP. NOT JUST THE HEADLINERS.</span><Link to="/download">Explore all 11 worlds <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </section>

      <section className="kin-feature" aria-labelledby="feature-heading">
        <div className="kin-feature__copy"><Eyebrow>Proof of possibility / Echo Chamber</Eyebrow>
          <h2 id="feature-heading">GOOD IDEAS<br />DESERVE TO<br /><em>STAY YOURS.</em></h2>
          <p>Meet Echo Chamber. Capture conversations, find the moment that matters, and turn your own words into useful notes - with the intelligence running on your device.</p>
          <Link to="/apps/echochamber" className="kin-button kin-button--light">Discover Echo Chamber <MoveUpRight size={19} aria-hidden="true" /></Link>
          <div className="kin-feature__footer"><span>REAL APP. REAL UTILITY.</span><span>AVAILABLE ON THE APP STORE</span></div>
        </div>
        <div className="kin-feature__art" aria-label="Echo Chamber app previews">
          <div className="kin-feature__ring" aria-hidden="true" />
          <img className="kin-feature__phone kin-feature__phone--back" src="/images/echochamber/ai-chat-960.webp" alt="Echo Chamber on-device answers preview" width="960" height="1707" loading="lazy" decoding="async" />
          <img className="kin-feature__phone kin-feature__phone--front" src="/images/echochamber/transcription-details-960.webp" alt="Echo Chamber transcription and playback screen" width="960" height="1707" loading="lazy" decoding="async" />
          <span>RECORD / REMEMBER / RECLAIM</span>
        </div>
      </section>

      <section className="kin-manifesto" aria-labelledby="manifesto-heading">
        <div className="kin-manifesto__top"><Eyebrow light>The point of view / 002</Eyebrow><span>NO HIDDEN AUDIENCE.</span></div>
        <div className="kin-manifesto__symbol" aria-hidden="true">✳</div>
        <h2 id="manifesto-heading">THE FUTURE OF<br />PERSONAL TECH<br />IS <em>PERSONAL.</em></h2>
        <div className="kin-manifesto__bottom"><p>Local intelligence. Clear boundaries. Real ownership. We think the smartest thing your software can do is know when to mind its own business.</p>
          <Link className="kin-button kin-button--outline" to="/philosophy">Read our philosophy <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </section>

      <section className="kin-faq-section"><div><Eyebrow>Questions, answered</Eyebrow><h2>THE GOOD<br />TO KNOW.</h2></div><div className="kin-faq-list">{homeFaqs.map((faq,i) => <details key={faq.question}><summary><span>{String(i+1).padStart(2,"0")}</span>{faq.question}<span className="kin-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="kin-outro" aria-labelledby="outro-heading"><span>OBSIDIAN RIDGE LABS - INDEPENDENT BY DESIGN</span>
        <h2 id="outro-heading">MORE YOU.<br /><em>LESS CLOUD.</em></h2>
        <Link className="kin-button kin-button--dark" to="/download">Find your next favorite app <ArrowUpRight size={19} aria-hidden="true" /></Link>
      </section>
    </div>
  );
};

export const WorldCollection: React.FC<{ faqs?: FAQItem[] }> = ({ faqs = [] }) => (
  <div className="kin-page kin-collection-page">
    <header className="kin-subhero"><Eyebrow>Index / The entire collection</Eyebrow><span className="kin-subhero__counter">VOL. 01 / 11 APPLICATIONS</span>
      <h1>SMALL WORLDS.<br /><em>BIG POSSIBILITY.</em></h1><div className="kin-subhero__bottom"><p>Something to remember. Something to make. Something to change. Explore every little corner of our universe.</p><span>{collectionAvailability}</span></div>
    </header>
    <section className="kin-index-section" aria-label="All Obsidian Ridge Labs apps"><CollectionGrid showFilter /></section>
    <section className="kin-faq-section"><div><Eyebrow>Good to know</Eyebrow><h2>THE LITTLE<br />DETAILS.</h2></div>
      <div className="kin-faq-list">{faqs.map((faq, i) => <details key={faq.question}><summary><span>{String(i + 1).padStart(2,'0')}</span>{faq.question}<span className="kin-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
    </section>
  </div>
);

export const WorldProduct: React.FC<{ app: Product; faqs: FAQItem[] }> = ({ app, faqs }) => {
  const story = productStories[app.id];
  const [active, setActive] = useState(0);
  const screenshots = app.screenshots || [];
  const selected = screenshots[active] || screenshots[0];
  const palette = stageColors[app.id] || '#d4d0ff';
  return (
    <div className="kin-page kin-product" style={{ '--kin-stage': palette } as React.CSSProperties}>
      <div className="kin-product__breadcrumb"><Link to="/download">← THE COLLECTION</Link><span> / </span><span>{app.name.toUpperCase()}</span><Status app={app} /></div>
      <header className="kin-product__hero">
        <div className="kin-product__intro"><Eyebrow>{categories[app.id] || app.category}</Eyebrow><p className="kin-product__chapter">{cardNumbers[app.id]} / 11</p>
          <h1>{app.name.toUpperCase()}<span className="kin-product__asterisk" aria-hidden="true">✳</span></h1>
          <p className="kin-product__statement">{story?.title || app.tagline}</p>
          <p className="kin-product__description">{story?.intro || app.description}</p>
          <div className="kin-actions">{app.appStoreUrl && isLive(app)
            ? <a className="kin-button kin-button--dark" href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">Get {app.name} <ArrowUpRight size={18} aria-hidden="true" /></a>
            : <a href="#how-it-works" className="kin-button kin-button--dark">Explore the concept <ArrowDown size={18} aria-hidden="true" /></a>}
            <a className="kin-text-link" href="#requirements">The important details <ArrowRight size={18} aria-hidden="true" /></a></div>
          <div className="kin-product__spec-row"><span>{app.platforms?.join(' / ') || 'Apple devices'}</span><span>{isLive(app) ? 'LIVE ON THE APP STORE' : 'A WORK IN PROGRESS'}</span></div>
        </div>
        <div className="kin-product__stage"><div className="kin-product__disc" aria-hidden="true" />
          {selected && <img src={imagesFor(app, selected.file)} alt={app.name + ': ' + selected.title + '. ' + selected.caption}
            width={app.id === 'echochamber' ? 960 : 441} height={app.id === 'echochamber' ? 1707 : 960}
            decoding="async" fetchPriority="high" />}
          <div className="kin-product__screen-picker" role="group" aria-label={'Choose ' + app.name + ' screenshot'}>
            {screenshots.map((s,i) => <button key={s.file} type="button" onClick={() => setActive(i)} aria-pressed={active === i}>{String(i+1).padStart(2, '0')} <span>{s.title}</span></button>)}
          </div>
          <p className="kin-product__caption" aria-live="polite">{selected?.caption || 'Product preview'} · {isLive(app) ? 'Available now' : 'In development'}</p>
        </div>
      </header>
      <section id="how-it-works" className="kin-product__how"><div className="kin-product__how-heading"><Eyebrow>What it does / 01</Eyebrow><h2>{story?.mechanism.title || 'YOUR DAYS, A LITTLE EASIER.'}</h2><p>{story?.mechanism.intro || app.fullDescription}</p></div>
        <div className="kin-steps">{(story?.mechanism.steps || app.workflow.map(s => ({ title:s.title, body:s.description }))).map((step, i) =>
          <article key={step.title}><span>0{i+1}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
      </section>
      <section className="kin-product__benefits"><div><Eyebrow>Beyond the obvious / 02</Eyebrow><h2>MADE TO<br /><em>FEEL RIGHT.</em></h2></div><div className="kin-benefit-list">{(story?.benefits || app.features.map(f => ({ title:f.title, body:f.description }))).map((b,i) =>
        <article key={b.title}><span>✳ 0{i+1}</span><div><h3>{b.title}</h3><p>{b.body}</p></div></article>)}</div></section>
      <section id="requirements" className="kin-product__facts"><div><Eyebrow light>Transparency / 03</Eyebrow><h2>NO SMALL<br /><em>PRINT.</em></h2><p>Useful technology should tell you what it needs and where your information goes.</p></div>
        <div className="kin-product__fact-table">
          <div><span>01 / STATUS</span><p>{isLive(app) ? 'Available on the App Store' : 'In development - not yet available to install'}</p></div>
          <div><span>02 / HARDWARE</span><p>{story?.requirements || (app.platforms?.join(', ') || 'Supported Apple devices') + (app.minOS ? ', ' + app.minOS : '')}</p></div>
          <div><span>03 / PROCESSING</span><p>{story?.boundary.processing || 'Core AI is designed to process on your device. See the app documentation for feature-specific requirements.'}</p></div>
          <div><span>04 / STORAGE</span><p>{story?.boundary.storage || app.fullDescription}</p></div>
          <div><span>05 / CONNECTIONS</span><p>{story?.boundary.connections || 'Some setup, purchases, and optional Apple services require a connection. Check the product documentation for details.'}</p></div>
        </div>
      </section>
      {faqs.length > 0 && <section className="kin-faq-section"><div><Eyebrow>Still curious?</Eyebrow><h2>GOOD<br />QUESTIONS.</h2></div><div className="kin-faq-list">{faqs.map((faq,i) =>
        <details key={faq.question}><summary><span>{String(i+1).padStart(2,'0')}</span>{faq.question}<span className="kin-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>}
      <section className="kin-product__next"><Eyebrow>The world is bigger</Eyebrow><h2>ONE OF ELEVEN.<br /><em>FIND YOUR NEXT.</em></h2><Link to="/download" className="kin-button kin-button--dark">See the entire collection <ArrowUpRight size={20} aria-hidden="true" /></Link></section>
    </div>
  );
};

export const WorldPhilosophy: React.FC<{ questions: FAQItem[] }> = ({ questions }) => (
  <div className="kin-page kin-philosophy">
    <header className="kin-subhero kin-philosophy__hero"><Eyebrow>The point of view / 001</Eyebrow><h1>YOUR DIGITAL<br />LIFE IS <em>YOURS.</em></h1><p>That should not be a radical idea. We build as though it is the most important one.</p><span className="kin-philosophy__badge">A SMALL MANIFESTO FOR A BIG, CONNECTED WORLD.</span></header>
    <section className="kin-philosophy__statement"><Eyebrow>Our refusal</Eyebrow><h2>WE DON'T BELIEVE YOUR MOST PERSONAL MOMENTS SHOULD BE THE PRICE OF INTELLIGENCE.</h2><p>We think useful software can be beautifully designed, technically ambitious, and respectful of the person using it. Core intelligence lives on supported Apple hardware, and each app explains its storage and connections.</p></section>
    <section className="kin-philosophy__principles" id="principles"><Eyebrow>Four ideas. No compromises.</Eyebrow>{[
      ['01','Data has gravity.','Every network hop introduces another system and another set of rules. Keep core processing close.'],
      ['02','The cloud must earn its place.','Connections should solve a real need - and be named, not hidden.'],
      ['03','Offline is the test.','Once required models are set up, the essential work should keep working without a connection.'],
      ['04','Your data belongs to you.','Your notes, recordings, and records should answer to you, with clear export and deletion paths.'],
    ].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</section>
    <section className="kin-philosophy__test" id="boundary-check"><Eyebrow light>The boundary check</Eyebrow><h2>THREE<br />SIMPLE<br /><em>QUESTIONS.</em></h2><div className="kin-philosophy__answers">{questions.map((q,i) =>
      <details key={q.question}><summary><span>0{i+1}</span>{q.question}<span aria-hidden="true">+</span></summary><p>{q.answer}</p></details>)}</div></section>
    <section className="kin-outro"><span>NOT AN AUDIENCE. NOT A DATASET.</span><h2>JUST YOUR<br /><em>LIFE, AMPLIFIED.</em></h2><Link className="kin-button kin-button--dark" to="/download">Explore the collection <ArrowUpRight size={19} /></Link></section>
  </div>
);
