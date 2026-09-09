import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-title">Vaibhav Verma</span>
            <span className="footer-tagline">Full Stack Developer &bull; MERN Stack &bull; 355+ LeetCode DSA</span>
          </div>

          <ul className="footer-links" aria-label="Footer navigation">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#dsa">Problem Solving</a></li>
            <li><a href="#ai-tools">AI Tools</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/files/Vaibhav_Verma_Resume_SDE.pdf" download="Vaibhav_Verma_Resume_SDE.pdf">Resume (PDF)</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Vaibhav Verma. All rights reserved.
          </div>
          
          <div className="footer-built-badge">
            <span>&lt;/&gt;</span>
            <span>Crafted with React, Framer Motion &amp; Modern Glassmorphism</span>
          </div>

          <div>
            <a href="#home" className="back-to-top" aria-label="Back to top of page">
              <span>Back to top</span>
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
