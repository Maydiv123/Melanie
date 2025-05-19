import React from 'react';
import Card from '../../components/common/Card';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '/images/img_icons.svg',
      title: 'Unbreakable Security',
      description: 'Lockdown exams with advanced security measures to prevent cheating.'
    },
    {
      icon: '/images/img_icons_97x97.svg',
      title: 'AI Proctoring Assistant',
      description: 'Our AI monitors exams, freeing up human proctors for focused attention.'
    },
    {
      icon: '/images/img_icons_1.svg',
      title: 'Post-Exam Scrutiny',
      description: 'Go beyond the exam with post-analysis to ensure academic integrity.'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Embark on Your Green Journey</h2>
        <p className="features-desc">
          Advanced AI-Powered Proctoring Solutions for Unmatched Exam Integrity.
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