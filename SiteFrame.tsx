import React, { Suspense, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

interface SiteFrameProps {
  children: React.ReactNode;
}

const RouteLoading: React.FC = () => (
  <div
    className="min-h-[60vh] px-6 pt-40 text-center text-text-secondary"
    role="status"
    aria-live="polite"
  >
    <span className="mx-auto mb-4 block h-2 w-2 animate-pulse rounded-full bg-neon" aria-hidden="true" />
    <span className="font-mono text-xs uppercase tracking-[0.2em]">Loading page</span>
  </div>
);

const ScrollAndRouteFocus: React.FC = () => {
  const { pathname } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (firstRender.current) {
      firstRender.current = false;
    } else {
      window.requestAnimationFrame(() => {
        document.getElementById('main-content')?.focus({ preventScroll: true });
      });
    }

  }, [pathname]);

  return null;
};

/**
 * Shared by the browser and prerender entry points so their initial markup is
 * identical. Route components are eager on the server and lazy in the browser;
 * the common Suspense boundary lets React retain prerendered HTML while the
 * matching browser chunk loads during hydration.
 */
const SiteFrame: React.FC<SiteFrameProps> = ({ children }) => {
  const location = useLocation();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => setHasHydrated(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-obsidian font-sans text-text-primary selection:bg-neon selection:text-black">
        <ScrollAndRouteFocus />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />

        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={hasHydrated ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<RouteLoading />}>{children}</Suspense>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default SiteFrame;
