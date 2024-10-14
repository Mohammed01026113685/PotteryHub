// CoursesSection.js
import React from 'react';
import CoursesList from '../CoursesList'; // تأكد من استدعاء هذا المسار بشكل صحيح

const CoursesSection = ({ courses, sectionRef }) => {
  return (
    <section className="section-courses" ref={sectionRef}>
      <h2>الكورسات المقدمة</h2>
      <CoursesList courses={courses} />
    </section>
  );
};

export default CoursesSection;
