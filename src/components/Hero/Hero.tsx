'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { profileImages } from '@/utils/imageImports';

const Hero: React.FC = () => {
  const images = [
    profileImages.image1,
    profileImages.image2,
    profileImages.image3,
    profileImages.image4
  ];

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Your AI Powered Learning <span className={styles.titleSpan}>Academy</span>
        </h1>
        
        <div className={styles.categoryButtons}>
          <button className={styles.categoryButton}>AI coding</button>
          <button className={styles.categoryButton}>AI in marketing</button>
          <button className={styles.categoryButton}>Become an AI Founder</button>
        </div>
        
        <div className={styles.toolsRow}>
          <button className={styles.toolButton}>AI tools</button>
          <button className={styles.toolButton}>Self improvement</button>
        </div>
        
        <div className={styles.profilesWrapper}>
          <div 
            className={styles.profileImage} 
            style={{ 
              backgroundImage: `url(${images[0].src})`,
              left: '5%',
              top: '5%',
              zIndex: 1
            }}
          />
          <div 
            className={styles.profileImage} 
            style={{ 
              backgroundImage: `url(${images[1].src})`,
              left: '30%',
              top: '25%',
              zIndex: 2
            }}
          />
          <div 
            className={styles.profileImage} 
            style={{ 
              backgroundImage: `url(${images[2].src})`,
              right: '15%',
              top: '15%',
              zIndex: 2
            }}
          />
          <div 
            className={styles.profileImage} 
            style={{ 
              backgroundImage: `url(${images[3].src})`,
              right: '-10%',
              zIndex: 1
            }}
          />
        </div>
      </div>
      
      <div className={styles.statsCard}>
        <div className={styles.statsIcon}>
          <span className={styles.calendarIcon}>📅</span>
        </div>
        <div className={styles.statsContent}>
          <span className={styles.statsNumber}>250k</span>
          <span className={styles.statsText}>Assisted Student</span>
        </div>
      </div>
      
      <div className={styles.classCard}>
        <div className={styles.classHeader}>
          <Image 
            src={profileImages.image2.src}
            alt="Instructor"
            width={40}
            height={40}
            className={styles.classAvatar}
          />
          <div className={styles.classInfo}>
            <h4 className={styles.className}>Vibe Coding Class</h4>
            <span className={styles.classTime}>Today at 12:00 PM</span>
          </div>
        </div>
        <button className={styles.joinButton}>Join Now</button>
      </div>
      
      <div className={styles.notificationCard}>
        <div className={styles.notificationIcon}>
          <span className={styles.emailIcon}>✉️</span>
        </div>
        <div className={styles.notificationContent}>
          <span className={styles.notificationTitle}>Congratulations</span>
          <span className={styles.notificationText}>Your admission completed</span>
        </div>
      </div>
      
      <div className={styles.backgroundShape}></div>
    </section>
  );
};

export default Hero; 