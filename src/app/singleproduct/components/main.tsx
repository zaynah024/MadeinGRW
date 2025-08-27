"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import Link from "next/link";
import type { Product } from "@/data/products";
import type { Company } from "@/data/companies";

// fallback companies
const fallbackIndustries = [
  {
    id: 4,
    name: "CoolTech",
    category: "HVAC",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
  },
];

export default function SingleProduct({ product }: { product?: Product | null }) {
  const [companies, setCompanies] = useState<Company[] | typeof fallbackIndustries>(fallbackIndustries);
  const [loadingCompanies, setLoadingCompanies] = useState(true);

  useEffect(() => {
    if (!product) {
      setLoadingCompanies(false);
      return;
    }

    let mounted = true;
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(`/api/companies?productId=${product.id}`, { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to fetch companies");
        const data = await res.json();
        if (mounted && Array.isArray(data)) {
          setCompanies(data);
        } else if (mounted) {
          setCompanies(fallbackIndustries);
        }
      } catch (err) {
        console.warn("Failed to load companies, using fallback", err);
        if (mounted) setCompanies(fallbackIndustries);
      } finally {
        if (mounted) setLoadingCompanies(false);
      }
    })();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [product]);

  // guard
  if (!product) {
    return (
      <div className="w-[90%] md:w-[80%] mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
        <p className="text-gray-600">
          The product you're looking for doesn't exist or could not be loaded.
        </p>
        <div className="mt-6">
          <Link
            href="/productdetail"
            className="bg-[#FCD900] px-6 py-2 rounded-md inline-block"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero Section */}
<div className="relative w-full">
  {/* Background Image */}
  <Image
    src="/images/industries/image 54.png"
    width={1920}
    height={600}
    alt="Product Background"
    className="h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover w-full"
    priority
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content Overlay */}
  <div className="absolute inset-0 flex flex-row items-center justify-between w-[90%] md:w-[80%] mx-auto gap-4 sm:gap-8 text-white">
    
    {/* Product Info */}
    <div className="flex-1 z-10">
      <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug">
        {product.name}
      </h1>
      <p className="mt-2 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base lg:text-lg">
        {product.description}
      </p>
      <div className="mt-4 sm:mt-6 flex gap-3 items-center overflow-x-auto no-scrollbar">
        <span className="text-xs sm:text-sm md:text-base bg-[#FCD900] text-black px-3 py-1.5 sm:py-2 rounded-md font-semibold flex-shrink-0">
          {product.category}
        </span>
        <Link href="/productdetail" className="text-xs sm:text-sm underline flex-shrink-0">
          Back to products
        </Link>
      </div>
    </div>

    {/* Product Image */}
    <div className="flex justify-center z-10">
      <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
        <Image
          src={product.src}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</div>


           {/* Companies */}
      <section className="w-[90%] md:w-[80%] mx-auto py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Manufacturers List
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Discover the leading companies that produce and distribute this product.
        </p>

        {loadingCompanies ? (
          <p className="text-gray-600">Loading companies...</p>
        ) : companies.length === 0 ? (
          <p className="text-gray-600">
            No company data available for this product.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((ind) => (
              <div
                key={ind.id}
                className="shadow-md rounded-md hover:shadow-lg transition-all duration-700 ease-out"
              >
                <div className="relative">
                  <Image
                    src={ind.image || "/images/main/Rectangle 1033.svg"}
                    alt={ind.name}
                    width={400}
                    height={200}
                    className="w-full h-auto"
                  />
                  <Image
                    src={ind.logo || "/images/main/Ellipse 61.png"}
                    alt={`${ind.name} logo`}
                    width={64}
                    height={64}
                    className="absolute -bottom-10 left-14 w-18 h-18"
                  />
                </div>
                <div className="py-8 px-4 space-y-2">
                  <p className="text-2xl font-semibold">{ind.name}</p>
                  <p>{ind.category}</p>
                </div>
                <div className="border-t border-gray-200">
                  <Link
                    href={`/companydetails/${ind.id}`}
                    className="p-4 flex items-center gap-4 cursor-pointer hover:text-[#2947A9] transition-colors"
                  >
                    <span className="p-1 bg-[#FCD900] rounded-full px-2">
                      <FaEarthAmericas />
                    </span>
                    <p>View Profile</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
