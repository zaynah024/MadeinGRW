"use client";

import Image from "next/image";
import { FaArrowRight, FaFilter, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

// Fallback products data for the detail page
const fallbackProducts = [
  {
    id: 1,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Pro",
    category: "Kitchen Appliances",
    description:
      "High-quality refrigerators for modern homes with advanced cooling technology",
  },
  {
    id: 2,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Plus",
    category: "Laundry Appliances",
    description:
      "Efficient washing machines for clean clothes with smart features",
  },
  {
    id: 3,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Elite",
    category: "Laundry Appliances",
    description: "Fast spin drying technology for quick laundry results",
  },
  {
    id: 4,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Max",
    category: "Cooling Appliances",
    description: "Energy-efficient air cooling solutions for hot summers",
  },
  {
    id: 5,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Deluxe",
    category: "Kitchen Appliances",
    description: "Luxury refrigeration solutions with premium features",
  },
  {
    id: 6,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Deluxe",
    category: "Laundry Appliances",
    description: "Premium laundry experience with advanced technology",
  },
  {
    id: 7,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Pro",
    category: "Laundry Appliances",
    description: "Professional spin drying for commercial use",
  },
  {
    id: 8,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Pro",
    category: "Cooling Appliances",
    description: "Professional cooling solutions for large spaces",
  },
  {
    id: 9,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Compact",
    category: "Kitchen Appliances",
    description: "Space-saving refrigeration for small kitchens",
  },
  {
    id: 10,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Compact",
    category: "Laundry Appliances",
    description: "Compact washing solution for small spaces",
  },
  {
    id: 11,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Compact",
    category: "Laundry Appliances",
    description: "Compact spin drying for small laundry needs",
  },
  {
    id: 12,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Compact",
    category: "Cooling Appliances",
    description: "Compact cooling for personal spaces",
  },
  {
    id: 13,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Smart",
    category: "Kitchen Appliances",
    description: "Smart refrigerator with IoT connectivity and app control",
  },
  {
    id: 14,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Smart",
    category: "Laundry Appliances",
    description: "Smart washing machine with remote monitoring",
  },
  {
    id: 15,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Smart",
    category: "Laundry Appliances",
    description: "Smart spin dryer with energy optimization",
  },
  {
    id: 16,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Smart",
    category: "Cooling Appliances",
    description: "Smart air cooler with temperature sensors",
  },
  {
    id: 17,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Industrial",
    category: "Commercial Appliances",
    description: "Industrial refrigeration for commercial kitchens",
  },
  {
    id: 18,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Industrial",
    category: "Commercial Appliances",
    description: "Industrial washing machines for hotels and laundries",
  },
  {
    id: 19,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Industrial",
    category: "Commercial Appliances",
    description: "Industrial spin drying for commercial use",
  },
  {
    id: 20,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Industrial",
    category: "Commercial Appliances",
    description: "Industrial cooling for large commercial spaces",
  },
];

const categories = [
  "All",
  "Kitchen Appliances",
  "Laundry Appliances",
  "Cooling Appliances",
  "Commercial Appliances",
];

interface Product {
  id: number;
  src: string;
  name: string;
  category: string;
  description: string;
}

export default function ProductDetail() {
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [sortBy, setSortBy] = useState<string>("default");

  // Fetch products
  useEffect(() => {
    let didCancel = false;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal: AbortSignal.timeout(5000),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        if (!didCancel && data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts(fallbackProducts);
        }
      } catch (err) {
        if (!didCancel) {
          setError(err instanceof Error ? err.message : "Failed to fetch products");
          setProducts(fallbackProducts);
        }
      } finally {
        if (!didCancel) setIsLoading(false);
      }
    };

    fetchProducts();
    return () => {
      didCancel = true;
    };
  }, []);

  // Filter + Search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "category":
        return a.category.localeCompare(b.category);
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="relative font-['Roboto',sans-serif] overflow-x-hidden max-w-full w-full">
      {/* Background */}
      <Image
        src="/images/Background.png"
        width={1920}
        height={1080}
        alt="Background"
        className="absolute -z-10 w-full h-full object-cover"
      />

      <main className="w-[90%] md:w-[80%] mx-auto relative z-10 overflow-x-hidden max-w-full">
        {/* Breadcrumb */}
        <div className="py-10 overflow-x-hidden">
          <p className="text-4xl font-medium">Product Catalog</p>
          <div className="flex items-center text-gray-500 mt-2 text-xs gap-2">
            <span>Home</span>
            <span>→</span>
            <span>Products</span>
            <span>→</span>
            <span>Product Catalog</span>
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6">
            Our Product Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality appliances and
            products, all manufactured with precision and care in Gujranwala,
            Pakistan.
          </p>
        </div>

        {/* Filters and Search - CENTERED */}
        <div className="w-full flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 flex flex-col lg:flex-row gap-6 items-center justify-center shadow-md w-full max-w-5xl">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div className="flex items-center gap-3">
              <FaFilter className="text-gray-600" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
              >
                <option value="default">Default</option>
                <option value="name">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="category">Category</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
            ⚠️ Using fallback data: {error}
          </div>
        )}

        {/* Results */}
        <div className="mb-8 text-gray-600">
          Showing {Math.min(itemsPerPage, sortedProducts.length)} of{" "}
          {sortedProducts.length} products
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </div>

        {/* Loading skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 w-full h-64 rounded-lg"></div>
                <div className="bg-gray-300 h-6 w-32 rounded mt-3 mx-auto"></div>
                <div className="bg-gray-300 h-4 w-24 rounded mt-2 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {sortedProducts.slice(0, itemsPerPage).map((product, index) => (
              <div
                key={product.id}
                className="hover:scale-105 transition-all duration-500 ease-out hover:-translate-y-2 animate-fade-in-up transform bg-white rounded-lg shadow-md overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Image
                  src={product.src}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover transform transition-all duration-300 hover:scale-105 hover:brightness-110"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 text-center line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FCD900] font-semibold text-sm  px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <button className="bg-[#FCD900] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {sortedProducts.length > itemsPerPage && (
          <div className="text-center mb-12">
            <button
              onClick={() => setItemsPerPage((prev) => prev + 8)}
              className="bg-[#FCD900] hover:bg-yellow-500 text-black px-8 py-3 font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              Load More Products <FaArrowRight />
            </button>
          </div>
        )}
      </main>

      {/* FULL WIDTH CTA */}
      <div className="w-full bg-gradient-to-r from-[#FCD900] to-yellow-400 py-12 mt-12">
        <div className="text-center w-[90%] md:w-[70%] mx-auto">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            We specialize in custom manufacturing and can create products
            tailored to your specific requirements.
          </p>
          <a
            href="/contactus"
            className="bg-black text-white px-8 py-3 font-medium rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            Get in Touch <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
