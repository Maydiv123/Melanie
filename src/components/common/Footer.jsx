import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#ffea00] py-16">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <h2 className="text-black font-semibold text-4xl mb-4 capitalize font-['Sora']">MELANIE</h2>
          <p className="text-black text-lg capitalize font-['Inter']">
            Copyright © {currentYear} . <br />
            All Rights reserved
          </p>
        </div>
        
        {/* Browse Section */}
        <div className="lg:col-span-1">
          <h3 className="text-black font-normal text-xl mb-4 capitalize font-['Inter']">Browse</h3>
          <ul className="space-y-4">
            {['Clothings', 'Electronics', 'Books', 'Furnitures', 'Decorations', 'Sports Equipment'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-black font-medium text-xl capitalize font-['Inter'] hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* General Section */}
        <div className="lg:col-span-1">
          <h3 className="text-black font-normal text-xl mb-4 capitalize font-['Inter']">General</h3>
          <ul className="space-y-4">
            {['Careers', 'About', 'Twitter', 'LinkedIn'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-black font-medium text-xl capitalize font-['Inter'] hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Support Section */}
        <div className="lg:col-span-1">
          <h3 className="text-black font-normal text-xl mb-4 capitalize font-['Inter']">Support</h3>
          <ul className="space-y-4">
            {['Help Center', 'Status', 'support@Melanie.co'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-black font-medium text-xl capitalize font-['Inter'] hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Legal Section */}
        <div className="lg:col-span-1">
          <h3 className="text-black font-normal text-xl mb-4 capitalize font-['Inter']">Legal</h3>
          <ul className="space-y-4">
            {['Terms of Service', 'Privacy policy', 'Code of Conduct'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-black font-medium text-xl capitalize font-['Inter'] hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;