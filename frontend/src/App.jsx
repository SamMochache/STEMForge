import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import JournalPage from './pages/JournalPage';
import JournalPostPage from './pages/JournalPostPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ResourcesPage from './pages/ResourcesPage';
import { CareersPage, FAQPage } from './pages/CareersPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import ReportAbusePage from './pages/ReportAbusePage';
import SitemapPage from './pages/SitemapPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation scrolled={scrolled} />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/press" element={<div className="pt-32 pb-20 text-center"><h2>Press & Media</h2><p>Coming soon.</p></div>} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/report-abuse" element={<ReportAbusePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="*" element={<div className="pt-32 pb-20 text-center"><h2>Page Not Found</h2><a href="/">Go Home</a></div>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;