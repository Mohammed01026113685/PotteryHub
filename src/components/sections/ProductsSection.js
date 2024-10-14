
// ProductsSection.js
import React from 'react';
import ProductsList from '../ProductsList';
import '../css/styles.css';
import '../css/Products.css';


const ProductsSection = ({ products, sectionRef, onProductClick }) => {
  return (
    <section ref={sectionRef}>
      <h2>فخارنا... فن يعكس التراث والجمال</h2>
      <ProductsList products={products} onProductClick={onProductClick} /> {/* تأكد من تمرير الدالة هنا */}
    </section>
  );
};

export default ProductsSection;
