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
    <section className="bg-black py-20">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[#f1e811] text-5xl font-semibold">Explore top Products</h2>
          
          <Link to="/products" className="bg-[#ffea00] rounded-full py-5 px-8 flex items-center">
            <span className="text-black text-xl font-medium mr-4">Explore Listings</span>
            <img src="/images/img_arrowright.svg" alt="Arrow right" className="w-8 h-8" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-[#ddd406] rounded-[42px] overflow-hidden">
              <div className="p-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto rounded-[44px] mb-8"
                />
                
                <div className="flex justify-between items-center">
                  <h3 className="text-black text-3xl font-semibold capitalize">{product.name}</h3>
                  
                  <Link to={product.link} className="w-[53px] h-[53px] rounded-full border border-black flex items-center justify-center">
                    <img src="/images/img_arrowright.svg" alt="View product" className="w-10 h-10" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10">
          <img src="/images/img_slider.svg" alt="Slider" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;