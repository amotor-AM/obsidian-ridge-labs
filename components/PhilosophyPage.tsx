import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';
import AxiomScroller, { STANDARD_REFUSALS } from './AxiomScroller';
import MotionReveal from './home/MotionReveal';
import '../styles/philosophy-refinement.css';

export const BOUNDARY_CHECK = [
  {
    question: 'Where does the processing happen?',
    answer: 'On supported Apple hardware. Echo Chamber runs recording, transcription, and transcript intelligence on the device, using local models and Apple on-device frameworks. Recordings and transcripts are not sent to an external AI service. The same local core is the standard for the rest of the collection, which is in development.',
  },
  {
    question: 'Where does the storage live?',
    answer: 'Echo Chamber stores recordings and transcripts on your device, with optional iCloud sync. Other apps have different defaults: Mettle and Cove use a private iCloud database when available, with a local fallback. The product pages distinguish local processing from synced storage and explain what happens to shared or exported copies.',
  },
  {
    question: 'What connects to the network, and when?',
    answer: 'Model setup, App Store purchases, and cloud sync can need a connection. The apps in development also name their specific paths: recipe pages and images in Mise, WeatherKit in Wove, and optional bank connections, enrichment, and diagnostics in Vault. Processing, storage, and connected services are documented separately on each product page.',
  },
];

const PhilosophyPage: React.FC = () => {
  const principleList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/philosophy#principles`,
    name: 'The Obsidian Ridge Labs standard: four refusals for private software',
    numberOfItems: STANDARD_REFUSALS.length,
    itemListElement: STANDARD_REFUSALS.map((refusal, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@type': 'DefinedTerm', name: refusal.title, description: refusal.description },
    })),
  };

  return (
    <div className="philosophy-page philosophy-page--refined">
      <SEO
        title="The Obsidian Ridge Labs Standard"
        description="Obsidian Ridge Labs refuses The Trade: on-device intelligence and a Boundary Check that names where an app processes, stores, and sends your content."
        keywords={['on-device AI privacy', 'local-first AI', 'offline AI apps', 'private AI for iPhone', 'cloud AI privacy', 'why on-device AI is more private']}
        jsonLd={[
          buildBreadcrumbs([
            { name: 'Home', url: '/' },
            { name: 'The Standard', url: '/philosophy' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': `${SITE_URL}/philosophy#webpage`,
            name: 'The Obsidian Ridge Labs Standard',
            description: 'The four refusals and the Boundary Check behind Obsidian Ridge Labs: local core intelligence, per-app storage choices, and named connections.',
            url: `${SITE_URL}/philosophy`,
            mainEntity: { '@id': `${SITE_URL}/#organization` },
          },
          principleList,
          buildFAQSchema(BOUNDARY_CHECK),
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
            <span>The Obsidian Ridge Labs standard</span>
            <span>Las Vegas, Nevada · 2026</span>
          </div>

          <div className="philosophy-hero__copy">
            <h1>The <em>glass</em> house is burning.</h1>
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
            Obsidian Ridge Labs is building the escape hatch: powerful Apple apps with core intelligence
            on your device. Personal AI is not coming. It is already in your hand.
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
                A remote AI workflow creates more copies, more logs, more retention questions,
                and more companies to trust. This is The Trade: your inner life handed over,
                intelligence rented back by the month. The industry standardized it. We declined.
                Transcribing a meeting, understanding your finances, writing in a journal,
                remembering someone you love: none of it should arrive with a bill attached.
              </p>
            </MotionReveal>
          </div>

          <blockquote className="philosophy-premise__callout">
            If you think you have nothing to hide, you are not looking closely enough.
            <span>Privacy is not secrecy. It is the right to decide who gets to look.</span>
          </blockquote>
        </div>
      </section>

      <AxiomScroller />

      <section className="standard-cut" aria-labelledby="standard-cut-title">
        <div className="section-frame">
          <div className="section-index"><span>03 / The cut</span><span>Local by design.</span></div>
          <h2 id="standard-cut-title" className="standard-cut__heading">On your side of the <em>glass.</em></h2>
          <div className="standard-cut__layout">
            <div className="standard-cut__mark" aria-hidden="true">/</div>
            <div className="standard-cut__copy">
              <p>
                The slash beside the Obsidian Ridge Labs name draws a line between making your software and
                making your life our business. We work on one side. You live on the other.
              </p>
              <p className="standard-cut__signature">Obsidian Ridge Labs</p>
            </div>
          </div>
        </div>
      </section>

      <section id="boundary-check" className="standard-boundary" aria-labelledby="standard-boundary-title">
        <div className="section-frame">
          <div className="section-index section-index--dark"><span>04 / Before you install</span><span>The Boundary Check</span></div>
          <div className="standard-boundary__intro">
            <h2 id="standard-boundary-title">Run the <em>Boundary Check.</em></h2>
            <p>
              Before you trust any AI app with a recording, a receipt, or a page from your life,
              ask it these three questions. Start with ours.
            </p>
          </div>
          <dl className="standard-boundary__questions">
            {BOUNDARY_CHECK.map((item, index) => (
              <div key={item.question}>
                <dt><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="standard-boundary__foot">
            <p>Run it on us. Then run it on everything else.</p>
            <Link to="/privacy" className="text-link text-link--dark">Read the full privacy model <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className="standard-boundary__website">
            This website uses Google Analytics. It does not receive the content in our apps.
            {' '}<Link to="/privacy">Website measurement is covered in the privacy policy.</Link>
          </p>
        </div>
      </section>

      <section className="standard-test" aria-labelledby="standard-test-title">
        <div className="section-frame">
          <div className="section-index"><span>05 / The Airplane-Mode Test</span><span>Try it yourself</span></div>
          <div className="standard-test__layout">
            <div className="standard-test__intro">
              <Plane size={42} strokeWidth={1.25} aria-hidden="true" />
              <h2 id="standard-test-title">Turn on airplane mode. <em>Whatever still works is yours.</em></h2>
              <p>Try Echo Chamber, on the App Store, on a supported iPhone or iPad.</p>
            </div>
            <div className="standard-test__instructions">
              <ol>
                <li><h3>Finish setup.</h3><p>Install Echo Chamber and let any required model downloads finish while you are online.</p></li>
                <li><h3>Disconnect.</h3><p>Turn on airplane mode. Confirm Wi-Fi is off.</p></li>
                <li><h3>Give it something to do.</h3><p>Record a sentence. Transcribe it. Search for a word you said.</p></li>
              </ol>
              <p className="standard-test__condition">
                Finish model setup first and check your available recording allowance. Downloads,
                purchase checks, and iCloud sync need a connection; the transcription runs locally.
              </p>
              <Link to="/apps/echochamber" className="text-link">Check Echo Chamber’s requirements <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-close standard-close" aria-labelledby="philosophy-close-title">
        <div className="section-frame">
          <p className="section-kicker section-kicker--dark">06 / Already in your hand</p>
          <h2 id="philosophy-close-title">Put the standard <em>to work.</em></h2>
          <p>
            Bring the whole conversation. Write the unedited entry. Personal software has to
            make room for the parts you would never make public.
          </p>
          <div>
            <Link to="/download" className="button button--dark">See the collection <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/privacy" className="text-link text-link--dark">Read the privacy model <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyPage;
