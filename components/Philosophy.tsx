import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-black relative">
       <div className="max-w-5xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
         >
           <h2 className="text-apple-blue text-sm font-semibold tracking-tight mb-4 uppercase">Our Belief</h2>
           <h3 className="text-4xl md:text-6xl font-bold text-white mb-16 leading-tight tracking-tight">
             Your privacy is not for sale. <br/>
             The power belongs <span className="text-apple-gray">to you.</span>
           </h3>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
           {[
             { title: "Total Ownership", desc: "Your data stays on your device. We don't have accounts, so we can't see, share, or sell your life history." },
             { title: "Lightning Speed", desc: "No waiting for a server. Since the AI lives in your phone, it works instantly—even without signal." },
             { title: "Always Ready", desc: "Our apps work in the air, in the subway, and off the grid. Reliability isn't a feature; it's a right." }
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
               className="group"
             >
               <h4 className="text-xl font-bold text-white mb-4 group-hover:text-apple-blue transition-colors tracking-tight">{item.title}</h4>
               <p className="text-apple-gray leading-relaxed text-base font-medium">{item.desc}</p>
             </motion.div>
           ))}
         </div>
       </div>
    </section>
  );
};

export default Philosophy;