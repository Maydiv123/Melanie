import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="brand-section">
          <h2 className="brand-title">MELANIE</h2>
          <p className="copyright">
            Copyright © {currentYear} . <br />
            All Rights reserved
          </p>
        </div>
        
        {/* Browse Section */}
        <div className="section">
          <h3 className="section-title">Browse</h3>
          <ul className="link-list">
            {['Clothings', 'Electronics', 'Books', 'Furnitures', 'Decorations', 'Sports Equipment'].map((item) => (
              <li key={item}>
                <Link to="#" className="link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* General Section */}
        <div className="section">
          <h3 className="section-title">General</h3>
          <ul className="link-list">
            {['Careers', 'About', 'Twitter', 'LinkedIn'].map((item) => (
              <li key={item}>
                <Link to="#" className="link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Support Section */}
        <div className="section">
          <h3 className="section-title">Support</h3>
          <ul className="link-list">
            {['Help Center', 'Status', 'support@Melanie.co'].map((item) => (
              <li key={item}>
                <Link to="#" className="link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Legal Section */}
        <div className="section">
          <h3 className="section-title">Legal</h3>
          <ul className="link-list">
            {['Terms of Service', 'Privacy policy', 'Code of Conduct'].map((item) => (
              <li key={item}>
                <Link to="#" className="link">
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