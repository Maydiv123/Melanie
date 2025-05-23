import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import FacebookIcon from '../../assets/Facebook.png';
import TwitterIcon from '../../assets/Twitter.png';
import InstaIcon from '../../assets/Insta.png';
import Lottie from 'lottie-react';
import ScrollLottie from '../../assets/Scroll.json';

const word = "LIFE";
const DOT_SIZE = 16;
const DOT_GAP = 5;
const GRID_ROWS = 8;
const GRID_COLS = 6;

// Simple pixel font for A-Z (6x8 grid, 1=dot, 0=empty)
const PIXEL_FONT = {
  L: [
    '100000', '100000', '100000', '100000', '100000', '100000', '100000', '111111'
  ],
  I: [
    '001000', '001000', '001000', '001000', '001000', '001000', '001000', '001000'
  ],
  F: [
    '111111', '100000', '100000', '111110', '100000', '100000', '100000', '100000'
  ],
  E: [
    '111111', '100000', '100000', '111110', '100000', '100000', '100000', '111111'
  ],
};

const getRandomScreenPosition = () => ({
  x: Math.random() * 100 - 10, // -10vw to 90vw
  y: Math.random() * 60 - 10   // -10vh to 50vh
});

const HeroSection = () => {
  const [assembled, setAssembled] = useState(false);
  // For each letter, for each dot, store a random origin
  const [dotOrigins] = useState(
    word.split('').map(letter => {
      const grid = PIXEL_FONT[letter];
      let dots = [];
      for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS; col++) {
          if (grid && grid[row][col] === '1') {
            dots.push(getRandomScreenPosition());
          }
        }
      }
      return dots;
    })
  );

  useEffect(() => {
    const timeout = setTimeout(() => setAssembled(true), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="background-image">
        <img 
          src="/images/img_background_image.png" alt="Green leaves background"
        />
      </div>
      
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#" className="social-icon">
          <img className="icon-yellow" src="/images/img_facebook.svg" alt="Facebook" />
          <img className="icon-real" src={FacebookIcon} alt="Facebook Real" />
        </a>
        <a href="#" className="social-icon">
          <img className="icon-yellow" src="/images/img_twitter.svg" alt="Twitter" />
          <img className="icon-real" src={TwitterIcon} alt="Twitter Real" />
        </a>
        <a href="#" className="social-icon">
          <img className="icon-yellow" src="/images/img_instagram.svg" alt="Instagram" />
          <img className="icon-real" src={InstaIcon} alt="Instagram Real" />
        </a>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="content-container">
          <p className="iam-text">I AM</p>
          <div className="life-row">
            {word.split('').map((char, letterIdx) => {
              const grid = PIXEL_FONT[char];
              let dotIdx = 0;
              return (
                <span key={letterIdx} className="letter-container">
                  {grid && grid.map((row, rowIdx) =>
                    row.split('').map((cell, colIdx) => {
                      if (cell === '1') {
                        const origin = dotOrigins[letterIdx][dotIdx];
                        let left, top;
                        if (assembled) {
                          left = colIdx * (DOT_SIZE + DOT_GAP);
                          top = rowIdx * (DOT_SIZE + DOT_GAP);
                        } else {
                          left = `${origin.x}vw`;
                          top = `${origin.y}vh`;
                        }
                        dotIdx++;
                        return (
                          <span
                            key={colIdx + '-' + rowIdx}
                            className="dot"
                            style={{
                              left,
                              top,
                              transition: `all 1s cubic-bezier(.68,-0.55,.27,1.55) ${(rowIdx + colIdx) * 0.04 + letterIdx * 0.1}s`
                            }}
                          />
                        );
                      }
                      return null;
                    })
                  )}
                </span>
              );
            })}
          </div>
          <div className="environmentalist-text">
            <p>
              AN<br />
              Environmentalist
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <p className="scroll-text">Scroll</p>
        <div style={{ width: 60, height: 90 }}>
          <Lottie animationData={ScrollLottie} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;