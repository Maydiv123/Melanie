import React from 'react';
import Card from '../../components/common/Card';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '/images/img_icons.png',
      title: 'Premium Softness',
      description: 'Experience Luxurious Comfort Every Time'
    },
    {
      icon: '/images/img_icons_97x97.png',
      title: 'Eco-Friendly Choice',
      description: 'Sustainable Materials, Earth-Friendly Process'
    },
    {
      icon: '/images/img_icons_1.png',
      title: 'Superior Quality',
      description: 'Strong, Absorbent, and Reliable'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Gentle on You, Kind to Earth</h2><br/>
       
        <div className="features-grid">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;