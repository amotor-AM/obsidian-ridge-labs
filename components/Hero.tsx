import React, { lazy, Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClientOnly from './ClientOnly';

const HeroBackdrop = lazy(() => import('./HeroBackdrop'));

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const proofY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 42]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="orl-hero" aria-labelledby="home-heading">
      <ClientOnly>
        <Suspense fallback={null}>
          <HeroBackdrop />
        </Suspense>
      </ClientOnly>

      <div className="orl-hero__glow" aria-hidden="true" />
      <div className="orl-hero__frame">
        <div className="orl-hero__eyebrow hero-reveal hero-reveal--one">
          <span>Independent Apple software studio</span>
          <span className="orl-hero__eyebrow-status"><i /> Local intelligence online</span>
        </div>

        <motion.div className="orl-hero__copy" style={{ y: copyY }}>
          <p className="section-kicker hero-reveal hero-reveal--two">Private AI · Built natively for Apple</p>
          <h1 id="home-heading" className="orl-hero__title hero-reveal hero-reveal--three">
            <span>AI should come</span>
            <span>to your data.</span>
            <span className="orl-hero__title-accent">Not the other way around.</span>
          </h1>

          <div className="orl-hero__intro hero-reveal hero-reveal--four">
            <p>
              Obsidian Ridge Labs builds private, offline-first AI apps for iPhone, iPad,
              and Mac. Core intelligence runs on your device, so your work
              doesn’t have to become someone else’s data.
            </p>
            <div className="orl-hero__actions">
              <button type="button" className="button button--primary" onClick={scrollToProducts}>
                Explore the apps <ArrowDownRight size={17} aria-hidden="true" />
              </button>
              <Link className="button button--quiet" to="/apps/echochamber">
                Meet Echo Chamber <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.aside className="orl-hero__proof hero-reveal hero-reveal--five" style={{ y: proofY }} aria-label="Privacy architecture status">
          <div className="orl-hero__proof-head">
            <span>Private compute status</span>
            <span className="status-live"><i /> Active</span>
          </div>
          <dl>
            <div><dt>AI processing</dt><dd>This device</dd></div>
            <div><dt>Account required</dt><dd>No</dd></div>
            <div><dt>Core workflows</dt><dd>Offline-ready</dd></div>
            <div><dt>Optional connections</dt><dd>Your choice</dd></div>
          </dl>
          <div className="orl-hero__proof-foot">
            <span>APPLE NEURAL ENGINE</span>
            <span>BOUNDARY / 01</span>
          </div>
        </motion.aside>

        <div className="orl-hero__baseline hero-reveal hero-reveal--five">
          <div><span>01</span><p>On-device by design</p></div>
          <div><span>02</span><p>No advertising layer</p></div>
          <div><span>03</span><p>User-controlled connections</p></div>
          <button type="button" onClick={scrollToProducts} aria-label="Scroll to explore the apps">
            Scroll to explore <ArrowDownRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
