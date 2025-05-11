import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import contactLottie from '../assets/contact.json';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="contactus-bg">
      <motion.div
        className="contactus-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="contactus-illustration">
          {/* Lottie animated tissue/contact illustration */}
          <Lottie animationData={contactLottie} loop={true} className="contactus-lottie" />
        </div>
        <form className="contactus-form" onSubmit={handleSubmit} autoComplete="off">
          <h2 className="contactus-title">Let's talk</h2>
          <p className="contactus-desc">Here's the part where we listen. Tell us all about it.</p>
          <div className="contactus-field">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="contactus-input"
              autoComplete="off"
            />
            <label className={form.name ? 'filled' : ''}>Name</label>
          </div>
          <div className="contactus-field">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="contactus-input"
              autoComplete="off"
            />
            <label className={form.email ? 'filled' : ''}>Email</label>
          </div>
          <div className="contactus-field">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="contactus-input"
              rows={3}
            />
            <label className={form.message ? 'filled' : ''}>Your Message</label>
          </div>
          <motion.button
            type="submit"
            className="contactus-btn"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300 }}
            disabled={submitted}
          >
            {submitted ? 'Sent!' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs; 