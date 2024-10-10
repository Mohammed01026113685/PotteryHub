import React from 'react';
// import sustainabilityImage from '../images/sustainability.jpg'; // تأكد من وجود الصورة في المجلد المحدد

const Sustainability = () => {
  return (
    <div>
      <h1>الاستدامة البيئية</h1>
      {/* <img src={sustainabilityImage} alt="الاستدامة البيئية" style={{ width: '100%', height: 'auto' }} /> */}
      <p>
        نستخدم الطين المحلي المستخرج بشكل مستدام ونعيد تدوير الفخار المكسور 
        لصنع منتجات جديدة، مما يساهم في تعزيز الاستدامة.
      </p>
    </div>
  );
};

export default Sustainability;
