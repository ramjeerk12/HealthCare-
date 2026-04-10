import React from 'react';
import { FaHeartbeat, FaStethoscope, FaPills, FaBrain, FaTooth, FaEye, FaBaby, FaBone } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  { icon: <FaHeartbeat />, title: 'Cardiology', desc: 'Comprehensive care for your heart, from prevention to advanced treatments.' },
  { icon: <FaStethoscope />, title: 'General Medicine', desc: 'Expert primary care for all your general health needs and checkups.' },
  { icon: <FaPills />, title: 'Pharmacy', desc: 'On-site pharmacy providing prescription medications and health advice.' },
  { icon: <FaBrain />, title: 'Neurology', desc: 'Advanced diagnostics and treatment for neurological disorders.' },
  { icon: <FaTooth />, title: 'Dental Care', desc: 'Complete dental services for a healthy and beautiful smile.' },
  { icon: <FaEye />, title: 'Ophthalmology', desc: 'Vision care and treatment for various eye diseases.' },
  { icon: <FaBaby />, title: 'Pediatrics', desc: 'Specialized healthcare for infants, children, and adolescents.' },
  { icon: <FaBone />, title: 'Orthopedics', desc: 'Treatment for bone, joint, and muscle conditions.' },
];

const Services = () => {
  return (
    <div className="services-page section pt-nav bg-light">
      <div className="container">
        <h1 className="section-title">Our Medical Services</h1>
        <p className="services-intro">
          We offer a wide range of specialized medical services to meet the diverse needs of our patients. Our state-of-the-art facilities and experienced medical professionals ensure you receive the best care possible.
        </p>
        
        <div className="services-full-grid">
          {servicesData.map((service, index) => (
            <div className="service-full-card" key={index}>
              <div className="service-icon-large">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
