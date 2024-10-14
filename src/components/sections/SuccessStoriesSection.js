// SuccessStoriesSection.js
import React from 'react';

const SuccessStoriesSection = ({ sectionRef }) => {
  return (
    <section className="section" ref={sectionRef}>
      <h2>قصص نجاح</h2>
      <ul>
      <li>تسليط الضوء على قصص النجاح لبعض الحرفيين</li>
      <li>الفائدة منها: إلهام الحرفيين الجدد وتعزيز الإيجابية في المجتمع</li>      </ul>
    </section>
  );
};

export default SuccessStoriesSection;
