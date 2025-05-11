import React from 'react';
import './WhyUsSection.css';

const WhyUsSection = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-flex-row">
          {/* Merged images in a single horizontal row */}
          <div className="whyus-img-merged">
            <img 
              src="/images/img_image_768x325.png" 
              alt="Sustainable products" 
              className="whyus-img whyus-img-left"
            />
            <div className="whyus-img2-badge-wrapper">
              <img 
                src="/images/img_image_768x412.png" 
                alt="Eco-friendly materials" 
                className="whyus-img whyus-img-right"
              />
              {/* Flower SVG badge below image 2, same as Zero Waste */}
              <div className="whyus-svg-badge-wrapper">
                <img src="/images/img_union.svg" alt="Leave No Trace badge" className="whyus-svg-badge" />
                <p className="whyus-svg-badge-text">Leave<br />No Trace!</p>
              </div>
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