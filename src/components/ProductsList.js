// ProductsList.js
import React from 'react';
import ProductCard from './ProductCard'; // استدعاء مكون ProductCard
import './ProductCard.css'; // يمكنك إضافة تنسيق خاص للمنتجات هنا


const ProductsList = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
