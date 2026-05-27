import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

// Scroll to top and track page view on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="bg-obsidian min-h-screen text-text-primary selection:bg-neon selection:text-black font-sans">
      <ScrollToTop />
      <NoiseOverlay />
      <Scanline />
      
      <Navigation />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/apps/echo" element={<Navigate to="/apps/echochamber" replace />} />
          <Route path="/apps/echochamber" element={<EchoDetail />} />
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
  );
};

export default App;