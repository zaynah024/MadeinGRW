"use client";

import Image from "next/image";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

export default function BusinessCommunitySection() {
  const [collapsed, setCollapsed] = useState(false); // default: full content

  return (
    <section className="w-[90%] md:w-[85%] mx-auto my-10">
      {/* Heading */}
      <div className="transform transition-all duration-500 ease-out animate-fade-in-up">
        <p className="text-gray-500 font-semibold">OUR BUSINESS COMMUNITY</p>
        <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-15px] after:left-10 after:w-[60%] after:h-[8px] after:bg-yellow-400">
          GUJRANWALA BUSINESS <br /> CENTER
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 md:flex-row my-10">
        {/* Left Text */}
        <div className="text-gray-600 w-full transform transition-all duration-500 ease-out animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {/* Conditionally render collapsed or full content */}
          {collapsed ? (
            <div>
              <p className="mb-4">
                Located in the industrial heart of Punjab, Gujranwala Business Center serves as a key hub for trade, manufacturing, and enterprise. It brings together some of the city's leading industries — from stainless steel and ceramics to furniture and export goods — under one vibrant ecosystem.
              </p>
              <p className="mb-4">
                With modern facilities and deep-rooted business networks, the center plays a vital role in connecting local manufacturers with national and international markets.
              </p>
            </div>
          ) : (
            <div>
              <p className="mb-4">
                Located in the industrial heart of Punjab, Gujranwala Business Center serves as a key hub for trade, manufacturing, and enterprise. It brings together some of the city's leading industries — from stainless steel and ceramics to furniture and export goods — under one vibrant ecosystem.
              </p>
              <p className="mb-4">
                With modern facilities and deep-rooted business networks, the center plays a vital role in connecting local manufacturers with national and international markets.
              </p>
              <p className="mb-4">
                From small-scale workshops to large industrial complexes, the center nurtures innovation, collaboration, and professional growth. Its strategic location ensures easy access to major transportation routes, making trade and distribution efficient.
              </p>
               <p className="mb-4">
                With its strategic location in Punjab, the center empowers industries by bridging the gap between tradition and innovation. From small-scale enterprises to large-scale manufacturers, it fosters growth, collaboration, and international outreach.
              </p>
              <p className="mb-4">
                The center also hosts seminars, training programs, and networking events, empowering businesses to stay competitive and expand globally. It has become a landmark for entrepreneurship in Gujranwala.
              </p>
              <p className="mb-4">
                With its strategic location in Punjab, the center empowers industries by bridging the gap between tradition and innovation. From small-scale enterprises to large-scale manufacturers, it fosters growth, collaboration, and international outreach.
              </p>
              <p>
                A true symbol of Gujranwala's industrial strength and entrepreneurial spirit.
              </p>
            </div>
          )}

          {/* Toggle Button */}
          <div className="flex mt-6 items-center transform transition-all duration-500 ease-out animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="bg-[#FCD900] text-gray-900 flex items-center gap-4 px-10 py-2 font-medium hover:bg-yellow-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 transform group"
            >
              {collapsed ? 'Explore More' : 'Show Less'}
              {collapsed ? (
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              ) : (
                <FaArrowUp className="transform transition-transform duration-300 group-hover:-translate-y-1" />
              )}
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[100%] hidden md:flex justify-center transform transition-all duration-500 ease-out animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="relative transform transition-all duration-500 ease-out hover:scale-105">
            <div className="absolute top-6 -right-6 bg-[#FCD900] w-[450px] h-[540px] transform transition-all duration-300 hover:bg-yellow-400"></div>
            <div className="relative z-10 transform transition-all duration-300 hover:scale-105">
              <Image
                src="/images/main/Rectangle 1034.png"
                alt="Gujranwala Business Center"
                width={400}
                height={507}
                className="w-[450px] h-[540px] object-cover shadow-lg transform transition-all duration-300 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
