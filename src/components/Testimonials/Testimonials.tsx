'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import { testimonialImages } from '@/utils/imageImports';

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.testimonialsContent}>
        <h2 className={styles.testimonialsTitle}>
          Find out why 40,000+ professionals love APA.ai
        </h2>
        <p className={styles.testimonialsSubtitle}>
          See what execs, founders, and leaders have to say about cohort-based courses
        </p>
        
        <div className={styles.testimonialsGrid}>
          {/* 左上 - Starvon Washington */}
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>
              At a big company, I was always wary that Zoom meetings would be uninspiring and corporate training would be boring. But taking a cohort-based course was totally different. There was so much energy, and the human interactions inspired me instead of taking energy away from me.
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImageContainer}>
                <Image 
                  src={testimonialImages.testimonial1.src} 
                  alt="Starvon Washington" 
                  width={48} 
                  height={48}
                  className={styles.authorImage}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>Starvon Washington</h4>
                <p className={styles.authorTitle}>Software Engineer at Walmart</p>
              </div>
            </div>
            <div className={styles.playButtonSmall}>
              <div className={styles.playIcon}>▶</div>
            </div>
          </div>

          {/* 中上 - Shreman Shrestha 视频 */}
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialVideo}>
              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>▶</div>
              </div>
              <Image 
                src={testimonialImages.testimonial2.src} 
                alt="Video thumbnail" 
                fill
                className={styles.videoThumbnail}
              />
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImageContainer}>
                <Image 
                  src={testimonialImages.testimonial2.src} 
                  alt="Shreman Shrestha" 
                  width={48} 
                  height={48}
                  className={styles.authorImage}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>Shreman Shrestha</h4>
                <p className={styles.authorTitle}>Founder and Head of Community for Lenny Rachitsky</p>
              </div>
            </div>
            <div className={styles.navButtons}>
              <button className={styles.navButton}>◀</button>
              <button className={styles.navButton}>▶</button>
            </div>
          </div>
          
          {/* 右上 - Snow Montemayor */}
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>
             APA was so much easier to navigate than previous course platforms. It helped me reinforce my learning, keep track of organization, and enabled me to do live problem solving with other finance leaders.
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImageContainer}>
                <Image 
                  src={testimonialImages.testimonial3.src} 
                  alt="Snow Montemayor" 
                  width={48} 
                  height={48}
                  className={styles.authorImage}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>Snow Montemayor</h4>
                <p className={styles.authorTitle}>Director of Finance at Catalyst Advisors</p>
              </div>
            </div>
            <div className={styles.playButtonSmall}>
              <div className={styles.playIcon}>▶</div>
            </div>
          </div>

          {/* 左下 - Daniel Roberts 视频 */}
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialVideo}>
              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>▶</div>
              </div>
              <Image 
                src={testimonialImages.testimonial6.src} 
                alt="Video thumbnail" 
                fill
                className={styles.videoThumbnail}
              />
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImageContainer}>
                <Image 
                  src={testimonialImages.testimonial6.src} 
                  alt="Daniel Roberts" 
                  width={48} 
                  height={48}
                  className={styles.authorImage}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>Daniel Roberts</h4>
                <p className={styles.authorTitle}>Founder at VidLoft</p>
              </div>
            </div>
            <div className={styles.navButtons}>
              <button className={styles.navButton}>◀</button>
              <button className={styles.navButton}>▶</button>
            </div>
          </div>

          {/* 中下 - Sandy Adamski */}
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>
              Taking a APA course felt like getting onboarded into a new company. The logistics were smooth and seamless, the lectures were professional and valuable and the instructors were engaged and helpful.
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImageContainer}>
                <Image 
                  src={testimonialImages.testimonial5.src} 
                  alt="Sandy Adamski" 
                  width={48} 
                  height={48}
                  className={styles.authorImage}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>Sandy Adamski</h4>
                <p className={styles.authorTitle}>Executive Director at Hearst Magazine</p>
              </div>
            </div>
          </div>

          {/* 右下 - Yucen Zhang 视频 */}
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialVideo}>
              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>▶</div>
              </div>
              <Image 
                src={testimonialImages.testimonial4.src} 
                alt="Video thumbnail" 
                fill
                className={styles.videoThumbnail}
              />
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImageContainer}>
                <Image 
                  src={testimonialImages.testimonial4.src} 
                  alt="Yucen Zhang" 
                  width={48} 
                  height={48}
                  className={styles.authorImage}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>Yucen Zhang</h4>
                <p className={styles.authorTitle}>Product Designer at SkyWatch</p>
              </div>
            </div>
            <div className={styles.navButtons}>
              <button className={styles.navButton}>◀</button>
              <button className={styles.navButton}>▶</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 