'use client';

import React from 'react';
import styles from './Features.module.css';
import { companyIcons } from '@/utils/imageImports';

const Features: React.FC = () => {
  const icons = [
    companyIcons.icon1,
    companyIcons.icon2,
    companyIcons.icon3,
    companyIcons.icon4,
    companyIcons.icon5
  ];

  return (
    <section className={styles.featuresContainer}>
      <div className={styles.trustedContent}>
        <h3 className={styles.trustedTitle}>Trusted by top institutions and AI companies</h3>
        <div className={styles.logosContainer}>
          {icons.map((icon, index) => (
            <div 
              key={index} 
              className={styles.logo} 
              style={{ backgroundImage: `url(${icon.src})` }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 