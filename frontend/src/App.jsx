import { useState, useEffect, useCallback } from 'react';
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
import { CareersPage, FAQPage } from './pages/CareersPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import ReportAbusePage from './pages/ReportAbusePage';
import SitemapPage from './pages/SitemapPage';
import ResourcesPage from './pages/ResourcesPage';

// Scroll to top on route change
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
          {/* Main pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />

          {/* Programs / Solutions */}
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />

          {/* Blog / Insights */}
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalPostPage />} />

          {/* Contact / Partner With Us - B2B discovery form */}
          <Route path="/contact" element={<ContactPage />} />

          {/* FAQ & Resources */}
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/scholarships" element={<div className="pt-32 pb-20 text-center"><h2>Scholarships & Financial Aid</h2><p>Information about scholarships and financial aid programs.</p></div>} />
          <Route path="/press" element={<div className="pt-32 pb-20 text-center"><h2>Press & Media</h2><p>Media coverage, press releases, and awards coming soon.</p></div>} />

          {/* Legal */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/report-abuse" element={<ReportAbusePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          {/* 404 */}
          <Route path="*" element={<div className="pt-32 pb-20 text-center"><h2>Page Not Found</h2><p>The page you're looking for doesn't exist.</p><a href="/">Go Home</a></div>} />
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