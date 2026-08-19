import React, { Suspense, useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

interface SiteFrameProps {
  children: React.ReactNode;
}

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
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-obsidian font-sans text-text-primary selection:bg-neon selection:text-black">
        <ScrollAndRouteFocus />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />

        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default SiteFrame;
