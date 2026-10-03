import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { EchoWave, MettleHUD, MemoryMatrix } from './AppVisuals';
import { loadMotion } from './motion';

const chapters = [
  { id: 'echochamber', name: 'Echo Chamber', kind: 'Voice → text', title: <>Say it.<br />Keep it.</>, body: 'The conversation ends. The useful part doesn’t have to. Record, transcribe, and return to the words that matter, without sending the recording away.', status: 'Available on the App Store', detail: 'iPhone · iPad · Mac', visual: EchoWave, accent: 'echo' },
  { id: 'mettle', name: 'Mettle', kind: 'Effort → evidence', title: <>Strength has<br />a history.</>, body: 'What you lifted. How it moved. What comes next. A strength coach built around your training record, with programming you can inspect and intelligence on your device.', status: 'In development', detail: 'Strength training', visual: MettleHUD, accent: 'mettle' },
  { id: 'memora', name: 'Memora', kind: 'Study → recall', title: <>Learn it.<br />Keep it.</>, body: 'Turn what you’re studying into something you remember. Draft flashcards on your device, then meet each one again when it needs your attention.', status: 'Available on the App Store', detail: 'Flashcards · Spaced repetition', visual: MemoryMatrix, accent: 'memora' },
];

export default function Trilogy() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<any>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let revert = () => {};
    void loadMotion().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !root.current || !track.current) return;
      const media = gsap.matchMedia();
      media.add('(min-width: 1000px) and (min-height: 800px) and (prefers-reduced-motion: no-preference)', () => {
        const container: HTMLElement = root.current!;
        const rail: HTMLDivElement = track.current!;
        const header = container.querySelector<HTMLElement>('.vx-trilogy-header')!;
        const footer = container.querySelector<HTMLElement>('.vx-trilogy-bottom')!;
        const content = Array.from(rail.querySelectorAll<HTMLElement>('.vx-chapter-copy, .vx-chapter-visual'));
        let live = true;
        let frame = 0;
        let pinContext: ReturnType<typeof gsap.context> | null = null;
        const unpin = () => {
          pinContext?.revert();
          pinContext = null;
          delete container.dataset.pinned;
          container.style.removeProperty('--vx-pin-scene-height');
          triggerRef.current = null;
        };
        const checkFit = () => {
          if (!live) return;
          const style = getComputedStyle(container);
          const padding = parseFloat(style.getPropertyValue('--vx-pin-padding')) || 24;
          const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
          const available = innerHeight - Math.max(header.offsetHeight, header.scrollHeight) - Math.max(footer.offsetHeight, footer.scrollHeight) - border;
          // Measure intrinsic children, not the rail: pinning changes the rail's own size.
          const needed = Math.max(480, ...content.map((element) => Math.max(element.scrollHeight, element.getBoundingClientRect().height) + padding * 2));
          if (needed > available) {
            if (pinContext) { unpin(); ScrollTrigger.refresh(); }
            return;
          }
          container.style.setProperty('--vx-pin-scene-height', `${available}px`);
          if (pinContext) return;
          container.dataset.pinned = 'true';
          pinContext = gsap.context(() => {
            const timeline = gsap.timeline({ scrollTrigger: {
              trigger: container, start: 'top top', end: () => `+=${(rail.scrollWidth - innerWidth) * 1.15}`,
              pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
              onUpdate: (self: any) => { const next = Math.round(self.progress * 2); if (next !== activeRef.current) { activeRef.current = next; setActive(next); } },
            } });
            timeline.to(rail, { x: () => -(rail.scrollWidth - innerWidth), ease: 'none', duration: 1 }, 0)
              .fromTo(container, { backgroundColor: '#101012' }, { backgroundColor: '#050505', ease: 'none', duration: 1 }, 0);
            triggerRef.current = timeline.scrollTrigger;
          }, container);
          ScrollTrigger.refresh();
        };
        const scheduleCheck = () => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(checkFit);
        };
        const observer = new ResizeObserver(scheduleCheck);
        [...content, header, footer].forEach((element) => observer.observe(element));
        window.addEventListener('resize', scheduleCheck);
        checkFit();
        void document.fonts.ready.then(() => { if (live) scheduleCheck(); });
        return () => {
          live = false;
          cancelAnimationFrame(frame);
          observer.disconnect();
          window.removeEventListener('resize', scheduleCheck);
          unpin();
        };
      });
      revert = () => media.revert();
    });
    return () => { cancelled = true; revert(); };
  }, []);

  const goTo = (index: number, immediate = false) => {
    const trigger = triggerRef.current;
    if (trigger) {
      window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * index / 2, behavior: 'instant' });
      window.dispatchEvent(new Event('orl:route'));
      if (immediate) { trigger.update(); trigger.getTween()?.progress(1); trigger.animation?.progress(index / 2); }
    } else document.getElementById(`chapter-${chapters[index].id}`)?.scrollIntoView({ behavior: 'instant' });
  };

  return <section ref={root} className="vx-trilogy" id="trilogy" aria-label="The app trilogy">
    <div className="vx-trilogy-header vx-frame">
      <span className="vx-eyebrow">01 / The trilogy</span>
      <div className="vx-chapter-nav" aria-label="Choose an app">{chapters.map((chapter, index) => <button key={chapter.id} onClick={() => goTo(index)} aria-current={active === index ? 'step' : undefined}><span>0{index + 1}</span><span>{chapter.name}</span></button>)}</div>
      <span className="vx-scroll-label">Scroll to explore <ArrowDown size={12} aria-hidden="true" /></span>
    </div>
    <div className="vx-trilogy-track" ref={track}>
      {chapters.map(({ id, name, kind, title, body, status, detail, visual: Visual, accent }, index) => <article id={`chapter-${id}`} key={id} className={`vx-chapter vx-chapter--${accent}`} onFocusCapture={(event) => { if (triggerRef.current && Math.abs(event.currentTarget.getBoundingClientRect().left) > 1) goTo(index, true); }}>
        <div className="vx-chapter-copy">
          <div className="vx-product-name"><span className="vx-cross" aria-hidden="true">+</span>{name}<span className="vx-product-kind">{kind}</span></div>
          <h2>{title}</h2>
          <p>{body}</p>
          <Link to={`/apps/${id}`} className="vx-link">Explore {name}<ArrowUpRight size={20} aria-hidden="true" /></Link>
          <div className="vx-release"><span className={index === 0 ? 'vx-live-dot' : 'vx-dev-dot'} />{status}</div>
        </div>
        <div className="vx-chapter-visual"><Visual /><span className="vx-visual-caption">{detail}<span>0{index + 1} / 03</span></span></div>
      </article>)}
    </div>
    <div className="vx-trilogy-bottom vx-frame"><span>Three ways to keep more of yourself.</span><Link to="/download">View all ten apps <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
  </section>;
}
