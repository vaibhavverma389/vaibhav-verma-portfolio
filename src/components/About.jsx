import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-area" id="about">
      <div className="container">
        
        <motion.div 
          className="section-header-wrap"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Profile Overview</span>
          <h2 className="section-heading">Engineering with Purpose &amp; Precision</h2>
          <p className="section-subtext">A look into my technical background, development philosophies, and foundational problem-solving approach.</p>
        </motion.div>

        <div className="about-grid-layout">
          
          {/* Avatar Profile Card */}
          <motion.div 
            className="about-avatar-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-avatar-wrapper">
              <img src="/files/photo.webp" alt="Vaibhav Verma - Full Stack Developer" className="about-avatar-img" />
            </div>
            <h3 className="about-avatar-name">Vaibhav Verma</h3>
            <p className="about-avatar-title">Full Stack | MERN Developer</p>
            <div className="about-avatar-meta">
              <span className="badge badge-indigo">Full Stack</span>
              <span className="badge badge-cyan">Backend &amp; APIs</span>
              <span className="badge badge-emerald">DSA Practitioner</span>
            </div>

            <div className="about-info-list">
              <div className="info-row"><span className="info-lbl">Education:</span> <span className="info-val">B.Tech CS (GLA Univ.)</span></div>
              <div className="info-row"><span className="info-lbl">Location:</span> <span className="info-val">Ayodhya, India</span></div>
              <div className="info-row"><span className="info-lbl">Email:</span> <span className="info-val">vaibhav.verma.sde@gmail.com</span></div>
              <div className="info-row"><span className="info-lbl">Availability:</span> <span className="info-val text-available">Immediate / Full-Time</span></div>
            </div>
          </motion.div>

          {/* Bio and Technical Highlights */}
          <motion.div 
            className="about-content-column"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-lead">
              I am a results-oriented <strong>Full Stack Developer</strong> specializing in building end-to-end web applications with clean architecture, robust backends, and responsive user interfaces.
            </p>
            
            <p className="about-text">
              My core engineering focus centers around the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), scalable RESTful API design, database schema modeling, and state-management patterns. I treat software development as an iterative craft where reliability, performance, and maintainability come first.
            </p>

            <p className="about-text">
              With a disciplined problem-solving mindset backed by <strong>355+ LeetCode problems solved</strong> across data structures and algorithms, I understand the trade-offs between time and space complexity. Additionally, I actively leverage modern <strong>AI-assisted software development workflows</strong> to accelerate boilerplate implementation, explore system designs, write unit tests, and maintain high engineering velocity.
            </p>

            {/* Key Statistics Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">355+</span>
                <span className="stat-label">LeetCode Problems</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Core Tech Stack</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">REST</span>
                <span className="stat-label">API Architecture</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">AI</span>
                <span className="stat-label">Assisted Velocity</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
