import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS_DATA } from '../data/certifications';

const GROUPS = [
  'All',
  'AI & Generative AI',
  'Development & Testing',
  'Methodology',
];

const GROUP_CONFIG = {
  'AI & Generative AI': {
    icon: 'fa-brain',
    iconClass: 'cert-icon-ai',
    badgeClass: 'cert-badge-ai',
  },
  'Development & Testing': {
    icon: 'fa-laptop-code',
    iconClass: 'cert-icon-dev',
    badgeClass: 'cert-badge-dev',
  },
  'Methodology': {
    icon: 'fa-diagram-project',
    iconClass: 'cert-icon-meth',
    badgeClass: 'cert-badge-meth',
  },
};

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCerts = useMemo(() => {
    if (activeTab === 'All') return CERTIFICATIONS_DATA;
    return CERTIFICATIONS_DATA.filter((c) => c.group === activeTab);
  }, [activeTab]);

  const groupCounts = useMemo(() => {
    const counts = { All: CERTIFICATIONS_DATA.length };
    CERTIFICATIONS_DATA.forEach((c) => {
      counts[c.group] = (counts[c.group] || 0) + 1;
    });
    return counts;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="certifications-area" id="certifications">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header-wrap"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Professional Learning</span>
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subtext">
            Issued by Cognizant Skillspring, completed July 2026
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div
          className="cert-filter-tabs"
          role="tablist"
          aria-label="Filter certifications by domain"
        >
          {GROUPS.map((group) => {
            const isActive = activeTab === group;
            return (
              <button
                key={group}
                type="button"
                role="tab"
                id={`tab-${group.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                aria-selected={isActive}
                aria-controls="certifications-grid"
                tabIndex={0}
                className={`cert-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(group)}
              >
                <span>{group}</span>
                <span className="cert-tab-count" aria-label={`${groupCounts[group] || 0} certificates`}>
                  {groupCounts[group] || 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <motion.div
          id="certifications-grid"
          role="region"
          aria-live="polite"
          className="cert-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab}
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => {
              const config = GROUP_CONFIG[cert.group] || {
                icon: 'fa-certificate',
                iconClass: 'cert-icon-ai',
                badgeClass: 'cert-badge-ai',
              };

              return (
                <motion.article
                  key={cert.id}
                  className="cert-card"
                  variants={itemVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div>
                    <div className="cert-card-top">
                      <div
                        className={`cert-icon-wrap ${config.iconClass}`}
                        aria-hidden="true"
                      >
                        <i className={`fa-solid ${config.icon}`}></i>
                      </div>
                      <span className={`cert-badge ${config.badgeClass}`}>
                        {cert.group}
                      </span>
                    </div>

                    <h3 className="cert-title">{cert.title}</h3>
                  </div>

                  <div>
                    <div className="cert-meta">
                      <div className="cert-meta-item">
                        <i className="fa-solid fa-award" aria-hidden="true"></i>
                        <span>
                          Issuer: <span className="cert-issuer">{cert.issuer}</span>
                          <i
                            className="fa-solid fa-circle-check cert-verified-icon"
                            title="Verified"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                      <div className="cert-meta-item">
                        <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
                        <span>Completed: {cert.date}</span>
                      </div>
                    </div>

                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn-action"
                        aria-label={`View certificate for ${cert.title}`}
                      >
                        <span>View Certificate</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
