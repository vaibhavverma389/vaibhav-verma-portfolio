import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolving = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const topics = [
    {
      name: 'Arrays',
      desc: 'Sliding window, prefix sums & in-place operations',
      icon: (
        <svg viewBox="0 0 24 24">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      )
    },
    {
      name: 'Strings',
      desc: 'Pattern matching, substrings & anagrams',
      icon: (
        <svg viewBox="0 0 24 24">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
      )
    },
    {
      name: 'Binary Search',
      desc: 'Logarithmic search on sorted arrays & predicates',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      name: 'Linked Lists',
      desc: 'Pointer manipulation, reversal & fast/slow pointers',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    },
    {
      name: 'Trees',
      desc: 'Binary Trees, BST, DFS, BFS & LCA',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <circle cx="6" cy="19" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="12" y1="8" x2="6" y2="16"></line>
          <line x1="12" y1="8" x2="18" y2="16"></line>
        </svg>
      )
    },
    {
      name: 'Graphs',
      desc: 'Adjacency lists, topological sort & cycle detection',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="18" r="3"></circle>
          <line x1="6" y1="9" x2="6" y2="15"></line>
          <line x1="9" y1="6" x2="15" y2="6"></line>
          <line x1="9" y1="18" x2="15" y2="18"></line>
          <line x1="18" y1="9" x2="18" y2="15"></line>
        </svg>
      )
    },
    {
      name: 'Dynamic Programming',
      desc: 'Memoization, bottom-up tables & optimal subproblems',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      name: 'Greedy',
      desc: 'Locally optimal choices for globally optimal results',
      icon: (
        <svg viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      name: 'Stacks & Queues',
      desc: 'Monotonic stacks, circular queues & syntax parsing',
      icon: (
        <svg viewBox="0 0 24 24">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="dsa-section" id="dsa">
      <div className="container">
        
        <motion.div 
          className="section-header-wrap"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Algorithmic Rigor</span>
          <h2 className="section-heading">Data Structures &amp; Problem Solving</h2>
          <p className="section-subtext">
            Demonstrated problem-solving track record with a strong focus on algorithmic efficiency, asymptotic complexity, and clean code.
          </p>
        </motion.div>

        {/* Featured Problem Solving Hero Card */}
        <motion.div 
          className="dsa-hero-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="dsa-hero-layout">
            <div className="dsa-headline-wrap">
              <span className="badge badge-cyan">Verified Practice Milestone</span>
              <div className="dsa-counter">355+ Problems Solved</div>
              <p className="dsa-subtext">
                Continuous problem-solving on LeetCode, strengthening core computer science skills in optimal time complexity, memory constraints, recursion, and dynamic programming state transitions.
              </p>
              <div className="dsa-cta-group">
                <a 
                  href="https://leetcode.com/vaibhavverma389/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-btn dsa-cta-btn"
                >
                  <i className="fa fa-code" aria-hidden="true"></i> View LeetCode Profile
                </a>
              </div>
            </div>

            {/* Focus Metrics with Animated Bars */}
            <div className="dsa-stats-column">
              <div className="dsa-stat-row">
                <div className="dsa-stat-info">
                  <span className="dsa-stat-name">Arrays, Strings &amp; Two Pointers</span>
                  <span className="dsa-stat-val">Primary Mastery</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill progress-p1" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="dsa-stat-row">
                <div className="dsa-stat-info">
                  <span className="dsa-stat-name">Binary Search &amp; Linked Lists</span>
                  <span className="dsa-stat-val">High Proficiency</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill progress-p2" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="dsa-stat-row">
                <div className="dsa-stat-info">
                  <span className="dsa-stat-name">Trees, Graphs &amp; Traversals</span>
                  <span className="dsa-stat-val">Core Strength</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill progress-p3" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div className="dsa-stat-row">
                <div className="dsa-stat-info">
                  <span className="dsa-stat-name">Dynamic Programming &amp; Greedy</span>
                  <span className="dsa-stat-val">Active Practice</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill progress-p4" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 9 Core DSA Topic Cards */}
        <motion.div 
          className="dsa-topics-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {topics.map((t, idx) => (
            <motion.div key={idx} className="dsa-topic-card" variants={itemVariants}>
              <div className="dsa-topic-icon" aria-hidden="true">
                {t.icon}
              </div>
              <div className="dsa-topic-details">
                <span className="dsa-topic-name">{t.name}</span>
                <span className="dsa-topic-desc">{t.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSolving;
