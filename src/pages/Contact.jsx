import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page section pt-nav bg-light">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="contact-container">
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="icon-wrapper"><FaMapMarkerAlt /></div>
              <div>
                <h3>Our Location</h3>
                <p>123 Health Ave, Medical City, MC 10010</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="icon-wrapper"><FaPhoneAlt /></div>
              <div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="icon-wrapper"><FaEnvelope /></div>
              <div>
                <h3>Email Address</h3>
                <p>info@healthcareplus.com<br/>support@healthcareplus.com</p>
              </div>
            </div>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-head">
              <h2>Send Us a Message</h2>
              <p>Have a question or feedback? We'd love to hear from you. Fill out the form below and we will get back to you as soon as possible.</p>
            </div>

            {submitted && <div className="contact-success">Your message has been sent successfully!</div>}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Type your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
