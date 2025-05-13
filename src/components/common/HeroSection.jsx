import React, { useEffect, useState } from 'react';

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
    '011110', '001100', '001100', '001100', '001100', '001100', '001100', '011110'
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/img_background_image.png" alt="Green leaves background" className="w-full h-full object-cover"
        />
      </div>
      
      {/* Social Media Icons */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-14 z-10">
        <a href="#" className="text-[#ffea00] hover:text-white transition-colors">
          <img src="/images/img_facebook.svg" alt="Facebook" className="w-7 h-7" />
        </a>
        <a href="#" className="text-[#ffea00] hover:text-white transition-colors">
          <img src="/images/img_twitter.svg" alt="Twitter" className="w-7 h-8" />
        </a>
        <a href="#" className="text-[#ffea00] hover:text-white transition-colors">
          <img src="/images/img_instagram.svg" alt="Instagram" className="w-7 h-7" />
        </a>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="flex flex-col items-center">
          <p className="text-[#ffea00] text-2xl font-bold tracking-widest uppercase mb-4">I AM</p>
          <div className="flex justify-center items-center">
            {word.split('').map((char, letterIdx) => {
              const grid = PIXEL_FONT[char];
              let dotIdx = 0;
              return (
                <span key={letterIdx} style={{ position: 'relative', display: 'inline-block', width: GRID_COLS * (DOT_SIZE + DOT_GAP), height: GRID_ROWS * (DOT_SIZE + DOT_GAP), marginRight: 32 }}>
                  {grid && grid.map((row, rowIdx) =>
                    row.split('').map((cell, colIdx) => {
                      if (cell === '1') {
                        const origin = dotOrigins[letterIdx][dotIdx];
                        const left = colIdx * (DOT_SIZE + DOT_GAP);
                        const top = rowIdx * (DOT_SIZE + DOT_GAP);
                        dotIdx++;
                        return (
                          <span
                            key={colIdx + '-' + rowIdx}
                            style={{
                              position: 'absolute',
                              width: DOT_SIZE,
                              height: DOT_SIZE,
                              borderRadius: '50%',
                              background: '#ffea00',
                              left: assembled ? left : `${origin.x}vw`,
                              top: assembled ? top : `${origin.y}vh`,
                              opacity: 1,
                              transition: `all 1s cubic-bezier(.68,-0.55,.27,1.55) ${(rowIdx + colIdx) * 0.04 + letterIdx * 0.1}s`,
                              zIndex: 2,
                              fontSize: 0
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
          <div className="mt-8 text-left">
            <p className="text-[#ffea00] text-2xl font-bold tracking-widest uppercase leading-10">
              AN<br />
              Environmentalist
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 right-10 flex flex-col items-center z-10">
        <p className="text-[#ffea00] text-sm font-bold tracking-widest uppercase mb-2">Scroll</p>
        <div className="w-px h-12 bg-[#ffea00]"></div>
      </div>
    </section>
  );
};

export default HeroSection;