import React, { useState } from 'react';
import './ContactUs.css';
import NavScrollExample from '../Navbar/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitStatus({ success: true, error: false });
      } else {
        console.error('Error submitting form');
        setSubmitStatus({ success: false, error: true });
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setSubmitStatus({ success: false, error: true });
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <NavScrollExample />
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>

          {submitStatus.success && (
            <div className="success-message">Form submitted successfully!</div>
          )}
          {submitStatus.error && (
            <div className="error-message">Error submitting form. Please try again.</div>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactUs;
