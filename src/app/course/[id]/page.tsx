'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { profileImages, recentImages } from '@/utils/imageImports';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // Mock data for the course
  const courseData = {
    title: 'Class Title - Author Name',
    description: 'Learn essential skills and concepts in this comprehensive course. Master the fundamentals and apply them to real-world projects with expert guidance.',
    videoUrl: '/videos/sample.mp4',
    currentTime: '1:08',
    totalTime: '4:32',
    classes: [
      { id: 1, title: 'Class 1', subtitle: 'Introduction', duration: '10:16' },
      { id: 2, title: 'Class 2', subtitle: 'Introduction', duration: '14:45' },
      { id: 3, title: 'Class 3', subtitle: 'Introduction', duration: '14:12' },
      { id: 4, title: 'Class 4', subtitle: 'Introduction', duration: '15:30' },
      { id: 5, title: 'Class 5', subtitle: 'Introduction', duration: '12:58' },
      { id: 6, title: 'Class 6', subtitle: 'Introduction', duration: '17:15' },
      { id: 7, title: 'Class 7', subtitle: 'Introduction', duration: '16:02' },
      { id: 8, title: 'Class 8', subtitle: 'Introduction', duration: '19:45' },
    ],
  };

  // Mock data for similar courses
  const similarCourses = [
    {
      id: 1,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      image: recentImages.recent1,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image1
      }
    },
    {
      id: 2,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      image: recentImages.recent2,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image2
      }
    },
    {
      id: 3,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      image: recentImages.recent3,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image3
      }
    },
    {
      id: 4,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      image: recentImages.recent4,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image4
      }
    }
  ];

  // Mock data for professors
  const professors = [
    { id: 1, name: 'Name', title: 'Title here', image: profileImages.image1 },
    { id: 2, name: 'Name', title: 'Title here', image: profileImages.image2 },
    { id: 3, name: 'Name', title: 'Title here', image: profileImages.image3 },
    { id: 4, name: 'Name', title: 'Title here', image: profileImages.image4 },
  ];

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.courseContainer}>
        <h1 className={styles.courseTitle}>{courseData.title}</h1>
        
        <div className={styles.courseContent}>
          <div className={styles.videoContainer}>
            <Link href="/subscription" className={styles.videoWrapper}>
              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 5V19L17 12L7 5Z" fill="white"/>
                  </svg>
                </div>
                <div className={styles.upgradeText}>Click to upgrade and watch full video</div>
              </div>
              <div className={styles.videoControls}>
                <button className={styles.controlButton} onClick={(e) => e.preventDefault()}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 5L7 12L17 19V5Z" fill="white"/>
                  </svg>
                </button>
                <button className={styles.controlButton} onClick={(e) => e.preventDefault()}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5H6V19H8V5ZM18 5H16V19H18V5Z" fill="white"/>
                  </svg>
                </button>
                <button className={styles.controlButton} onClick={(e) => e.preventDefault()}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 5V19L17 12L7 5Z" fill="white"/>
                  </svg>
                </button>
              </div>
              <div className={styles.videoTime}>
                <span>{courseData.currentTime} / {courseData.totalTime}</span>
                <span>GTM workshop</span>
              </div>
            </Link>
          </div>
          
          <div className={styles.courseInfo}>
            <div className={styles.courseDescription}>
              <h2>Introduction</h2>
              <p>{courseData.description}</p>
              <Link href="/subscription" className={styles.accessButton}>Access To Full Class Video</Link>
            </div>
            
            <div className={styles.courseClasses}>
              {courseData.classes.map((classItem, index) => (
                <div key={classItem.id} className={styles.classItem}>
                  <div className={styles.classNumber}>{index + 1}</div>
                  <div className={styles.classContent}>
                    <div className={styles.classColor} style={{ 
                      backgroundColor: [
                        '#8B5CF6', // --color-1
                        '#EC4899', // --color-2
                        '#10B981', // --color-3
                        '#F59E0B'  // --color-4
                      ][index % 4]
                    }}></div>
                    <div className={styles.classInfo}>
                      <h3>{classItem.title}</h3>
                      <p>{classItem.subtitle}</p>
                    </div>
                  </div>
                  <div className={styles.classDuration}>{classItem.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.similarCoursesSection}>
          <h2 className={styles.sectionTitle}>Similar Courses</h2>
          <div className={styles.similarCoursesGrid}>
            {similarCourses.map((course) => (
              <Link href={`/course/${course.id}`} key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={280}
                    height={160}
                    className={styles.courseImage}
                  />
                </div>
                <div className={styles.courseCardContent}>
                  <h3 className={styles.courseCardTitle}>{course.title}</h3>
                  <div className={styles.instructorInfo}>
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={24}
                      height={24}
                      className={styles.instructorAvatar}
                    />
                    <span className={styles.instructorName}>{course.instructor.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className={styles.professorsSection}>
          <h2 className={styles.sectionTitle}>Topics/Interesting professors</h2>
          <div className={styles.professorsGrid}>
            {professors.map((professor) => (
              <div key={professor.id} className={styles.professorCard}>
                <div className={styles.professorImageContainer}>
                  <Image
                    src={professor.image}
                    alt={professor.name}
                    width={200}
                    height={200}
                    className={styles.professorImage}
                  />
                </div>
                <h3 className={styles.professorName}>{professor.name}</h3>
                <p className={styles.professorTitle}>{professor.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>More About APA.AI</h2>
          <div className={styles.aboutContent}>
            <div className={styles.missionSection}>
              <h3>Our Mission</h3>
              <p>To empower 1 billion creators to build with AI.</p>
              <p>APA.AI is the gateway for AI-native entrepreneurs. We offer world-class AI education led by experts from Stanford, Google, and Meta, equipping founders with the skills to build in the AI era.</p>
              <p>As part of a powerful ecosystem with Bay Area Founders Club (fundraising) and InRush (marketing), APA.AI helps creators go from idea to launch—fast.</p>
              <p>Learn AI. Launch Boldly. Build the Future.</p>
            </div>
            <div className={styles.communitySection}>
              <h3>Join the Community</h3>
              <div className={styles.communityIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="8" fill="#4F46E5" />
                  <path d="M24 16V32M16 24H32" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <button className={styles.joinButton}>Join the Discord Community</button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
