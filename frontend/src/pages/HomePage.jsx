import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Philosophy from '../components/Philosophy';
import Programs from '../components/Programs';
import Testimonial from '../components/Testimonial';
import Community from '../components/Community';
import CTA from '../components/CTA';

const HomePage = ({ onApplyClick, onBookingClick }) => {
  return (
    <>
      <Hero onApplyClick={onApplyClick} />
      <Stats />
      <Philosophy />
      <Programs onApplyClick={onApplyClick} />
      <Testimonial />
      <Community />
      <CTA onApplyClick={onApplyClick} onBookingClick={onBookingClick} />
    </>
  );
};

export default HomePage;