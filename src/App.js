//Packages
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';

//Components
import CustomCursor from './Components/CustomCursor';
import AnimatedBackground from './Components/AnimatedBackground';
import ScrollProgress from './Components/ScrollProgress';
import PageTransition from './Components/PageTransition';

//Pages
import Home from './pages/Home';
import Commands from './pages/Commands';
import Features from './pages/Features';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/commands" element={<Commands />} />
              <Route path="/features" element={<Features />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </MainLayout>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <AnimatedBackground />
      <ScrollProgress />
      <AppContent />
    </Router>
  );
}
