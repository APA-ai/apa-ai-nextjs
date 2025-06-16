'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Newsletter.module.css';
import { companyIcons } from '@/utils/imageImports';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('Select');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ['Teacher', 'Student', 'Parent', 'Other'];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <section className={styles.newsletterContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Boost KS2 Results</h2>
        <p className={styles.description}>
          Nam at risus ullamcorper, fringilla purus in, placerat velit 
          pellentesque efficitur sem et sem ultricies, sed consequat.
        </p>
        <button className={styles.demoButton}>Free Demo</button>
        <div className={styles.leftDot}></div>
      </div>

      <div className={styles.centerIcon}>
        <div className={styles.iconContainer}>
          <Image 
            src={companyIcons.icon1.src} 
            alt="Newsletter Icon" 
            width={60} 
            height={60}
            className={styles.icon}
          />
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <h2 className={styles.title}>Join the Community</h2>
        <p className={styles.description}>
          Subscribe to our newsletter to keep up-to-date with the latest news.
        </p>
        
        <div className={styles.formContainer}>
          <input 
            type="email" 
            placeholder="Email" 
            className={styles.emailInput}
            value={email}
            onChange={handleEmailChange}
          />
          
          <div className={styles.selectContainer}>
            <button 
              className={styles.selectButton} 
              onClick={toggleDropdown}
            >
              {selectedOption} <span className={styles.arrow}>▼</span>
            </button>
            
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {options.map((option) => (
                  <div 
                    key={option} 
                    className={styles.dropdownItem}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
        <div className={styles.rightDot}></div>
      </div>
    </section>
  );
};

export default Newsletter; 