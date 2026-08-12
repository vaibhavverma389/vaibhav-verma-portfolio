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
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4>Contact Me</h4>
          <p>Let’s Connect</p>
        </motion.div>

        <motion.div 
          className="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form ref={form} onSubmit={sendEmail} id="contact-form">
            <input type="text" name="name" placeholder="Name" aria-label="Your Name" required />
            <input type="email" name="email" placeholder="Email" aria-label="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" aria-label="Subject" />
            <textarea name="message" placeholder="Message" aria-label="Your Message" required></textarea>
            <input type="submit" value="Send Message" className="submit" />
            
            <span 
              id="msg" 
              className={msg.type} 
              aria-live="polite"
              style={{
                color: msg.type === 'success' ? '#4ade80' : msg.type === 'error' ? '#f87171' : 'var(--text)'
              }}
            >
              {msg.text}
            </span>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
