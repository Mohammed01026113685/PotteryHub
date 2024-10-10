// Marketing.js
import React from 'react';
import ProductsList from './ProductsList';
import img1 from './images/home/1.png';
import img2 from './images/home/2.png';
import img3 from './images/home/3.png';
const Marketing = () => {
  // قائمة المنتجات
  const products = [
    {
      id: 1,
      name: 'فخار تقليدي',
      description: 'منتج مصنوع يدويًا باستخدام التقنيات التقليدية لصعيد مصر.',
      price: '100 EGP',
      image: img1,
    },
    {
      id: 2,
      name: 'مزهرية حديثة',
      description: 'مزهرية بتصميم عصري ومزيج من الحرف التقليدية.',
      price: '150 EGP',
      image: img2,
    },
    {
      id: 3,
      name: 'صحن زخرفي',
      description: 'صحن زخرفي رائع مصنوع بدقة وحرفية.',
      price: '120 EGP',
      image: img3,
    },
  ];

  return (
    <div>
      <h1> جميع المنتجات</h1>
      <ProductsList products={products} /> {/* عرض المنتجات باستخدام مكون ProductsList */}
    </div>
  );
};

export default Marketing;