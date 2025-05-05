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
    <section className="bg-black py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-[#f1e811] text-5xl font-semibold text-center mb-4">Embark on Your Green Journey</h2>
        <p className="text-[#4c4a2b] text-2xl font-medium text-center mb-16 max-w-4xl mx-auto">
          Advanced AI-Powered Proctoring Solutions for Unmatched Exam Integrity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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