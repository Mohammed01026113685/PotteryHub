// src/components/LazyLoading.js
import React, { useEffect, useState } from 'react';
import logo from '../components/images/home/Pottery Hub logo with a transparent background.png';
import './LazyLoading.css'; // تأكد من استيراد ملف CSS

const LazyLoading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة تحميل البيانات
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // الوقت الذي ترغب في استخدامه لتأخير التحميل (2 ثواني كمثال)

    return () => clearTimeout(timer); // تنظيف التايمر عند إزالة المكون
  }, []);

  return (
    <div className="loading-container">
      {isLoading ? (
        <div className="loader">
          <img src={logo} alt="Loading..." />
          <p>Pottery Hub </p> {/* إضافة اسم الموقع تحت الصورة */}
        </div>
      ) : (
        <>{children}</> // إظهار المحتوى بعد التحميل
      )}
    </div>
  );
};

export default LazyLoading;
