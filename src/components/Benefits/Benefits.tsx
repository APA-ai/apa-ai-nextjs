'use client';

import React from 'react';
import styles from './Benefits.module.css';
import { profileImages } from '@/utils/imageImports';

const Benefits: React.FC = () => {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.benefitsContent}>
        <h2 className={styles.benefitsTitle}>Everything You Need To Learn AI</h2>
        <p className={styles.benefitsSubtitle}>
          Our comprehensive curriculum covers all aspects of artificial intelligence, from basic concepts to advanced applications.
        </p>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIcon} ${styles.purple}`}>🧠</div>
            <h3 className={styles.benefitTitle}>Comprehensive Curriculum</h3>
            <p className={styles.benefitText}>
              Our courses cover machine learning, deep learning, natural language processing, computer vision, and more, providing a solid foundation in all key AI domains.
            </p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIcon} ${styles.blue}`}>💻</div>
            <h3 className={styles.benefitTitle}>Hands-On Projects</h3>
            <p className={styles.benefitText}>
              Apply your knowledge to real-world scenarios through practical projects that build your portfolio and demonstrate your skills to potential employers.
            </p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIcon} ${styles.red}`}>👩‍🏫</div>
            <h3 className={styles.benefitTitle}>Expert Instructors</h3>
            <p className={styles.benefitText}>
              Learn from industry professionals with years of experience in AI development, research, and implementation across various sectors.
            </p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIcon} ${styles.pink}`}>🚀</div>
            <h3 className={styles.benefitTitle}>Career Support</h3>
            <p className={styles.benefitText}>
              Receive guidance on resume building, interview preparation, and job placement to help you launch or advance your career in AI.
            </p>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaTag}>ONLINE COURSE</div>
            <h3 className={styles.ctaTitle}>Sharpen Your Skills With Professional Online Courses</h3>
            <button className={styles.ctaButton}>
              Join Now <span>→</span>
            </button>
          </div>
          
          <div className={styles.imageContainer}>
            <div 
              className={styles.instructorImage} 
              style={{ backgroundImage: `url(${profileImages.image4.src})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 