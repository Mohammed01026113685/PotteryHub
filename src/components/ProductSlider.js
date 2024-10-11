import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // استيراد الأنماط الخاصة بالسلايدر
import './ProductSlider.css';

const ProductSlider = ({ products }) => {
  return (
    <div className="product-slider-container">
      <Carousel 
        showThumbs={false} 
        autoPlay={false} 
        infiniteLoop 
        showStatus={false} 
        emulateTouch 
        interval={5000}
        showArrows={true}
      >
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
