import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <FaHeartbeat className="logo-icon" />
            <span>HealthCare+</span>
          </div>
          <p className="footer-desc">
            Providing premium healthcare services with a focus on patient well-being and advanced medical treatments. Your health, our priority.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> 123 Health Ave, Medical City, MC 10010</li>
            <li><FaPhone /> +1 (555) 123-4567</li>
            <li><FaEnvelope /> info@healthcareplus.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} HealthCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
