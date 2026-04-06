import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import EchoDetail from './components/EchoDetail';
import DownloadPage from './components/DownloadPage';
import PhilosophyPage from './components/PhilosophyPage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import NoiseOverlay from './components/NoiseOverlay';
import Scanline from './components/Scanline';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-obsidian min-h-screen text-text-primary selection:bg-neon selection:text-black font-sans">
        <ScrollToTop />
        <NoiseOverlay />
        <Scanline />
        
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/apps/echo" element={<EchoDetail />} />
            <Route path="/apps/:id" element={<ProductDetail />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;