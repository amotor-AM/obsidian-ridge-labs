import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-obsidian-light/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 z-50">
            <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            Obsidian Ridge Labs
          </Link>

          <div className="hidden md:flex gap-8 items-center">
             <Link to="/" className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">Home</Link>

             <div className="relative group h-full flex items-center" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-[13px] font-medium text-gray-400 hover:text-white transition-colors py-2">
                   Apps <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                      <div className="glass-panel rounded-apple-sm p-2 shadow-2xl">
                        {products.map((p) => (
                          <Link key={p.id} to={`/apps/${p.id}`} className="block p-3 hover:bg-white/10 rounded-lg group/item transition-all">
                            <div className="text-white font-semibold text-sm">{p.name}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5">{p.shortName} • Offline AI</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             <Link to="/blog" className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">Journal</Link>
             <Link to="/philosophy" className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">Philosophy</Link>
             
             <button onClick={() => handleNavClick('technology')} className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">Tech</button>

            <Link to="/download" className="apple-button text-[13px]">Download</Link>
          </div>

          <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center gap-6 pt-20">
             <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-apple-blue transition-colors">Home</Link>

             {/* Apps dropdown */}
             <div className="flex flex-col items-center">
               <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-2xl font-bold text-white hover:text-apple-blue transition-colors flex items-center gap-2">
                 Apps <ChevronDown size={18} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
               </button>
               <AnimatePresence>
                 {dropdownOpen && (
                   <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex flex-col items-center gap-3 mt-3 overflow-hidden">
                     {products.map(p => (
                       <Link key={p.id} to={`/apps/${p.id}`} onClick={() => setIsOpen(false)} className="text-base text-gray-400 hover:text-white transition-colors">{p.name}</Link>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>

             <Link to="/blog" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-apple-blue transition-colors">Journal</Link>
             <Link to="/philosophy" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-apple-blue transition-colors">Philosophy</Link>
             <Link to="/download" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-apple-blue transition-colors">Download</Link>
            <div className="mt-8 text-gray-500 text-xs">Obsidian Ridge Labs</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;