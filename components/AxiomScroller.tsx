import React, { useRef, useState } from 'react';
import { Archive, Database, ShieldCheck, WifiOff } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion';

const PRINCIPLES = [
  {
    icon: Database,
    title: 'DATA HAS GRAVITY',
    origin: 'Countermeasure 01',
    description: 'Every transfer adds a network, processor, log, policy, and failure point. Obsidian Ridge Labs keeps core AI close to private data whenever supported Apple hardware can do the work.',
    practice: 'Core path',
    value: 'On-device',
  },
  {
    icon: ShieldCheck,
    title: 'THE CLOUD MUST EARN ITS PLACE',
    origin: 'Countermeasure 02',
    description: 'A connection should exist only when it delivers a capability the device cannot provide well on its own. Core work stays local. Optional services are named before they are used.',
    practice: 'Network access',
    value: 'Purpose-bound',
  },
  {
    icon: WifiOff,
    title: 'OFFLINE IS THE TEST',
    origin: 'Offline default',
    description: 'The network should add a specific capability, not control the core experience. After required setup, important work should continue without Wi-Fi or cellular service.',
    practice: 'Core workflows',
    value: 'Offline-ready',
  },
  {
    icon: Archive,
    title: 'MEMORY BELONGS TO YOU',
    origin: 'Deliberate memory',
    description: 'Personal software should not keep more than it needs. Storage, export, retention, and deletion should be clear and controlled by the person who created the data.',
    practice: 'Retention',
    value: 'User-controlled',
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
          <span>Four rules for private software</span>
        </div>

        <div className="philosophy-principles__intro">
          <p className="section-kicker">The counter architecture</p>
          <h2 id="principles-title">Four refusals.<br /><em>One private standard.</em></h2>
          <p>These rules decide what belongs on the device, what may connect, and what the user must always control.</p>
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
            <div className="countermeasure-rail__progress"><motion.i style={{ scaleY: reducedMotion ? 1 : scrollYProgress }} /></div>
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
