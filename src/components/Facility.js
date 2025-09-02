import React from 'react';
import './Facility.css';
import { FaHome } from 'react-icons/fa';

const Facility = () => {
  const features = [
    {
      title: 'Wheelchair Accessible',
      description: 'Fully accessible with ramps, wide walkways, and barrier-free design throughout.'
    },
    {
      title: 'Five Spacious Bedrooms',
      description: 'Comfortable, private bedrooms designed for rest and personal space.'
    },
    {
      title: 'Main-Floor Accessibility',
      description: 'Main-floor bedroom and bathroom with roll-in shower for enhanced accessibility.'
    },
    {
      title: 'Quiet Cul-de-Sac Location',
      description: 'Peaceful neighborhood setting in South St. Paul, away from busy streets.'
    }
  ];

  return (
    <section id="facility" className="facility bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Our Beautiful Home</h2>
          <div className="section-line"></div>
          <p>A three-story home designed with comfort, accessibility, and dignity in mind</p>
        </div>
        <div className="facility-content grid grid-2">
          <div className="facility-features">
            {features.map((feature, index) => (
              <div key={index} className="feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="facility-image">
            <img 
              src="/images/house.png" 
              alt="Beautiful three-story Sayid Care home exterior"
              className="house-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="house-icon-container" style={{display: 'none'}}>
              <FaHome className="house-icon" />
              <p>Beautiful three-story home</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility; 