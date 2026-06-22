import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Philosophy from '../components/Philosophy';
import Programs from '../components/Programs';
import TheModel from '../components/TheModel';
import WhySTEMForge from '../components/WhySTEMForge';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

const HomePage = ({ onApplyClick, onBookingClick }) => {
  return (
    <>
      <Hero onApplyClick={onApplyClick} />
      <Stats />
      <Philosophy />
      <Programs onApplyClick={onApplyClick} />
      <TheModel onApplyClick={onApplyClick} />
      <WhySTEMForge />
      <Testimonial />
      <CTA onApplyClick={onApplyClick} onBookingClick={onBookingClick} />
    </>
  );
};

export default HomePage;