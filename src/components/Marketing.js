// Marketing.js
import React, { useState } from 'react';
import ProductsList from './ProductsList';
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productsData from './sections/productsData'; // استيراد البيانات

const Marketing = () => {
  const [products] = useState(productsData); // استخدام الحالة لتخزين المنتجات

  const showUnderConstructionMessage = () => {
    toast.info('🚧 نحن نعمل على تطوير الموقع! قريباً سيكون جاهزاً لتجربتك المميزة. شكرًا لصبرك! 🙏', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
    });
  };

  return (
    <div className='container'>
      <h1>جميع المنتجات</h1>
      <ProductsList products={products} onProductClick={showUnderConstructionMessage} />
      <ToastContainer />
    </div>
  );
};

export default Marketing;
