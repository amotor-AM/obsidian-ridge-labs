import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-24 text-center"
        >
          <h2 className="text-neon text-sm font-semibold tracking-tight mb-4 uppercase">App Suite</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Offline Tools.
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A collection of specialized tools designed for the modern professional. 
            Privacy by design. Performance by default.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel group flex flex-col"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-black/20 rounded-none border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-neon" />
                  </div>
                  {product.id === 'echo' ? (
                    <span className="text-[11px] font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded-none uppercase tracking-wider">{product.version}</span>
                  ) : (
                    <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-none uppercase tracking-wider">Coming Soon</span>
                  )}
                </div>

                <h4 className="text-neon text-xs font-bold mb-2 uppercase tracking-widest">{product.category}</h4>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {product.name}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-12 flex-grow text-lg">
                  {product.description}
                </p>

                <div className="space-y-6 border-t border-white/5 pt-8 mt-auto">
                  <div className="flex flex-wrap gap-4">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="text-[12px] font-medium text-gray-400">
                        {spec.label}: <span className="text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {product.id === 'echo' ? (
                      <Link
                        to={`/apps/${product.id}`}
                        className="bg-neon text-black font-display font-bold uppercase tracking-wider hover:bg-white w-full text-center flex items-center justify-center gap-2 py-3"
                      >
                        Learn More
                        <ArrowRight size={18} />
                      </Link>
                    ) : (
                      <Link
                        to={`/apps/${product.id}`}
                        className="bg-white/10 text-white/60 font-display font-bold uppercase tracking-wider w-full text-center flex items-center justify-center gap-2 py-3 hover:bg-white/15 transition-colors"
                      >
                        Coming Soon
                        <ArrowRight size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;