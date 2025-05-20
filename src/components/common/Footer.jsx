import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import MelanieBlackLogo from '../../assets/MelanieBlack.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="brand-section">
          <img src={MelanieBlackLogo} alt="Melanie Logo" className="footer-logo" />
          <p className="copyright">
            Copyright © {currentYear} . <br />
            All Rights reserved
          </p>
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