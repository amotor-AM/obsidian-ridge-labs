import React, { useEffect, useId, useRef, useState } from 'react';
import './local-core.css';

type CorePart = 'processor' | 'storage' | 'connections';

const parts: { id: CorePart; label: string; title: string; copy: string; annotation: string }[] = [
  {
    id: 'processor',
    label: 'Processor',
    title: 'The work happens here.',
    copy: 'Core AI runs on supported Apple hardware. Some models need a download before they work offline.',
    annotation: 'Processing on-device',
  },
  {
    id: 'storage',
    label: 'Storage',
    title: 'Kept on your device.',
    copy: 'Local storage is the starting point. Some apps also use private iCloud; availability and defaults differ by app.',
    annotation: 'Local storage · app-specific sync',
  },
  {
    id: 'connections',
    label: 'Connections',
    title: 'A connection has a reason.',
    copy: 'Model setup, App Store purchases, and optional features can use the network. Each app names those connections.',
    annotation: 'Setup, purchases, optional services',
  },
];

const traces: { part: CorePart; path: string }[] = [
  { part: 'processor', path: 'M198 186V130L169 101H102V72' },
  { part: 'processor', path: 'M218 186V119L178 79H159V53' },
  { part: 'processor', path: 'M238 186V103L221 86V46' },
  { part: 'processor', path: 'M258 186V108L284 82H352V53' },
  { part: 'processor', path: 'M314 208H362L390 180V117H438' },
  { part: 'processor', path: 'M314 229H378L408 199V144H448' },
  { part: 'processor', path: 'M314 251H420L447 224' },
  { part: 'storage', path: 'M291 314V338L313 360' },
  { part: 'storage', path: 'M270 314V350L301 381' },
  { part: 'storage', path: 'M249 314V366L292 409H384V438' },
  { part: 'storage', path: 'M398 378H429V309L449 289' },
  { part: 'connections', path: 'M186 219H142L114 191H61' },
  { part: 'connections', path: 'M186 241H126L102 217H52' },
  { part: 'connections', path: 'M186 267H150L111 306V335' },
  { part: 'connections', path: 'M211 314V372L181 402H130V378' },
  { part: 'connections', path: 'M230 314V389L196 423H78V376' },
];

/** An illustrative device boundary, not a rendering of any particular Apple chip. */
export default function LocalCore({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState<CorePart>('processor');
  const stage = useRef<HTMLDivElement>(null);
  const identity = useId().replace(/:/g, '');
  const detail = parts.find((part) => part.id === selected)!;

  useEffect(() => {
    const surface: HTMLDivElement | null = stage.current;
    if (!surface) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = matchMedia('(hover: hover) and (pointer: fine)');
    let visible = false;
    let frame = 0;
    let position = { x: 0, y: 0 };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      surface.style.setProperty('--core-tilt-x', '0deg');
      surface.style.setProperty('--core-tilt-y', '0deg');
    };
    const move = (event: PointerEvent) => {
      if (!visible || document.hidden || motion.matches || !pointer.matches || event.pointerType === 'touch') return;
      const rect = surface.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      // Cap the combined tilt, including diagonal movement, at six degrees.
      const amount = 6 / Math.max(1, Math.hypot(x, y));
      position = { x: -y * amount, y: x * amount };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        surface.style.setProperty('--core-tilt-x', `${position.x.toFixed(2)}deg`);
        surface.style.setProperty('--core-tilt-y', `${position.y.toFixed(2)}deg`);
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) reset();
    }, { threshold: 0 });
    observer.observe(surface);
    surface.addEventListener('pointermove', move, { passive: true });
    surface.addEventListener('pointerleave', reset);
    document.addEventListener('visibilitychange', reset);
    motion.addEventListener('change', reset);
    pointer.addEventListener('change', reset);
    return () => {
      observer.disconnect();
      surface.removeEventListener('pointermove', move);
      surface.removeEventListener('pointerleave', reset);
      document.removeEventListener('visibilitychange', reset);
      motion.removeEventListener('change', reset);
      pointer.removeEventListener('change', reset);
      reset();
    };
  }, []);

  return (
    <figure className={`local-core ${className}`.trim()} data-active={selected}>
      <div className="local-core__stage" ref={stage} aria-hidden="true">
        <div className="local-core__legend"><span>Device boundary</span><span>Illustration</span></div>
        <div className="local-core__ambient" />
        <div className="local-core__ground" />
        <div className="local-core__orbit">
          <div className="local-core__assembly">
            <div className="local-core__underside" />
            <div className="local-core__plate local-core__base">
              <span className="local-core__screw local-core__screw--a" />
              <span className="local-core__screw local-core__screw--b" />
              <span className="local-core__screw local-core__screw--c" />
              <span className="local-core__screw local-core__screw--d" />
            </div>
            <div className="local-core__plate local-core__circuit">
              <svg viewBox="0 0 500 500" className="local-core__traces" focusable="false">
                <defs>
                  <linearGradient id={`${identity}-copper`} x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#66776e" />
                    <stop offset=".52" stopColor="#b7c4b4" />
                    <stop offset="1" stopColor="#58685e" />
                  </linearGradient>
                </defs>
                <rect className="local-core__board-outline" x="32" y="32" width="436" height="436" rx="26" />
                <g fill="none" stroke={`url(#${identity}-copper)`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {traces.map(({ part, path }) => <path key={path} d={path} className={`local-core__trace local-core__trace--${part}`} />)}
                </g>
                <g className="local-core__vias">
                  {[[102,72],[159,53],[221,46],[352,53],[438,117],[448,144],[447,224],[384,438],[449,289],[61,191],[52,217]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />)}
                </g>
                <g className="local-core__capacitors">
                  <rect x="76" y="117" width="24" height="12" rx="2" />
                  <rect x="76" y="141" width="24" height="12" rx="2" />
                  <rect x="350" y="272" width="36" height="17" rx="3" />
                  <rect x="398" y="272" width="18" height="17" rx="3" />
                  <rect x="152" y="347" width="13" height="30" rx="2" />
                </g>
              </svg>
            </div>
            <div className="local-core__chip">
              <svg className="local-core__pins" viewBox="0 0 140 140" focusable="false">
                <g>
                  {Array.from({ length: 8 }, (_, index) => {
                    const value = 35 + index * 10;
                    return <path key={index} d={`M${value} 9V24 M${value} 116V131 M9 ${value}H24 M116 ${value}H131`} />;
                  })}
                </g>
              </svg>
              <div className="local-core__chip-package" />
              <div className="local-core__chip-face">
                <svg viewBox="0 0 100 100" focusable="false"><path d="M58 22H72L43 78H29Z" /></svg>
                <i />
              </div>
            </div>
            <div className="local-core__memory"><i /><i /><i /><span /></div>
            <div className="local-core__port"><i /><i /><i /><i /><i /></div>
            <div className="local-core__plate local-core__glass local-core__glass--inner"><span /></div>
            <div className="local-core__plate local-core__glass local-core__glass--cover">
              <div className="local-core__glass-engraving" />
              <span className="local-core__glass-edge" />
            </div>
          </div>
        </div>
        <div className="local-core__annotation"><i /><span>{detail.annotation}</span></div>
      </div>
      <figcaption className="local-core__caption">
        <div className="local-core__controls" role="group" aria-label="Inspect the device boundary">
          {parts.map((part, index) => (
            <button key={part.id} type="button" aria-pressed={selected === part.id} aria-controls={`${identity}-detail`} onClick={() => setSelected(part.id)}>
              <span aria-hidden="true">0{index + 1}</span>{part.label}
            </button>
          ))}
        </div>
        <div className="local-core__detail" id={`${identity}-detail`} role="status" aria-live="polite" aria-atomic="true">
          <p><strong>{detail.title}</strong> {detail.copy}</p>
        </div>
      </figcaption>
    </figure>
  );
}
