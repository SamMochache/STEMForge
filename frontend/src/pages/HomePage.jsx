import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Philosophy from '../components/Philosophy';
import Programs from '../components/Programs';
import TheModel from '../components/TheModel';
import WhySTEMForge from '../components/WhySTEMForge';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import ApplicationModal from '../components/ApplicationModal';
import BookingModal from '../components/BookingModal';
import { useState } from 'react';

const HomePage = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openApplicationModal = (programData) => {
    setIsApplicationOpen(true);
    // Pass program data if available
    if (programData) {
      // Store program data somewhere accessible to the modal if needed
      // For now, we'll just open the modal and let it fetch programs
    }
  };

  const closeApplicationModal = () => {
    setIsApplicationOpen(false);
  };

  const openBookingModal = () => {
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
  };

  return (
    <>
      <Hero
        onApplyClick={openApplicationModal}
        onBookingClick={openBookingModal}
      />
    </>
  );
};

export default HomePage;