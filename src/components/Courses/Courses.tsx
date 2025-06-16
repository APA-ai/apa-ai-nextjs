'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Courses.module.css';
import { recentImages } from '@/utils/imageImports';

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
        avatar: "/avatars/instructor1.png"
      }
    },
    {
      id: 2,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      category: "TRENDING",
      image: recentImages.recent2,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: "/avatars/instructor1.png"
      }
    },
    {
      id: 3,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      category: "TRENDING",
      image: recentImages.recent3,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: "/avatars/instructor1.png"
      }
    },
    {
      id: 4,
      title: "Beginner's Guide To Becoming An AI/ML Professional Developer",
      category: "TRENDING",
      image: recentImages.recent4,
      instructor: {
        name: "Prashant Kumar Singh",
        role: "Software Developer",
        avatar: "/avatars/instructor1.png"
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
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image.src}
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
              </div>
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
            {courseData.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image.src}
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
              </div>
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
            {courseData.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image.src}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 