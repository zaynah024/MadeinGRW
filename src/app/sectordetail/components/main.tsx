'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const sectors = [
  {
    title: "Bathroom Accessories",
    img: "/images/main/Rectangle 1017.png",
  },
  {
    title: "Sanitary Hardware",
    img: "/images/main/Rectangle 1018.png",
  },
  {
    title: "Sanitary Fittings",
    img: "/images/main/Rectangle 1019.png",
  },
  {
    title: "Motors & Pumps",
    img: "/images/main/Rectangle 1021.png",
  },
  {
    title: "Automobile",
    img: "/images/main/Rectangle 1022.png",
  },
  {
    title: "Plastic Industry",
    img: "/images/main/Rectangle 1023.png",
  },
  {
    title: "Textile Industry",
    img: "/images/main/Rectangle 1024 (1).png",
  },
  {
    title: "Pipes & Fittings",
    img: "/images/main/Rectangle 1025.png",
  },
  // Additional sectors for the detail page
  {
    title: "Steel Manufacturing",
    img: "/images/main/Rectangle 1017.png",
  },
  {
    title: "Ceramic Industry",
    img: "/images/main/Rectangle 1018.png",
  },
  {
    title: "Furniture Manufacturing",
    img: "/images/main/Rectangle 1019.png",
  },
  {
    title: "Sports Goods",
    img: "/images/main/Rectangle 1021.png",
  },
  {
    title: "Agricultural Tools",
    img: "/images/main/Rectangle 1022.png",
  },
  {
    title: "Electronics Assembly",
    img: "/images/main/Rectangle 1023.png",
  },
  {
    title: "Chemical Industry",
    img: "/images/main/Rectangle 1024 (1).png",
  },
  {
    title: "Food Processing",
    img: "/images/main/Rectangle 1025.png",
  },
  {
    title: "Leather Goods",
    img: "/images/main/Rectangle 1017.png",
  },
  {
    title: "Glass Manufacturing",
    img: "/images/main/Rectangle 1018.png",
  },
  {
    title: "Paper Industry",
    img: "/images/main/Rectangle 1019.png",
  },
  {
    title: "Rubber Products",
    img: "/images/main/Rectangle 1021.png",
  },
  {
    title: "Construction Materials",
    img: "/images/main/Rectangle 1022.png",
  },
  {
    title: "Medical Equipment",
    img: "/images/main/Rectangle 1023.png",
  },
  {
    title: "Aerospace Components",
    img: "/images/main/Rectangle 1024 (1).png",
  },
  {
    title: "Renewable Energy",
    img: "/images/main/Rectangle 1025.png",
  },
  {
    title: "Telecommunications",
    img: "/images/main/Rectangle 1017.png",
  },
  {
    title: "Defense Industry",
    img: "/images/main/Rectangle 1018.png",
  }
];

export default function SectorsDetail() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate initially visible cards (staggered)
            const initialCount = Math.min(itemsPerPage, sectors.length);
            sectors.slice(0, initialCount).forEach((_, index) => {
              setTimeout(() => {
                setAnimatedCards(prev =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // When user clicks "Load More" (itemsPerPage changes) animate the newly visible cards
  useEffect(() => {
    if (!isVisible) return;
    const start = animatedCards.length;
    const end = Math.min(itemsPerPage, sectors.length);
    for (let i = start; i < end; i++) {
      const delay = (i - start) * 80;
      setTimeout(() => {
        setAnimatedCards(prev => (prev.includes(i) ? prev : [...prev, i]));
      }, delay);
    }
  }, [itemsPerPage, isVisible]);

  return (
    <section ref={sectionRef} className="w-[90%] mx-auto my-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Industrial Sectors of Gujranwala
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the diverse industrial landscape of Pakistan's manufacturing powerhouse. 
          From traditional crafts to modern technology, Gujranwala leads the nation's industrial growth.
        </p>
        <div className="w-32 h-2 bg-[#FCD900] mx-auto mt-8"></div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-3xl font-bold text-[#FCD900] mb-2">25+</h3>
          <p className="text-gray-600">Industrial Sectors</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-3xl font-bold text-[#FCD900] mb-2">5000+</h3>
          <p className="text-gray-600">Manufacturing Units</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-3xl font-bold text-[#FCD900] mb-2">80+</h3>
          <p className="text-gray-600">Export Countries</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-3xl font-bold text-[#FCD900] mb-2">2.5B+</h3>
          <p className="text-gray-600">Annual Exports ($)</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {sectors.slice(0, itemsPerPage).map((sector, index) => (
          <div 
            key={index} 
            className={`relative transform transition-all duration-800 ease-out hover:scale-105 ${
              animatedCards.includes(index) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
            style={{
              transitionDelay: animatedCards.includes(index) ? '0ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <span className="p-2 px-3 rounded-full absolute right-2 top-2 -rotate-45 bg-[#FCD900] w-12 h-12 flex items-center justify-center transform transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg">
              <ArrowRight className="w-4 h-4" />
            </span>
            <Image
              src={sector.img}
              alt={sector.title}
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <Image
              src="/images/main/Rectangle bg.png"
              alt="background"
              width={400}
              height={300}
              className="absolute top-0"
            />
            <p className="text-white text-lg absolute bottom-2 left-8">
              {sector.title}
            </p>
          </div>
        ))}
      </div>

      {/* Load More */}
      {sectors.length > itemsPerPage && (
        <div className="text-center mt-8">
          <div className="mb-4 text-gray-600">
            Showing {Math.min(itemsPerPage, sectors.length)} of {sectors.length} sectors
          </div>
          <button
            onClick={() => setItemsPerPage(prev => Math.min(sectors.length, prev + 12))}
            className="bg-[#FCD900] hover:bg-yellow-500 text-black px-8 py-3 font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            Load More <FaArrowRight />
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Ready to Explore More?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with Gujranwala's leading manufacturers and discover opportunities 
          in Pakistan's most dynamic industrial region.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contactus"
            className="bg-[#FCD900] flex items-center gap-4 px-10 py-3 font-medium hover:bg-yellow-500 transition rounded-lg hover:scale-105 transform duration-300"
          >
            Get in Touch <FaArrowRight />
          </a>
          <a
            href="/aboutus"
            className="border-2 border-[#FCD900] text-[#FCD900] px-10 py-3 font-medium hover:bg-[#FCD900] hover:text-black transition rounded-lg hover:scale-105 transform duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
