import React from 'react';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeFaqs } from '../data/faqs';
import MotionReveal from './home/MotionReveal';

const architecturePrinciples = [
  {
    number: '01',
    title: 'On-device intelligence',
    copy: 'Supported AI features use Apple frameworks or app-bundled models on the hardware in your hands.',
    note: 'Core path: local',
  },
  {
    number: '02',
    title: 'Offline-ready workflows',
    copy: 'After any required model setup, core work continues without Wi-Fi, cellular service, or a server round trip.',
    note: 'Network: optional',
  },
  {
    number: '03',
    title: 'No surveillance layer',
    copy: 'We do not build advertising profiles into the product experience, and released product disclosures identify any optional diagnostics or connected services.',
    note: 'Profiles: none',
  },
  {
    number: '04',
    title: 'Honest connections',
    copy: 'Services such as Plaid or iCloud are described in context before you choose to enable them.',
    note: 'Control: yours',
  },
];

const Services: React.FC = () => {
  return (
    <>
      <section id="architecture" className="architecture-section" aria-labelledby="architecture-title">
        <div className="section-frame">
          <div className="section-index">
            <span>03 / The architecture</span>
            <span>Privacy at system level</span>
          </div>

          <div className="architecture-section__layout">
            <div className="architecture-section__sticky">
              <MotionReveal>
                <p className="section-kicker">Local by architecture</p>
                <h2 id="architecture-title">Privacy is easier when data never has to leave.</h2>
                <p>
                  We design the core path to stay on-device, then document every optional service
                  that crosses that boundary.
                </p>
              </MotionReveal>

              <MotionReveal className="architecture-path" delay={0.08}>
                <div><span>Input</span><strong>Your data</strong></div>
                <i aria-hidden="true" />
                <div><span>Process</span><strong>Apple silicon</strong></div>
                <i aria-hidden="true" />
                <div><span>Result</span><strong>Your insight</strong></div>
              </MotionReveal>
            </div>

            <div className="architecture-principles">
              {architecturePrinciples.map((principle, index) => (
                <MotionReveal key={principle.title} className="architecture-principle" delay={index * 0.05} amount={0.3}>
                  <div className="architecture-principle__number">{principle.number}</div>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.copy}</p>
                  </div>
                  <span>{principle.note}</span>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="apple-craft" aria-labelledby="apple-craft-title">
        <div className="section-frame">
          <div className="section-index">
            <span>04 / Apple craft</span>
            <span>One ecosystem, considered deeply</span>
          </div>
          <div className="apple-craft__intro">
            <MotionReveal>
              <p className="section-kicker">Native, all the way down</p>
              <h2 id="apple-craft-title">Built for one ecosystem, down to the silicon.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                Focusing on Apple lets us build with native performance, system privacy controls,
                and on-device intelligence from the first sketch—not as an afterthought.
              </p>
              <Link to="/blog/apple-ecosystem-privacy" className="text-link">
                Why we build for Apple <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </MotionReveal>
          </div>
          <div className="apple-craft__terms" aria-label="Apple platform capabilities">
            <MotionReveal><span>01</span><strong>Neural Engine</strong><p>Fast local inference built into supported Apple hardware.</p></MotionReveal>
            <MotionReveal delay={0.06}><span>02</span><strong>Secure Enclave</strong><p>System-level protection and biometric access controls.</p></MotionReveal>
            <MotionReveal delay={0.12}><span>03</span><strong>Native performance</strong><p>One codebase shaped around Apple platforms, not a lowest common denominator.</p></MotionReveal>
          </div>
        </div>
      </section>

      <section className="verification-section" aria-labelledby="verification-title">
        <div className="section-frame">
          <div className="section-index">
            <span>05 / The proof</span>
            <span>Trust, made inspectable</span>
          </div>
          <div className="verification-section__intro">
            <MotionReveal>
              <p className="section-kicker">Proof, not posture</p>
              <h2 id="verification-title">Trust should be inspectable.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                Read the privacy model. Browse the documentation. Inspect this website’s source.
                We would rather explain the boundary than ask you to take it on faith.
              </p>
              <div className="verification-section__actions">
                <Link to="/privacy" className="button button--outline">Read the privacy model <ArrowUpRight size={17} /></Link>
                <Link to="/help" className="text-link">Browse documentation <ArrowUpRight size={17} /></Link>
              </div>
            </MotionReveal>
          </div>

          <div className="source-list" aria-label="Public project source">
            <a href="https://github.com/amotor-AM/obsidian-ridge-labs" target="_blank" rel="noreferrer" className="source-list__row">
              <span><Github size={19} aria-hidden="true" /> Public repository</span>
              <strong>This website</strong>
              <small>Inspect the project <ArrowUpRight size={17} aria-hidden="true" /></small>
            </a>
          </div>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="home-faq-title">
        <div className="section-frame home-faq__grid">
          <div>
            <p className="section-kicker section-kicker--dark">Private AI, explained plainly</p>
            <h2 id="home-faq-title">Questions worth asking before you trust an AI app.</h2>
            <p>Specific answers are more useful than privacy adjectives. Every product page goes deeper into its own data flow.</p>
          </div>
          <div className="home-faq__list">
            {homeFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<i /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="final-cta__ridge" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="section-frame">
          <p className="section-kicker section-kicker--dark">Private tools for real work</p>
          <h2 id="final-cta-title">Keep the value.<br /><em>Keep the data.</em></h2>
          <p>Explore thoughtful AI tools made for the Apple devices already in your hands.</p>
          <div className="final-cta__actions">
            <Link to="/download" className="button button--dark">Explore every app <ArrowRight size={18} /></Link>
            <a href="https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060" target="_blank" rel="noreferrer" className="text-link text-link--dark">
              Get Echo Chamber <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
