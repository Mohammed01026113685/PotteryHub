// CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

// قائمة الكورسات - يمكن أن تكون بيانات ثابتة أو يتم جلبها من API
const courses = [
  {
    id: 1,
    title: 'دورة صناعة الفخار التقليدية',
    description: 'تعلم كيفية استخدام الأدوات التقليدية في صناعة الفخار.',
    duration: '4 أسابيع',
    content: 'تفاصيل أكثر عن الدورة...'
  },
  {
    id: 2,
    title: 'دورة التصميم الحديث في الفخار',
    description: 'تعلم كيفية تصميم الفخار بطرق مبتكرة تتماشى مع الاتجاهات الحديثة.',
    duration: '6 أسابيع',
    content: 'تفاصيل أكثر عن الدورة...'
  },
  {
    id: 3,
    title: 'دورة الاستدامة في صناعة الفخار',
    description: 'تعلم كيفية استخدام مواد صديقة للبيئة وتقنيات مستدامة.',
    duration: '3 أسابيع',
    content: 'تفاصيل أكثر عن الدورة...'
  }
];

const CourseDetails = () => {
  const { courseId } = useParams(); // جلب ID من المسار
  const course = courses.find(course => course.id === parseInt(courseId)); // العثور على الكورس بناءً على ID

  if (!course) {
    return <p>الكورس غير موجود</p>;
  }

  return (
    <div className="course-details">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>المدة: {course.duration}</p>
      <p>{course.content}</p> {/* عرض محتوى الدورة */}
    </div>
  );
};

export default CourseDetails;
