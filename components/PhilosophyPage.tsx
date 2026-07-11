import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductReleaseLabel, products } from '../data/products';
import { philosophyFaqs } from '../data/faqs';
import SEO, { buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';
import AxiomScroller from './AxiomScroller';
import MotionReveal from './home/MotionReveal';

const philosophyProductCopy: Record<string, string> = {
  echochamber: 'Turn conversations into searchable notes without uploading audio to Obsidian Ridge Labs.',
  vault: 'Make financial history useful locally, with optional Plaid sync when you choose it.',
  molehill: 'Designed around private, on-device task breakdown that turns overwhelming work into one next step.',
  cove: 'Reflect on writing and moods through a local journal whose current production store stays on the iPhone.',
  wove: 'Catalog clothes and compose outfits locally, with optional WeatherKit context stated plainly.',
  mettle: 'Build and adapt strength programs with engine-owned prescriptions and on-device explanations.',
  memora: 'Turn personal study material into reviewed flashcards and schedule recall without a developer server.',
  trove: 'Document belongings, warranties, and evidence in a private inventory designed around local capture.',
  kith: 'Remember and reach out with a gentle cadence model that keeps relationship context close.',
};

const productOrder = ['echochamber', 'vault', 'molehill', 'cove', 'wove', 'mettle', 'memora', 'trove', 'kith'];

const getStatus = (product: (typeof products)[number]) => {
  const label = getProductReleaseLabel(product);
  return label === 'Available on the App Store' ? 'Available' : label;
};

const PhilosophyPage: React.FC = () => {
  const orderedProducts = productOrder
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  const principleList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/philosophy#principles`,
    name: 'Obsidian Ridge Labs local-first software principles',
    numberOfItems: 4,
    itemListElement: [
      ['Data has gravity', 'Core processing should happen where private data is created whenever the hardware can do the work.'],
      ['Trust should be inspectable', 'Data flows should be documented, permissions should appear in context, and source should be available where practical.'],
      ['Offline should be excellent', 'Important work should continue without the network after required setup.'],
      ['Memory should be deliberate', 'Retention and deletion should be understandable and under user control.'],
    ].map(([name, description], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@type': 'DefinedTerm', name, description },
    })),
  };

  return (
    <div className="philosophy-page">
      <SEO
        title="Our Philosophy: Local-First AI by Design"
        description="Why we build private, offline-first AI apps whose core intelligence runs on Apple devices, with every optional connection explained before use."
        keywords={['on-device AI privacy', 'local-first AI', 'offline AI apps', 'private AI for iPhone', 'cloud AI privacy']}
        jsonLd={[
          buildBreadcrumbs([
            { name: 'Home', url: '/' },
            { name: 'Philosophy', url: '/philosophy' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': `${SITE_URL}/philosophy#webpage`,
            name: 'Our Philosophy: Local-First AI by Design',
            description: 'Why Obsidian Ridge Labs minimizes data movement, makes core workflows offline-ready, and documents optional connections.',
            url: `${SITE_URL}/philosophy`,
            mainEntity: { '@id': `${SITE_URL}/#organization` },
          },
          principleList,
          buildFAQSchema(philosophyFaqs),
        ]}
      />

      <header className="philosophy-hero">
        <div className="philosophy-hero__echo" aria-hidden="true">
          <span>SILENCE THE CLOUD · SILENCE THE CLOUD ·</span>
          <span>SILENCE THE CLOUD · SILENCE THE CLOUD ·</span>
        </div>
        <div className="philosophy-hero__ridge" aria-hidden="true"><i /><i /><i /><i /><i /></div>

        <div className="section-frame philosophy-hero__frame">
          <div className="philosophy-hero__meta">
            <span>A manifesto for local intelligence</span>
            <span>Obsidian Ridge Labs · 2026</span>
          </div>

          <div className="philosophy-hero__copy">
            <h1><span>Silence</span><span>the <em>cloud.</em></span></h1>
            <div className="philosophy-hero__lead">
              <p>
                The cloud made software everywhere. It also made private life travel farther
                than it should. We believe personal AI should move less data, explain every
                connection, and remain useful when the network disappears.
              </p>
              <a href="#principles" className="text-link">
                Read the four principles <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <p className="philosophy-hero__coda">
            That belief shapes every app we make.
          </p>
        </div>
      </header>

      <section className="philosophy-premise" aria-labelledby="philosophy-premise-title">
        <div className="section-frame">
          <div className="section-index section-index--dark"><span>01 / The premise</span><span>A shorter path to trust</span></div>
          <div className="philosophy-premise__intro">
            <MotionReveal>
              <p className="section-kicker section-kicker--dark">The actual problem</p>
              <h2 id="philosophy-premise-title">When intelligence is remote, privacy becomes a promise.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                Cloud AI can be useful. But for personal work, every upload adds another copy,
                another dependency, and another system to trust. Local processing changes the
                default: the data can stay where it began.
              </p>
            </MotionReveal>
          </div>

          <div className="processing-paths">
            <MotionReveal className="processing-path processing-path--cloud">
              <div><span>Cloud-first path</span><small>More systems must be trusted</small></div>
              <ol aria-label="Cloud-first processing path">
                <li>Your input</li><li>Network</li><li>Remote infrastructure</li><li>Result</li>
              </ol>
            </MotionReveal>
            <MotionReveal className="processing-path processing-path--local" delay={0.08}>
              <div><span>Local-first path</span><small>A boundary you can understand</small></div>
              <ol aria-label="Local-first processing path">
                <li>Your input</li><li>Apple silicon</li><li>Result</li>
              </ol>
            </MotionReveal>
          </div>
          <p className="processing-paths__caption">Fewer transfers. Fewer dependencies. A clearer boundary.</p>
        </div>
      </section>

      <AxiomScroller />

      <section className="philosophy-path" aria-labelledby="philosophy-path-title">
        <div className="section-frame">
          <div className="section-index"><span>03 / The shorter path</span><span>Useful intelligence, close to the source</span></div>
          <div className="philosophy-path__intro">
            <MotionReveal>
              <p className="section-kicker">Local, where it matters</p>
              <h2 id="philosophy-path-title">Your input.<br />Apple silicon.<br /><em>Your result.</em></h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                For supported features, app-bundled models and Apple frameworks do the work on
                the device in your hands. That can mean lower latency, offline resilience, and
                less data movement.
              </p>
            </MotionReveal>
          </div>
          <div className="philosophy-path__flow" aria-label="Local processing path">
            <div><span>01</span><strong>Private input</strong><small>Audio · writing · records</small></div>
            <i aria-hidden="true" />
            <div><span>02</span><strong>Local intelligence</strong><small>Apple silicon</small></div>
            <i aria-hidden="true" />
            <div><span>03</span><strong>Useful result</strong><small>Ready where you are</small></div>
          </div>
          <dl className="philosophy-path__facts">
            <div><dt>Core processing</dt><dd>Designed for the device</dd></div>
            <div><dt>Core experience</dt><dd>Offline-ready after setup</dd></div>
            <div><dt>Advertising profiles</dt><dd>None</dd></div>
          </dl>
        </div>
      </section>

      <section className="honest-boundaries" aria-labelledby="honest-boundaries-title">
        <div className="section-frame">
          <div className="section-index section-index--dark"><span>04 / Honest boundaries</span><span>No purity theater</span></div>
          <div className="honest-boundaries__intro">
            <MotionReveal>
              <p className="section-kicker section-kicker--dark">No vague promises</p>
              <h2 id="honest-boundaries-title">Local-first is a boundary we explain—not a purity claim.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                Some optional features need a connection: model downloads, App Store purchase
                verification, encrypted iCloud sync, or Plaid bank sync when you choose it. We
                identify those moments before they happen and document what changes.
              </p>
              <Link to="/privacy" className="text-link text-link--dark">Read the privacy model <ArrowUpRight size={18} /></Link>
            </MotionReveal>
          </div>
          <dl className="honest-boundaries__rows">
            <div><dt>Core processing</dt><dd>Designed to remain on-device</dd><dd className="honest-boundaries__status">Default</dd></div>
            <div><dt>Optional services</dt><dd>Activated by your choice</dd><dd className="honest-boundaries__status">Disclosed</dd></div>
            <div><dt>Diagnostics</dt><dd>Where offered, opt-in and off by default</dd><dd className="honest-boundaries__status">Controlled</dd></div>
          </dl>
        </div>
      </section>

      <section className="philosophy-proof" aria-labelledby="philosophy-proof-title">
        <div className="section-frame">
          <div className="section-index"><span>05 / Proof</span><span>Trust, made inspectable</span></div>
          <div className="philosophy-proof__intro">
            <MotionReveal>
              <p className="section-kicker">Proof, not posture</p>
              <h2 id="philosophy-proof-title">Trust should survive inspection.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>Read the policy. Browse the product documentation. Review public source where it is available.</p>
            </MotionReveal>
          </div>
          <div className="philosophy-proof__links">
            <Link to="/privacy"><span>01</span><strong>Privacy model</strong><small>Read the boundary <ArrowUpRight /></small></Link>
            <Link to="/help"><span>02</span><strong>Product documentation</strong><small>Browse the guides <ArrowUpRight /></small></Link>
            <a href="https://github.com/amotor-AM/obsidian-ridge-labs" target="_blank" rel="noreferrer"><span>03</span><strong>Website source</strong><small>Inspect this project <ArrowUpRight /></small></a>
          </div>
        </div>
      </section>

      <section className="philosophy-products" aria-labelledby="philosophy-products-title">
        <div className="section-frame">
          <div className="section-index"><span>06 / In practice</span><span>One constraint, {products.length} tools</span></div>
          <div className="philosophy-products__intro">
            <p className="section-kicker">Philosophy in action</p>
            <h2 id="philosophy-products-title">Different tools.<br /><em>The same design constraint.</em></h2>
          </div>
          <div className="philosophy-products__list">
            {orderedProducts.map((product, index) => (
              <MotionReveal key={product.id} amount={0.2}>
                <Link to={`/apps/${product.id}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{product.name}</h3><p>{philosophyProductCopy[product.id]}</p></div>
                  <small>{getStatus(product)}</small>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-faq" aria-labelledby="philosophy-faq-title">
        <div className="section-frame">
          <div className="section-index"><span>07 / Straight answers</span><span>Where the boundary actually sits</span></div>
          <div className="philosophy-faq__grid">
            <div>
              <p className="section-kicker">Questions people ask about private AI</p>
              <h2 id="philosophy-faq-title">The nuanced answers matter.</h2>
              <p>
                “On-device” and “private” are useful only when the boundary is specific. These are
                the questions we think every AI product should answer clearly.
              </p>
            </div>
            <div className="philosophy-faq__list">
              {philosophyFaqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<i /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
              <a className="philosophy-faq__source" href="https://www.apple.com/privacy/features/" target="_blank" rel="noreferrer">
                Platform reference: Apple Privacy <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-reading" aria-labelledby="philosophy-reading-title">
        <div className="section-frame">
          <div className="section-index"><span>08 / Further reading</span><span>The thinking behind the work</span></div>
          <h2 id="philosophy-reading-title">Go deeper.</h2>
          <div className="philosophy-reading__links">
            <Link to="/blog/apple-ecosystem-privacy"><span>Apple craft</span><strong>Why we build exclusively for Apple</strong><ArrowRight /></Link>
            <Link to="/blog/finance-app-red-flags"><span>Personal finance</span><strong>The invisible cost of free finance apps</strong><ArrowRight /></Link>
            <Link to="/blog/offline-ai-revolution"><span>Local intelligence</span><strong>Why offline AI changes the speed equation</strong><ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="philosophy-close" aria-labelledby="philosophy-close-title">
        <div className="section-frame">
          <p className="section-kicker section-kicker--dark">Our standard</p>
          <h2 id="philosophy-close-title">Move less data.<br />Explain every connection.<br /><em>Make offline excellent.</em></h2>
          <p>That is how privacy becomes a property of the product instead of a promise around it.</p>
          <div>
            <Link to="/download" className="button button--dark">Explore the apps <ArrowRight size={18} /></Link>
            <Link to="/privacy" className="text-link text-link--dark">Read the privacy model <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyPage;
