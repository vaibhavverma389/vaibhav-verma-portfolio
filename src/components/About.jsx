import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-area" id="about">
      <div className="container">
        <div className="about">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h4>About Me</h4>
            <p className="about-description">
              I am a driven Computer Science undergraduate at GLA University with a deep passion for software engineering. 
              My journey involves continuously mastering complex Data Structures, algorithmic problem-solving, and building robust full-stack applications.
            </p>
            <ul>
              <li>
                Specializing in building scalable backends with Node.js and dynamic frontends with React.
              </li>
              <li>
                Strong foundation in Object-Oriented Programming, Database Management, and API Design.
              </li>
              <li>
                Active competitive programmer with a strong problem-solving mindset, regularly conquering challenges on LeetCode.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul>
              <li>Name: Vaibhav Verma</li>
              <li>Location: Ayodhya, India</li>
              <li>Email: vaibhav.verma.sde@gmail.com</li>
              <li>Role: Aspiring SDE</li>
              <li>Availability: Full-Time</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
