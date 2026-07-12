import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductReleaseLabel, products } from '../data/products';
import { philosophyFaqs } from '../data/faqs';
import SEO, { buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';
import AxiomScroller from './AxiomScroller';
import MotionReveal from './home/MotionReveal';

const philosophyProductCopy: Record<string, string> = {
  echochamber: 'Record live or upload audio and video. Echo Chamber creates searchable transcripts, polished notes, and summaries on supported Apple hardware without uploading recordings to Obsidian Ridge Labs.',
  vault: 'Understand spending and forecast cash flow with a local-first finance app. Manual tracking stays available, and Plaid bank sync is optional.',
  molehill: 'Turn an overwhelming task or brain dump into one manageable next step with private, on-device help and no streak pressure.',
  cove: 'Write, reflect, and find patterns in a private journal whose current build stores entries locally and uses on-device intelligence.',
  wove: 'Build a visual closet and compose outfits with on-device Vision and styling. WeatherKit and private iCloud are optional, clearly named paths.',
  mettle: 'Build adaptive strength programs on iPhone with deterministic prescriptions, on-device explanations, and a reason behind every set.',
  memora: 'Turn notes, text-layer PDFs, and selected photos into editable flashcards on-device, then schedule recall with FSRS.',
  trove: 'Capture belongings, receipts, serials, warranties, and values in a local home inventory built for search, insurance preparation, and export.',
  kith: 'Remember what matters and reach out with more care using local relationship context and on-device writing help.',
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
      ['Data has gravity', 'Every transfer adds another network, processor, log, policy, and failure point. Core AI stays close to private data whenever supported Apple hardware can do the work.'],
      ['The cloud must earn its place', 'A connection should exist only when it delivers a capability the device cannot provide well on its own. Core work stays local, and optional services are named before they are used.'],
      ['Offline is the test', 'The network should add a specific capability, not control the core experience. Important work should continue after required setup.'],
      ['Memory belongs to you', 'Storage, export, retention, and deletion should be clear and controlled by the person who created the data.'],
    ].map(([name, description], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@type': 'DefinedTerm', name, description },
    })),
  };

  return (
    <div className="philosophy-page">
      <SEO
        title="Why We Build Private On-Device AI"
        description="Why Obsidian Ridge Labs builds private AI apps for Apple devices with on-device intelligence, offline-ready workflows, and clearly disclosed connections."
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
            name: 'Why We Build Private On-Device AI',
            description: 'Obsidian Ridge Labs builds private Apple apps with on-device intelligence, offline-ready workflows, and clearly disclosed optional connections.',
            url: `${SITE_URL}/philosophy`,
            mainEntity: { '@id': `${SITE_URL}/#organization` },
          },
          principleList,
          buildFAQSchema(philosophyFaqs),
        ]}
      />

      <header className="philosophy-hero">
        <div className="philosophy-hero__echo" aria-hidden="true">
          {Array.from({ length: 7 }, (_, index) => (
            <span key={index}>SILENCE THE CLOUD SILENCE THE CLOUD SILENCE THE CLOUD</span>
          ))}
        </div>
        <div className="philosophy-hero__ridge" aria-hidden="true"><i /><i /><i /><i /><i /></div>

        <div className="section-frame philosophy-hero__frame">
          <div className="philosophy-hero__meta">
            <span>Obsidian Ridge Labs privacy manifesto</span>
            <span>Las Vegas, Nevada · 2026</span>
          </div>

          <div className="philosophy-hero__copy">
            <h1><span>The <em>glass</em></span><span>house is</span><span>burning.</span></h1>
            <div className="philosophy-hero__lead">
              <p>
                We are living in a surveillance economy built at planetary scale. It did not arrive as
                a cage. It arrived as convenience. Conversations, finances, memories, habits, and
                relationships became the price. Convenience was the bait. Private life became the catch.
              </p>
              <a href="#principles" className="text-link">
                Read the countermeasures <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <p className="philosophy-hero__coda">
            Obsidian Ridge Labs is building the exit: powerful Apple apps with core intelligence on your device.
          </p>
        </div>
      </header>

      <section className="philosophy-premise" aria-labelledby="philosophy-premise-title">
        <div className="section-frame">
          <div className="section-index section-index--dark"><span>01 / Threat model</span><span>The convenience trap</span></div>
          <div className="philosophy-premise__intro">
            <MotionReveal>
              <p className="section-kicker section-kicker--dark">The panopticon</p>
              <h2 id="philosophy-premise-title">The cloud is someone else&apos;s computer. Your private life should not be its inventory.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                A remote AI workflow can create more copies, more logs, more retention questions,
                and more companies to trust. That may be a fair trade for some work. It should not
                be the default price of transcribing a meeting, understanding your finances,
                writing in a journal, or remembering someone you love.
              </p>
            </MotionReveal>
          </div>

          <div className="processing-paths">
            <MotionReveal className="processing-path processing-path--cloud">
              <div className="processing-path__header">
                <div><span>Cloud-first path</span><strong>Private data takes the long way around.</strong></div>
                <small>Four trust points</small>
              </div>
              <ol aria-label="Cloud-first processing path">
                <li><span>01</span><div><strong>Your input</strong><small>Created on your device</small></div></li>
                <li><span>02</span><div><strong>Network transit</strong><small>Sent beyond the device</small></div></li>
                <li><span>03</span><div><strong>Remote processing</strong><small>Handled on outside infrastructure</small></div></li>
                <li><span>04</span><div><strong>Result returns</strong><small>Delivered back across the network</small></div></li>
              </ol>
            </MotionReveal>
            <MotionReveal className="processing-path processing-path--local" delay={0.08}>
              <div className="processing-path__header">
                <div><span>Local-first path</span><strong>Intelligence moves to the private data.</strong></div>
                <small>One clear boundary</small>
              </div>
              <ol aria-label="Local-first processing path">
                <li><span>01</span><div><strong>Your input</strong><small>Created on your device</small></div></li>
                <li><span>02</span><div><strong>On-device intelligence</strong><small>Processed on supported Apple hardware</small></div></li>
                <li><span>03</span><div><strong>Your result</strong><small>Ready without sending the content to us</small></div></li>
              </ol>
            </MotionReveal>
          </div>
          <p className="processing-paths__caption">Fewer copies. Fewer unknowns. More control.</p>
          <blockquote className="philosophy-premise__callout">
            If you think you have nothing to hide, you are not looking closely enough.
            <span>Privacy is not secrecy. It is the right to decide who gets to look.</span>
          </blockquote>
        </div>
      </section>

      <AxiomScroller />

      <section className="philosophy-path" aria-labelledby="philosophy-path-title">
        <div className="section-frame">
          <div className="section-index"><span>03 / Counter architecture</span><span>Intelligence that stays close</span></div>
          <div className="philosophy-path__intro">
            <MotionReveal>
              <p className="section-kicker">Your AI. Your phone. Your business.</p>
              <h2 id="philosophy-path-title">Private intelligence.<br /><em>On your terms.</em></h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                On supported Apple hardware, app-bundled models and Apple frameworks process private
                inputs close to where they were created. The result is private, resilient software that
                can keep working offline and does not need our servers to understand your content.
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
            <div><dt>Core intelligence</dt><dd>On-device where supported</dd></div>
            <div><dt>Core experience</dt><dd>Offline-ready after setup</dd></div>
            <div><dt>Advertising profiles</dt><dd>None</dd></div>
          </dl>
        </div>
      </section>

      <section className="honest-boundaries" aria-labelledby="honest-boundaries-title">
        <div className="section-frame">
          <div className="section-index section-index--dark"><span>04 / The boundary</span><span>Connection is exceptional, never hidden</span></div>
          <div className="honest-boundaries__intro">
            <MotionReveal>
              <p className="section-kicker section-kicker--dark">No hidden exits</p>
              <h2 id="honest-boundaries-title">If data crosses the boundary, you should know why.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                Some features may connect to Apple, Plaid, or another named service for a specific
                job. Model downloads, purchases, optional iCloud sync, and optional bank sync are
                disclosed in context. The core product does not become an excuse to collect your content.
              </p>
              <Link to="/privacy" className="text-link text-link--dark">Read the privacy model <ArrowUpRight size={18} /></Link>
            </MotionReveal>
          </div>
          <dl className="honest-boundaries__rows">
            <div><dt>Core intelligence</dt><dd>Processed on supported Apple devices</dd><dd className="honest-boundaries__status">Local by design</dd></div>
            <div><dt>Optional services</dt><dd>Named before you enable them</dd><dd className="honest-boundaries__status">Your choice</dd></div>
            <div><dt>Diagnostics</dt><dd>Where offered, opt-in and off by default</dd><dd className="honest-boundaries__status">Controlled</dd></div>
          </dl>
        </div>
      </section>

      <section className="philosophy-proof" aria-labelledby="philosophy-proof-title">
        <div className="section-frame">
          <div className="section-index"><span>05 / Proof</span><span>A standard you can experience</span></div>
          <div className="philosophy-proof__intro">
            <MotionReveal>
              <p className="section-kicker">Proof in use</p>
              <h2 id="philosophy-proof-title">Privacy should be felt in the product.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>Core work should remain useful when the network disappears. Optional connections should have a clear purpose. Personal content should never become the raw material for an advertising business.</p>
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
          <div className="section-index"><span>06 / Philosophy in practice</span><span>{products.length} private tools. One standard.</span></div>
          <div className="philosophy-products__intro">
            <p className="section-kicker">Built by Obsidian Ridge Labs</p>
            <h2 id="philosophy-products-title">Your life is not raw material<br /><em>for someone else&apos;s cloud.</em></h2>
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
          <div className="section-index"><span>07 / Straight answers</span><span>Questions private software should answer</span></div>
          <div className="philosophy-faq__grid">
            <div>
              <p className="section-kicker">Before an AI app earns your data</p>
              <h2 id="philosophy-faq-title">It should answer these questions.</h2>
              <p>
                “On-device” and “private” matter only when the boundary is specific. These are the
                questions Obsidian Ridge Labs answers so people can choose with confidence.
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
          <p className="section-kicker section-kicker--dark">The Obsidian standard</p>
          <h2 id="philosophy-close-title">Move the intelligence.<br /><em>Not the private life.</em></h2>
          <p>Obsidian Ridge Labs builds Apple apps that keep core intelligence on the device, keep optional connections visible, and keep control with the person doing the work.</p>
          <div>
            <Link to="/download" className="button button--dark">Explore private apps <ArrowRight size={18} /></Link>
            <Link to="/privacy" className="text-link text-link--dark">Read the privacy model <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyPage;
