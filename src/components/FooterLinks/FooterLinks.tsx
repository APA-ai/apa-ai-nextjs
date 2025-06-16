'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FooterLinks.module.css';
import { companyIcons } from '@/utils/imageImports';

const FooterLinks: React.FC = () => {
  return (
    <footer className={styles.footerLinksContainer}>
      <div className={styles.footerLinksContent}>
        <div className={styles.logoContainer}>
          <Image 
            src={companyIcons.icon1.src} 
            alt="APA.AI Logo" 
            width={40} 
            height={40} 
            className={styles.logoImage} 
          />
        </div>
        
        <div className={styles.linksContainer}>
          <Link href="/terms" className={styles.footerLink}>
            Terms and Condition
          </Link>
          <Link href="/dpp" className={styles.footerLink}>
            DPP
          </Link>
          <Link href="/about" className={styles.footerLink}>
            About us
          </Link>
          <Link href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks; 