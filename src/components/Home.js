// Home.js
import React, { useEffect, useRef } from 'react';
import WelcomeMessage from './WelcomeMessage';
import ProductsList from './ProductsList'; // استدعاء مكون ProductsList
import './Home.css';
import img1 from './images/home/1.png';
import img2 from './images/home/2.png';
import img3 from './images/home/3.png';
import CoursesList from './CoursesList';
import ServicesSection from './ServicesSection';

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    sectionRefs.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // قائمة المنتجات
  const products = [
    {
      id: 1,
      name: 'فخار تقليدي',
      price: '100 EGP',
      image: img1
    },
    {
      id: 2,
      name: 'صحن زخرفي ',
      price: '150 EGP',
      image: img2
    },
    {
      id: 3,
      name: ' مزهرية حديثة',
      price: '120 EGP',
      image: img3
    }
  ];
// قائمة الكورسات
const courses = [
  {
    id: 1,
    title: 'دورة صناعة الفخار التقليدية',
    description: 'تعلم كيفية استخدام الأدوات التقليدية في صناعة الفخار.',
    duration: '4 أسابيع',
  },
  {
    id: 2,
    title: 'دورة التصميم الحديث في الفخار',
    description: 'تعلم كيفية تصميم الفخار بطرق مبتكرة تتماشى مع الاتجاهات الحديثة.',
    duration: '6 أسابيع',
  },
  {
    id: 3,
    title: 'دورة الاستدامة في صناعة الفخار',
    description: 'تعلم كيفية استخدام مواد صديقة للبيئة وتقنيات مستدامة.',
    duration: '3 أسابيع',
  }
];
  return (
    <div className="bg">
    <div className="home-container">
      <div className="welcome-message">
        <h1>مرحبًا بكم في  منصتكم الرقمية الشاملة لدعم وتمكين الحرفيين في صناعة الفخار بصعيد مصر</h1>
        <WelcomeMessage />
      </div>

      <div className='home-section'>
        {/* عرض المنتجات */}
        <section className="sectionProdact" ref={el => sectionRefs.current[1] = el}>
          <ProductsList products={products} /> {/* استدعاء مكون ProductsList */}
        </section>
      </div>
    <ServicesSection/>
    <section >
          <h2>ماذا نقدم؟</h2>
          <ul>
            <li>منصة شاملة: نحن نقدم منصة رقمية متكاملة تجمع بين الحرفيين، المستهلكين، والمستثمرين...</li>
            <li>ورش عمل ودورات تدريبية: نقدم ورش عمل ودورات تدريبية تهدف إلى تطوير المهارات الفنية والإدارية للحرفيين...</li>
            <li>منصة تجارة إلكترونية: سيتم إنشاء متجر إلكتروني متكامل يتيح للحرفيين بيع منتجاتهم الفخارية...</li>
            <li>تعاون مع مؤسسات سياحية: بالتعاون مع المؤسسات السياحية في الأقصر وأسوان...</li>
          </ul>
        </section>
      {/* عرض الكورسات */}
      <section className="section-courses" ref={el => sectionRefs.current[1] = el}>
          <h2>الكورسات المقدمة في تطوير صناعة الفخار</h2>
          <CoursesList courses={courses} /> {/* استدعاء مكون CoursesList */}
        </section>
      

        <section className="section" ref={el => sectionRefs.current[2] = el}>
          <h2>التنمية المستدامة في صناعة الفخار</h2>
          <ul>
            <li>استخدام المواد المحلية: نشجع الحرفيين على استخدام المواد الطبيعية والمحلية...</li>
            <li>التقنيات الصديقة للبيئة: نقدم ورش عمل تتعلق بالتقنيات الحديثة في صناعة الفخار...</li>
            <li>تعليم الحرفيين: نعمل على تعليم الحرفيين أهمية الممارسات المستدامة...</li>
          </ul>
        </section>

        <section className="section" ref={el => sectionRefs.current[3] = el}>
          <h2>حلول لتحديات الحرفيين</h2>
          <ul>
            <li>تقديم ورش عمل محلية: ستوفر المنصة ورش عمل مستمرة لتحسين مهارات الحرفيين...</li>
            <li>دعم الشباب: ستمكن المنصة الشباب في المناطق النائية من الوصول إلى التعليم والتدريب...</li>
          </ul>
        </section>

        <section className="section" ref={el => sectionRefs.current[4] = el}>
          <h2>الابتكار والتطوير</h2>
          <ul>
            <li>تشجيع الحرفيين على الابتكار وتطوير تصاميم جديدة...</li>
            <li>تنظيم مسابقات لتصميم منتجات جديدة وتعزيز الروح الإبداعية...</li>
            <li>تقديم استشارات في إدارة الأعمال لتحسين الكفاءة...</li>
            <li>استخدام تقنيات التخطيط والتنظيم لتحديد أولويات العمل...</li>
          </ul>
        </section>

        <section className="section" ref={el => sectionRefs.current[5] = el}>
          <h2>قصص نجاح</h2>
          <ul>
            <li>تسليط الضوء على قصص النجاح لبعض الحرفيين...</li>
            <li>الفائدة منها: إلهام الحرفيين الجدد وتعزيز الإيجابية في المجتمع...</li>
          </ul>
        </section>

        <section className="section" ref={el => sectionRefs.current[6] = el}>
          <h2>المشكلة التي تحلها الفكرة</h2>
          <ul>
            <li>تحسين الوصول إلى التدريب الحديث، وتعزيز الإنتاج الصديق للبيئة...</li>
          </ul>
        </section>
    </div>
    </div>
  );
};

export default Home;
