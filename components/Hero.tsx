import React, { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClientOnly from './ClientOnly';
import { Magnetic } from './ui/magnetic';

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
  const [showTerrain, setShowTerrain] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compact = window.matchMedia('(max-width: 720px)').matches;
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    if (reduced || compact || saveData) return;
    setShowTerrain(true);
  }, []);

  const scrollToProducts = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('products')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <section className="orl-hero" aria-labelledby="home-heading">
      <div className="orl-hero__ridge-fallback" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      {showTerrain && (
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
          <span>Private AI apps for Apple devices</span>
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
              Your AI. Your phone. Your business.
            </motion.p>
            <motion.h1
              id="home-heading"
              className="orl-hero__title"
              initial="hidden"
              animate="visible"
              custom={0.22}
              variants={reveal}
            >
              <span>AI that knows you.</span>
              <em>Not one that watches you.</em>
            </motion.h1>
            <motion.div
              className="orl-hero__intro"
              initial="hidden"
              animate="visible"
              custom={0.32}
              variants={reveal}
            >
              <p>
                Most software asks you to hand over your life to rent intelligence back
                by the month. We build the opposite: apps that run their intelligence on
                the Apple device in your hands, so they can know your whole life. Not
                just the parts you are willing to send to a server.
              </p>
              <div className="orl-hero__actions">
                <Magnetic>
                  <button type="button" className="button button--primary" onClick={scrollToProducts}>
                    See the collection <ArrowDownRight size={18} aria-hidden="true" />
                  </button>
                </Magnetic>
                <Magnetic intensity={0.14}>
                  <Link className="button button--quiet" to="/philosophy">
                    Read the manifesto <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </Magnetic>
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
            <span>The Trade</span>
            <p>Your private life for someone else&apos;s intelligence. We refuse the deal.</p>
          </motion.aside>
        </div>

        <motion.div
          className="orl-hero__baseline"
          initial="hidden"
          animate="visible"
          custom={0.52}
          variants={reveal}
        >
          <span>01 · Intelligence on-device</span>
          <span>02 · Works offline</span>
          <span>03 · Every connection named</span>
          <button type="button" onClick={scrollToProducts}>
            View the collection <ArrowDownRight size={17} aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
