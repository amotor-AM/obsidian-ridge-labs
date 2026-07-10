import React from 'react';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import MotionReveal from './home/MotionReveal';

const architecturePrinciples = [
  {
    number: '01',
    title: 'On-device intelligence',
    copy: 'Supported AI features run through Apple Intelligence or app-bundled models on your hardware.',
    note: 'Local inference',
  },
  {
    number: '02',
    title: 'Offline-ready workflows',
    copy: 'After any required model setup, core workflows continue without Wi-Fi, cellular service, or a server round trip.',
    note: 'Resilient by default',
  },
  {
    number: '03',
    title: 'No surveillance layer',
    copy: 'Our apps contain no ads, advertising identifiers, or third-party behavioral analytics SDKs.',
    note: 'No attention economy',
  },
  {
    number: '04',
    title: 'Honest connections',
    copy: 'Features that connect—such as optional Plaid bank sync or encrypted iCloud sync—are explained before you enable them.',
    note: 'Explicit and controlled',
  },
];

const Services: React.FC = () => {
  const openSourceProducts = products.filter((product) => product.githubUrl);

  return (
    <>
      <section id="architecture" className="architecture-section" aria-labelledby="architecture-title">
        <div className="section-frame">
          <div className="section-index">
            <span>03 / The architecture</span>
            <span>Local is the system</span>
          </div>

          <div className="architecture-section__layout">
            <div className="architecture-section__sticky">
              <MotionReveal>
                <p className="section-kicker">Local by architecture</p>
                <h2 id="architecture-title">Privacy is not a setting. It is the shape of the system.</h2>
                <p>
                  We minimize data movement at the architectural level, then explain every
                  exception in plain language.
                </p>
              </MotionReveal>

              <div className="architecture-seal" aria-hidden="true">
                <div className="architecture-seal__orbit"><i /><i /><i /></div>
                <div className="architecture-seal__core"><span>LOCAL</span><strong>AI</strong><small>APPLE SILICON</small></div>
              </div>
            </div>

            <div className="architecture-principles">
              {architecturePrinciples.map((principle, index) => (
                <MotionReveal key={principle.title} className="architecture-principle" delay={index * 0.05} amount={0.35}>
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

      <div className="privacy-marquee" aria-hidden="true">
        <div>
          <span>INTELLIGENCE WITHOUT EXPOSURE</span><i />
          <span>OFFLINE WITHOUT COMPROMISE</span><i />
          <span>SOFTWARE WITHOUT SURVEILLANCE</span><i />
          <span>INTELLIGENCE WITHOUT EXPOSURE</span><i />
          <span>OFFLINE WITHOUT COMPROMISE</span><i />
          <span>SOFTWARE WITHOUT SURVEILLANCE</span><i />
        </div>
      </div>

      <section className="apple-focus" aria-labelledby="apple-focus-title">
        <div className="section-frame">
          <div className="apple-focus__grid">
            <MotionReveal className="apple-focus__copy">
              <p className="section-kicker section-kicker--dark">Built only for Apple</p>
              <h2 id="apple-focus-title">One ecosystem. No compromise.</h2>
              <p>
                We focus exclusively on Apple platforms so our apps can draw on the Neural
                Engine, Secure Enclave, system privacy controls, and Apple silicon without
                designing to the lowest common denominator.
              </p>
              <Link to="/blog/apple-ecosystem-privacy" className="button button--dark">
                Why we build for Apple <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </MotionReveal>

            <MotionReveal className="apple-focus__spec" delay={0.1}>
              <div className="apple-focus__device" aria-hidden="true">
                <div className="apple-focus__island" />
                <span>APPLE SILICON</span>
                <strong>Private compute,<br />in your pocket.</strong>
                <div className="apple-focus__chip"><i /> NEURAL ENGINE</div>
              </div>
              <dl>
                <div><dt>Platforms</dt><dd>iPhone · iPad · Mac</dd></div>
                <div><dt>Security</dt><dd>Secure Enclave + biometrics</dd></div>
                <div><dt>Performance</dt><dd>Native Apple silicon</dd></div>
              </dl>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="verification-section" aria-labelledby="verification-title">
        <div className="section-frame">
          <div className="section-index">
            <span>04 / The proof</span>
            <span>Trust, made inspectable</span>
          </div>
          <div className="verification-section__intro">
            <MotionReveal>
              <p className="section-kicker">Proof, not promises</p>
              <h2 id="verification-title">Privacy should survive inspection.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                See what stays on-device, what connects, and why. Read the product
                documentation, review available source code, and understand the privacy model
                before you install anything.
              </p>
              <div className="verification-section__actions">
                <Link to="/privacy" className="button button--outline">Read our privacy model <ArrowUpRight size={16} /></Link>
                <Link to="/help" className="text-link">Browse documentation <ArrowUpRight size={16} /></Link>
              </div>
            </MotionReveal>
          </div>

          <div className="source-list" aria-label="Products with public source repositories">
            {openSourceProducts.map((product) => (
              <a key={product.id} href={product.githubUrl} target="_blank" rel="noreferrer" className="source-list__row">
                <span><Github size={17} aria-hidden="true" /> Public repository</span>
                <strong>{product.name}</strong>
                <small>View source <ArrowUpRight size={15} aria-hidden="true" /></small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="final-cta__ridge" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="section-frame">
          <p className="section-kicker section-kicker--dark">Your AI. Your phone. Your business.</p>
          <h2 id="final-cta-title">Your data already has a home.<br /><em>Give it intelligence without giving it away.</em></h2>
          <p>Explore private, thoughtfully designed AI tools for the Apple devices already in your hands.</p>
          <div className="final-cta__actions">
            <Link to="/download" className="button button--dark">Explore the apps <ArrowRight size={17} /></Link>
            <a href="https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060" target="_blank" rel="noreferrer" className="text-link text-link--dark">
              Get Echo Chamber <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
