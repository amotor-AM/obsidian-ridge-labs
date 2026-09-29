import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { loadMotion } from '../experience/motion';
import './product-stage-motion.css';

const MOTION_QUERY = '(min-width: 760px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

/** Real product captures, with depth confined to the artwork. Text stays in normal flow. */
export default function ProductStage() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = stage.current;
    const artwork = surface?.querySelector<HTMLElement>('.ls-stage-art');
    if (!surface || !artwork) return;
    const motionPreference = window.matchMedia(MOTION_QUERY);
    let disposed = false;
    let visible = false;
    let active = false;
    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let cleanup = () => {};
    let setScrollActive = (_active: boolean) => {};

    const resetPointer = () => {
      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      surface.style.removeProperty('--stage-pointer-x');
      surface.style.removeProperty('--stage-pointer-y');
      surface.style.removeProperty('--stage-tilt-x');
      surface.style.removeProperty('--stage-tilt-y');
    };
    const syncMotion = () => {
      active = visible && !document.hidden && motionPreference.matches;
      surface.dataset.motionActive = String(active);
      setScrollActive(active);
      if (!active) resetPointer();
    };
    const movePointer = (event: PointerEvent) => {
      if (!active || event.pointerType === 'touch') return;
      const bounds = artwork.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      pointerX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      pointerY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      if (pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = 0;
        surface.style.setProperty('--stage-pointer-x', `${(pointerX * 9).toFixed(2)}px`);
        surface.style.setProperty('--stage-pointer-y', `${(pointerY * 4).toFixed(2)}px`);
        surface.style.setProperty('--stage-tilt-x', `${(-pointerY * 3).toFixed(2)}deg`);
        surface.style.setProperty('--stage-tilt-y', `${(pointerX * 4).toFixed(2)}deg`);
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncMotion();
    });
    observer.observe(artwork);
    artwork.addEventListener('pointermove', movePointer, { passive: true });
    artwork.addEventListener('pointerleave', resetPointer);
    document.addEventListener('visibilitychange', syncMotion);
    motionPreference.addEventListener('change', syncMotion);

    void loadMotion().then(({ gsap }) => {
      if (disposed) return;
      const media = gsap.matchMedia();
      media.add(MOTION_QUERY, () => {
        const elements = Array.from(surface.querySelectorAll<HTMLElement>('.ls-device-motion'));
        const tweens = elements.map((element, index) => gsap.fromTo(element,
          { y: index === 1 ? 20 : 34, rotationX: 6, rotationY: index === 0 ? 5 : -5 },
          {
            y: index === 1 ? -16 : 0, rotationX: 0, rotationY: 0,
            ease: 'none', scrollTrigger: { trigger: surface, start: 'top 92%', end: 'center 40%', scrub: 1.2 },
          },
        ));
        setScrollActive = (running) => tweens.forEach((tween) => {
          if (running) {
            tween.scrollTrigger?.enable(false);
            tween.scrollTrigger?.update();
          } else {
            // Keep the current pose; also pause the scrub tween while hidden.
            tween.scrollTrigger?.disable(false, false);
          }
        });
        syncMotion();
        return () => { setScrollActive = () => {}; };
      }, stage);
      cleanup = () => media.revert();
    }).catch(() => { /* The real screenshots remain usable without optional motion. */ });

    return () => {
      disposed = true;
      observer.disconnect();
      artwork.removeEventListener('pointermove', movePointer);
      artwork.removeEventListener('pointerleave', resetPointer);
      document.removeEventListener('visibilitychange', syncMotion);
      motionPreference.removeEventListener('change', syncMotion);
      cleanup();
      resetPointer();
      delete surface.dataset.motionActive;
    };
  }, []);

  return <div className="ls-product-stage" ref={stage} aria-label="Three apps, built around your device">
    <div className="ls-stage-art">
    <figure className="ls-stage-device ls-stage-device--mettle">
      <div className="ls-device-motion"><div className="ls-device-drift"><div className="ls-device-depth"><div className="ls-device-glass"><img src="/images/mettle/plan-960.webp" width="441" height="960" alt="Mettle's strength training plan, shown on iPhone" decoding="async" /></div></div></div></div>
    </figure>
    <figure className="ls-stage-device ls-stage-device--echo">
      <div className="ls-device-motion"><div className="ls-device-drift"><div className="ls-device-depth"><img src="/images/echochamber/transcription-details-960.webp" width="960" height="1707" alt="Echo Chamber showing a recording, audio controls, and its transcript" {...{ fetchpriority: 'high' }} decoding="async" /></div></div></div>
    </figure>
    <figure className="ls-stage-device ls-stage-device--memora">
      <div className="ls-device-motion"><div className="ls-device-drift"><div className="ls-device-depth"><div className="ls-device-glass"><img src="/images/memora/home-960.webp" width="441" height="960" alt="Memora's home screen with cards ready to review, AI card creation, and study decks" decoding="async" /></div></div></div></div>
    </figure>
    <span className="ls-stage-note ls-stage-note--left" aria-hidden="true">Designed for Apple.</span>
    <span className="ls-stage-note ls-stage-note--right" aria-hidden="true">Local by design.</span>
    </div>
    <div className="ls-stage-captions">
      <div><Link to="/apps/mettle">Mettle <ArrowUpRight size={13} aria-hidden="true" /></Link><span>In development</span></div>
      <div><Link to="/apps/echochamber">Echo Chamber <ArrowUpRight size={13} aria-hidden="true" /></Link><span><i /> Available now</span></div>
      <div><Link to="/apps/memora">Memora <ArrowUpRight size={13} aria-hidden="true" /></Link><span>In development</span></div>
    </div>
  </div>;
}
