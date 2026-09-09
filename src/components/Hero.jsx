import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="FirstElement" id="home">
      <div className="container hero-container-layout">
        <motion.div
          className="profile-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>Available for Full Stack &amp; Software Engineering Roles</span>
          </div>

          <p className="hero-greeting">Hi, I'm Vaibhav Verma</p>
          <h1 className="hero-heading">
            Full Stack Developer building <span className="text-gradient">scalable &amp; user-focused</span> web applications.
          </h1>
          <h2 className="role-title">MERN Stack | REST APIs | DSA Practitioner (355+ Solved)</h2>

          <p className="hero-description">
            I engineer modern web applications using the MERN stack, RESTful micro-architectures, databases, and AI-powered development tools. Focused on high-performance backend systems, clean code, and intuitive user experiences.
          </p>

          <div className="btn-group">
            <a href="#projects" className="contact-btn">
              View Projects <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>

            <a href="/files/Vaibhav_Verma_Resume_SDE.pdf" className="resume-btn" download="Vaibhav_Verma_Resume_SDE.pdf">
              <i className="fa fa-download" aria-hidden="true"></i> Download Resume
            </a>
          </div>

          <div className="social">
            <a href="https://github.com/vaibhavverma389" aria-label="GitHub" target="_blank" rel="noreferrer" title="GitHub Profile">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vaibhavverma389" aria-label="LinkedIn" target="_blank" rel="noreferrer" title="LinkedIn Profile">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://leetcode.com/vaibhavverma389/" aria-label="LeetCode" target="_blank" rel="noreferrer" title="LeetCode Profile (355+ Solved)">
              <i className="fa fa-code" aria-hidden="true"></i>
              <span>LeetCode (355+)</span>
            </a>
            <a href="mailto:vaibhav.verma.sde@gmail.com" aria-label="Email" title="Send Email">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Floating Badge */}
          <div className="floating-badge floating-badge-top">
            <div className="floating-badge-icon">&lt;&gt;</div>
            <div>
              <div className="floating-badge-label">Stack Focus</div>
              <div className="floating-badge-val">MERN &amp; REST APIs</div>
            </div>
          </div>

          {/* Profile Photo Avatar Frame */}
          <div className="profile-photo-wrap">
            <img src="/files/photo.webp" alt="Vaibhav Verma Profile Picture" className="hero-avatar-img" />
          </div>

          {/* Code Window */}
          <div className="code-window">
            <div className="code-header">
              <div className="window-dots">
                <span className="window-dot dot-red"></span>
                <span className="window-dot dot-yellow"></span>
                <span className="window-dot dot-green"></span>
              </div>
              <div className="window-title">
                <span>developer.json</span>
              </div>
              <div className="window-status">● node v20</div>
            </div>

            <div className="code-body">
              <span className="code-line"><span className="token-keyword">const</span> <span className="token-property">engineer</span> = &#123;</span>
              <span className="code-line">&nbsp;&nbsp;<span className="token-property">name</span>: <span className="token-string">"Vaibhav Verma"</span>,</span>
              <span className="code-line">&nbsp;&nbsp;<span className="token-property">role</span>: <span className="token-string">"Full Stack Developer"</span>,</span>
              <span className="code-line">&nbsp;&nbsp;<span className="token-property">coreStack</span>: [<span className="token-string">"MongoDB"</span>, <span className="token-string">"Express"</span>, <span className="token-string">"React"</span>, <span className="token-string">"Node"</span>],</span>
              <span className="code-line">&nbsp;&nbsp;<span className="token-property">problemSolving</span>: &#123;</span>
              <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-property">platform</span>: <span className="token-string">"LeetCode"</span>,</span>
              <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-property">solvedCount</span>: <span className="token-number">355</span>,</span>
              <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-property">focus</span>: <span className="token-string">"DSA &amp; Optimization"</span></span>
              <span className="code-line">&nbsp;&nbsp;&#125;,</span>
              <span className="code-line">&nbsp;&nbsp;<span className="token-property">methodology</span>: <span className="token-string">"AI-Assisted Velocity"</span>,</span>
              <span className="code-line">&nbsp;&nbsp;<span className="token-property">openToWork</span>: <span className="token-boolean">true</span></span>
              <span className="code-line">&#125;;</span>
            </div>
          </div>

          {/* Bottom Floating Badge */}
          <div className="floating-badge floating-badge-bottom">
            <div className="floating-badge-icon">⚡</div>
            <div>
              <div className="floating-badge-label">Algorithmic Base</div>
              <div className="floating-badge-val">355+ Problems Solved</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
