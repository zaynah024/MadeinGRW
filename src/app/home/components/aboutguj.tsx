"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    img: "/images/main/Iconv (1).svg",
    title: "Exported to more than 80 Countries",
    desc: "168 companies in 24 countries use our machines",
  },
  {
    img: "/images/main/Iconv (3).svg",
    title: "More than 180 Products Exported Worldwide",
    desc: "8 billion products are produced daily from our machines.",
  },
  {
    img: "/images/main/Iconv (4).svg",
    title: "Contributing 7% share in national GDP",
    desc: "850 million people use products made by their machines every day",
  },
  {
    img: "/images/main/Iconv (2).svg",
    title: "More than 2.5 Billion $ of Annual Exports",
    desc: "850 million people use products made by their machines every day",
  },
];

export default function AboutGujranwala() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate items one by one with delays
            stats.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => [...prev, index]);
              }, index * 150); // 150ms delay between each item for smoother flow
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto">
        {/* Left Section */}
        <div className="w-full py-10 md:py-20">
          <p className="text-gray-500 font-semibold mb-5">ABOUT GUJRANWALA</p>
          <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[40%] after:h-[6px] after:bg-yellow-400">
            One of the Largest Industrial<br />
            Powerhouses of Pakistan
          </p>
          <p className="mt-3 text-gray-500">
            Gujranwala — known as the "City of Wrestlers" — has evolved from a historical
            trading town into one of Pakistan's largest industrial powerhouses. With
            roots going back to the Mughal era, Gujranwala grew rapidly in the 20th
            century, becoming famous for its unmatched craftsmanship and entrepreneurial
            spirit.
          </p>
          
          <p className="mt-3 text-gray-500">
            Today, Gujranwala is at the heart of Pakistan's manufacturing sector,
            producing everything from stainless steel, ceramics, sanitary fittings,
            furniture, sports goods, and agricultural tools. It is not just serving local
            markets but is a major contributor to Pakistan's exports globally.
          </p>

          <div className="flex gap-10 items-center mt-8">
            <Link
              href="/aboutus"
              className="bg-[#FCD900] flex items-center justify-between w-32 px-4 py-2 font-medium rounded transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:bg-yellow-400 active:scale-95 animate-fade-in-up"
            >
              <span>About Us</span>
              <Image src="/images/Icon.png" alt="Arrow Icon" width={5} height={20} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/industrydetail" 
              className="text-black underline transform transition-all duration-300 ease-out hover:text-gray-700 hover:no-underline hover:scale-105 active:scale-95 animate-fade-in-up"
            >
              Industries List
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full py-10 md:py-25 px-20 grid gap-2">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 transform transition-all duration-1000 ease-out hover:scale-105 ${
                animatedItems.includes(index) 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-16 scale-95'
              }`}
              style={{
                transitionDelay: animatedItems.includes(index) ? '0ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <Image src={item.img} alt={item.title} width={50} height={50} className="transform transition-transform duration-300 hover:rotate-12" />
              <div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
     {/* Background Image */}
<div
  className="absolute pointer-events-none inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 md:scale-110 opacity-50"
  style={{
    backgroundImage: "url('/images/main/What We Do.png')",
  }}
></div>

    </section>
  );
}
