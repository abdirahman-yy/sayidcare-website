import React from 'react';
import './Waivers.css';

const Waivers = () => {
  const waivers = [
    'Community Alternatives for Disabled Individuals (CADI) Waiver',
    'Traumatic Brain Injury Waiver',
    'Elderly Waiver',
    'Private Pay',
    'Most Long-Term Care Insurance'
  ];

  return (
    <section className="waivers bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Accepted Waivers & Payment Options</h2>
          <div className="section-line"></div>
          <p>We work with various payment options to make quality care accessible</p>
        </div>
        <div className="waivers-grid">
          {waivers.slice(0, 3).map((waiver, index) => (
            <div key={index} className="waiver-card card">
              <h3>{waiver}</h3>
            </div>
          ))}
        </div>
        <div className="waivers-grid-bottom">
          {waivers.slice(3).map((waiver, index) => (
            <div key={index + 3} className="waiver-card card">
              <h3>{waiver}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Waivers; 