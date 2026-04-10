import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaHospital, FaAmbulance, FaStethoscope, FaHeartbeat, FaPills } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Your Health, <br/>Our Priority.</h1>
            <p>Experience world-class medical care with compassion and expertise. We are dedicated to providing the best healthcare services for you and your family.</p>
            <div className="hero-btns">
              <Link to="/appointment" className="btn btn-primary">Book Appointment</Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero.png" alt="Hospital Reception" />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="quick-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <FaHospital className="info-icon" />
              <h3>Opening Hours</h3>
              <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p>Sat - Sun: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="info-card highlighted">
              <FaAmbulance className="info-icon text-light" />
              <h3 className="text-light">Emergency Cases</h3>
              <p className="text-light">1-800-123-4567</p>
              <p className="text-light">24/7 immediate assistance.</p>
            </div>
            <div className="info-card">
              <FaUserMd className="info-icon" />
              <h3>Find a Doctor</h3>
              <p>Search by name, specialty, or condition.</p>
              <Link to="/about" className="link-text">Meet our experts &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="section services-teaser bg-light">
        <div className="container">
          <h2 className="section-title">Our Medical Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaHeartbeat className="service-icon" />
              <h3>Cardiology</h3>
              <p>Comprehensive care for your heart, from prevention to advanced treatments.</p>
            </div>
            <div className="service-card">
              <FaStethoscope className="service-icon" />
              <h3>General Medicine</h3>
              <p>Expert primary care for all your general health needs and checkups.</p>
            </div>
            <div className="service-card">
              <FaPills className="service-icon" />
              <h3>Pharmacy</h3>
              <p>On-site pharmacy providing prescription medications and health advice.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Patients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="quote">"The doctors and staff were incredibly professional and caring. I felt in safe hands throughout my treatment."</p>
              <div className="author">- Sarah Jenkins</div>
            </div>
            <div className="testimonial-card">
              <p className="quote">"Clean facilities, modern equipment, and a team that genuinely listens to your concerns. Highly recommended!"</p>
              <div className="author">- Michael Chang</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
