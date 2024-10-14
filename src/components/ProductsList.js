// ProductsList.js
import React from 'react';

const ProductsList = ({ products, onProductClick }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button
            className="buy-now-btn"
            onClick={(e) => {
              e.stopPropagation(); // لمنع استدعاء onProductClick مرتين عند الضغط على البطاقة
              onProductClick(); // استدعاء دالة onProductClick عند الضغط على الزر
            }}
          >
            شراء الآن
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
