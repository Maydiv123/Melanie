import React from 'react';
import Button from '../../components/ui/Button';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="bg-[#121212] py-32 relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full">
        <img src="/images/img_frame_34.svg" alt="Top wave decoration" className="w-full" />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-5 relative z-10">
        <h2 className="text-[#f1e811] text-7xl md:text-8xl font-semibold text-center max-w-5xl mx-auto leading-tight mb-16">
          Start Swapping for a Greener World
        </h2>
        
        <div className="flex justify-center">
          <Button 
            onClick={() => window.location.href = '/get-started'}
            variant="primary" size="large" className="py-5 px-12 text-xl"
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/images/img_frame_19.svg" alt="Bottom wave decoration" className="w-full" />
      </div>
    </section>
  );
};

export default CtaSection;