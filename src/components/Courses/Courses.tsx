'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Courses.module.css';
import { recentImages, profileImages } from '@/utils/imageImports';

const Courses: React.FC = () => {
  // 课程数据
  const courseData = [
    {
      id: 1,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      category: "TRENDING",
      image: recentImages.recent1,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image1
      }
    },
    {
      id: 2,
      title: "Advanced Machine Learning Techniques for Data Scientists",
      category: "TRENDING",
      image: recentImages.recent2,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image2
      }
    },
    {
      id: 3,
      title: "Deep Learning and Neural Networks Fundamentals",
      category: "TRENDING",
      image: recentImages.recent3,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image3
      }
    },
    {
      id: 4,
      title: "Natural Language Processing with Python and TensorFlow",
      category: "TRENDING",
      image: recentImages.recent4,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image4
      }
    }
  ];

  // Free Trailers 课程数据
  const freeTrailerData = [
    {
      id: 5,
      title: "Introduction to Computer Vision and Image Recognition",
      category: "TRENDING",
      image: recentImages.recent1,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image1
      }
    },
    {
      id: 6,
      title: "Reinforcement Learning for Game Development",
      category: "TRENDING",
      image: recentImages.recent2,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image2
      }
    },
    {
      id: 7,
      title: "Building Recommendation Systems with AI",
      category: "TRENDING",
      image: recentImages.recent3,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image3
      }
    },
    {
      id: 8,
      title: "AI Ethics and Responsible Machine Learning",
      category: "TRENDING",
      image: recentImages.recent4,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image4
      }
    }
  ];

  // Online Class 课程数据
  const onlineClassData = [
    {
      id: 9,
      title: "Data Preprocessing and Feature Engineering",
      category: "TRENDING",
      image: recentImages.recent1,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image1
      }
    },
    {
      id: 10,
      title: "Time Series Forecasting with Machine Learning",
      category: "TRENDING",
      image: recentImages.recent2,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image2
      }
    },
    {
      id: 11,
      title: "AI for Healthcare and Medical Diagnostics",
      category: "TRENDING",
      image: recentImages.recent3,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image3
      }
    },
    {
      id: 12,
      title: "MLOps: Deploying and Scaling AI Models",
      category: "TRENDING",
      image: recentImages.recent4,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: profileImages.image4
      }
    }
  ];

  return (
    <div className={styles.coursesContainer}>
      <div className={styles.coursesContent}>
        {/* Recent Classes Section */}
        <div className={styles.coursesSection}>
          <div className={styles.coursesHeader}>
            <h2 className={styles.coursesTitle}>Recent Classes</h2>
            <div className={styles.navigationButtons}>
              <button className={styles.navButton}>
                <span>←</span>
              </button>
              <button className={styles.navButton}>
                <span>→</span>
              </button>
            </div>
          </div>
          
          <div className={styles.coursesGrid}>
            {courseData.map((course) => (
              <Link href="/subscription" key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className={styles.courseImage}
                  />
                </div>
                <div className={styles.courseContent}>
                  <span className={styles.courseCategory}>{course.category}</span>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseInfo}>
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={32}
                      height={32}
                      className={styles.instructorAvatar}
                    />
                    <span className={styles.instructorName}>{course.instructor.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Free Trailers Section */}
        <div className={styles.coursesSection}>
          <div className={styles.coursesHeader}>
            <h2 className={styles.coursesTitle}>Free Trailers</h2>
            <div className={styles.navigationButtons}>
              <button className={styles.navButton}>
                <span>←</span>
              </button>
              <button className={styles.navButton}>
                <span>→</span>
              </button>
            </div>
          </div>
          
          <div className={styles.coursesGrid}>
            {freeTrailerData.map((course) => (
              <Link href={`/course/${course.id}`} key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className={styles.courseImage}
                  />
                </div>
                <div className={styles.courseContent}>
                  <span className={styles.courseCategory}>{course.category}</span>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseInfo}>
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={32}
                      height={32}
                      className={styles.instructorAvatar}
                    />
                    <span className={styles.instructorName}>{course.instructor.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Access To Online Class */}
        <div className={styles.coursesSection}>
          <div className={styles.coursesHeader}>
            <h2 className={styles.coursesTitle}>Access To Online Class</h2>
            <div className={styles.navigationButtons}>
              <button className={styles.navButton}>
                <span>←</span>
              </button>
              <button className={styles.navButton}>
                <span>→</span>
              </button>
            </div>
          </div>
          
          <div className={styles.coursesGrid}>
            {onlineClassData.map((course) => (
              <Link href={`/course/${course.id}`} key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className={styles.courseImage}
                  />
                </div>
                <div className={styles.courseContent}>
                  <span className={styles.courseCategory}>{course.category}</span>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseInfo}>
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={32}
                      height={32}
                      className={styles.instructorAvatar}
                    />
                    <span className={styles.instructorName}>{course.instructor.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 