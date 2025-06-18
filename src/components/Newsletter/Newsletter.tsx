'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('Select');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

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
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10L30 30H10L20 10Z" fill="white" />
          </svg>
        </div>
        
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
      </div>
    </section>
  );
};

export default Newsletter; 