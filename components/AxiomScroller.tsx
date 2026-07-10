import React, { useEffect, useRef, useState } from 'react';
import { Server, ShieldCheck, Zap, FileDigit } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/* The four "Counter-Measures" axioms. Framer Motion maps page progress to a
   horizontal desktop journey; mobile and reduced-motion users get a normal
   vertical reading order. The content stays present in server-rendered HTML. */

const AXIOMS = [
  {
    icon: Server,
    title: 'DATA GRAVITY',
    desc: "Data must remain where it is created. The physics of privacy is simple: once data moves, it is vulnerable. So we build heavy apps that keep the mass (your data and the AI) on the device.",
  },
  {
    icon: ShieldCheck,
    title: 'NULLIUS IN VERBA',
    desc: "'Take nobody's word for it.' Don't judge an app by its privacy policy. Judge it by what it actually sends. Our intelligence runs on-device, so your content never needs to leave to be useful, and any diagnostics are opt-in and off by default. Watch what a system refuses to send.",
  },
  {
    icon: Zap,
    title: 'OFFLINE DEFAULT',
    desc: "Connectivity is a feature, not a requirement. The intelligence should work in a basement, on a plane, or off the grid, because it never needed the network to think in the first place.",
  },
  {
    icon: FileDigit,
    title: 'EPHEMERALITY',
    desc: "Digital permanence is a bug. We design systems that know how to forget: auto-deletion and secure overwrites are first-class primitives, not afterthoughts.",
  },
];

const AxiomScroller: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const query = window.matchMedia('(min-width: 1024px)');
    const measure = () => {
      setDesktop(query.matches);
      setDistance(query.matches ? Math.max(0, track.scrollWidth - section.clientWidth + 96) : 0);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    query.addEventListener('change', measure);
    return () => {
      observer.disconnect();
      query.removeEventListener('change', measure);
    };
  }, []);

  const horizontal = desktop && !reducedMotion;

  return (
    <section
      ref={sectionRef}
      style={horizontal ? { height: `calc(100vh + ${distance}px)` } : undefined}
      className="relative mb-16 md:mb-32 lg:mb-0"
    >
      <div className={horizontal ? 'sticky top-0 min-h-screen overflow-hidden flex flex-col justify-center' : ''}>
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-neon font-mono text-sm tracking-[0.2em] uppercase">/// Counter-Measures</h2>
          <div className="hidden lg:block text-xs font-mono text-gray-500">SCROLL TO EXPLORE &darr;</div>
        </div>

        <motion.div ref={trackRef} style={horizontal ? { x } : undefined} className="flex flex-col lg:flex-row gap-8 lg:pr-[12vw] will-change-transform">
          {AXIOMS.map((axiom, i) => {
            const Icon = axiom.icon;
            return (
              <div
                key={axiom.title}
                className="w-full lg:w-[460px] lg:flex-shrink-0 bg-obsidian-light border border-white/10 p-8 md:p-12 flex flex-col justify-between group hover:border-neon transition-colors duration-500"
              >
                <Icon size={48} className="mb-8 text-gray-500 group-hover:text-neon transition-colors duration-500" />
                <div>
                  <h4 className="text-3xl font-display font-bold text-white mb-4">{axiom.title}</h4>
                  <p className="font-mono text-sm text-gray-400 leading-relaxed">{axiom.desc}</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-600">
                  <span>AXIOM_0{i + 1}</span>
                  <span className="group-hover:text-neon transition-colors">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AxiomScroller;
