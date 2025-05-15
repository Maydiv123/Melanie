import React, { useRef, useEffect, useState } from 'react';
import './OurProduct.css';
import ourProductVideo from '../../assets/OurProduct.mp4';
import heroSectionVideo from '../../assets/HeroSection.mp4';
import Star from '../../assets/Star.png';

const products = [
  {
    id: 1,
    name: 'Classic Handbag',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    price: '£329.00',
  },
  {
    id: 2,
    name: 'Modern Crossbody',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    price: '£199.00',
  },
  {
    id: 3,
    name: 'Designer Backpack',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    price: '£279.00',
  },
  {
    id: 4,
    name: 'Premium Satchel',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    price: '£349.00',
  },
];

const promoImg = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80';

const ProductsSection = () => {
  const videoRef = useRef(null);
  const promoRef = useRef(null);
  const videoCardRef = useRef(null);
  const [promoZoom, setPromoZoom] = useState(false);
  const [promoInView, setPromoInView] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

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

  return (
    <section className="product-section-dark">
      {/* Top Banner/Slider with Video Background */}
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
            <span>“So soft and strong! Best tissues ever.”</span>
            <span className="stars">★★★★★</span>
          </div>
          {/* CTAs */}
          <div className="banner-cta-row">
            <button className="banner-cta-btn">Shop Now</button>
            <button className="banner-cta-btn secondary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Featured Products Grid */}
      <h2 className="product-section-title">#Featured Products</h2>
      <div className="product-grid-dark">
        {products.map((product) => (
          <div className="product-card-dark" key={product.id}>
            <div className="product-image-dark">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info-dark">
              <h3 className="product-name-dark">{product.name}</h3>
              <div className="product-bottom-dark">
                <span className="product-price-dark">{product.price}</span>
              </div>
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
            backgroundImage: `url(${promoImg})`,
            backgroundPosition: `${50 + parallax.x}% ${50 + parallax.y}%`,
          }}
          onMouseMove={handlePromoMouseMove}
          onMouseLeave={handlePromoMouseLeave}
        >
          <div className="mid-card-overlay"></div>
          <div className="shine-sweep"></div>
          <div className="mid-card-content-overlay promo-text-entrance">
            <h3 className="mid-card-title-overlay">EXTRA 75% OFF</h3>
            <p className="mid-card-desc-overlay">Special offer for a limited time only. Don't miss out!</p>
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
            <p className="mid-card-desc-below">Watch our latest product video</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;