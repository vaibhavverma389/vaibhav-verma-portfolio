import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="project-content" id="projects">
      <div className="container">

        <motion.div 
          className="project-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4>Projects</h4>
          <p>Backend-focused applications demonstrating scalable architecture, authentication, and performance optimization</p>
        </motion.div>

        <motion.div 
          className="projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Project 1 */}
          <motion.div className="project" variants={itemVariants}>
            <i className="fa fa-store"></i>
            <h4>AI-Driven Smart Agriculture Marketplace (Digital Mandi)</h4>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>AI</span>
            </div>

            <p>
              Built a full-stack agriculture marketplace connecting farmers and traders,
              eliminating middlemen and improving price transparency.
              Integrated AI-based insights to help users make better pricing decisions.
            </p>

            <ul className="project-features">
              <li>Farmer & trader marketplace</li>
              <li>Real-time product listings</li>
              <li>AI-based price prediction</li>
              <li>Secure backend with REST APIs</li>
            </ul>

            <div className="project-links">
              <a href="https://digital-mandi-vaibhav.vercel.app/" target="_blank" rel="noreferrer" className="project-btn live">
                <i className="fa fa-globe"></i> Live
              </a>
              <a href="https://github.com/vaibhavverma389/digital-mandi" target="_blank" rel="noreferrer" className="project-btn github">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div className="project" variants={itemVariants}>
            <i className="fa fa-bus"></i>
            <h4>Smart Bus Booking System</h4>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>

            <p>
              Built a scalable full-stack bus booking platform with real-time booking workflows.
              Designed and implemented 10+ REST APIs for route management, booking, and user operations.
              Optimized database queries to improve response time and ensure efficient data handling.
            </p>

            <ul className="project-features">
              <li>Booking workflow system</li>
              <li>REST API architecture</li>
              <li>Database optimization</li>
            </ul>

            <div className="project-links">
              <a href="https://bus-bookings-project.vercel.app" target="_blank" rel="noreferrer" className="project-btn live">
                <i className="fa fa-globe"></i> Live
              </a>
              <a href="https://github.com/vaibhavverma389/bus_bookings" target="_blank" rel="noreferrer" className="project-btn github">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div className="project" variants={itemVariants}>
            <i className="fa fa-user-shield"></i>
            <h4>Secure Student Portal & Admin Analytics System</h4>

            <div className="tech-stack">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Passport.js</span>
              <span>EJS</span>
            </div>

            <p>
              Developed a secure full-stack student portal with role-based access control and authentication.
              Built a centralized dashboard for managing academic resources, notifications, and documents.
              Implemented real-time activity tracking and optimized backend performance for efficient request handling.
            </p>

            <ul className="project-features">
              <li>Role-based authentication system</li>
              <li>Admin analytics dashboard</li>
              <li>Real-time activity tracking</li>
            </ul>

            <div className="project-links">
              <a href="https://studifyo.vercel.app" target="_blank" rel="noreferrer" className="project-btn live">
                <i className="fa fa-globe"></i> Live
              </a>
              <a href="https://github.com/vaibhavverma389/nptel-assignment-help" target="_blank" rel="noreferrer" className="project-btn github">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </motion.div>
          {/* Project: Link Shortener */}
<motion.div className="project" variants={itemVariants}>
  <i className="fa fa-link"></i>
  <h4>Dynamic Link Shortener & Analytics Dashboard</h4>

  <div className="tech-stack">
    <span>React</span>
    <span>Node.js</span>
    <span>Express</span>
    <span>MongoDB</span>
    <span>Vite</span>
    <span>CSS (Glassmorphic)</span>
  </div>

  <p>
    Developed a premium full-stack URL shortening web application featuring a stunning glassmorphic UI. 
    Built a secure REST API for link creation with support for custom aliases/slugs.
    Implemented real-time click tracking, dynamic SVG QR code generation with downloader, and interactive toast notifications.
  </p>

  <ul className="project-features">
    <li>Custom Alias & Dynamic URL Shortening</li>
    <li>Real-time Click Analytics & Tracking</li>
    <li>Dynamic SVG QR Code Generation & Downloader</li>
  </ul>

  <div className="project-links">
    <a href="https://linkshortner-vaibhav.vercel.app/" target="_blank" rel="noreferrer" className="project-btn live">
      <i className="fa fa-globe"></i> Live
    </a>
    <a href="https://github.com/vaibhavverma389/Linkshortner" target="_blank" rel="noreferrer" className="project-btn github">
      <i className="fa-brands fa-github"></i> GitHub
    </a>
  </div>
</motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
