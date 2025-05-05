import React from 'react';
import './StorySection.css';

const StorySection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#f1e811] text-4xl font-normal mb-6">OUR STORY</h3>
            <h2 className="text-[#f1e811] text-7xl font-medium leading-tight mb-10">
              Our Journey Towards Sustainability
            </h2>
            <p className="text-[#f1e811]/50 text-xl leading-relaxed">
              Our journey began with a shared concern for the excessive use of plastic in food takeaway packaging. 
              Witnessing the environmental impact of single-use plastics motivated us to take action. 
              Our founders saw an opportunity to create positive change by providing sustainable alternatives 
              for businesses and individuals who shared our passion for a greener planet.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/images/img_image.png" alt="Toilet paper rolls" className="w-full h-auto rounded-[78px] object-cover"
            />
            <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
              <div className="relative">
                <img src="/images/img_union.svg" alt="Zero Waste badge" className="w-52 h-52" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-normal text-center leading-7">
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