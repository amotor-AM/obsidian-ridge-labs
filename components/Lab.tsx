import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { analyzeProjectFeasibility } from '../services/geminiService';
import { AiResponse } from '../types';
import { Brain, Terminal, Loader2, ArrowRight, Activity, Cpu } from 'lucide-react';

const Lab: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AiResponse | null>(null);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setAnalyzing(true);
    setResult(null);
    try {
      const data = await analyzeProjectFeasibility(idea);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <section id="lab" className="py-32 px-6 md:px-12 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#0071e3_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-apple-blue text-sm font-bold tracking-widest mb-6 uppercase">Architecture Lab</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Test your <br/> <span className="text-apple-gray">concept.</span>
          </h3>
          <p className="text-apple-gray mb-12 font-medium text-lg leading-relaxed">
            Use our proprietary analysis engine (powered by Gemini) to determine if your app idea can be built using offline-first AI architecture.
          </p>

          <div className="apple-card p-1 overflow-hidden">
            <textarea 
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your app functionality... e.g., 'An app that identifies rare plants from photos and gives care tips without internet.'"
              className="w-full h-48 bg-transparent text-white p-6 font-medium text-base focus:outline-none resize-none placeholder-white/20"
            />
            <div className="flex justify-between items-center p-4 bg-white/[0.02] border-t border-white/5">
              <span className="text-xs text-apple-gray font-bold uppercase tracking-widest">
                {idea.length} Characters
              </span>
              <button 
                onClick={handleAnalyze}
                disabled={analyzing || !idea}
                className="apple-button flex items-center gap-3 px-8 py-3 bg-apple-blue text-white font-bold rounded-full hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {analyzing ? <Loader2 className="animate-spin" size={18} /> : <Activity size={18} />}
                {analyzing ? 'Analyzing...' : 'Run Diagnostics'}
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!result && !analyzing && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full flex flex-col justify-center items-center apple-card p-12 text-center border-dashed border-white/10"
              >
                <div className="w-24 h-24 bg-white/[0.03] rounded-full flex items-center justify-center mb-8">
                   <Brain size={48} className="text-white/10" />
                </div>
                <p className="text-apple-gray font-bold text-xs tracking-widest uppercase">Waiting for input stream...</p>
              </motion.div>
            )}

            {analyzing && (
               <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="h-full flex flex-col justify-center items-center apple-card p-12 text-center border-apple-blue/20 bg-apple-blue/[0.02]"
             >
               <div className="relative w-24 h-24 mb-10">
                  <div className="absolute inset-0 border-4 border-apple-blue/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-apple-blue border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Cpu size={32} className="text-apple-blue animate-pulse" />
                  </div>
               </div>
               <p className="text-apple-blue font-bold text-xs tracking-widest uppercase animate-pulse">Establishing Neural Link...</p>
               <div className="mt-8 w-full max-w-xs h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                 <motion.div 
                    className="h-full bg-apple-blue"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                 />
               </div>
             </motion.div>
            )}

            {result && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-full apple-card p-10 flex flex-col relative"
              >
                 <div className="absolute top-6 right-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                 </div>

                 <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
                   <div>
                     <span className="text-apple-gray font-bold text-xs block mb-3 tracking-widest uppercase">Feasibility Score</span>
                     <span className="text-6xl font-bold text-white tracking-tighter">{result.feasibilityScore}/100</span>
                   </div>
                   <div className="text-right">
                      <span className="text-apple-gray font-bold text-xs block mb-3 tracking-widest uppercase">Recommendation</span>
                      <span className={`font-bold text-xl tracking-tight ${result.feasibilityScore > 70 ? 'text-apple-blue' : 'text-red-400'}`}>
                        {result.feasibilityScore > 70 ? 'APPROVED' : 'CAUTION'}
                      </span>
                   </div>
                 </div>

                 <div className="mb-10">
                   <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Analysis Log</h4>
                   <p className="text-apple-gray text-base leading-relaxed font-medium">
                     {result.analysis}
                   </p>
                 </div>

                 <div className="mt-auto bg-white/[0.03] p-8 rounded-3xl border-l-4 border-apple-blue">
                   <h4 className="text-apple-blue font-bold text-xs uppercase tracking-widest mb-3">Next Step</h4>
                   <p className="text-white text-base font-medium leading-relaxed">{result.recommendation}</p>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Lab;
