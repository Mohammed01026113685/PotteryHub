import React from 'react';
import { Link } from 'react-router-dom'; // استيراد Link
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <>
    <br/>
    <h2>ابدأ مسيرتك في عالم الفخار مع برامجنا المتكاملة</h2>
    <div className="services-container">
      <Link to="/support" className="service-card"> {/* الرابط إلى ورش العمل */}
        <h3>ورش عمل</h3>
        <img src="https://tse3.mm.bing.net/th?id=OIG3.vQcQgZrDoxowR83vZDU1&pid=ImgGn" alt="Workshops" />
        <p>
          استمتع بتجربة تعلم فريدة من نوعها من خلال ورش العمل التي نقدمها. تتيح لك ورش العمل التفاعلية فرصة اكتساب مهارات حرفية في صناعة الفخار بأيدٍ خبيرة. سواء كنت مبتدئًا أو محترفًا، نقدم لك بيئة تعليمية تفاعلية تساعدك على تطوير مهاراتك وإبداعك.
        </p>
      </Link>
      <Link to="support" className="service-card"> {/* الرابط إلى الدورات التدريبية عبر الإنترنت */}
        <h3>الدورات التدريبية عبر الإنترنت</h3>
        <img src="https://tse3.mm.bing.net/th?id=OIG4.AqdvlaVmC4MsnF97opW.&pid=ImgGn" alt="Online Courses" />
        <p>
          استفد من برامجنا التعليمية المتقدمة التي تتناول تاريخ الفخار وأساليبه الحديثة، مع تطبيقات عملية تتيح لك تطوير مهاراتك وزيادة معرفتك بفن الفخار.
        </p>
      </Link>
      <Link to="/products" className="service-card"> {/* الرابط إلى التجارة الإلكترونية */}
        <h3>التجارة الإلكترونية</h3>
        <img src='https://tse2.mm.bing.net/th?id=OIG2.oSnwMY5c7Hva2xeV2.K1&pid=ImgGn' alt="E-Commerce" />
        <p>
          من خلال منصتنا للتجارة الإلكترونية، يمكنك استعراض وشراء القطع الفنية المصنوعة يدويًا بكل سهولة. نوفر لك تشكيلة واسعة من المنتجات المصنوعة من الفخار والمواد التقليدية، حيث يمكنك دعم الحرفيين المحليين وشراء منتجات ذات جودة عالية وفريدة.
        </p>
      </Link>

      
    </div>
    </>
  );
};

export default ServicesSection;
