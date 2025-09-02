import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="brand-title">SAYID CARE</h2>
          <span className="brand-tagline">Dignified Care</span>
        </motion.div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <button onClick={() => scrollToSection('facility')} className="nav-link">Our Home</button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <motion.button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link nav-cta"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.li>
        </ul>
        
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 