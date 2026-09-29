import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import './app-visuals.css';

export type AppVisualProps = { className?: string; compact?: boolean };

type MotionFrame = {
  time: number;
  x: number;
  y: number;
  velocity: number;
  scrollVelocity: number;
  viewportY: number;
  pointerInside: boolean;
  reducedMotion: boolean;
};

const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(max, value));

/** Decorative motion stays outside React renders, and sleeps offscreen or in a hidden tab. */
function useVisualMotion(draw: (frame: MotionFrame) => void) {
  const root = useRef<HTMLElement | null>(null);
  const drawRef = useRef(draw);
  drawRef.current = draw;

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = motionPreference.matches;
    let inView = false;
    let frameId = 0;
    let previousTime = 0;
    let elapsed = 0;
    let previousScroll = window.scrollY;
    let scrollTime = performance.now();
    let previousPointerTime = 0;
    let targetX = 0.5;
    let targetY = 0.5;
    let x = 0.5;
    let y = 0.5;
    let velocity = 0;
    let scrollVelocity = 0;
    let viewportY = 0.5;
    let pointerInside = false;
    let bounds = node.getBoundingClientRect();

    const updateBounds = () => {
      bounds = node.getBoundingClientRect();
      viewportY = clamp((window.innerHeight / 2 - bounds.top) / Math.max(bounds.height, 1));
    };
    const render = () => drawRef.current({
      time: elapsed,
      x,
      y,
      velocity,
      scrollVelocity,
      viewportY,
      pointerInside,
      reducedMotion,
    });
    const stop = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
      previousTime = 0;
    };
    const tick = (now: number) => {
      frameId = 0;
      if (!inView || document.hidden || reducedMotion) return;
      const dt = previousTime ? Math.min((now - previousTime) / 1000, 0.05) : 1 / 60;
      previousTime = now;
      elapsed += dt;
      const smoothing = 1 - Math.exp(-dt * 8);
      x += (targetX - x) * smoothing;
      y += (targetY - y) * smoothing;
      velocity *= Math.exp(-dt * 4.5);
      scrollVelocity *= Math.exp(-dt * 3);
      render();
      frameId = window.requestAnimationFrame(tick);
    };
    const start = () => {
      if (inView && !document.hidden && !reducedMotion && !frameId) {
        frameId = window.requestAnimationFrame(tick);
      }
    };
    const updateStatic = () => {
      if (!reducedMotion || !inView || document.hidden) return;
      x = targetX;
      y = targetY;
      render();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const nextX = clamp((event.clientX - bounds.left) / Math.max(bounds.width, 1));
      const nextY = clamp((event.clientY - bounds.top) / Math.max(bounds.height, 1));
      const now = performance.now();
      const dt = Math.max((now - previousPointerTime) / 1000, 0.016);
      if (previousPointerTime) velocity = Math.min(1, Math.hypot(nextX - targetX, nextY - targetY) / dt * 0.35);
      previousPointerTime = now;
      targetX = nextX;
      targetY = nextY;
      pointerInside = true;
      updateStatic();
    };
    const onPointerEnter = () => { updateBounds(); pointerInside = true; };
    const onPointerLeave = () => {
      pointerInside = false;
      previousPointerTime = 0;
      targetX = 0.5;
      targetY = 0.5;
      updateStatic();
    };
    const onScroll = () => {
      if (!inView || document.hidden) return;
      const now = performance.now();
      const distance = Math.abs(window.scrollY - previousScroll);
      scrollVelocity = Math.min(1, distance / Math.max(now - scrollTime, 16) / 3);
      previousScroll = window.scrollY;
      scrollTime = now;
      updateBounds();
      updateStatic();
    };
    const onResize = () => { updateBounds(); updateStatic(); };
    const onVisibility = () => {
      if (document.hidden) stop();
      else { updateBounds(); previousScroll = window.scrollY; scrollTime = performance.now(); start(); updateStatic(); }
    };
    const onMotionPreference = () => {
      reducedMotion = motionPreference.matches;
      stop();
      elapsed = 0;
      velocity = 0;
      scrollVelocity = 0;
      x = targetX;
      y = targetY;
      render();
      start();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) { updateBounds(); previousScroll = window.scrollY; start(); updateStatic(); }
      else stop();
    }, { threshold: 0.01 });
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
    observer.observe(node);
    resizeObserver?.observe(node);
    motionPreference.addEventListener('change', onMotionPreference);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    node.addEventListener('pointerenter', onPointerEnter);
    node.addEventListener('pointermove', onPointerMove, { passive: true });
    node.addEventListener('pointerleave', onPointerLeave);
    render();

    return () => {
      stop();
      observer.disconnect();
      resizeObserver?.disconnect();
      motionPreference.removeEventListener('change', onMotionPreference);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      node.removeEventListener('pointerenter', onPointerEnter);
      node.removeEventListener('pointermove', onPointerMove);
      node.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);
  return root;
}

function wavePath(layer: number, time = 0, pointerX = 0.5, intensity = 0, scroll = 0) {
  const points = 126;
  let path = '';
  for (let index = 0; index <= points; index += 1) {
    const t = index / points;
    const px = 20 + t * 600;
    const envelope = Math.sin(t * Math.PI) ** 1.7;
    const contour = 0.28 + 0.72 * Math.exp(-((t - 0.53) ** 2) * 13);
    const pointerEnvelope = Math.exp(-((t - pointerX) ** 2) * 45);
    const phase = time * 0.38 + layer * 0.17;
    const primary = Math.sin(t * 31 + phase) * 0.63;
    const secondary = Math.sin(t * 61 - phase * 0.68) * 0.26;
    const detail = Math.sin(t * 103 + layer * 0.13 + phase * 0.2) * 0.11;
    const amplitude = (42 + layer * 4.2) * envelope * contour * (1 + pointerEnvelope * intensity * 0.52 + scroll * 0.22);
    const py = 222 + (primary + secondary + detail) * amplitude + (layer - 5) * 1.15;
    path += `${index === 0 ? 'M' : 'L'}${px.toFixed(2)},${py.toFixed(2)} `;
  }
  return path;
}

export const EchoWave: React.FC<AppVisualProps> = ({ className = '', compact = false }) => {
  const id = useId().replace(/:/g, '');
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const cursor = useRef<SVGGElement>(null);
  const timeLabel = useRef<SVGTextElement>(null);
  const root = useVisualMotion((frame) => {
    paths.current.forEach((path, layer) => {
      path?.setAttribute('d', wavePath(layer, frame.reducedMotion ? 0 : frame.time, frame.x, frame.velocity, frame.scrollVelocity));
    });
    const px = 20 + frame.x * 600;
    cursor.current?.setAttribute('transform', `translate(${px.toFixed(2)}, 0)`);
    if (timeLabel.current) timeLabel.current.textContent = `00:${String(Math.round(frame.x * 32)).padStart(2, '0')}`;
  });

  return (
    <figure ref={root as React.RefObject<HTMLElement>} className={`app-visual app-visual--echo ${compact ? 'app-visual--compact' : ''} ${className}`} aria-label="Illustrative on-device audio signal. The waveform responds to pointer movement and scrolling; it does not record sound.">
      <div className="app-visual__header"><span>ECH / SIGNAL STUDY</span><span className="app-visual__local"><i /> ON-DEVICE</span></div>
      <svg className="echo-wave__drawing" viewBox="0 0 640 420" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-wave`} x1="20" x2="620" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f1f0e9" stopOpacity="0" /><stop offset=".18" stopColor="#f1f0e9" stopOpacity=".5" /><stop offset=".5" stopColor="#fafafa" /><stop offset=".82" stopColor="#f1f0e9" stopOpacity=".5" /><stop offset="1" stopColor="#f1f0e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[80, 151, 222, 293, 364].map((y) => <path key={y} d={`M20 ${y}H620`} stroke="#1A1A1C" strokeWidth=".65" />)}
        {Array.from({ length: 17 }, (_, index) => <path key={index} d={`M${20 + index * 37.5} 76v292`} stroke="#1A1A1C" strokeWidth=".5" strokeDasharray={index % 4 ? '1 7' : undefined} />)}
        <text x="20" y="44" className="app-visual__svg-label">A VOICE. A LOCAL MODEL.</text>
        <text x="620" y="44" textAnchor="end" className="app-visual__svg-label">NO REMOTE INFERENCE</text>
        {Array.from({ length: 11 }, (_, layer) => <path key={layer} ref={(element) => { paths.current[layer] = element; }} d={wavePath(layer)} stroke={`url(#${id}-wave)`} strokeWidth={layer === 5 ? 1.3 : 0.7} opacity={layer === 5 ? 0.94 : 0.14 + layer * 0.027} />)}
        <g ref={cursor} transform="translate(320, 0)">
          <path d="M0 98V346" stroke="#f1f0e9" strokeOpacity=".24" strokeDasharray="2 5" />
          <circle cy="222" r="3.5" fill="#f1f0e9" />
          <path d="M-4 96H4M-4 348H4" stroke="#f1f0e9" strokeOpacity=".65" />
          <text ref={timeLabel} y="381" textAnchor="middle" className="echo-wave__time">00:16</text>
        </g>
        <text x="20" y="381" className="app-visual__svg-label">00:00</text>
        <text x="620" y="381" textAnchor="end" className="app-visual__svg-label">00:32</text>
      </svg>
      <figcaption className="app-visual__footer"><span>Parakeet TDT / local speech recognition</span><span>Illustrative signal · no microphone access</span></figcaption>
    </figure>
  );
};

const TRAINING_SETS = [
  { load: 70, reps: 8, rest: 90 },
  { load: 72.5, reps: 8, rest: 90 },
  { load: 75, reps: 8, rest: 90 },
  { load: 77.5, reps: 8, rest: 90 },
  { load: 80, reps: 8, rest: 90 },
];

function circleArc(radius: number, startDegrees: number, endDegrees: number) {
  const angle = (degrees: number) => (degrees - 90) * Math.PI / 180;
  const start = angle(startDegrees);
  const end = angle(endDegrees);
  return `M${320 + Math.cos(start) * radius},${222 + Math.sin(start) * radius} A${radius},${radius} 0 ${endDegrees - startDegrees > 180 ? 1 : 0} 1 ${320 + Math.cos(end) * radius},${222 + Math.sin(end) * radius}`;
}

export const MettleHUD: React.FC<AppVisualProps> = ({ className = '', compact = false }) => {
  const [selectedSet, setSelectedSet] = useState(2);
  const vector = useRef<SVGGElement>(null);
  const crosshair = useRef<SVGGElement>(null);
  const root = useVisualMotion((frame) => {
    const degrees = -30 + (frame.x - 0.5) * 40;
    vector.current?.setAttribute('transform', `rotate(${degrees.toFixed(2)},320,222)`);
    crosshair.current?.setAttribute('transform', `translate(${((frame.x - 0.5) * 24).toFixed(2)},${((frame.y - 0.5) * 18).toFixed(2)})`);
  });
  const sample = TRAINING_SETS[selectedSet];

  return (
    <figure ref={root as React.RefObject<HTMLElement>} className={`app-visual app-visual--mettle ${compact ? 'app-visual--compact' : ''} ${className}`} aria-label="Illustrative Mettle training progression. Select an example session to inspect its load, repetitions, and rest.">
      <div className="app-visual__header"><span>MTL / PROGRAM LOGIC</span><span className="app-visual__local"><i /> DETERMINISTIC</span></div>
      <div className="mettle-hud__instrument">
        <svg viewBox="0 0 640 440" fill="none" aria-hidden="true">
          <path d="M20 222H620M320 22V422" stroke="#1A1A1C" strokeWidth=".8" />
          {[76, 119, 160].map((radius) => <circle key={radius} cx="320" cy="222" r={radius} stroke="#29292b" strokeWidth={radius === 160 ? '.8' : '.6'} strokeDasharray={radius === 119 ? '1 6' : undefined} />)}
          {Array.from({ length: 72 }, (_, index) => {
            const angle = index * Math.PI / 36;
            const inner = index % 6 === 0 ? 167 : 172;
            return <path key={index} d={`M${320 + Math.cos(angle) * inner},${222 + Math.sin(angle) * inner}L${320 + Math.cos(angle) * 178},${222 + Math.sin(angle) * 178}`} stroke={index % 6 === 0 ? '#66676a' : '#2b2c2e'} strokeWidth=".8" />;
          })}
          <path d={circleArc(160, 219, 266 + selectedSet * 27)} stroke="#c7ff3e" strokeOpacity=".72" strokeWidth="1.7" />
          <g ref={vector} transform="rotate(-30,320,222)">
            <path d="M320 68V132M320 312V376" stroke="#c7ff3e" strokeOpacity=".48" />
            <path d="M315 76L320 68L325 76M315 368L320 376L325 368" stroke="#c7ff3e" strokeOpacity=".72" />
            <circle cx="320" cy="62" r="3" fill="#c7ff3e" />
          </g>
          <g ref={crosshair}>
            <path d="M166 135H206M186 115V155M438 301H478M458 281V321" stroke="#c7ff3e" strokeOpacity=".45" strokeWidth=".7" />
            <path d="M187 136L222 162M457 301L419 278" stroke="#c7ff3e" strokeOpacity=".18" strokeDasharray="2 4" />
          </g>
          <text x="34" y="45" className="app-visual__svg-label">LOAD / kg</text>
          <text x="608" y="45" textAnchor="end" className="app-visual__svg-label">LOCAL PROGRAM ENGINE</text>
          <text x="125" y="227" textAnchor="end" className="app-visual__svg-label">270</text>
          <text x="515" y="227" className="app-visual__svg-label">090</text>
          <text x="320" y="421" textAnchor="middle" className="app-visual__svg-label">180</text>
          <path d="M38 383L54 378L70 381L86 366L102 369L118 351" stroke="#c7ff3e" strokeOpacity=".5" />
          <text x="38" y="405" className="app-visual__svg-label">PROGRESSION STUDY</text>
        </svg>
        <div className="mettle-hud__readout" aria-live="polite" aria-atomic="true">
          <span>BACK SQUAT / EXAMPLE {String(selectedSet + 1).padStart(2, '0')}</span>
          <strong>{sample.load}<small>kg</small></strong>
          <p>{sample.reps} reps <i /> {sample.rest}s rest</p>
        </div>
      </div>
      <div className="mettle-hud__sets" aria-label="Example training sessions">
        {TRAINING_SETS.map((set, index) => (
          <button key={set.load} type="button" className={selectedSet === index ? 'is-selected' : ''} aria-pressed={selectedSet === index} onClick={() => setSelectedSet(index)} aria-label={`Example ${index + 1}: ${set.load} kilograms, ${set.reps} repetitions`}>
            <span>{String(index + 1).padStart(2, '0')}</span><i /><strong>{set.load}</strong>
          </button>
        ))}
      </div>
      <figcaption className="app-visual__footer"><span>The engine sets the numbers. AI explains them.</span><span>Illustrative training data</span></figcaption>
    </figure>
  );
};

const MEMORY_CARDS = [
  { id: 'PHY.01', subject: 'Physics', title: 'Momentum', prompt: 'How is momentum calculated?', answer: 'Mass multiplied by velocity.', mark: 'p = mv' },
  { id: 'BIO.02', subject: 'Biology', title: 'Cell membrane', prompt: 'What does a cell membrane control?', answer: 'What enters and leaves the cell.', mark: 'Selective boundary' },
  { id: 'ART.03', subject: 'Art', title: 'Negative space', prompt: 'Where is negative space?', answer: 'Around and between the subjects.', mark: 'Space / form' },
  { id: 'STA.04', subject: 'Statistics', title: 'Median', prompt: 'What is the median?', answer: 'The middle value of ordered data; for an even count, the mean of the middle two.', mark: 'Order → middle' },
  { id: 'MTH.05', subject: 'Mathematics', title: 'Derivative', prompt: 'What does a derivative describe?', answer: 'The instantaneous rate of change.', mark: 'dy / dx' },
  { id: 'ECO.06', subject: 'Economics', title: 'Opportunity cost', prompt: 'What is the cost of a choice?', answer: 'The value of the next-best alternative forgone.', mark: 'Choice / alternative' },
  { id: 'LIT.07', subject: 'Literature', title: 'Metaphor', prompt: 'What does a metaphor do?', answer: 'Describes one thing as another.', mark: 'Meaning through comparison' },
  { id: 'CS.08', subject: 'Computing', title: 'Recursion', prompt: 'How does a recursive function work?', answer: 'It calls itself with a smaller problem until a stopping condition is met.', mark: 'f(n) → f(n−1)' },
  { id: 'MUS.09', subject: 'Music', title: 'Octave', prompt: 'What is an octave’s frequency ratio?', answer: 'Two to one.', mark: '2 : 1' },
];

export const MemoryMatrix: React.FC<AppVisualProps> = ({ className = '', compact = false }) => {
  const [active, setActive] = useState(4);
  const activeRef = useRef(4);
  const keyboardFocus = useRef(false);
  const select = useCallback((index: number) => {
    if (index !== activeRef.current) {
      activeRef.current = index;
      setActive(index);
    }
  }, []);
  const root = useVisualMotion((frame) => {
    if (keyboardFocus.current) return;
    const y = frame.pointerInside ? frame.y : frame.viewportY;
    const row = Math.floor(clamp((y - 0.13) / 0.7, 0, 0.999) * 3);
    const column = frame.pointerInside ? Math.floor(clamp(frame.x, 0, 0.999) * 3) : 1;
    select(row * 3 + column);
  });

  return (
    <figure ref={root as React.RefObject<HTMLElement>} className={`app-visual app-visual--memora ${compact ? 'app-visual--compact' : ''} ${className}`} aria-label="Sample Memora flashcards made from study notes. Focus or select a card to read its question and answer.">
      <div className="app-visual__header"><span>MEM / LOCAL LIBRARY</span><span className="app-visual__local"><i /> SOURCE → RECALL</span></div>
      <div className="memory-matrix__grid" onPointerDown={() => { keyboardFocus.current = true; }} onFocusCapture={() => { keyboardFocus.current = true; }} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) keyboardFocus.current = false; }}>
        {MEMORY_CARDS.map((card, index) => (
          <button type="button" key={card.id} className={`memory-matrix__cell ${active === index ? 'is-active' : ''}`} onFocus={() => select(index)} onClick={() => { select(index); }} aria-pressed={active === index} aria-label={`${card.subject}: ${card.prompt} ${card.answer}`}>
            <span className="memory-matrix__id">{card.id}<i /></span>
            <strong>{card.title}</strong>
            <span className="memory-matrix__mark">{card.mark}</span>
            <span className="memory-matrix__source">STUDY NOTES / DRAFT CARD</span>
          </button>
        ))}
      </div>
      <div className="memory-matrix__reading">
        <span>{MEMORY_CARDS[active].id} / RECALL</span>
        <p>{MEMORY_CARDS[active].prompt}</p>
        <strong>{MEMORY_CARDS[active].answer}</strong>
      </div>
      <figcaption className="app-visual__footer"><span>Your notes → draft cards → your review</span><span>Sample study material</span></figcaption>
    </figure>
  );
};
