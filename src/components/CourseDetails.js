// CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../components/css/Home.css';


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
    <div className="container">
      {/* الجزء العلوي */}
      <header className="header">
        <h1>فخار المستقبل</h1>
        <p>هنا تجد أجود أنواع الفخار ودورات تدريبية لتعلم الفخار</p>
        <button className="signup-button">اشترك الآن</button>
      </header>

      {/* قسم المنتجات */}
      <section className="products-section">
        <h2>منتجاتنا</h2>
        <div className="products">
          <div className="product">
            <img src="product1.jpg" alt="منتج فخاري" />
            <p>وعاء فخاري رائع</p>
          </div>
          <div className="product">
            <img src="product2.jpg" alt="منتج فخاري" />
            <p>صحن فخاري مزخرف</p>
          </div>
          <div className="product">
            <img src="product3.jpg" alt="منتج فخاري" />
            <p>كوب فخاري أنيق</p>
          </div>
        </div>
      </section>

      {/* قسم الدورات التدريبية */}
      <section className="courses-section">
        <h2>الدورات التدريبية</h2>
        <div className="courses">
          <div className="course">
            <img src="course1.jpg" alt="دورة صناعة الفخار" />
            <p>دورة صناعة الفخار المبتدئين</p>
            <button className="signup-button">اشترك الآن</button>
          </div>
          <div className="course">
            <img src="course2.jpg" alt="دورة صناعة الفخار" />
            <p>دورة تزيين الفخار</p>
            <button className="signup-button">اشترك الآن</button>
          </div>
          <div className="course">
            <img src="course3.jpg" alt="دورة صناعة الفخار" />
            <p>دورة احترافية في صناعة الفخار</p>
            <button className="signup-button">اشترك الآن</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
