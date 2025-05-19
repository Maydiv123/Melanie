import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import PartnersSection from './PartnersSection';
import FeaturesSection from './FeaturesSection';
import StorySection from './StorySection';
import WhyUsSection from './WhyUsSection';
import ProductsSection from './ProductsSection';
import CtaSection from './CtaSection';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Melanie - Environmentalist Portfolio';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <StorySection />
        <WhyUsSection />
        <ProductsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;