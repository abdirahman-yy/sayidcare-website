import React from 'react';
import './Services.css';
import { FaClock, FaUtensils, FaBroom, FaHandsHelping, FaWifi, FaUserMd } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaClock />,
      title: '24-Hour Personalized Care',
      description: 'Round-the-clock professional care with registered nurses on-site to ensure your loved one\'s health and safety.'
    },
    {
      icon: <FaUtensils />,
      title: 'Home-Cooked Meals',
      description: 'Nutritious, delicious meals prepared three times daily, plus healthy snacks, all made with love in our kitchen.'
    },
    {
      icon: <FaBroom />,
      title: 'Housekeeping & Laundry',
      description: 'Complete housekeeping and laundry services to maintain a clean, comfortable living environment.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Daily Living Support',
      description: 'Assistance with daily activities including bathing, dressing, medication management, and mobility support.'
    },
    {
      icon: <FaWifi />,
      title: 'Internet & Cable',
      description: 'Complimentary high-speed internet and cable television to keep residents connected and entertained.'
    },
    {
      icon: <FaUserMd />,
      title: 'Registered Nurse On-Site',
      description: 'Professional medical care with registered nurses available to monitor health and coordinate with physicians.'
    }
  ];

  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Our Care Services</h2>
          <div className="section-line"></div>
          <p>Comprehensive care tailored to each resident's unique needs</p>
        </div>
        <div className="services-grid grid grid-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">
                <div className="icon-circle">
                  {service.icon}
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 