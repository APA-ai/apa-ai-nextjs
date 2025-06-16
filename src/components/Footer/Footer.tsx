'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.copyright}>© {year} APA.AI Learning Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 