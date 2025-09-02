import React from 'react';
import './App.css';
import CookieConsent from 'react-cookie-consent';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Facility from './components/Facility';
import Waivers from './components/Waivers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Facility />
      <Waivers />
      <Contact />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        cookieName="sayidCareCookieConsent"
        style={{
          background: "#2c3e50",
          fontSize: "16px",
          fontFamily: "'Inter', sans-serif"
        }}
        buttonStyle={{
          background: "#2c5aa0",
          color: "white",
          fontSize: "16px",
          borderRadius: "25px",
          padding: "10px 20px",
          border: "none",
          fontWeight: "600"
        }}
        expires={150}
      >
        This website uses cookies to enhance your browsing experience and provide personalized content. 
        By continuing to use our site, you consent to our use of cookies in accordance with our privacy policy.
        <span style={{ fontSize: "14px", marginLeft: "10px" }}>
          <a href="#privacy" style={{ color: "#fbbf24", textDecoration: "underline" }}>
            Learn more about our privacy policy
          </a>
        </span>
      </CookieConsent>
    </div>
  );
}

export default App; 