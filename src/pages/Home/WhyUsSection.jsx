import React from 'react';
import './WhyUsSection.css';

const WhyUsSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/images/img_image_768x325.png" alt="Sustainable products" className="w-full h-auto rounded-tl-3xl rounded-br-3xl object-cover"
            />
            <img 
              src="/images/img_image_768x412.png" alt="Eco-friendly materials" className="w-full h-auto mt-4 rounded-tr-3xl rounded-bl-3xl object-cover"
            />
            
            {/* Green badge */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
              <div className="relative bg-[#4caf4f] w-64 h-64 rounded-md">
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-normal text-center leading-9">
                  Leave<br />No Trace!
                </p>
              </div>
            </div>
            
            {/* Arrow button */}
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4e9883] w-[106px] h-[106px] rounded-full flex items-center justify-center">
              <img src="/images/img_carbonarrowup.svg" alt="Arrow" className="w-[53px] h-[53px]" />
            </button>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-[#f1e811] text-4xl font-normal mb-6">WHY US</h3>
            <h2 className="text-[#f1e811] text-7xl font-medium leading-tight mb-10">
              Partnering<br />For Change
            </h2>
            <p className="text-[#f1e811]/50 text-xl leading-relaxed">
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