import React, { useRef, useEffect, useState } from 'react';
import './OurProduct.css';
import './ProductCard.css';
import ourProductVideo from '../../assets/OurProduct.mp4';
import heroSectionVideo from '../../assets/HeroSection.mp4';
import Star from '../../assets/Star.png';
import productsData from '../../data/products';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Lottie from 'lottie-react';
import DeliveryLottie from '../../assets/Delivery.json';
import QualityLottie from '../../assets/Quality.json';
import PaymentLottie from '../../assets/Payment.json';
import allIcon from '../../assets/All.png';
import tissueIcon from '../../assets/tissue.png';
import napkinIcon from '../../assets/napkin.png';
import towelIcon from '../../assets/towel.png';
import wipesIcon from '../../assets/wipes.png';
import faceIcon from '../../assets/face.png';
import WishlistIcon from '../../assets/Wishlist.png';
import CartIcon from '../../assets/Cart.png';

// Replace the hardcoded products array with imported data
// const products = [
//   {
//     id: 1,
//     name: 'Classic Handbag',
//     image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
//     price: '£329.00',
//   },
//   {
//     id: 2,
//     name: 'Modern Crossbody',
//     image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
//     price: '£199.00',
//   },
//   {
//     id: 3,
//     name: 'Designer Backpack',
//     image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
//     price: '£279.00',
//   },
//   {
//     id: 4,
//     name: 'Premium Satchel',
//     image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
//     price: '£349.00',
//   },
// ];

const promoImg = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80';

const FILTERS = [
  { label: 'All', icon: allIcon },
  { label: 'Tissue Paper', icon: tissueIcon },
  { label: 'Napkin', icon: napkinIcon },
  { label: 'Kitchen Towel', icon: towelIcon },
  { label: 'Wet Wipes', icon: wipesIcon },
  { label: 'Facial Tissue', icon: faceIcon },
];

const ProductsSection = () => {
  const videoRef = useRef(null);
  const promoRef = useRef(null);
  const videoCardRef = useRef(null);
  const [promoZoom, setPromoZoom] = useState(false);
  const [promoInView, setPromoInView] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [showPromoText, setShowPromoText] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Intersection Observer for promo card zoom and entrance
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setPromoZoom(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (promoRef.current) observer.observe(promoRef.current);
    return () => { if (promoRef.current) observer.unobserve(promoRef.current); };
  }, []);

  // Entrance animation for both cards
  useEffect(() => {
    const promoObs = new window.IntersectionObserver(
      ([entry]) => setPromoInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const videoObs = new window.IntersectionObserver(
      ([entry]) => setVideoInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (promoRef.current) promoObs.observe(promoRef.current);
    if (videoCardRef.current) videoObs.observe(videoCardRef.current);
    return () => {
      if (promoRef.current) promoObs.unobserve(promoRef.current);
      if (videoCardRef.current) videoObs.unobserve(videoCardRef.current);
    };
  }, []);

  // Parallax hover for promo card
  const handlePromoMouseMove = (e) => {
    const rect = promoRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // max 10px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  };
  const handlePromoMouseLeave = () => setParallax({ x: 0, y: 0 });

  // Animate 25% every time promo card comes into view
  useEffect(() => {
    if (!promoRef.current) return;
    let timeout;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPromoText(false);
          timeout = setTimeout(() => setShowPromoText(true), 300); // delay for entrance
        } else {
          setShowPromoText(false);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(promoRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="product-section-dark">
        <div className="product-top-banner video-banner">
          <video
            className="banner-bg-video"
            src={heroSectionVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Floating animated tissues/leaves */}
          <div className="floating-tissues">
            <img src={Star} className="tissue-svg tissue1" alt="" />
            <img src={Star} className="tissue-svg tissue2" alt="" />
          </div>
          <div className="banner-content video-banner-content advanced-hero-content">
            <button className="voice-btn" onClick={() => {
              const msg = new window.SpeechSynthesisUtterance('Redefining Softness. Elevating Hygiene. Discover our ultra-soft, ultra-strong tissue papers, crafted for those who value comfort, care, and sustainability. Perfect for every moment, from home to travel.');
              window.speechSynthesis.speak(msg);
            }} title="Listen to this section">🔊</button>
            <h3 className="banner-title-advanced">
              <span className="sparkle-icon">✨</span>
              Redefining Softness. Elevating Hygiene.
            </h3>
            <p className="banner-desc-advanced">
              Discover our ultra-soft, ultra-strong tissue papers—crafted for those who value comfort, care, and sustainability.<br />
              Perfect for every moment, from home to travel.
            </p>
            {/* Animated stats */}
            <div className="banner-stats">
              <div className="stat"><span>100%</span> Biodegradable</div>
              <div className="stat"><span>Ultra</span>-Soft</div>
              <div className="stat"><span>10,000+</span> Happy Families</div>
            </div>
            {/* Testimonial */}
            <div className="banner-testimonial">
              <span>"So soft and strong! Best tissues ever."</span>
              <span className="stars">★★★★★</span>
            </div>
            {/* CTAs */}
            <div className="banner-cta-row">
              <button className="banner-cta-btn">Shop Now</button>
              <button className="banner-cta-btn secondary">Learn More</button>
            </div>
          </div>
        </div>
        {/* Filter Bar (moved here) */}
        <div className="product-filter-bar">
          {FILTERS.map((filter) => (
          <button
              key={filter.label}
              className={`product-filter-btn${activeFilter === filter.label ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter.label)}
            >
              <span className="product-filter-icon">
                <img src={filter.icon} alt={filter.label} style={{ width: 24, height: 24, objectFit: 'contain' }} />
              </span>
              {filter.label}
          </button>
        ))}
        </div>
        {/* Featured Products Grid */}
        <h2 className="product-section-title">#Featured Products</h2>
        <div className="product-grid-dark">
          {productsData.slice(0, 4).map((product) => (
            <div className="product-card-dark" key={product.id}>
              <div className="product-image-container">
                <img 
                  className="product-image-dark" 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200/ffffff/333333?text=Product";
                  }}
                  loading="lazy"
                />
              </div>
              <div className="product-card-actions">
                <button className="shop-now-btn">Shop Now</button>
              </div>
              <div className="product-card-side-icons">
                <button className="icon-btn" title="Add to Wishlist">
                  <img src={WishlistIcon} alt="Wishlist" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </button>
                <button className="icon-btn" title="Add to Cart">
                  <img src={CartIcon} alt="Cart" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second row of products */}
        <div className="product-grid-dark">
          {productsData.slice(2, 6).map((product) => (
            <div className="product-card-dark" key={product.id}>
              <div className="product-image-container">
                <img 
                  className="product-image-dark" 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200/ffffff/333333?text=Product";
                  }}
                  loading="lazy"
                />
              </div>
              <div className="product-card-actions">
                <button className="shop-now-btn">Shop Now</button>
              </div>
              <div className="product-card-side-icons">
                <button className="icon-btn" title="Add to Wishlist">
                  <img src={WishlistIcon} alt="Wishlist" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </button>
                <button className="icon-btn" title="Add to Cart">
                  <img src={CartIcon} alt="Cart" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Section: Two Cards Side by Side, edge-to-edge images, overlays */}
        <div className="product-mid-row exact-match">
          {/* Promo Card with parallax, shine, entrance, zoom */}
          <div
            ref={promoRef}
            className={`mid-card promo-mid-card exact-match-promo${promoZoom ? ' zoom-animate' : ''}${promoInView ? ' card-in-view' : ''}`}
            style={{
              backgroundImage: `url('/images/img_rectangle_17_453x476.png')`,
              backgroundPosition: `${50 + parallax.x}% ${50 + parallax.y}%`,
            }}
            onMouseMove={handlePromoMouseMove}
            onMouseLeave={handlePromoMouseLeave}
          >
            <div className="mid-card-overlay"></div>
            <div className="shine-sweep"></div>
            <div className="mid-card-content-overlay promo-text-entrance">
              <div className="promo-offer-text">
                EXTRA <span className={`promo-offer-highlight${showPromoText ? ' show' : ''}`}>25%</span> OFF
              </div>
              <p className="mid-card-desc-overlay">Special offer on {productsData[4].name}. Don't miss out!</p>
            </div>
      </div>
          {/* Video Card with scale, caption slide, entrance */}
          <div
            ref={videoCardRef}
            className={`mid-card video-mid-card exact-match-video${videoInView ? ' card-in-view' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mid-card-overlay"></div>
            <video
              className="mid-card-video-bg"
              src={ourProductVideo}
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              style={{objectFit: 'cover', width: '100%', height: '100%'}}
            />
            <div className="mid-card-content-below video-caption-slide">
              <p className="mid-card-desc-below">Watch our latest <span className="highlight-yellow">product</span> video</p>
            </div>
          </div>
        </div>

        {/* Most Bought Section */}
        <h2 className="product-section-title">Most Bought</h2>
        <div className="product-grid-dark">
          {productsData.slice(2, 6).map((product) => (
            <div className="product-card-dark" key={product.id}>
              <div className="product-image-container">
                <img 
                  className="product-image-dark" 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200/ffffff/333333?text=Product";
                  }}
                  loading="lazy"
                />
              </div>
              <div className="product-card-actions">
                <button className="shop-now-btn">Shop Now</button>
                </div>
              <div className="product-card-side-icons">
                <button className="icon-btn" title="Add to Wishlist">
                  <img src={WishlistIcon} alt="Wishlist" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </button>
                <button className="icon-btn" title="Add to Cart">
                  <img src={CartIcon} alt="Cart" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </button>
              </div>
            </div>
        ))}
      </div>

        {/* Modern Info Bar */}
        <div className="modern-info-bar">
          <div className="info-bar-item">
            {/* Fast Delivery Lottie */}
            <span className="info-bar-icon" aria-label="Fast Delivery">
              <Lottie animationData={DeliveryLottie} loop={true} style={{ height: 70, width: 70 }} />
            </span>
            <div className="info-bar-text">
              <h3>Fast Delivery</h3>
              <p>Get your order in just 24 hours</p>
            </div>
          </div>
          <div className="info-bar-item">
            {/* Quality Guarantee Lottie */}
            <span className="info-bar-icon" aria-label="Quality Guarantee">
              <Lottie animationData={QualityLottie} loop={true} style={{ height: 70, width: 70 }} />
            </span>
            <div className="info-bar-text">
              <h3>Quality Guarantee</h3>
              <p>Crafted with premium materials</p>
            </div>
          </div>
          <div className="info-bar-item">
            {/* Secure Payment Lottie */}
            <span className="info-bar-icon" aria-label="Secure Payment">
              <Lottie animationData={PaymentLottie} loop={true} style={{ height: 70, width: 70 }} />
            </span>
            <div className="info-bar-text">
              <h3>Secure Payment</h3>
              <p>100% secure payment</p>
            </div>
          </div>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default ProductsSection;