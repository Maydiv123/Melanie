import React from 'react';
import './WhyUsSection.css';
import whyUsArrow from '../../assets/WhyUs.png';

import traceBadge from '../../assets/Star.png';

const WhyUsSection = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-flex-row">
          {/* Merged images in a single horizontal row */}
          <div className="whyus-img-merged">
            <div className="whyus-imgs-relative-wrapper">
              <img 
                src="/images/img_image_768x325.png" 
                alt="Sustainable products" 
                className="whyus-img whyus-img-right"
              />
              {/* Place the Trace.png badge over image 1 with text overlay */}
              <div className="whyus-trace-badge-container">
                <img 
                  src={traceBadge} 
                  alt="No Trace Badge" 
                  className="whyus-trace-badge-img"
                />
                <span className="whyus-trace-badge-text">Leave<br />No Trace!</span>
              </div>
              <img 
                src="/images/img_image_768x412.png" 
                alt="Eco-friendly materials" 
                className="whyus-img whyus-img-right"
              />
              <img 
                src={whyUsArrow} 
                alt="Arrow PNG" 
                className="whyus-arrow-svg whyus-arrow-absolute"
              />
            </div>
          </div>
          {/* Text content as a sibling */}
          <div className="whyus-text-content">
            <h3 className="whyus-heading">WHY US</h3>
            <h2 className="whyus-title">
              Partnering For Change
            </h2>
            <p className="whyus-desc">
              Our journey began with a shared concern for the excessive use of plastic in food takeaway packaging. 
              Witnessing the environmental impact of single-use plastics motivated us to take action. 
              Our founders saw an opportunity to create positive change by providing sustainable alternatives 
              for businesses and individuals who shared our passion for a greener planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;