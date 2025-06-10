import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import MelanieBlackLogo from '../../assets/MelanieBlack.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Browse Section */}
        <div className="section1">
          <h3 className="section-title">Browse</h3>
          <ul className="link-list">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About Us</Link></li>
            <li><Link to="/products" className="link">Our Product</Link></li>
          </ul>
        </div>
        {/* Brand Section */}
        <div className="brand-section">
          <img src={MelanieBlackLogo} alt="Melanie Logo" className="footer-logo" />
          <p className="copyright">
            Copyright © {currentYear} <br />
            All Rights Reserved<br />
            <span className="maydiv-text">Maydiv Infotech</span>
          </p>
        </div>
        {/* Support Section */}
       
      
        {/* Contact Us Section */}
        <div className="section">
          <h3 className="section-title">Contact Us</h3>
          <ul className="link-list">
            <li>Phone : +91 7317228662</li>
            <li>Email : info@melanieindia.com</li>
            <li>Address : SCO 30 2nd Floor, Omax World Street, Sector 70</li>
            <li>Greater Faridabad</li>
            <li>121006</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;