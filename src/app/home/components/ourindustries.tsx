"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaEarthAmericas, FaArrowRight } from "react-icons/fa6";

const fallbackIndustries = [
  { id: 1, name: "Super Asia", category: "Home Appliances", image: "/images/main/Rectangle 1033.svg", logo: "/images/main/Ellipse 61.png" },
  { id: 2, name: "Super Asia", category: "Home Appliances", image: "/images/main/Rectangle 1033.svg", logo: "/images/main/Ellipse 61.png" },
  { id: 3, name: "Super Asia", category: "Home Appliances", image: "/images/main/Rectangle 1033.svg", logo: "/images/main/Ellipse 61.png" },
  { id: 4, name: "Super Asia", category: "Home Appliances", image: "/images/main/Rectangle 1033.svg", logo: "/images/main/Ellipse 61.png" },
  { id: 5, name: "Super Asia", category: "Home Appliances", image: "/images/main/Rectangle 1033.svg", logo: "/images/main/Ellipse 61.png" },
  { id: 6, name: "Super Asia", category: "Home Appliances", image: "/images/main/Rectangle 1033.svg", logo: "/images/main/Ellipse 61.png" },
];

const categories = ["All", "Real Estate", "Plastic", "Other"];

export default function IndustriesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [industries, setIndustries] = useState(fallbackIndustries);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch industries with fallback
  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const res = await fetch('/api/industries', { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) throw new Error('Failed to fetch industries');
        const data = await res.json();
        if (!didCancel && data?.industries?.length) {
          setIndustries(data.industries);
        }
      } catch (e) {
        setIndustries(fallbackIndustries);
      }
    };

    fetchData();
    return () => { didCancel = true; };
  }, []);

  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            industries.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedCards(prev => [...prev, index]);
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [industries]);

  return (
    <section ref={sectionRef} className="w-[90%] md:w-[85%] mx-auto my-10">
      {/* Heading */}
      <div>
        <p className="text-gray-500 font-semibold">OUR INDUSTRIES</p>
        <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-15px] after:left-10 after:w-[60%] after:h-[8px] after:bg-yellow-400">
          OUR INDUSTRIES, PRIDE OF <br /> GUJRANWALA
        </p>
      </div>

      {/* Categories + Cards */}
      <div className="flex flex-col md:flex-row gap-10 my-10">
        {/* Sidebar */}
        <div className="w-[90%] md:w-[15%]">
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`px-10 cursor-pointer ${
                  activeCategory === cat
                    ? "text-[#2947A9] font-semibold border-l-4 border-[#2947A9]"
                    : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Cards */}
        <div className="md:w-[85%] grid md:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`shadow-md rounded-md hover:shadow-lg transition-all duration-1000 ease-out transform ${
                animatedCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{
                transitionDelay: animatedCards.includes(index) ? '0ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div className="relative">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  width={400}
                  height={200}
                  className="w-full h-auto"
                />
                <Image
                  src={industry.logo}
                  alt={`${industry.name} logo`}
                  width={64}
                  height={64}
                  className="absolute -bottom-10 left-10 w-16 h-16"
                />
              </div>
              <div className="py-8 px-4 space-y-2">
                <p className="text-2xl font-semibold">{industry.name}</p>
                <p>{industry.category}</p>
              </div>
              <div className="border-t border-gray-200">
                <div className="p-4 flex items-center gap-4 cursor-pointer hover:text-[#2947A9] transition-colors">
                  <a href={`/companydetails/${industry.id}`} className="flex items-center gap-4 w-full">
                    <span className="p-1 bg-[#FCD900] rounded-full px-2">
                      <FaEarthAmericas />
                    </span>
                    <p>View Profile</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center items-center">
        <a
          href="/industrydetail"
          className="bg-[#FCD900] flex items-center gap-4 px-10 py-2 font-medium hover:bg-yellow-500 transition rounded"
        >
          Explore More <FaArrowRight />
        </a>
      </div>
    </section>
  );
}
