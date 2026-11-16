import React, { Suspense, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { KineticNav, KineticFooter } from './components/kinetic/Chrome';
import './styles/kinetic-world.css';

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
  const initial = useRef(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.dispatchEvent(new Event('orl:route'));
    if (initial.current) initial.current = false;
    else requestAnimationFrame(() => document.getElementById('main-content')?.focus({ preventScroll: true }));
  }, [pathname]);
  useEffect(() => {
    if (!hash) return;
    const go = () => {
      const node = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!node) return false;
      node.scrollIntoView({ behavior: 'instant', block: 'start' });
      return true;
    };
    if (go()) return;
    const observer = new MutationObserver(() => { if (go()) observer.disconnect(); });
    observer.observe(document.getElementById('main-content') || document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 5000);
    return () => { observer.disconnect(); window.clearTimeout(timeout); };
  }, [pathname, hash]);
  return null;
};

const SiteFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="kin-site">
    <ScrollAndRouteFocus />
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <KineticNav />
    <main id="main-content" tabIndex={-1}>
      <Suspense fallback={null}>{children}<RouteReady /></Suspense>
    </main>
    <KineticFooter />
  </div>
);
export default SiteFrame;
