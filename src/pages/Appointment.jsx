import React, { useState } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="appointment-page section pt-nav">
      <div className="container">
        <h1 className="section-title">Book an Appointment</h1>
        
        <div className="appointment-container">
          <div className="appointment-info">
            <h2>Easy Scheduling</h2>
            <p>Schedule your visit with our expert medical team. Fill out the form, and we'll confirm your appointment shortly.</p>
            <div className="info-box">
              <h3>Need Urgent Care?</h3>
              <p>For medical emergencies, please call our 24/7 hotline immediately:</p>
              <div className="hotline">1-800-123-4567</div>
            </div>
            <img src="/images/hero.png" alt="Hospital" className="appointment-img" />
          </div>

          <div className="appointment-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <FaCalendarCheck className="success-icon" />
                <h2>Booking Confirmed!</h2>
                <p>Thank you for choosing HealthCare+. We have received your appointment request. A confirmation email has been sent to you.</p>
                <button className="btn btn-primary mt-4" onClick={() => setSubmitted(false)}>Book Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select id="department" name="department" value={formData.department} onChange={handleChange} required>
                      <option value="">Select Department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="general">General Medicine</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="doctor">Preferred Doctor (Optional)</label>
                    <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange}>
                      <option value="">Any Available Doctor</option>
                      <option value="dr-doe">Dr. John Doe</option>
                      <option value="dr-smith">Dr. Jane Smith</option>
                      <option value="dr-chen">Dr. Emily Chen</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Notes</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Briefly describe your symptoms or reason for visit..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">Confirm Appointment</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
