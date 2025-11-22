import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import JournalPage from './pages/JournalPage';
import JournalPostPage from './pages/JournalPostPage';
import ContactPage from './pages/ContactPage';
import ApplicationModal from './components/ApplicationModal';
import BookingModal from './components/BookingModal';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [applicationModal, setApplicationModal] = useState({ open: false, program: null });
  const [bookingModal, setBookingModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openApplication = (program = null) => {
    setApplicationModal({ open: true, program });
  };

  const closeApplication = () => {
    setApplicationModal({ open: false, program: null });
  };

  return (
    <Router>
      <div className="bg-white min-h-screen antialiased">
        <Navigation 
          scrolled={scrolled} 
          onApplyClick={() => openApplication()}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onApplyClick={openApplication}
                onBookingClick={() => setBookingModal(true)}
              />
            } 
          />
          <Route 
            path="/programs" 
            element={<ProgramsPage onApplyClick={openApplication} />} 
          />
          <Route 
            path="/programs/:slug" 
            element={<ProgramDetailPage onApplyClick={openApplication} />} 
          />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalPostPage />} />
          <Route 
            path="/contact" 
            element={<ContactPage onBookingClick={() => setBookingModal(true)} />} 
          />
        </Routes>

        <Footer />

        <ApplicationModal 
          isOpen={applicationModal.open}
          onClose={closeApplication}
          selectedProgram={applicationModal.program}
        />

        <BookingModal
          isOpen={bookingModal}
          onClose={() => setBookingModal(false)}
        />
      </div>
    </Router>
  );
}

export default App;