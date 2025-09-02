import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="brand-title">SAYID CARE</h3>
            <p className="tagline">Dignified care, personalized for you</p>
            <p>A family-owned assisted living home providing exceptional care with compassion and understanding.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('facility')}>Our Home</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>6 Oak Ridge Drive<br />South St. Paul, MN 55075</p>
            <p>Phone: <a href="tel:651.983.1550">651.983.1550</a></p>
            <p>Email: <a href="mailto:contact@sayidcare.com">contact@sayidcare.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Sayid Care. All rights reserved. | Licensed Assisted Living Facility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 