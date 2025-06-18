'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { companyIcons } from '@/utils/imageImports';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image 
          src={companyIcons.icon1.src} 
          alt="APA.AI Logo" 
          width={40} 
          height={40} 
          className={styles.logoImage} 
        />
        <span className={styles.logoText}>APA.Ai</span>
      </div>
      
      <div className={styles.browseContainer}>
        <button 
          className={styles.browseButton}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Browse <span className={styles.arrowDown}>▼</span>
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownItem}>AI coding</div>
            <div className={styles.dropdownItem}>AI in marketing</div>
            <div className={styles.dropdownItem}>Build your company</div>
            <div className={styles.dropdownItem}>Self improvement</div>
          </div>
        )}
      </div>
      
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="What Do You Want To Learn?" 
          className={styles.searchInput} 
        />
        <button className={styles.searchButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className={styles.authButtons}>
        {/* <Link href="/signup" className={styles.signUpButton}>
          Sign Up
        </Link>
        <Link href="/login" className={styles.loginButton}>
          Login
        </Link> */}
      </div>
    </header>
  );
};

export default Header; 