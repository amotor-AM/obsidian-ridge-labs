import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-xl font-bold text-white tracking-tight hover:text-neon transition-colors">
              Obsidian Ridge Labs
            </Link>
            <p className="text-apple-gray text-sm font-medium max-w-xs">
              Boutique mobile app studio specializing in private, offline-first AI architecture. Your AI. Your phone. Your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <nav aria-label="Applications">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Apps</h4>
              <div className="flex flex-col gap-3">
                <Link to="/apps/vault" className="text-apple-gray text-sm hover:text-white transition-colors">Vault — AI Finance</Link>
                <Link to="/apps/mind" className="text-apple-gray text-sm hover:text-white transition-colors">Mind Palace — AI Journal</Link>
                <Link to="/apps/echo" className="text-apple-gray text-sm hover:text-white transition-colors">Echo Chamber — Transcription</Link>
                <Link to="/apps/nexus" className="text-apple-gray text-sm hover:text-white transition-colors">Decision Nexus — Strategy</Link>
              </div>
            </nav>
            <nav aria-label="Journal">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Journal</h4>
              <div className="flex flex-col gap-3">
                <Link to="/blog" className="text-apple-gray text-sm hover:text-white transition-colors">All Articles</Link>
                <Link to="/blog/apple-ecosystem-privacy" className="text-apple-gray text-sm hover:text-white transition-colors">Why We Build for Apple</Link>
                <Link to="/blog/finance-app-red-flags" className="text-apple-gray text-sm hover:text-white transition-colors">Cost of Free Finance Apps</Link>
                <Link to="/blog/otter-vs-echo" className="text-apple-gray text-sm hover:text-white transition-colors">Otter.ai vs Echo Chamber</Link>
                <Link to="/blog/notion-vs-mindpalace" className="text-apple-gray text-sm hover:text-white transition-colors">Notion vs Mind Palace</Link>
                <Link to="/blog/offline-ai-revolution" className="text-apple-gray text-sm hover:text-white transition-colors">Why Offline AI is Faster</Link>
              </div>
            </nav>
            <nav aria-label="Company">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Company</h4>
              <div className="flex flex-col gap-3">
                <Link to="/download" className="text-apple-gray text-sm hover:text-white transition-colors">Download Apps</Link>
                <Link to="/philosophy" className="text-apple-gray text-sm hover:text-white transition-colors">Philosophy</Link>
                <Link to="/blog" className="text-apple-gray text-sm hover:text-white transition-colors">Journal</Link>
                <Link to="/privacy" className="text-apple-gray text-sm hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-apple-gray text-sm hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </nav>
            <nav aria-label="Social">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Social</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-apple-gray text-sm hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-apple-gray text-sm hover:text-white transition-colors">Twitter</a>
              </div>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-apple-gray text-[12px] font-medium">
            &copy; {new Date().getFullYear()} Obsidian Ridge Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] font-medium text-apple-gray">
             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link to="/philosophy" className="hover:text-white transition-colors">Philosophy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
