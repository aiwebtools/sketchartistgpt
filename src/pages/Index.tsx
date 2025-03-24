
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import DemoSection from '../components/DemoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import DisclaimerSection from '../components/DisclaimerSection';
import Footer from '../components/Footer';
import ConsentPopup from '../components/ConsentPopup';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-cyber-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <DemoSection />
      <TestimonialsSection />
      <FaqSection />
      <DisclaimerSection />
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
