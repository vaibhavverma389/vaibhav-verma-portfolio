import React from 'react';
import { motion } from 'framer-motion';

const AiTools = () => {
  const capabilities = [
    'Generate clean boilerplate',
    'Debug tricky edge cases',
    'Refactor legacy structures',
    'Analyze runtime error traces',
    'Generate technical docs',
    'Improve development speed',
    'Explore technical approaches',
    'Automate repetitive dev tasks'
  ];

  const tools = [
    { name: 'Gemini', role: 'Google AI', icon: 'fa-robot' },
    { name: 'GitHub Copilot', role: 'Code Completion', icon: 'fa-code' },
    { name: 'Claude', role: 'Anthropic', icon: 'fa-brain' },
    { name: 'Codex', role: 'OpenAI Engine', icon: 'fa-terminal' },
    { name: 'Antigravity', role: 'Agentic Coding', icon: 'fa-bolt' },
    { name: 'ChatGPT', role: 'OpenAI', icon: 'fa-comments' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="ai-section" id="ai-tools">
      <div className="container">
        
        <motion.div 
          className="section-header-wrap"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Next-Gen Engineering</span>
          <h2 className="section-heading">AI-Powered Development</h2>
          <p className="section-subtext">
            Leveraging modern AI tooling to maximize developer velocity, improve code reliability, and streamline routine engineering workflows.
          </p>
        </motion.div>

        <motion.div 
          className="ai-section-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ai-intro-grid">
            <div>
              <p className="ai-intro-text">
                I integrate modern AI assistants into my everyday developer environment to eliminate friction, generate repetitive boilerplate, and rapidly prototype software architectures.
              </p>
            </div>
            <div className="ai-ethos-box">
              <strong>Engineering Ethos:</strong> While AI accelerates development velocity, core architectural decisions, robust edge-case validation, security postures, and algorithmic complexity remain strictly governed by fundamental software engineering discipline.
            </div>
          </div>

          {/* Key AI Capabilities List */}
          <div className="ai-capabilities-grid">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="ai-cap-item">
                <span className="ai-cap-icon">&#10003;</span>
                <span>{cap}</span>
              </div>
            ))}
          </div>

          {/* Tool Cards */}
          <motion.div 
            className="ai-tools-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {tools.map((t, idx) => (
              <motion.div key={idx} className="ai-tool-card" variants={itemVariants}>
                <div className="ai-tool-badge">
                  <i className={`fa ${t.icon}`} aria-hidden="true"></i> {t.name}
                </div>
                <span className="ai-tool-role">{t.role}</span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AiTools;
