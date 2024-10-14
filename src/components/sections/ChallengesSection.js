// ChallengesSection.js
import React from 'react';

const ChallengesSection = ({ sectionRef }) => {
  return (
    <section className="section" ref={sectionRef}>
      <h2>التحديات التي تواجه الحرفيين</h2>
      <ul>
      <li>تقديم ورش عمل محلية: ستوفر المنصة ورش عمل مستمرة لتحسين مهارات الحرفيين</li>
      <li>دعم الشباب: ستمكن المنصة الشباب في المناطق النائية من الوصول إلى التعليم والتدريب</li>
      </ul>
    </section>
  );
};

export default ChallengesSection;
