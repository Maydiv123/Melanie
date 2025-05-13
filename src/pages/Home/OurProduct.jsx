import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './OurProduct.css';
import bannerImg from '../../assets/banner.png';

const allCategories = [
  'All',
  'Tissue Rolls',
  'Tissue Boxes',
  'Wipes',
  'Towels',
  'Facial',
];

const products = [
  {
    id: 1,
    name: 'Eco Tissue Roll',
    image: '/images/img_image_768x325.png',
    description: '100% recycled, ultra-soft tissue roll for daily use.',
    price: '₹99',
    category: 'Tissue Rolls',
  },
  {
    id: 2,
    name: 'Bamboo Tissue Box',
    image: '/images/img_image_768x412.png',
    description: 'Sustainable bamboo tissue box for home and office.',
    price: '₹199',
    category: 'Tissue Boxes',
  },
  {
    id: 3,
    name: 'Pocket Tissue Pack',
    image: '/images/img_rectangle_17.png',
    description: 'Compact, eco-friendly tissues for on-the-go.',
    price: '₹49',
    category: 'Facial',
  },
  {
    id: 4,
    name: 'Wet Wipes',
    image: '/images/img_rectangle_17_1.png',
    description: 'Biodegradable wet wipes for sensitive skin.',
    price: '₹79',
    category: 'Wipes',
  },
  {
    id: 5,
    name: 'Kitchen Towels',
    image: '/images/img_rectangle_17_453x476.png',
    description: 'Strong, absorbent kitchen towels made from recycled fibers.',
    price: '₹129',
    category: 'Towels',
  },
  {
    id: 6,
    name: 'Facial Tissues',
    image: '/images/img_image.png',
    description: 'Gentle facial tissues for everyday freshness.',
    price: '₹89',
    category: 'Facial',
  },
];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="dark-products-section">
    
      
      {/* Hero with banner image */}
      <div className="dark-products-hero banner-image-hero banner-image-hero-bg">
        <div className="banner-image-overlay" />
        <div className="dark-products-hero-content">
          <h1 className="dark-products-title">Our products</h1>
        
        </div>
      </div>
      {/* Filter Bar */}
      <div className="dark-products-filterbar">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`dark-products-filter-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <input className="dark-products-search" placeholder="Search" />
      </div>
      {/* Product Grid */}
      <div className="dark-products-grid">
        {filteredProducts.map((product) => (
          <motion.div
            className="dark-product-card"
            key={product.id}
            whileHover={{ y: -10, boxShadow: '0 8px 32px rgba(255,0,0,0.18)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="dark-product-image-wrapper">
              <img src={product.image} alt={product.name} className="dark-product-image" />
            </div>
            <div className="dark-product-info">
              <h3 className="dark-product-name">{product.name}</h3>
              <p className="dark-product-desc">{product.description}</p>
              <div className="dark-product-bottom">
                <span className="dark-product-price">{product.price}</span>
                <a href="#" className="dark-product-link">View details</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;