"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 120px)' }}>
      {/* Background Image - Sticks to section */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/homebg.png')",
          backgroundSize: '100%',
          backgroundPosition: 'top center'
        }}
      >
      </div>
      
      {/* Content Container - Starts immediately after header */}
      <div className="relative z-10 h-full flex items-start pt-40 ml-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Main Headline - Smaller size and black color */}
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semi-bold mb-6 leading-tight animate-fade-in-left">
              <span className="block font-['Roboto']">Crafted with Pride -</span>
              <span className="block font-['Roboto']">Made in Gujranwala</span>
            </h1>
            
            {/* Yellow accent line - smaller width with line completion animation */}
            <div className="w-50 h-1 bg-[#FCD900] mb-4 animate-line-complete"></div>
            
            {/* Subheading - Smaller size and black color */}
            <p className="text-black text-sm md:text-base lg:text-lg mb-8 leading-relaxed max-w-xl animate-fade-in-left-delayed">
              Experience the heritage, skill, and quality from the heart <br></br>
              of Pakistan's industrial city.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes lineComplete {
          from {
            width: 0;
          }
          to {
            width: 200px;
          }
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left-delayed {
          animation: fadeInLeft 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .animate-line-complete {
          animation: lineComplete 1.2s ease-out 0.3s forwards;
          width: 0;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
