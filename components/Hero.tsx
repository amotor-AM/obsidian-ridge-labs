import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, ShieldCheck, Zap, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const [glitchText, setGlitchText] = useState("PURE PRIVACY");

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
    let interval: ReturnType<typeof setInterval>;
    
    const scramble = () => {
      let iteration = 0;
      const target = "PURE PRIVACY";
      clearInterval(interval);
      interval = setInterval(() => {
        setGlitchText(prev => 
          prev.split("").map((letter, index) => {
            if(index < iteration) return target[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        if(iteration >= target.length) clearInterval(interval);
        iteration += 1/3;
      }, 30);
    };

    const timer = setInterval(scramble, 6000);
    scramble();
    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden border-b border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-dim to-transparent opacity-20" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon blur-[120px] opacity-10 rounded-full" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6 text-neon text-sm tracking-widest uppercase font-mono">
            <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
            Your AI. Your Phone. Your Business.
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6 text-white tracking-tighter">
            {glitchText}
            <br />
            <span className="text-gray-500">INTELLIGENCE ON YOUR TERMS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-lg mb-10 font-light border-l-2 border-neon pl-6">
            We build apps for people who refuse to trade their privacy for convenience. 
            Powerful AI that lives <span className="text-white font-medium">strictly on your device</span>. No cloud. No accounts. No leaks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
             <button onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-8 py-4 bg-transparent border border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300 font-display font-bold tracking-wider uppercase text-lg">
              <span className="absolute inset-0 w-full h-full bg-neon/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Explore Our Apps
            </button>
            <Link to="/philosophy" className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-display tracking-wider uppercase text-lg text-center">
              Our Philosophy
            </Link>
          </div>
        </motion.div>

        {/* Simplified Benefits Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] border border-white/10 bg-black/40 backdrop-blur-sm p-8 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent animate-scanline" />
          
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="border border-white/5 p-6 flex flex-col justify-center items-center gap-4 hover:border-neon/50 transition-colors group">
              <Lock size={48} className="text-gray-500 group-hover:text-neon transition-colors" />
              <span className="text-gray-300 text-sm font-display font-bold text-center">100% PRIVATE</span>
            </div>
            <div className="border border-white/5 p-6 flex flex-col justify-center items-center gap-4 hover:border-neon/50 transition-colors group">
              <Zap size={48} className="text-gray-500 group-hover:text-neon transition-colors" />
              <span className="text-gray-300 text-sm font-display font-bold text-center">INSTANT SPEED</span>
            </div>
            <div className="col-span-2 border border-white/5 p-6 flex items-center justify-between hover:border-neon/50 transition-colors group relative overflow-hidden">
               <div className="z-10 flex items-center gap-4">
                 <Smartphone size={48} className="text-gray-500 group-hover:text-neon transition-colors" />
                 <div className="flex flex-col">
                   <span className="text-xl font-display font-bold text-white uppercase">Works Anywhere</span>
                   <span className="text-xs text-gray-500 font-mono">In flight. In tunnels. Offline.</span>
                 </div>
               </div>
               <div className="absolute right-0 bottom-0 p-4 opacity-20">
                 <div className="flex gap-1 items-end h-12">
                   {[40, 70, 30, 80, 50, 90, 20].map((h, i) => (
                     <motion.div 
                        key={i}
                        className="w-2 bg-neon"
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                     />
                   ))}
                 </div>
               </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between text-[10px] text-gray-600 font-mono border-t border-white/5 pt-4">
             <span className="text-neon uppercase">Security Level: Maximum</span>
             <span className="uppercase">Server Connection: Never</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;