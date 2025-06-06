import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Lottie from 'lottie-react';
import aboutLottie from '../assets/About.json';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const SKILLS = [
  { label: 'Sustainable Sourcing', value: 98 },
  { label: 'Eco-Conscious Branding', value: 94 },
  { label: 'Packaging Design', value: 90 },
];

const STATS = [
  { label: 'Years of Industry Experience', value: 20, start: 4, suffix: '+' },
  { label: 'Products Delivered', value: 1000, start: 70, suffix: '+' },
  { label: 'Happy Clients', value: 300, start: 70, suffix: '+' },
  { label: 'Recognitions & Certifications', value: 64, start: 0, suffix: '' },
];

const TESTIMONIALS = [
  {
    text: "Great service. The ordering process was smooth, and communication was clear throughout. I received my bulk tissue order quickly and exactly as promised. The team helped me choose the right product type for my store, and everything was verified before dispatch.",
    author: "Jhana Shree"
  },
  {
    text: "The quality of both the product and service from Melanie has been exceptional. Their team is incredibly supportive — always ready to explain, assist, and ensure smooth deliver.Special thanks to the team for being so responsive and committed to eco-conscious excellence.",
    author: "Swathi Pvt"
  },
  {
    text: 
"I'm really pleased with the entire experience. From the moment I reached out, the team was proactive and supportive. They guided me through product selection, ensured all details were correct, and delivered everything on time.",
    author: "Arun"
  }
];

const AVATARS = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
];

const AboutUs = () => {
  const skillsRef = useRef(null);
  const statsRef = useRef(null);
  const [progress, setProgress] = useState([0, 0, 0]);
  const [stats, setStats] = useState([0, 0, 0, 0]);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // Testimonial carousel state
  const [current, setCurrent] = useState(1); // center testimonial index
  const [paused, setPaused] = useState(false);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  // Animate skills
  useEffect(() => {
    let observer;
    let timeout;
    if (skillsRef.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            SKILLS.forEach((skill, idx) => {
              setTimeout(() => {
                setProgress(prev => prev.map((p, i) => (i === idx ? skill.value : p)));
              }, idx * 300);
            });
          } else {
            setProgress([0, 0, 0]);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(skillsRef.current);
    }
    return () => {
      if (observer && skillsRef.current) observer.unobserve(skillsRef.current);
      clearTimeout(timeout);
    };
  }, []);

  // Animate stats
  useEffect(() => {
    let observer;
    let interval;
    if (statsRef.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
            // Animate all stats together
            let current = STATS.map(stat => stat.start);
            setStats(current);
            let duration = 1200; // ms
            let steps = 40;
            let stepTime = duration / steps;
            let increments = STATS.map(stat => (stat.value - stat.start) / steps);
            let count = 0;
            interval = setInterval(() => {
              count++;
              current = current.map((val, idx) => {
                let next = val + increments[idx];
                if ((increments[idx] > 0 && next >= STATS[idx].value) || (increments[idx] < 0 && next <= STATS[idx].value)) {
                  return STATS[idx].value;
                }
                return next;
              });
              setStats(current.map((v, idx) => Math.round(v)));
              if (count >= steps) {
                setStats(STATS.map(stat => stat.value));
                clearInterval(interval);
              }
            }, stepTime);
          } else if (!entry.isIntersecting) {
            setStats(STATS.map(stat => stat.start));
            setStatsAnimated(false);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(statsRef.current);
    }
    return () => {
      if (observer && statsRef.current) observer.unobserve(statsRef.current);
      clearInterval(interval);
    };
  }, [statsAnimated]);

  // Testimonial carousel auto-slide
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
        setFade(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  // Helper to get left/center/right testimonial indices
  const getIndices = () => {
    const left = (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    const right = (current + 1) % TESTIMONIALS.length;
    return [left, current, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getIndices();

  // Manual navigation for dots
  const handleDotClick = idx => {
    setFade(true);
    setTimeout(() => {
      setCurrent(idx);
      setFade(false);
    }, 400);
  };

  return (
    <>
      <Header />
      <div className="aboutus-main">
        <div className="aboutus-row">
          <div className="aboutus-img-col">
            <Lottie animationData={aboutLottie} loop={true} className="aboutus-img" />
          </div>
          <div className="aboutus-content-col">
            <h3 className="aboutus-section-title">About Us</h3>
            <h2 className="aboutus-heading">We Always Make The Best</h2>
            <p className="aboutus-desc">From sourcing responsibly to crafting ultra-soft, skin-friendly tissue products, we never cut corners. Our commitment to quality, sustainability, and comfort is at the heart of everything we do. Whether it's for your home, business, or on the go — every sheet we make reflects care, responsibility, and a promise to the planet.</p>
            <button className="modern-contact-btn1" onClick={() => navigate('/contact')}>
              <span className="wave-svg">
                <svg viewBox="0 0 120 28" preserveAspectRatio="none">
                  <path d="M0,10 Q30,20 60,10 T120,10 V28 H0 Z" fill="#fffbe6" opacity="0.5">
                    <animate 
                      attributeName="d"
                      dur="2s"
                      repeatCount="indefinite"
                      values="
                        M0,10 Q30,20 60,10 T120,10 V28 H0 Z;
                        M0,12 Q30,8 60,12 T120,12 V28 H0 Z;
                        M0,10 Q30,20 60,10 T120,10 V28 H0 Z
                      "
                    />
                  </path>
                </svg>
              </span>
              <span className="btn-text">Contact Us</span>
            </button>
          </div>
        </div>
        <div className="aboutus-skills-section" ref={skillsRef}>
          <div className="aboutus-skills-col">
            <h3>Our Skills</h3>
            <p>We blend creativity, sustainability, and strategy to build a brand that's as clean and impactful as the product itself</p>
            {SKILLS.map((skill, idx) => (
              <div className="aboutus-skill" key={skill.label}>
                <span>{skill.label}</span>
                <div className="aboutus-progress-bar">
                  <div
                    className="aboutus-progress"
                    style={{ width: `${progress[idx]}%`, transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
                  ></div>
                </div>
                <span className="aboutus-skill-percent">{progress[idx]}%</span>
              </div>
            ))}
          </div>
          <div className="aboutus-stats-col" ref={statsRef}>
            {STATS.map((stat, idx) => (
              <div className="aboutus-stat" key={stat.label}>
                <span className="aboutus-stat-num">{stats[idx]}{stat.suffix}</span>
                <span className="aboutus-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials Carousel Section */}
        <div className="aboutus-testimonials-section">
          <h3 className="aboutus-testimonials-title"><span className="aboutus-testimonials-client">Client Review</span><br />TESTIMONIAL</h3>
          <div className="aboutus-testimonials-stars">★★★★★</div>
          <div
            className="aboutus-testimonials-cards aboutus-testimonials-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Left (faded, behind) */}
            <div className="aboutus-testimonial-card aboutus-testimonial-card-faded aboutus-testimonial-card-left">
              <div className="aboutus-testimonial-quote-svg">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M13.5 25.5C13.5 28.5376 11.0376 31 8 31C4.96243 31 2.5 28.5376 2.5 25.5C2.5 22.4624 4.96243 20 8 20C8.82843 20 9.5 19.3284 9.5 18.5V10.5C9.5 9.67157 8.82843 9 8 9C7.17157 9 6.5 9.67157 6.5 10.5V17.5C3.18629 18.3284 0.5 21.6863 0.5 25.5C0.5 29.6421 3.85786 33 8 33C12.1421 33 15.5 29.6421 15.5 25.5C15.5 24.6716 14.8284 24 14 24C13.1716 24 12.5 24.6716 12.5 25.5H13.5ZM37.5 25.5C37.5 28.5376 35.0376 31 32 31C28.9624 31 26.5 28.5376 26.5 25.5C26.5 22.4624 28.9624 20 32 20C32.8284 20 33.5 19.3284 33.5 18.5V10.5C33.5 9.67157 32.8284 9 32 9C31.1716 9 30.5 9.67157 30.5 10.5V17.5C27.1863 18.3284 24.5 21.6863 24.5 25.5C24.5 29.6421 27.8579 33 32 33C36.1421 33 39.5 29.6421 39.5 25.5C39.5 24.6716 38.8284 24 38 24C37.1716 24 36.5 24.6716 36.5 25.5H37.5Z" fill="#ffe066"/></svg>
              </div>
              <div className="aboutus-testimonial-text">{TESTIMONIALS[leftIdx].text}</div>
              <div className="aboutus-testimonial-author-row">
                <img className="aboutus-testimonial-avatar" src={AVATARS[leftIdx]} alt={TESTIMONIALS[leftIdx].author} />
                <div className="aboutus-testimonial-author">{TESTIMONIALS[leftIdx].author}</div>
              </div>
            </div>
            {/* Center (main) */}
            <div className={`aboutus-testimonial-card aboutus-testimonial-card-main aboutus-testimonial-card-center${fade ? ' fade-out' : ''}`}
              style={{backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.85)', border: '2px solid #ffe066', boxShadow: '0 16px 48px rgba(44,53,89,0.22)'}}
            >
              <div className="aboutus-testimonial-quote-svg animate-quote">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M17.5 31.5C17.5 34.5376 15.0376 37 12 37C8.96243 37 6.5 34.5376 6.5 31.5C6.5 28.4624 8.96243 26 12 26C12.8284 26 13.5 25.3284 13.5 24.5V16.5C13.5 15.6716 12.8284 15 12 15C11.1716 15 10.5 15.6716 10.5 16.5V23.5C7.18629 24.3284 4.5 27.6863 4.5 31.5C4.5 35.6421 7.85786 39 12 39C16.1421 39 19.5 35.6421 19.5 31.5C19.5 30.6716 18.8284 30 18 30C17.1716 30 16.5 30.6716 16.5 31.5H17.5ZM41.5 31.5C41.5 34.5376 39.0376 37 36 37C32.9624 37 30.5 34.5376 30.5 31.5C30.5 28.4624 32.9624 26 36 26C36.8284 26 37.5 25.3284 37.5 24.5V16.5C37.5 15.6716 36.8284 15 36 15C35.1716 15 34.5 15.6716 34.5 16.5V23.5C31.1863 24.3284 28.5 27.6863 28.5 31.5C28.5 35.6421 31.8579 39 36 39C40.1421 39 43.5 35.6421 43.5 31.5C43.5 30.6716 42.8284 30 42 30C41.1716 30 40.5 30.6716 40.5 31.5H41.5Z" fill="#ffe066"/></svg>
              </div>
              <div className="aboutus-testimonial-text">{TESTIMONIALS[centerIdx].text}</div>
              <div className="aboutus-testimonial-author-row">
                <img className="aboutus-testimonial-avatar" src={AVATARS[centerIdx]} alt={TESTIMONIALS[centerIdx].author} />
                <div className="aboutus-testimonial-author">{TESTIMONIALS[centerIdx].author}</div>
              </div>
            </div>
            {/* Right (faded, behind) */}
            <div className="aboutus-testimonial-card aboutus-testimonial-card-faded aboutus-testimonial-card-right">
              <div className="aboutus-testimonial-quote-svg">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M13.5 25.5C13.5 28.5376 11.0376 31 8 31C4.96243 31 2.5 28.5376 2.5 25.5C2.5 22.4624 4.96243 20 8 20C8.82843 20 9.5 19.3284 9.5 18.5V10.5C9.5 9.67157 8.82843 9 8 9C7.17157 9 6.5 9.67157 6.5 10.5V17.5C3.18629 18.3284 0.5 21.6863 0.5 25.5C0.5 29.6421 3.85786 33 8 33C12.1421 33 15.5 29.6421 15.5 25.5C15.5 24.6716 14.8284 24 14 24C13.1716 24 12.5 24.6716 12.5 25.5H13.5ZM37.5 25.5C37.5 28.5376 35.0376 31 32 31C28.9624 31 26.5 28.5376 26.5 25.5C26.5 22.4624 28.9624 20 32 20C32.8284 20 33.5 19.3284 33.5 18.5V10.5C33.5 9.67157 32.8284 9 32 9C31.1716 9 30.5 9.67157 30.5 10.5V17.5C27.1863 18.3284 24.5 21.6863 24.5 25.5C24.5 29.6421 27.8579 33 32 33C36.1421 33 39.5 29.6421 39.5 25.5C39.5 24.6716 38.8284 24 38 24C37.1716 24 36.5 24.6716 36.5 25.5H37.5Z" fill="#ffe066"/></svg>
              </div>
              <div className="aboutus-testimonial-text">{TESTIMONIALS[rightIdx].text}</div>
              <div className="aboutus-testimonial-author-row">
                <img className="aboutus-testimonial-avatar" src={AVATARS[rightIdx]} alt={TESTIMONIALS[rightIdx].author} />
                <div className="aboutus-testimonial-author">{TESTIMONIALS[rightIdx].author}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation dots */}
        <div className="aboutus-testimonials-dots">
          {TESTIMONIALS.map((_, idx) => (
            <span
              key={idx}
              className={`aboutus-testimonials-dot${current === idx ? ' active' : ''}`}
              onClick={() => handleDotClick(idx)}
            ></span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs; 