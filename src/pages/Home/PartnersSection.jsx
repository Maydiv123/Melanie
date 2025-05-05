import React from 'react';
import './PartnersSection.css';

const partners = [
  { name: 'STARBUCKS', logo: null },
  { name: null, logo: '/images/img_walmart.svg' },
  { name: "McDonald's", logo: null },
  { name: null, logo: '/images/img_nestl.svg' },
  { name: null, logo: '/images/img_pepsi.svg' },
];

const partnerStyle = {
  color: '#ffea00',
  fontWeight: 'bold',
  fontSize: '2.25rem', // text-4xl (Figma-like)
  lineHeight: 1,
  verticalAlign: 'middle',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'inherit',
  letterSpacing: 0,
  minWidth: 'fit-content',
};
const logoStyle = {
  height: '2.25rem', // match text size
  width: 'auto',
  filter: 'brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(7480%) hue-rotate(2deg) brightness(104%) contrast(104%)',
  display: 'inline-block',
  verticalAlign: 'middle',
};

const PartnersSection = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-5">
        {/* Small heading */}
        <h3 className="text-[#ffea00] text-3xl font-bold text-center mb-8">Our Partners</h3>

        {/* All partners in a single row */}
        <div className="flex flex-nowrap justify-center items-center gap-x-16 overflow-x-auto pb-2 scrollbar-hide">
          {partners.map((partner, idx) => (
            <span
              key={partner.logo || partner.name || idx}
              style={partnerStyle}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name || 'partner logo'}
                  style={logoStyle}
                />
              ) : (
                partner.name
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;