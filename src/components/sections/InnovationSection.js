// InnovationSection.js
import React from 'react';

const InnovationSection = ({ sectionRef }) => {
  return (
    <section className="section" ref={sectionRef}>
      <h2>الابتكار والتطوير</h2>
      <ul>
      <li>تشجيع الحرفيين على الابتكار وتطوير تصاميم جديدة</li>            <li>تنظيم مسابقات لتصميم منتجات جديدة وتعزيز الروح الإبداعية...</li>
            <li>تقديم استشارات في إدارة الأعمال لتحسين الكفاءة</li>
            <li>استخدام تقنيات التخطيط والتنظيم لتحديد أولويات العمل</li>
      </ul>
    </section>
  );
};

export default InnovationSection;
