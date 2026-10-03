import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadMotion } from './motion';
import { createArtworkMotion } from './artworkMotion';
import 'lenis/dist/lenis.css';

const DESKTOP_MOTION = '(min-width: 961px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

/** Desktop choreography never takes ownership of native mobile scrolling. */
export default function ExperienceMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    let disposed = false;
    let generation = 0;
    let cleanup = () => {};
    const media = matchMedia(DESKTOP_MOTION);
    const setup = async () => {
      const current = ++generation;
      cleanup();
      cleanup = () => {};
      if (!media.matches) return;
      const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([import('lenis'), loadMotion()]);
      if (disposed || current !== generation || !media.matches) return;
      const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false, anchors: { offset: -88 } });
      if (document.body.style.overflow === 'hidden') lenis.stop();
      const tick = (time: number) => lenis.raf(time * 1000);
      const reset = () => { lenis.resize(); lenis.scrollTo(window.scrollY, { immediate: true, force: true }); };
      const menu = (event: Event) => { if ((event as CustomEvent).detail.open) lenis.stop(); else lenis.start(); };
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      window.addEventListener('orl:route', reset);
      window.addEventListener('orl:menu', menu);
      cleanup = () => { window.removeEventListener('orl:route', reset); window.removeEventListener('orl:menu', menu); gsap.ticker.remove(tick); lenis.destroy(); };
    };
    void setup();
    media.addEventListener('change', setup);
    return () => { disposed = true; media.removeEventListener('change', setup); cleanup(); };
  }, []);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    const start = async () => {
      const { gsap, ScrollTrigger, SplitText } = await loadMotion();
      await document.fonts.ready;
      if (disposed) return;
      const media = gsap.matchMedia();
      media.add(DESKTOP_MOTION, () => {
        let frame = 0;
        let needsRefresh = false;
        const records = new Map<Element, { split: any; animation: any }>();
        const artwork = createArtworkMotion(gsap, false);
        const scan = () => {
          // A committed marker inside Suspense prevents mutation of unhydrated route HTML.
          const main = document.getElementById('main-content');
          if (disposed || !main || main.dataset.readyPath !== pathname) return;
          let changed = artwork.scan(main);
          main.querySelectorAll('h1, h2, [data-reveal-words]').forEach((element) => {
            if (records.has(element) || element.closest('[data-no-split]') || element.querySelector('button, a, input, svg')) return;
            if (element.closest('.vx-trilogy')) return;
            // Word masks clip ascenders/descenders at display-type line heights.
            // Keep the reveal unmasked, then restore native wrapping when it finishes.
            const split = SplitText.create(element, { type: 'words', wordsClass: 'vx-word', aria: 'auto' });
            const animation = gsap.from(split.words, {
              y: 12, scale: 0.98, transformOrigin: '0% 100%',
              duration: 1.05, stagger: 0.038, ease: 'power4.out',
              scrollTrigger: { trigger: element, start: 'top 94%', once: true },
              onComplete: () => split.revert(),
            });
            records.set(element, { split, animation });
            changed = true;
          });
          // Defer measurement until scrolling ends; a forced refresh interrupts momentum.
          if (changed || needsRefresh) ScrollTrigger.refresh(true);
          needsRefresh = false;
        };
        const scheduleScan = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(scan); };
        const imageReady = (event: Event) => {
          if (!(event.target instanceof HTMLImageElement)) return;
          needsRefresh = true;
          scheduleScan();
        };
        scan();
        const observer = new MutationObserver((mutations) => {
          if (!mutations.some((mutation) => Array.from(mutation.addedNodes).some((node) => node instanceof Element && !node.matches('.vx-word, .vx-word-mask')))) return;
          scheduleScan();
        });
        const main = document.getElementById('main-content');
        if (main) {
          observer.observe(main, { childList: true, subtree: true });
          main.addEventListener('load', imageReady, true);
        }
        window.addEventListener('orl:route-ready', scheduleScan);
        return () => {
          cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('orl:route-ready', scheduleScan);
          main?.removeEventListener('load', imageReady, true);
          artwork.revert();
          records.forEach(({ split, animation }) => { animation.scrollTrigger?.kill(); animation.kill(); split.revert(); });
          records.clear();
        };
      });
      cleanup = () => media.revert();
    };
    void start();
    return () => { disposed = true; cleanup(); };
  }, [pathname]);

  return null;
}
