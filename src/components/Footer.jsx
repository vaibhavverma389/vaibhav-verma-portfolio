import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <small>Thanks for visiting — happy coding 🚀</small><br />
      <small>© {new Date().getFullYear()} Vaibhav Verma. All rights reserved.</small>
    </motion.footer>
  );
};

export default Footer;
