import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RESUME_PATH, RESUME_NAME } from '../data/site';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'dsa', label: 'Problem Solving' },
  { id: 'ai-tools', label: 'AI Tools' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <motion.header
      className={`header-area ${isSticky ? 'sticky' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="header">
          <a href="#home" className="logo" aria-label="Vaibhav Verma Home">
            <span className="logo-badge" aria-hidden="true">&lt;V/&gt;</span>
            <span className="logo-name">Vaibhav Verma</span>
            <span className="logo-role">Full Stack</span>
          </a>

          <ul className={`navbar ${menuOpen ? 'active' : ''}`} id="primary-nav">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={active === n.id ? 'active' : ''}
                  aria-current={active === n.id ? 'true' : undefined}
                  onClick={close}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="mobile-resume-nav">
              <a href={RESUME_PATH} download={RESUME_NAME} className="btn-resume-nav" onClick={close}>
                <i className="fa fa-download" aria-hidden="true"></i> Resume
              </a>
            </li>
          </ul>

          <div className="header-actions">
            <a href={RESUME_PATH} download={RESUME_NAME} className="btn-resume-nav desktop-only">
              <i className="fa fa-download" aria-hidden="true"></i> Resume
            </a>

            <button
              className="menu_icon"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
