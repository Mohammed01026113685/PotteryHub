// Support.js
import React from 'react';
import '../components/css/Support.css';
import Work from './images/home/workshop.jpeg';
import Work2 from './images/home/Mohammed_Hashim_I_want_an_image_of_a_man_making_Saidi_pottery_52542dba-8ea9-4be8-b150-77dfe9c189fc.png';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {
  // قائمة الكورسات مع روابط الفيديو
  const courses = [
    {
      id: 1,
      title: 'مقدمة في صناعة الفخار',
      description: 'تعلم أساسيات صناعة الفخار والتقنيات التقليدية.',
      video: 'https://www.youtube.com/embed/oAd7oEUZE0k',
    },
    {
      id: 2,
      title: 'تصميم الفخار الحديث',
      description: 'استكشاف التصميمات العصرية والمبتكرة في صناعة الفخار.',
      video: 'https://www.youtube.com/embed/oAd7oEUZE0k',
    },
    {
      id: 3,
      title: 'تقنيات الزخرفة على الفخار',
      description: 'تعلم تقنيات الزخرفة المختلفة لإضافة لمسة جمالية للفخار.',
      video: 'https://www.youtube.com/embed/oAd7oEUZE0k',
    },
  ];

  // دالة لعرض رسالة "تحت الإنشاء"
  const showUnderConstructionMessage = () => {
    toast.info('🚧 نحن نعمل على تطوير الموقع! قريباً سيكون جاهزاً لتجربتك المميزة. شكرًا لصبرك! 🙏', {
      position: "top-center",
      autoClose: 4000, // مدة الإغلاق التلقائي 4 ثوانٍ
      hideProgressBar: false, // إظهار شريط التقدم
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
    });
  };
  

  return (
    <>
      <ToastContainer />
      <div className="container">
        {/* الجزء العلوي */}
        <header className="header">
          <h1>ورشة عمل صناعة الفخار: إبداعك يبدأ هنا</h1>
          <p>دع إبداعك يتجلى من خلال إيديك</p>
          <button className="signup-button" onClick={showUnderConstructionMessage}>
            اشترك الآن
          </button>
        </header>

        {/* قسم الدورات */}
        <section className="courses-section">
          <div className="courses-grid">
            <div className="course">
              <img src={Work} alt="ورشة العمل 1" />
              <div className="course-info">
                <h3>ورشة صناعة الفخار للمبتدئين</h3>
                <p>تعلم الأساسيات في تشكيل الفخار.</p>
                <button className="signup-button" onClick={showUnderConstructionMessage}>
                  اشترك الآن
                </button>
              </div>
            </div>
            <div className="course">
              <img src={Work2} alt="ورشة العمل 2" />
              <div className="course-info">
                <h3>ورشة تزيين الفخار التقليدي</h3>
                <p>تعلم فنون التزيين التقليدية.</p>
                <button className="signup-button" onClick={showUnderConstructionMessage}>
                  اشترك الآن
                </button>
              </div>
            </div>
            <div className="course">
              <img src={Work2} alt="ورشة العمل 3" />
              <div className="course-info">
                <h3>ورشة تزيين الفخار التقليدي</h3>
                <p>تعلم فنون التزيين التقليدية.</p>
                <button className="signup-button" onClick={showUnderConstructionMessage}>
                  اشترك الآن
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* قسم الكورسات المتاحة */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">الكورسات المتاحة</h2>
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={course.video}
                    title={course.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Support;
