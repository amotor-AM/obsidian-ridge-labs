import React, { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClientOnly from './ClientOnly';

const HeroBackdrop = lazy(() => import('./HeroBackdrop'));

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero: React.FC = () => {
  const [backdropReady, setBackdropReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compact = window.matchMedia('(max-width: 720px)').matches;
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    if (reduced || compact || saveData) return;
    const timer = window.setTimeout(() => setBackdropReady(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  const scrollToProducts = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('products')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <section className="orl-hero" aria-labelledby="home-heading">
      <div className="orl-hero__ridge-fallback" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      {backdropReady && (
        <ClientOnly>
          <Suspense fallback={null}>
            <HeroBackdrop />
          </Suspense>
        </ClientOnly>
      )}

      <div className="orl-hero__veil" aria-hidden="true" />
      <div className="orl-hero__frame">
        <motion.div
          className="orl-hero__eyebrow"
          initial="hidden"
          animate="visible"
          custom={0.08}
          variants={reveal}
        >
          <span>Private intelligence for Apple devices</span>
          <span>Independent studio · Las Vegas, Nevada</span>
        </motion.div>

        <div className="orl-hero__composition">
          <div className="orl-hero__copy">
            <motion.p
              className="section-kicker"
              initial="hidden"
              animate="visible"
              custom={0.16}
              variants={reveal}
            >
              On-device by design
            </motion.p>
            <motion.h1
              id="home-heading"
              className="orl-hero__title"
              initial="hidden"
              animate="visible"
              custom={0.23}
              variants={reveal}
            >
              AI without<br />
              <em>the audience.</em>
            </motion.h1>
            <motion.div
              className="orl-hero__intro"
              initial="hidden"
              animate="visible"
              custom={0.32}
              variants={reveal}
            >
              <p>
                Obsidian Ridge Labs builds useful AI for iPhone, iPad, and Mac that
                works where your private data already lives: on your device.
              </p>
              <div className="orl-hero__actions">
                <button type="button" className="button button--primary" onClick={scrollToProducts}>
                  Explore the apps <ArrowDownRight size={18} aria-hidden="true" />
                </button>
                <Link className="button button--quiet" to="/apps/echochamber">
                  Meet Echo Chamber <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.aside
            className="orl-hero__manifesto"
            initial="hidden"
            animate="visible"
            custom={0.42}
            variants={reveal}
            aria-label="Obsidian Ridge Labs product principles"
          >
            <span>Our standard</span>
            <p>Move less data. Explain every connection. Make the offline experience excellent.</p>
          </motion.aside>
        </div>

        <motion.div
          className="orl-hero__baseline"
          initial="hidden"
          animate="visible"
          custom={0.52}
          variants={reveal}
        >
          <span>01 · Local processing</span>
          <span>02 · No advertising layer</span>
          <span>03 · Explicit connections</span>
          <button type="button" onClick={scrollToProducts}>
            View the collection <ArrowDownRight size={17} aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
