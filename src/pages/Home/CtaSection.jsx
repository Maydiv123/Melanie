import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import './CtaSection.css';

const CtaSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="cta-section">
    
      {/* Main content */}
      <div className="cta-container">
        <h2 className="cta-title">
          Start Swapping for a Greener World
        </h2>
        
        <div className="cta-btn-row">
          <Button 
            onClick={() => navigate('/products')}
            variant="primary" 
            size="large" 
            className="cta-btn"
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
     
    </section>
  );
};

export default CtaSection;