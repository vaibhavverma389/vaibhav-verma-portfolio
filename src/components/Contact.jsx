import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setMsg({ text: 'Sending message... ⏳', type: 'info' });

    emailjs
      .sendForm('service_nlb44xl', 'template_abypae6', form.current, 'pw5NJqkOetfOeDEQS')
      .then(
        () => {
          setMsg({ text: 'Message sent successfully ✅', type: 'success' });
          form.current.reset();
          setTimeout(() => setMsg({ text: '', type: '' }), 4000);
        },
        (error) => {
          setMsg({ text: 'Failed to send message ❌', type: 'error' });
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section className="contact-content" id="contact">
      <div className="container">
        <motion.div 
          className="section-header-wrap"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Get In Touch</span>
          <h2 className="section-heading">Let's Connect &amp; Collaborate</h2>
          <p className="section-subtext">Open to full-time roles, software engineering interviews, and high-impact full-stack opportunities.</p>
        </motion.div>

        <div className="contact-grid-wrap">
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div 
            className="contact-info-cards"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href="mailto:vaibhav.verma.sde@gmail.com" className="contact-info-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Direct Email</span>
                <span className="contact-card-value">vaibhav.verma.sde@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/vaibhavverma389" target="_blank" rel="noopener noreferrer" className="contact-info-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">linkedin.com/in/vaibhavverma389</span>
              </div>
            </a>

            <a href="https://github.com/vaibhavverma389" target="_blank" rel="noopener noreferrer" className="contact-info-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">github.com/vaibhavverma389</span>
              </div>
            </a>

            <a href="https://leetcode.com/vaibhavverma389/" target="_blank" rel="noopener noreferrer" className="contact-info-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa fa-code"></i>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">LeetCode</span>
                <span className="contact-card-value">leetcode.com/vaibhavverma389 (355+)</span>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Functional Form */}
          <motion.div 
            className="contact-form-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={sendEmail} id="contact-form">
              <div className="form-group-field">
                <label htmlFor="user-name">Your Name <span>*</span></label>
                <input type="text" id="user-name" name="name" placeholder="e.g. Alex Johnson" required />
              </div>

              <div className="form-group-field">
                <label htmlFor="user-email">Your Email <span>*</span></label>
                <input type="email" id="user-email" name="email" placeholder="e.g. alex@company.com" required />
              </div>

              <div className="form-group-field">
                <label htmlFor="user-subject">Subject</label>
                <input type="text" id="user-subject" name="subject" placeholder="Role opportunity / Interview / Project" />
              </div>

              <div className="form-group-field">
                <label htmlFor="user-message">Message <span>*</span></label>
                <textarea id="user-message" name="message" rows="5" placeholder="Hi Vaibhav, we came across your portfolio and would like to discuss..." required></textarea>
              </div>

              <button type="submit" className="contact-btn submit-btn">
                Send Message <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
              
              <span 
                id="msg" 
                className={msg.type} 
                aria-live="polite"
                style={{
                  color: msg.type === 'success' ? '#4ade80' : msg.type === 'error' ? '#f87171' : 'var(--text)',
                  display: 'block',
                  marginTop: '10px',
                  fontWeight: 500
                }}
              >
                {msg.text}
              </span>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
