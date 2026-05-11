import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="skills-area" id="skills">
      <div className="container">

        <motion.div 
          className="skills-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4>Skills & Tech Stack</h4>
          <p>Backend-focused development with strong foundations in scalable system design</p>
        </motion.div>

        <motion.div 
          className="skills-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Core Backend */}
          <motion.div className="skills-card" variants={itemVariants}>
            <h3>Backend Development (Core)</h3>
            <div className="skills-grid">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST API Design</span>
              <span>Authentication (JWT, Passport.js)</span>
              <span>Middleware & Routing</span>
              <span>Error Handling</span>
            </div>
          </motion.div>

          {/* Programming */}
          <motion.div className="skills-card" variants={itemVariants}>
            <h3>Programming Languages</h3>
            <div className="skills-grid">
              <span>JavaScript (Advanced)</span>
              <span>Java</span>
              <span>Python</span>
            </div>
          </motion.div>

          {/* Database */}
          <motion.div className="skills-card" variants={itemVariants}>
            <h3>Database & Optimization</h3>
            <div className="skills-grid">
              <span>MongoDB</span>
              <span>SQL</span>
              <span>Indexing & Query Optimization</span>
              <span>Data Modeling</span>
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div className="skills-card" variants={itemVariants}>
            <h3>Frontend (Supporting)</h3>
            <div className="skills-grid">
              <span>React.js</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div className="skills-card" variants={itemVariants}>
            <h3>Tools & Platforms</h3>
            <div className="skills-grid">
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>Vercel</span>
              <span>Render</span>
            </div>
          </motion.div>

          {/* Concepts */}
          <motion.div className="skills-card" variants={itemVariants}>
            <h3>Core Concepts</h3>
            <div className="skills-grid">
              <span>Data Structures & Algorithms</span>
              <span>OOP</span>
              <span>DBMS</span>
              <span>System Design Basics</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
