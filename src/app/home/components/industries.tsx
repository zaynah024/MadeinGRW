'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

// Fallback data - will be used if API fails or during loading
const fallbackSectors = [
  {
    id: 1,
    title: "Bathroom Accessories",
    img: "/images/main/Rectangle 1017.png",
    description: "Premium bathroom fixtures and accessories",
    category: "Sanitary"
  },
  {
    id: 2,
    title: "Sanitary Hardware",
    img: "/images/main/Rectangle 1018.png",
    description: "High-quality sanitary hardware solutions",
    category: "Sanitary"
  },
  {
    id: 3,
    title: "Sanitary Fittings",
    img: "/images/main/Rectangle 1019.png",
    description: "Complete sanitary fitting systems",
    category: "Sanitary"
  },
  {
    id: 4,
    title: "Motors & Pumps",
    img: "/images/main/Rectangle 1021.png",
    description: "Industrial motors and pump solutions",
    category: "Industrial"
  },
  {
    id: 5,
    title: "Automobile",
    img: "/images/main/Rectangle 1022.png",
    description: "Automotive parts and components",
    category: "Automotive"
  },
  {
    id: 6,
    title: "Plastic Industry",
    img: "/images/main/Rectangle 1023.png",
    description: "Plastic manufacturing and processing",
    category: "Manufacturing"
  },
  {
    id: 7,
    title: "Plastic Industry",
    img: "/images/main/Rectangle 1024 (1).png",
    description: "Plastic manufacturing and processing",
    category: "Manufacturing"
  },
  {
    id: 8,
    title: "Plastic Industry",
    img: "/images/main/Rectangle 1025.png",
    description: "Plastic manufacturing and processing",
    category: "Manufacturing"
  },
];

// Function to get different background overlay for each sector
const getBackgroundOverlay = (index: number) => {
  const backgrounds = [
    "/images/main/Rectangle bg.png",
    "/images/main/Rectangle 1017.png",
    "/images/main/Rectangle 1018.png",
    "/images/main/Rectangle 1019.png",
    "/images/main/Rectangle 1021.png",
    "/images/main/Rectangle 1022.png",
    "/images/main/Rectangle 1023.png",
    "/images/main/Rectangle 1024 (1).png"
  ];
  return backgrounds[index % backgrounds.length];
};

// Type definition for sector data
interface Sector {
  id: number;
  title: string;
  img: string;
  description?: string;
  category?: string;
}

export default function IndustrialSectors() {
  const [sectors, setSectors] = useState<Sector[]>(fallbackSectors);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch sectors data from backend
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/sectors', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: AbortSignal.timeout(5000)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && Array.isArray(data.sectors) && data.sectors.length > 0) {
          setSectors(data.sectors);
        } else {
          console.warn('API returned invalid data, using fallback');
          setSectors(fallbackSectors);
        }
      } catch (err) {
        console.error('Error fetching sectors:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch sectors');
        setSectors(fallbackSectors);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSectors();
  }, []);

  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectors.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedCards(prev => [...prev, index]);
              }, index * 100);
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
  }, [sectors]);

  if (isLoading) {
    return (
      <section className="w-[85%] mx-auto my-20">
        <div>
          <p className="text-gray-500 font-semibold">OUR INDUSTRIAL SECTORS</p>
          <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-15px] after:left-10 after:w-[60%] after:h-[8px] after:bg-yellow-400">
            Industrial Sectors of <br /> Gujranwala
          </p>
        </div>
        <div className="grid md:grid-cols-4 my-10 gap-10">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="relative animate-pulse">
              <div className="bg-gray-300 w-full h-64 rounded"></div>
              <div className="absolute top-2 right-2 bg-gray-300 w-12 h-12 rounded-full"></div>
              <div className="absolute bottom-2 left-8 bg-gray-300 h-6 w-32 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="w-[85%] mx-auto my-20">
      <div>
        <p className="text-gray-500 font-semibold">OUR INDUSTRIAL SECTORS</p>
        <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-15px] after:left-10 after:w-[60%] after:h-[8px] after:bg-yellow-400">
          Industrial Sectors of <br /> Gujranwala
        </p>
        {error && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-800 text-sm">
            ⚠️ Using fallback data: {error}
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-6 sm:gap-8 md:gap-10">
        {sectors.slice(0, 8).map((sector, index) => (
          <div 
            key={sector.id || index} 
            className={`relative transform transition-all duration-1000 ease-out hover:scale-105 rounded-lg overflow-hidden ${
              animatedCards.includes(index) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            {/* Arrow circle - always on top */}
           <a href="/sectordetail ">
             <span className="p-1.5 sm:p-2 px-2.5 sm:px-3 rounded-full absolute right-1 sm:right-2 top-1 sm:top-2 -rotate-45 bg-[#FCD900] 
              w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transform transition-all duration-300 ease-out 
              hover:scale-110 hover:shadow-lg z-30">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
</a>
            {/* Sector image */}
            <Image
              src={sector.img}
              alt={sector.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover z-0"
            />

            <Image
              src={getBackgroundOverlay(index)}
              alt="background"
              width={400}
              height={300}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />

            {/* Title */}
            <p className="text-white text-lg absolute bottom-2 left-4 sm:left-8 z-20">
              {sector.title}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-6 sm:mt-10">
        <a
          href="/sectordetail"
          className="bg-[#FCD900] flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-2 font-medium hover:bg-yellow-500 transition rounded"
        >
          Explore More <FaArrowRight />
        </a>
      </div>
    </section>
  );
}
