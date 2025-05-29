import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import productsData from '../data/products';

const features = [
  { icon: '🌱', label: 'Eco-Friendly' },
  { icon: '🧻', label: 'Ultra Soft' },
  { icon: '🚚', label: 'Fast Delivery' },
  { icon: '💧', label: 'Absorbent' },
];

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [activeTab, setActiveTab] = useState('Description');

  if (!product) {
    return (
      <div className="product-details-empty">
        <h2>No product data found.</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // Find related products (same category, not current product, max 4)
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Example highlights (could be dynamic)
  const highlights = [
    '100% Biodegradable',
    'Premium Quality',
    'Soft & Strong',
    'Eco Friendly',
  ];
  // Example stock status
  const stockStatus = product.stock && product.stock < 5 ? `Only ${product.stock} left!` : 'In Stock';
  const isBestSeller = Number(product.rating) >= 4.5;

  // Image gallery logic
  const images = product.images && product.images.length > 0
    ? product.images
    : [product.image, product.image, product.image]; // fallback demo
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>
      <Header />
      <div className="product-details-advanced-container">
        <div className="product-details-advanced-main">
          <div className="product-details-gallery-wrapper">
            <div className="product-details-advanced-image-wrapper">
              <img className="product-details-advanced-image" src={mainImage} alt={product.name} />
            </div>
          </div>
          <div className="product-details-advanced-info glass-card">
            <div className="product-details-badge-row">
              {isBestSeller && <span className="product-badge best-seller">Best Seller</span>}
              <span className="product-badge stock-status">{stockStatus}</span>
            </div>
            <h1 className="product-details-advanced-title fade-in-up">{product.name}</h1>
            <div className="product-details-advanced-features fade-in-up">
              {features.map(f => (
                <span className="feature-icon" key={f.label} title={f.label}>{f.icon}</span>
              ))}
            </div>
            <ul className="product-details-highlights fade-in-up">
              {highlights.map((h, i) => (
                <li key={i}>✔️ {h}</li>
              ))}
            </ul>
            <div className="product-details-advanced-meta fade-in-up">
              <span className="product-details-advanced-price">{product.price}</span>
              <span className="product-details-advanced-rating">⭐ {product.rating || '4.5'}</span>
            </div>
          </div>
        </div>
        {/* Tabbed Info Section */}
        <div className="product-details-tabs-container">
          <div className="product-details-tabs">
            {['Description', 'Details', 'Reviews', 'Shipping & Returns'].map(tab => (
              <button
                key={tab}
                className={`product-details-tab${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="product-details-tab-content">
            {activeTab === 'Description' && (
              <div>{product.description}</div>
            )}
            {activeTab === 'Details' && (
              <div>High quality, eco-friendly, ultra-soft tissue product. <br />100% biodegradable, made from recycled fibers.</div>
            )}
            {activeTab === 'Reviews' && (
              <div>No reviews yet.</div>
            )}
            {activeTab === 'Shipping & Returns' && (
              <div>Free shipping on orders over ₹499. Easy 7-day returns policy.</div>
            )}
          </div>
        </div>
        <div className="product-details-advanced-related">
          <h2 className="fade-in-up">Related Products</h2>
          <div className="related-products-advanced-list horizontal-scroll">
            {relatedProducts.length === 0 ? (
              <p>No related products found.</p>
            ) : (
              relatedProducts.map((rel) => (
                <div className="related-product-advanced-card fade-in-up" key={rel.id}>
                  <img src={rel.image} alt={rel.name} />
                  <div className="related-product-advanced-name">{rel.name}</div>
                  <div className="related-product-advanced-price">
                    {`₹${String(rel.price).replace(/[^0-9.]/g, '')}`}
                  </div>
                  <button
                    className="related-product-view-btn"
                    onClick={() => navigate(`/product/${rel.id}`, { state: { product: rel } })}
                  >
                    View Details
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails; 