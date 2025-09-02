import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Sayid Care</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              Sayid Care is a family-owned business deeply rooted in respect for our residents. 
              Our mission is to provide exceptional and personalized care to help people live with dignity.
            </p>
            <p>
              We treat our residents with kindness, compassion, and understanding. Our approach 
              combines professional healthcare with the warmth of a family environment, ensuring 
              each resident receives the individual attention they deserve.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>24/7</h3>
              <p>Personalized Care</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Spacious Bedrooms</p>
            </div>
            <div className="stat">
              <h3>Family</h3>
              <p>Owned & Operated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 