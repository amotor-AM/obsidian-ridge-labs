import React, { useRef, useState } from 'react';
import { Archive, Database, ShieldCheck, WifiOff } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion';

const PRINCIPLES = [
  {
    icon: Database,
    title: 'Data has gravity',
    origin: 'Data gravity',
    description: 'Every transfer expands the surface of trust. Core processing should happen where private data is created whenever the hardware can do the work.',
    practice: 'Core path',
    value: 'On-device',
  },
  {
    icon: ShieldCheck,
    title: 'Trust should be inspectable',
    origin: 'Nullius in verba · Take nobody’s word for it',
    description: 'A privacy policy is not enough. Data flows should be documented, permissions should appear in context, and source should be available where practical.',
    practice: 'Connections',
    value: 'Explained first',
  },
  {
    icon: WifiOff,
    title: 'Offline should be excellent',
    origin: 'Offline default',
    description: 'The network should add optional capability, not grant permission to use the core product. After required setup, important work should continue without it.',
    practice: 'Network',
    value: 'Optional for core work',
  },
  {
    icon: Archive,
    title: 'Memory should be deliberate',
    origin: 'Deliberate retention',
    description: 'Software should keep only what serves the person using it. Retention and deletion should be understandable, local where possible, and under user control.',
    practice: 'Retention',
    value: 'User-directed',
  },
];

const AxiomScroller: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 35%'],
  });

  return (
    <section ref={sectionRef} id="principles" className="philosophy-principles" aria-labelledby="principles-title">
      <div className="section-frame">
        <div className="section-index">
          <span>02 / Countermeasures</span>
          <span>Four constraints for private software</span>
        </div>

        <div className="philosophy-principles__intro">
          <p className="section-kicker">The operating system</p>
          <h2 id="principles-title">Four principles.<br /><em>One boundary.</em></h2>
          <p>These are not slogans. They are the constraints we use when deciding what to build and how it should behave.</p>
        </div>

        <div className="countermeasure-sequence">
          <aside className="countermeasure-rail" aria-hidden="true">
            <div className="countermeasure-rail__number">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeIndex}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <small>/ 04</small>
            </div>
            <div className="countermeasure-rail__ridge"><i /><i /><i /><i /></div>
            <div className="countermeasure-rail__progress"><motion.i style={{ scaleY: scrollYProgress }} /></div>
            <p>{PRINCIPLES[activeIndex].origin}</p>
          </aside>

          <div className="countermeasure-list">
            {PRINCIPLES.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.article
                  key={principle.title}
                  className={activeIndex === index ? 'is-active' : ''}
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ amount: 0.55 }}
                  initial={false}
                  whileInView={reducedMotion ? undefined : { y: [14, 0] }}
                  transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  aria-labelledby={`principle-${index + 1}`}
                >
                  <div className="countermeasure-list__meta">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{principle.origin}</span>
                  </div>
                  <Icon aria-hidden="true" />
                  <h3 id={`principle-${index + 1}`}>{principle.title}</h3>
                  <p>{principle.description}</p>
                  <dl>
                    <dt>{principle.practice}</dt>
                    <dd>{principle.value}</dd>
                  </dl>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AxiomScroller;
