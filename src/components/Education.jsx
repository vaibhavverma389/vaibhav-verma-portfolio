import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="education-content" id="education">
      <div className="container">
        <div className="row">

          <motion.div 
            className="education"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="title">Education</h3>
            <div className="timeline">

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">B.Tech in Computer Science</h3>
                <h4 className="timeline-title">GLA University, Mathura</h4>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i> 2023 – 2027
                </h4>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Diploma in Electrical Engineering</h3>
                <h4 className="timeline-title">Government Polytechnic, Ayodhya</h4>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i> 2020 – 2023
                </h4>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Intermediate & High School</h3>
                <h4 className="timeline-title">Diamond Inter College, Ayodhya</h4>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i> 2018 – 2020
                </h4>
              </div>

            </div>
          </motion.div>

          <motion.div 
            className="internship"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="title">Training</h3>
            <div className="timeline">

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Web Development Training</h3>
                <h4 className="timeline-title">GLA University, Mathura</h4>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar" aria-hidden="true"></i> June 2025 – July 2025
                </h4>
                <p className="timeline-text">
                  Hands-on experience in HTML, CSS, JavaScript, DOM manipulation,
                  responsive design, and form validation.
                  Built a full-stack project “Smart Bus Booking System”.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
