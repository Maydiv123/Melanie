import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/img_background_image.png" alt="Green leaves background" className="w-full h-full object-cover"
        />
      </div>
      
      {/* Social Media Icons */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-14 z-10">
        <a href="#" className="text-[#ffea00] hover:text-white transition-colors">
          <img src="/images/img_facebook.svg" alt="Facebook" className="w-7 h-7" />
        </a>
        <a href="#" className="text-[#ffea00] hover:text-white transition-colors">
          <img src="/images/img_twitter.svg" alt="Twitter" className="w-7 h-8" />
        </a>
        <a href="#" className="text-[#ffea00] hover:text-white transition-colors">
          <img src="/images/img_instagram.svg" alt="Instagram" className="w-7 h-7" />
        </a>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="flex flex-col items-center">
          <p className="text-[#ffea00] text-2xl font-bold tracking-widest uppercase mb-4">I AM</p>
          <h1 className="text-[#ffea00] text-[15rem] font-black uppercase tracking-wider leading-none shadow-lg">
            LIFE
          </h1>
          <div className="mt-8 text-left">
            <p className="text-[#ffea00] text-2xl font-bold tracking-widest uppercase leading-10">
              AN<br />
              Environmentalist
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 right-10 flex flex-col items-center z-10">
        <p className="text-[#ffea00] text-sm font-bold tracking-widest uppercase mb-2">Scroll</p>
        <div className="w-px h-12 bg-[#ffea00]"></div>
      </div>
    </section>
  );
};

export default HeroSection;