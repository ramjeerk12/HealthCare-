import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page section pt-nav">
      <div className="container">
        <h1 className="section-title">About HealthCare+</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>At HealthCare+, our mission is to deliver exceptional medical care with a compassionate touch. We strive to improve the health and well-being of our community through innovative treatments and continuous education.</p>
            
            <h2>Our Vision</h2>
            <p>To be the leading healthcare provider recognized for patient-centered care, medical excellence, and our commitment to a healthier tomorrow.</p>
            
            <h2>Our Core Values</h2>
            <ul>
              <li><strong>Compassion:</strong> Treating every patient with empathy and respect.</li>
              <li><strong>Excellence:</strong> Maintaining the highest standards in healthcare.</li>
              <li><strong>Integrity:</strong> Upholding honesty and ethical practices.</li>
              <li><strong>Innovation:</strong> Embracing new technologies and treatments.</li>
            </ul>
          </div>
          <div className="about-image">
            <img src="/images/hero.png" alt="Hospital Facility" />
          </div>
        </div>

        <div className="team-section mt-5">
          <h2 className="section-title">Meet Our Experts</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/images/doctor.png" alt="Dr. John Doe" className="team-img" />
              <h3>Dr. John Doe</h3>
              <p className="specialty">Chief of Cardiology</p>
              <p>Over 20 years of experience in cardiovascular care.</p>
            </div>
            <div className="team-card">
              <img src="/images/doctor.png" alt="Dr. Jane Smith" className="team-img" />
              <h3>Dr. Jane Smith</h3>
              <p className="specialty">Head of Pediatrics</p>
              <p>Dedicated to providing the best care for children of all ages.</p>
            </div>
            <div className="team-card">
              <img src="/images/doctor.png" alt="Dr. Emily Chen" className="team-img" />
              <h3>Dr. Emily Chen</h3>
              <p className="specialty">Lead Neurologist</p>
              <p>Specializes in advanced neurological disorders and treatments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
