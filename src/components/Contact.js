import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // For now, create a mailto link that opens the user's email client
    const subject = encodeURIComponent('Contact Form Submission - Sayid Care');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
Sent from Sayid Care website contact form
    `);

    // Open email client
    window.location.href = `mailto:contact@sayidcare.com?subject=${subject}&body=${body}`;

    // Show success message
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your email client has been opened with your message. Please send the email to complete your inquiry. We will respond within 24 hours.`);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Find Your Perfect Home Today</h2>
          <div className="section-line"></div>
          <p>Contact us to schedule a tour and learn more about our caring community</p>
        </div>
        <div className="contact-content grid grid-2">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Our Location</h3>
                <p>6 Oak Ridge Drive<br />South St. Paul, MN 55075</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Call Us Today</h3>
                <p><a href="tel:651.983.1550">651.983.1550</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p><a href="mailto:contact@sayidcare.com">contact@sayidcare.com</a></p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send us a message</h3>
              <p>Your message will be sent directly to our care team at <strong>contact@sayidcare.com</strong></p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your needs or questions..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 