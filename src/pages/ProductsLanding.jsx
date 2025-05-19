import React from 'react';
import TissueMotion from '../components/TissueMotion';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './ProductsLanding.css';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductsLanding = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetails />} />
      <div className="products-landing-bg">
        <TissueMotion />
        <section className="products-hero">
          <h1 className="products-hero-title">Discover Our Eco-Friendly Products</h1>
          <p className="products-hero-desc">
            Experience the future of hygiene and sustainability with our innovative tissue and paper products.
          </p>
          <a href="#product-list" className="products-hero-btn">Shop Now</a>
        </section>
        <section id="product-list" className="products-list-section">
          <h2 className="products-list-title">Our Bestsellers</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </Routes>
  );
};

export default ProductsLanding; 