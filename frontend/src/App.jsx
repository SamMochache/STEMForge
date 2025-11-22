import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import Testimonial from './components/Testimonial';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen antialiased">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Stats />
      <Philosophy />
      <Programs />
      <Testimonial />
      <Community />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;