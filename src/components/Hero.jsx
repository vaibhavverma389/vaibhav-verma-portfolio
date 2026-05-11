import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="FirstElement" id="home">
      <motion.div 
        className="profile-photo"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src="/files/photo.webp" alt="Vaibhav Verma Profile Picture" />
      </motion.div>

      <motion.div 
        className="profile-text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h5>Welcome to my portfolio</h5>
        <h1>
          Hi, I'm <span className="text-gradient">Vaibhav Verma</span>
        </h1>
        <h2 className="role-title">Full-Stack Developer & Aspiring SDE</h2>

        <p>
          I engineer scalable, high-performance web applications and solve complex problems with efficient algorithms. 
          Passionate about clean code, modern architecture, and creating intuitive user experiences.
        </p>

        <div className="btn-group">
          <a href="/files/Vaibhav_Verma_MERN_Developer_Resume.pdf" className="resume-btn" download>
            <i className="fa fa-download" aria-hidden="true"></i> Download Resume
          </a>

          <a href="mailto:vaibhav.verma.sde@gmail.com" className="contact-btn">
            <i className="fa fa-paper-plane" aria-hidden="true"></i> Contact Me
          </a>
        </div>

        <div className="social">
          <a href="mailto:vaibhav.verma.sde@gmail.com" aria-label="Email"><i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://github.com/vaibhavverma389" aria-label="GitHub" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true"></i></a>
          <a href="https://leetcode.com/vaibhavverma389/" aria-label="LeetCode" target="_blank" rel="noreferrer"><i className="fa fa-code" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/vaibhavverma389" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
