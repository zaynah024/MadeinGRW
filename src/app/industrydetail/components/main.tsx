"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaEarthAmericas } from "react-icons/fa6";

const fallbackIndustries = [
  {
    id: 1,
    name: "Super Asia",
    category: "Home Appliances",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
  },
  {
    id: 2,
    name: "Super Asia",
    category: "Home Appliances",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
  },
  {
    id: 3,
    name: "Super Asia",
    category: "Home Appliances",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
  },
  {
    id: 4,
    name: "Super Asia",
    category: "Home Appliances",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
  },
];

const categories = ["All", "Steel", "Ceramic", "Furniture", "Sports"];

export default function IndustriesDetail() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [industries, setIndustries] = useState(fallbackIndustries);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredIndustries =
    activeCategory === "All"
      ? industries
      : industries.filter((industry) => industry.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredIndustries.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedCards((prev) => [...prev, index]);
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
  }, [filteredIndustries]);

  useEffect(() => {
    setAnimatedCards([]);
  }, [activeCategory]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <Image
          src="/images/industries/image 54.png"
          width={1920}
          height={600}
          alt="Industry Background"
          className="min-h-72 md:min-h-auto object-cover w-full"
        />
        <div className="absolute top-20 left-6 md:top-32 md:left-20 space-y-4 text-white">
          <div className="flex items-center text-gray-400 text-xs gap-1">
            <span>Home</span>
            <span>→</span>
            <span>Industrial Sectors</span>
            <span>→</span>
            <span>
              {activeCategory === "All"
                ? "All Industries"
                : `${activeCategory} Industry`}
            </span>
          </div>
          <div>
            <p className="text-2xl md:text-7xl font-semibold">
              {activeCategory === "All"
                ? "ALL INDUSTRIES"
                : `${activeCategory.toUpperCase()} INDUSTRY`}
            </p>
            <p className="text-xs md:text-base md:leading-10">
              {activeCategory === "All"
                ? "Explore companies across all sectors driving Pakistan's growth with quality and innovation."
                : "Category specific description goes here."}
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("industries-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-2 mt-2 rounded-md bg-[#FCD900] text-black px-8 text-sm font-semibold 
                        transition-all duration-300 transform hover:bg-yellow-500 hover:scale-105"
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section
        id="industries-section"
        ref={sectionRef}
        className="w-[90%] mx-auto my-20"
      >
        <div className="flex flex-col lg:flex-row gap-10 my-8">
          {/* Sidebar / Categories */}
          <div className="w-full lg:w-[20%]">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 -mt-10">
              Categories
            </h3>
            {/* Horizontal scroll on mobile */}
            <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto no-scrollbar ">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`px-4 py-2 cursor-pointer rounded transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? "text-[#2947A9] font-semibold bg-blue-50 border-l-4 border-[#2947A9]"
                      : "text-gray-600 hover:text-[#2947A9] hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Cards */}
          <div className="lg:w-[80%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.map((industry, index) => (
              <div
                key={industry.id}
                className={`shadow-md rounded-lg hover:shadow-xl transition-all duration-800 ease-out transform hover:scale-105 ${
                  animatedCards.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }`}
              >
                <div className="relative">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-t-lg"
                  />
                  <Image
                    src={industry.logo}
                    alt={`${industry.name} logo`}
                    width={64}
                    height={64}
                    className="absolute -bottom-10 left-12 w-16 h-16"
                  />
                </div>
                <div className="py-8 px-4 space-y-2">
                  <p className="text-xl font-semibold text-gray-800">
                    {industry.name}
                  </p>
                  <p className="text-gray-600">{industry.category}</p>
                </div>
                <div className="border-t border-gray-200">
                  <div className="p-4 flex items-center gap-4 cursor-pointer hover:text-[#2947A9] transition-colors">
                    <a
                      href={`/companydetails/${industry.id}`}
                      className="flex items-center gap-4 w-full"
                    >
                      <span className="p-2 bg-[#FCD900] rounded-full">
                        <FaEarthAmericas className="w-4 h-4" />
                      </span>
                      <p className="font-medium">View Profile</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
