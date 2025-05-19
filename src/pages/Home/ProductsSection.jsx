import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsSection.css';


const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Tissue Paper',
      image: '/images/img_rectangle_17.png',
      link: '/products/tissue-paper'
    },
    {
      id: 2,
      name: 'Tissue Wipes',
      image: '/images/img_rectangle_17_453x476.png',
      link: '/products/tissue-wipes'
    },
    {
      id: 3,
      name: 'Tissue Papers',
      image: '/images/img_rectangle_17_1.png',
      link: '/products/tissue-papers'
    }
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header-row">
          <h2 className="products-title">Explore top Products</h2>
          <Link to="/products" className="products-explore-btn">
            <span className="products-explore-text">Explore Listings</span>
            <img src="/images/img_arrowright.svg" alt="Arrow right" className="products-explore-arrow" />
          </Link>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="products-card">
              <div className="products-card-inner">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="products-card-img"
                />
                <div className="products-card-bottom-row">
                  <h3 className="products-card-title">{product.name}</h3>
                  <Link to={product.link} className="products-card-link">
                    <img src="/images/img_arrowright.svg" alt="View product" className="products-card-link-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="products-slider-row">
          <img src="/images/img_slider.svg" alt="Slider" className="products-slider-img" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;