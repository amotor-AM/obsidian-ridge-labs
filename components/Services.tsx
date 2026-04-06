import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Lock, Zap, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  const technologies = [
    {
      icon: <Box className="w-8 h-8 text-neon" />,
      title: "Self-Contained Apps",
      desc: "Our apps come with everything they need to work. No extra downloads, no hidden fees, no internet required."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-neon" />,
      title: "Built for Mobile",
      desc: "Optimized to be fast while saving your battery. We use the latest phone tech to give you pro-level AI power."
    },
    {
      icon: <Lock className="w-8 h-8 text-neon" />,
      title: "Bank-Grade Security",
      desc: "Every app is locked with your phone's own security features. Your eyes only, guaranteed."
    },
    {
      icon: <Zap className="w-8 h-8 text-neon" />,
      title: "Instant Response",
      desc: "Experience zero-lag AI. Tap a button and see the results immediately. No 'processing' spinners here."
    }
  ];

  return (
    <section id="technology" className="py-32 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-12">
           <div>
             <h2 className="text-neon text-sm font-semibold tracking-tight mb-2 uppercase">Why Obsidian Ridge?</h2>
             <h3 className="text-4xl font-bold text-white tracking-tight">The Difference is Private.</h3>
           </div>
           <p className="text-gray-400 font-medium text-sm max-w-md mt-4 md:mt-0 text-right">
             Crafting the future of personal intelligence.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((s, i) => (
            <div key={i} className="glass-panel group">
              <div className="mb-8 p-4 bg-black/20 rounded-none border border-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{s.title}</h4>
              <p className="text-gray-400 text-base font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Internal Links — Contextual CTAs */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-lg font-medium max-w-lg">
            Want to understand the principles behind our architecture?
          </p>
          <div className="flex gap-6">
            <Link to="/philosophy" className="px-8 py-4 border border-neon text-neon hover:bg-neon hover:text-black transition-all font-display font-bold tracking-wider uppercase">
              Read Our Philosophy
            </Link>
            <Link to="/blog/offline-ai-revolution" className="px-8 py-4 border border-white/10 text-white hover:bg-white/10 transition-all font-display tracking-wider uppercase">
              Why Offline AI?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;