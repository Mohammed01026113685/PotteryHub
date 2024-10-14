// SustainabilitySection.js
import React from 'react';

const SustainabilitySection = ({ sectionRef }) => {
  return (
    <section className="section" ref={sectionRef}>
      <h2>التنمية المستدامة في صناعة الفخار</h2>
      <ul>
      <li>استخدام المواد المحلية: نشجع الحرفيين على استخدام المواد الطبيعية والمحلية</li>
            <li>
        نستخدم الطين المحلي المستخرج بشكل مستدام ونعيد تدوير الفخار المكسور  لصنع منتجات جديدة، مما يساهم في تعزيز الاستدامة. </li>
            <li>التقنيات الصديقة للبيئة: نقدم ورش عمل تتعلق بالتقنيات الحديثة في صناعة الفخار</li>
            <li>تعليم الحرفيين: نعمل على تعليم الحرفيين أهمية الممارسات المستدامة</li>
      </ul>
    </section>
  );
};

export default SustainabilitySection;
