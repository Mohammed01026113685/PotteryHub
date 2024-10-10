// Support.js
import React from 'react';
import './Support.css';
const Support = () => {
  // قائمة الكورسات مع روابط الفيديو
  const courses = [
    {
      id: 1,
      title: 'مقدمة في صناعة الفخار',
      description: 'تعلم أساسيات صناعة الفخار والتقنيات التقليدية.',
      video: 'https://www.youtube.com/embed/oAd7oEUZE0k', // رابط الفيديو المعدل
    },
    {
      id: 2,
      title: 'تصميم الفخار الحديث',
      description: 'استكشاف التصميمات العصرية والمبتكرة في صناعة الفخار.',
      video: 'https://www.youtube.com/embed/oAd7oEUZE0k', // تأكد من مسار الفيديو المحلي
    },
    {
      id: 3,
      title: 'تقنيات الزخرفة على الفخار',
      description: 'تعلم تقنيات الزخرفة المختلفة لإضافة لمسة جمالية للفخار.',
      video: 'https://www.youtube.com/embed/oAd7oEUZE0k', // استبدل بـ ID فيديو YouTube صحيح
    },
    // يمكنك إضافة المزيد من الكورسات هنا
  ];

  return (
    <div>
      <h1>الكورسات المتاحة</h1>
      <ul className="courses-lis">
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* إضافة فيديو لكل كورس */}
            <iframe 
              width="600" 
              height="315" 
              src={course.video} 
              title={course.title} 
              frameBorder="0" 
              allowFullScreen 
              style={{ marginBottom: '20px' }} // تنسيق بسيط
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Support;
