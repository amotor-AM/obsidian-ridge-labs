import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, ShieldCheck, Server, ShieldAlert, FileDigit, Database, Zap, ArrowRight } from 'lucide-react';
import SEO, { buildBreadcrumbs } from './SEO';

const PhilosophyPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const xMove = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <div ref={containerRef} className="min-h-screen bg-obsidian text-text-primary pt-32 pb-20 overflow-hidden relative">
      <SEO
        title="Philosophy — Why We Build Offline-First AI"
        description="The Obsidian Ridge Labs manifesto on privacy, data sovereignty, and offline-first architecture. Learn why we believe the cloud is a surveillance engine and how on-device AI restores digital autonomy."
        jsonLd={[
          buildBreadcrumbs([
            { name: 'Home', url: '/' },
            { name: 'Philosophy', url: '/philosophy' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Obsidian Ridge Labs Philosophy',
            description: 'Our manifesto on privacy, offline-first AI, and digital sovereignty.',
            url: 'https://obsidianridgelabs.com/philosophy',
            mainEntity: {
              '@type': 'Organization',
              name: 'Obsidian Ridge Labs',
              url: 'https://obsidianridgelabs.com',
              knowsAbout: ['Privacy', 'Offline AI', 'On-device machine learning', 'Zero-knowledge architecture', 'Data sovereignty'],
            },
          },
        ]}
      />

      {/* Background Kinetic Typography */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden flex flex-col justify-between z-0">
        {[...Array(20)].map((_, i) => (
           <div key={i} className="text-[10vw] leading-[0.8] font-display font-bold whitespace-nowrap text-white select-none" style={{ marginLeft: `${i % 2 === 0 ? -20 : 0}vw` }}>
              SILENCE THE CLOUD SILENCE THE CLOUD SILENCE THE CLOUD
           </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header / Manifesto Declaration */}
        <section className="min-h-[80vh] flex flex-col justify-center border-b border-white/10 mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <div className="flex items-center gap-4 mb-8">
               <span className="bg-alert text-black px-2 py-1 font-mono text-xs font-bold uppercase">Classified</span>
               <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Protocol Omega // v.2024</span>
             </div>

             <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-12 tracking-tighter leading-[0.85]">
               THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">GLASS</span><br/>
               HOUSE IS <br/>
               <span className="italic text-gray-700">BURNING.</span>
             </h1>

             <div className="max-w-2xl text-xl md:text-2xl font-light leading-relaxed border-l-4 border-alert pl-8 text-gray-300">
               <p>
                 We are living in the greatest surveillance engine ever constructed. 
                 Convenience was the bait. Your digital soul was the catch.
                 <span className="text-white font-bold block mt-4">It is time to go dark.</span>
               </p>
             </div>
           </motion.div>
        </section>

        {/* The Problem: Redacted Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           <div className="lg:col-span-4 sticky top-32">
              <h2 className="text-alert font-mono text-sm tracking-[0.2em] mb-4 uppercase">/// Threat Model</h2>
              <h3 className="text-4xl font-display font-bold text-white mb-6">THE PANOPTICON</h3>
              <div className="w-full aspect-square border border-white/10 bg-black relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-alert/5 animate-pulse"></div>
                 <Eye size={120} className="text-alert opacity-80" />
                 <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,black_3px)] bg-[size:100%_4px]"></div>
              </div>
           </div>

           <div className="lg:col-span-8 space-y-12 font-mono text-lg text-gray-400">
              <p className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors relative group">
                <span className="absolute top-0 right-0 bg-white/10 text-[10px] px-2 py-1 text-white">FIG 1.0</span>
                Every tap, swipe, and voice command you issue is <span className="bg-white/10 text-transparent group-hover:bg-transparent group-hover:text-neon transition-all duration-500 cursor-help select-none">logged, indexed, and sold</span> to the highest bidder. The "Cloud" is simply someone else's computer, and you do not have the root password.
              </p>

              <p className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors relative group">
                <span className="absolute top-0 right-0 bg-white/10 text-[10px] px-2 py-1 text-white">FIG 1.1</span>
                Your financial history determines your credit. Your location history determines your insurance. Your search history determines your <span className="bg-white/10 text-transparent group-hover:bg-transparent group-hover:text-alert transition-all duration-500 cursor-help select-none">employability and freedom</span>.
              </p>

              <div className="p-12 border border-alert/30 bg-alert/5 text-white font-display text-3xl font-bold uppercase leading-tight tracking-wide">
                 "If you think you have<br/>
                 nothing to hide, you are<br/>
                 not looking closely enough."
              </div>
           </div>
        </section>

        {/* The Solution: Horizontal Scroll Axioms */}
        <section className="mb-32 relative">
           <div className="flex justify-between items-end mb-12">
              <h2 className="text-neon font-mono text-sm tracking-[0.2em] uppercase">/// Counter-Measures</h2>
              <div className="text-xs font-mono text-gray-500">SCROLL TO DECRYPT -&gt;</div>
           </div>

           <div className="overflow-x-auto pb-8 -mx-6 px-6 md:-mx-12 md:px-12 hide-scrollbar flex gap-8">
              {[
                { 
                   icon: <Server />, 
                   title: "DATA GRAVITY", 
                   desc: "Data must remain where it is created. The physics of privacy dictates that once data moves, it is vulnerable. We build heavy apps that keep mass on-device." 
                },
                { 
                   icon: <ShieldCheck />, 
                   title: "NULLIUS IN VERBA", 
                   desc: "'Take nobody's word for it.' We do not publish our source code; our IP stays protected. Verification is behavioral: intelligence runs on-device, egress is minimal by design, and telemetry is absent by architecture. Judge the system by what it refuses to exfiltrate, not by a public repository." 
                },
                { 
                   icon: <Zap />, 
                   title: "OFFLINE DEFAULT", 
                   desc: "Connectivity is a feature, not a requirement. Intelligence should function in a submarine, a bunker, or a mountaintop." 
                },
                { 
                   icon: <FileDigit />, 
                   title: "EPHEMERALITY", 
                   desc: "Digital permanence is a bug. We design systems that know how to forget. Auto-deletion and secure overwrites are core primitives." 
                }
              ].map((item, i) => (
                <div key={i} className="min-w-[350px] md:min-w-[450px] bg-obsidian-light border border-white/10 p-8 md:p-12 flex flex-col justify-between group hover:border-neon transition-colors duration-500">
                   <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity group-hover:text-neon">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 48 })}
                   </div>
                   <div>
                      <h4 className="text-3xl font-display font-bold text-white mb-4">{item.title}</h4>
                      <p className="font-mono text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                   </div>
                   <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-600">
                      <span>AXIOM_0{i+1}</span>
                      <span className="group-hover:text-neon">ACTIVE</span>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* The Architecture */}
        <section className="mb-32">
           <div className="border border-white/10 bg-black p-8 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.01)_10px,rgba(255,255,255,0.01)_20px)]"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">THE BLACK BOX</h2>
                    <p className="text-xl text-gray-400 mb-8 font-light">
                       We don't build "Users". We build "Owners".
                    </p>
                    <p className="text-gray-500 font-mono text-sm leading-relaxed mb-8">
                       Traditional apps are thin clients for a massive server brain. Obsidian Ridge apps are the brain. We stuff Gigabytes of neural weights into the install package. The app <em>is</em> the intelligence.
                    </p>
                    <ul className="space-y-4 font-mono text-sm text-neon">
                       <li className="flex items-center gap-2">
                          <Database size={16} /> LOCAL VECTOR STORES
                       </li>
                       <li className="flex items-center gap-2">
                          <ShieldAlert size={16} /> MILITARY-GRADE ENCRYPTION
                       </li>
                       <li className="flex items-center gap-2">
                          <Server size={16} /> ZERO-KNOWLEDGE ARCHITECTURE
                       </li>
                    </ul>
                 </div>
                 
                 <div className="h-full min-h-[300px] border border-white/20 relative flex items-center justify-center bg-obsidian-light">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-48 h-48 border-2 border-neon rotate-45 opacity-20 animate-pulse"></div>
                       <div className="w-48 h-48 border-2 border-white rotate-12 opacity-10 absolute"></div>
                    </div>
                    <div className="font-display font-bold text-6xl text-white z-10 mix-blend-difference">
                       YOUR<br/>DATA
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Philosophy in Action — Internal Links to Products */}
        <section className="mb-32">
          <h2 className="text-neon font-mono text-sm tracking-[0.2em] uppercase mb-12">/// See the Philosophy in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'vault', name: 'VAULT', desc: 'Private AI finance — no bank passwords, no cloud.', axiom: 'Data Gravity' },
              { id: 'mind', name: 'MIND PALACE', desc: 'AI journal that never leaves your device.', axiom: 'Ephemerality' },
              { id: 'echo', name: 'ECHO CHAMBER', desc: 'Offline meeting transcription for the paranoid executive.', axiom: 'Offline Default' },
              { id: 'nexus', name: 'DECISION NEXUS', desc: 'AI adversarial analysis, zero network access.', axiom: 'Nullius in Verba' },
            ].map(app => (
              <Link key={app.id} to={`/apps/${app.id}`} className="group border border-white/10 bg-white/[0.02] p-8 hover:border-neon transition-colors duration-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-neon transition-colors">{app.name}</h4>
                  <span className="text-[10px] font-mono text-gray-600 uppercase">{app.axiom}</span>
                </div>
                <p className="text-gray-400 font-mono text-sm mb-6">{app.desc}</p>
                <div className="flex items-center gap-2 text-neon text-xs font-mono uppercase tracking-widest">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Read More — Blog Links */}
        <section className="mb-32 border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <h2 className="text-neon font-mono text-sm tracking-[0.2em] uppercase mb-8">/// Further Reading</h2>
          <div className="space-y-6">
            <Link to="/blog/apple-ecosystem-privacy" className="group flex justify-between items-center">
              <span className="text-white font-display text-xl group-hover:text-neon transition-colors">Why We Will Only Ever Build for Apple</span>
              <ArrowRight size={16} className="text-gray-600 group-hover:text-neon transition-colors" />
            </Link>
            <Link to="/blog/finance-app-red-flags" className="group flex justify-between items-center">
              <span className="text-white font-display text-xl group-hover:text-neon transition-colors">The Invisible Cost of 'Free' Finance Apps</span>
              <ArrowRight size={16} className="text-gray-600 group-hover:text-neon transition-colors" />
            </Link>
            <Link to="/blog/offline-ai-revolution" className="group flex justify-between items-center">
              <span className="text-white font-display text-xl group-hover:text-neon transition-colors">Why Offline AI is Faster than ChatGPT</span>
              <ArrowRight size={16} className="text-gray-600 group-hover:text-neon transition-colors" />
            </Link>
            <Link to="/blog" className="group flex justify-between items-center">
              <span className="text-white font-display text-xl group-hover:text-neon transition-colors">All Journal Entries</span>
              <ArrowRight size={16} className="text-gray-600 group-hover:text-neon transition-colors" />
            </Link>
          </div>
        </section>

        {/* Footer Terminal */}
        <section className="max-w-3xl mx-auto text-center font-mono py-20">
           <div className="inline-block border border-white/10 bg-black p-8 mb-8">
              <p className="text-gray-500 mb-2 text-xs">root@obsidian-ridge:~/manifesto# ./sign.sh</p>
              <p className="text-white text-lg typewriter">
                 Are you ready to unplug?
                 <span className="inline-block w-3 h-6 bg-neon ml-2 animate-pulse align-middle"></span>
              </p>
           </div>

           <div className="flex justify-center gap-6 text-sm uppercase tracking-widest text-gray-500">
              <span>Encrypted</span>
              <span>•</span>
              <span>Anonymous</span>
              <span>•</span>
              <span>Sovereign</span>
           </div>
        </section>

      </div>
    </div>
  );
};

export default PhilosophyPage;