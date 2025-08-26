"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

// Fallback products data
const fallbackProducts = [
  {
    id: 1,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator",
    category: "Kitchen Appliances",
    description: "High-quality refrigerators for modern homes"
  },
  {
    id: 2,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine",
    category: "Laundry Appliances",
    description: "Efficient washing machines for clean clothes"
  },
  {
    id: 3,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer",
    category: "Laundry Appliances",
    description: "Fast spin drying technology"
  },
  {
    id: 4,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler",
    category: "Cooling Appliances",
    description: "Energy-efficient air cooling solutions"
  },
  {
    id: 5,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Pro",
    category: "Kitchen Appliances",
    description: "Professional grade refrigeration"
  },
  {
    id: 6,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Plus",
    category: "Laundry Appliances",
    description: "Advanced washing technology"
  },
  {
    id: 7,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Elite",
    category: "Laundry Appliances",
    description: "Premium spin drying experience"
  },
  {
    id: 8,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Max",
    category: "Cooling Appliances",
    description: "Maximum cooling performance"
  },
  {
    id: 9,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Deluxe",
    category: "Kitchen Appliances",
    description: "Luxury refrigeration solutions"
  },
  {
    id: 10,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Deluxe",
    category: "Laundry Appliances",
    description: "Premium laundry experience"
  }
];

interface Product {
  id: number;
  src: string;
  name: string;
  category: string;
  description: string;
}

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from backend
  useEffect(() => {
    let didCancel = false;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Try to fetch products from API
        const response = await fetch('/api/products', {
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
        
        if (!didCancel && data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          // If API returns invalid data, use fallback
          console.warn('API returned invalid data, using fallback');
          setProducts(fallbackProducts);
        }
      } catch (err) {
        if (!didCancel) {
          console.error('Error fetching products:', err);
          setError(err instanceof Error ? err.message : 'Failed to fetch products');
          // Use fallback data on error
          setProducts(fallbackProducts);
        }
      } finally {
        if (!didCancel) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();
    return () => { didCancel = true; };
  }, []);

  return (
    <section className="w-[90%] md:w-[85%] mx-auto my-20">
      {/* Heading */}
      <div className="transform transition-all duration-500 ease-out animate-fade-in-up">
        <p className="text-gray-500 font-semibold">OUR PRODUCTS</p>
        <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-15px] after:left-10 after:w-[60%] after:h-[8px] after:bg-yellow-400">
          ROOTED IN GUJRANWALA, <br /> BUILT FOR YOU
        </p>
      </div>

      {/* Error message if any */}
      {error && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-800 text-sm">
          ⚠️ Using fallback data: {error}
        </div>
      )}

      {/* Loading state */}
      {isLoading ? (
        <div className="grid md:grid-cols-5 my-10 gap-10">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-300 w-full h-64 rounded"></div>
              <div className="bg-gray-300 h-6 w-32 rounded mt-2 mx-auto"></div>
            </div>
          ))}
        </div>
      ) : (
        /* Product Grid */
        <div className="grid md:grid-cols-5 my-10 gap-10">
          {products.slice(0, 10).map((item, index) => (
            <div key={item.id || index} className="hover:scale-105 transition-all duration-500 ease-out hover:-translate-y-2 animate-fade-in-up transform" style={{ animationDelay: `${index * 100}ms` }}>
              <Image
                src={item.src}
                alt={`Product ${item.name}`}
                width={250}
                height={250}
                className="w-full h-auto transform transition-all duration-300 hover:scale-105 hover:brightness-110"
              />
              <p className="text-center mt-2 text-3xl font-medium transform transition-all duration-300 hover:text-[#2947A9] hover:scale-105" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Explore More Button */}
      <div className="flex justify-center items-center transform transition-all duration-500 ease-out animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
        <a
          href="/productdetail"
          className="bg-[#FCD900] flex items-center gap-4 px-10 py-2 font-medium hover:bg-yellow-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 transform group"
        >
          Explore More <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
