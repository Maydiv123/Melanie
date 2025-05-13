import React from 'react';
import './StorySection.css';

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-grid">
          <div>
            <h3 className="story-heading">OUR STORY</h3>
            <h2 className="story-title">
              Our Journey Towards Sustainability
            </h2>
            <p className="story-desc">
              Our journey began with a shared concern for the excessive use of plastic in food takeaway packaging. 
              Witnessing the environmental impact of single-use plastics motivated us to take action. 
              Our founders saw an opportunity to create positive change by providing sustainable alternatives 
              for businesses and individuals who shared our passion for a greener planet.
            </p>
          </div>
          <div className="story-img-col">
            <img 
              src="/images/img_image.png" alt="Toilet paper rolls" className="story-main-img" />
            <div className="story-badge-outer">
              <div className="story-badge-inner">
                <img src="/images/img_union.svg" alt="Zero Waste badge" className="story-badge-img" />
                <p className="story-badge-text">
                  Zero<br />Waste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;