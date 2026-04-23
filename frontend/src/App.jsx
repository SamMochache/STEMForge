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

// Modals
import ApplicationModal from './components/ApplicationModal';
import BookingModal from './components/BookingModal';

// Placeholder pages
const ResourcesPage = () => (
  <main className="pt-40 pb-20 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-light text-neutral-900 mb-8">Resources & Learning Guides</h1>
    <p className="text-neutral-600 font-light leading-relaxed">
      Free resources, guides, and webinars coming soon.
    </p>
  </main>
);

const ScholarshipsPage = () => (
  <main className="pt-40 pb-20 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-light text-neutral-900 mb-8">Scholarships & Financial Aid</h1>
    <p className="text-neutral-600 font-light leading-relaxed">
      Information about scholarships and financial aid programs.
    </p>
  </main>
);

const PressPage = () => (
  <main className="pt-40 pb-20 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-light text-neutral-900 mb-8">Press & Media</h1>
    <p className="text-neutral-600 font-light leading-relaxed">
      Media coverage, press releases, and awards coming soon.
    </p>
  </main>
);

const NotFoundPage = () => (
  <main className="pt-40 pb-20 px-8 max-w-5xl mx-auto text-center">
    <h1 className="text-4xl font-light text-neutral-900 mb-4">Page Not Found</h1>
    <p className="text-neutral-600 font-light mb-8">
      The page you're looking for doesn't exist.
    </p>
    <a href="/" className="bg-neutral-900 text-white px-8 py-3 text-sm inline-block hover:bg-neutral-800 transition-colors">
      Go Home
    </a>
  </main>
);

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
  const [applicationModal, setApplicationModal] = useState({ open: false, program: null });
  const [bookingModal, setBookingModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openApplication = useCallback((program = null) => {
    setApplicationModal({ open: true, program });
  }, []);

  const closeApplication = useCallback(() => {
    setApplicationModal({ open: false, program: null });
  }, []);

  const openBooking = useCallback(() => setBookingModal(true), []);
  const closeBooking = useCallback(() => setBookingModal(false), []);

  return (
    <div className="bg-white min-h-screen antialiased">
      <ScrollToTop />
      <Navigation scrolled={scrolled} onApplyClick={() => openApplication()} />

      <Routes>
        {/* Main pages */}
        <Route
          path="/"
          element={<HomePage onApplyClick={openApplication} onBookingClick={openBooking} />}
        />
        <Route path="/about" element={<AboutPage onApplyClick={openApplication} />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />

        {/* Programs */}
        <Route path="/programs" element={<ProgramsPage onApplyClick={openApplication} />} />
        <Route
          path="/programs/:slug"
          element={<ProgramDetailPage onApplyClick={openApplication} />}
        />

        {/* Blog */}
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<JournalPostPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage onBookingClick={openBooking} />} />

        {/* FAQ & Resources */}
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/scholarships" element={<ScholarshipsPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />

        {/* Legal */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/report" element={<ReportAbusePage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />

      <ApplicationModal
        isOpen={applicationModal.open}
        onClose={closeApplication}
        selectedProgram={applicationModal.program}
      />

      <BookingModal isOpen={bookingModal} onClose={closeBooking} />
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
