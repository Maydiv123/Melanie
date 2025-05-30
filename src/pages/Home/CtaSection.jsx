import React from 'react';
import Button from '../../components/ui/Button';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      {/* Top wave decoration */}
      <div className="cta-top-wave">
        <img src="/images/img_frame_34.png" alt="Top wave decoration" className="cta-wave-img-2" />
      </div>
      
      {/* Main content */}
      <div className="cta-container">
        <h2 className="cta-title">
          Start Swapping for a Greener World
        </h2>
        
        <div className="cta-btn-row">
          <Button 
            onClick={() => window.location.href = '/get-started'}
            variant="primary" size="large" className="cta-btn"
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="cta-bottom-wave">
        <img src="/images/img_frame_19.png" alt="Bottom wave decoration" className="cta-wave-img" />
      </div>
    </section>
  );
};

export default CtaSection;