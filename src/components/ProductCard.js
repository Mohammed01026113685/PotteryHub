// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // يمكنك إضافة تنسيق خاص للمنتجات هنا

const ProductCard = ({ product }) => {
  return (
    <Link to="/products" className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
    </Link>
  );
};

export default ProductCard;
