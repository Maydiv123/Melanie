import React from 'react';
import Card from '../../components/common/Card';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '/images/img_icons.svg',
      title: 'Unbreakable Softness',
      description: 'Built to Care, Made to Last'
    },
    {
      icon: '/images/img_icons_97x97.svg',
      title: 'Smarter Proctoring Starts Here',
      description: 'We Take Care of the Routine, Sustainably'
    },
    {
      icon: '/images/img_icons_1.svg',
      title: 'Post-Use Purity',
      description: 'Because Clean Doesn’t End with a Wipe'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Gentle on You, Kind to Earth</h2>
        <p className="features-desc">
        Experience the Future of Examination Integrity with Advanced AI-Powered Proctoring
        </p>
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