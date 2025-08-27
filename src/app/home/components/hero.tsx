"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden md:h-[calc(100vh-120px)]">
      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/homebg.png')",
          backgroundSize: "100%",
          backgroundPosition: "top center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start pt-20 md:pt-40 md:ml-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
          <div className="max-w-2xl text-center md:text-left">
            {/* Headline */}
            <h1 className="text-black text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight animate-fade-in-left">
              <span className="block font-['Roboto']">Crafted with Pride -</span>
              <span className="block font-['Roboto']">Made in Gujranwala</span>
            </h1>

            {/* Yellow Line */}
            <div className="mx-auto md:mx-0 w-32 md:w-48 h-1 bg-[#FCD900] mb-4 animate-line-complete"></div>

            {/* Subheading */}
            <p className="text-black text-lg sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-xl animate-fade-in-left-delayed">
              Experience the heritage, skill, and quality from the heart <br />
              of Pakistan's industrial city.
            </p>
          </div>

          {/* Mobile Image (below text) */}
          <div className="mt-6 md:hidden flex justify-center">
            <Image
              src="/images/homebg.png"
              alt="Made in Gujranwala"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
              priority
            />
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
