import React, { Suspense, useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CanvasGrain from './components/experience/CanvasGrain';
import ExperienceMotion from './components/experience/ExperienceMotion';

interface SiteFrameProps {
  children: React.ReactNode;
}

const RouteReady: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main) main.dataset.readyPath = pathname;
    window.dispatchEvent(new Event('orl:route-ready'));
    return () => { if (main?.dataset.readyPath === pathname) delete main.dataset.readyPath; };
  }, [pathname]);
  return null;
};

const ScrollAndRouteFocus: React.FC = () => {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    // Route changes must not inherit the document's smooth anchor scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.dispatchEvent(new Event('orl:route'));

    if (firstRender.current) {
      firstRender.current = false;
    } else {
      window.requestAnimationFrame(() => {
        document.getElementById('main-content')?.focus({ preventScroll: true });
      });
    }

  }, [pathname]);

  useEffect(() => {
    if (!hash) return;

    // Route modules load lazily. Wait until the destination section is mounted.
    const scrollToSection = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return false;
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.dispatchEvent(new Event('orl:route'));
      return true;
    };
    if (scrollToSection()) return;
    const observer = new MutationObserver(() => {
      if (scrollToSection()) observer.disconnect();
    });
    observer.observe(document.getElementById('main-content') || document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 5000);
    return () => { observer.disconnect(); window.clearTimeout(timeout); };
  }, [pathname, hash]);

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
        <ExperienceMotion />
        <CanvasGrain />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />

        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={null}>{children}<RouteReady /></Suspense>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default SiteFrame;
