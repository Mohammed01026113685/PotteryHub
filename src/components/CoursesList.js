// CoursesList.js
import React from 'react';
import { Link } from 'react-router-dom'; // استدعاء Link من react-router-dom

const CoursesList = ({ courses }) => {
  return (
    <div className="courses-list">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>المدة: {course.duration}</p>
          {/* رابط لتفاصيل الكورس */}
          <Link to={`/courses/${course.id}`}>عرض التفاصيل</Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
