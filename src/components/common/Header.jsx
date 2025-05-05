import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link to="/" className="text-[#ffea00] font-bold text-3xl uppercase font-['Montserrat']">
          MELANIE
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            About US
          </Link>
          <Link to="/products" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            Our product
          </Link>
          <Link to="/contact" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            Contact us
          </Link>
        </nav>
        
        <button className="md:hidden text-[#ffea00]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;