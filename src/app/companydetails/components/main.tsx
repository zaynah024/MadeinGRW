// app/company/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone, Mail, Globe, ChevronRight } from "lucide-react";

// Mock company data for fallback
const fallbackCompany = {
  id: 1,
  name: "Super Asia Company",
  category: "Home Appliances",
  description: "Super Asia is a leading manufacturer of home appliances in Gujranwala, Pakistan. With decades of experience in the industry, we specialize in producing high-quality, energy-efficient appliances that meet international standards.",
  logo: "/images/company/Rectangle 20.png",
  phone: "+92 314 2456282",
  email: "sales@superasia.com",
  website: "https://www.superasia.com",
  address: "Main G.T. Road, Opposite Mall of Gujranwala",
  products: [
    "Super Asia Washing Machine 1.0",
    "Refrigerators",
    "Air Conditioners",
    "Microwave Ovens"
  ],
  features: [
    "Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.",
    "Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet.",
    "Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet."
  ]
};

interface CompanyData {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  products: string[];
  features: string[];
}

export default function CompanyDetails() {
  const [activeTab, setActiveTab] = useState("profile");
  const [company, setCompany] = useState<CompanyData>(fallbackCompany);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get company ID from URL
  useEffect(() => {
    const pathSegments = window.location.pathname.split('/');
    const companyId = pathSegments[pathSegments.length - 1];
    
    if (companyId && companyId !== 'companydetails') {
      fetchCompanyData(companyId);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchCompanyData = async (companyId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Try to fetch company data from API
      const response = await fetch(`/api/companies/${companyId}`, {
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
      
      if (data && data.company) {
        // Map API data to our component structure
        setCompany({
          id: data.company.id,
          name: data.company.name + " Company",
          category: data.company.category,
          description: data.company.description,
          logo: data.company.logo || fallbackCompany.logo,
          phone: data.company.phone || fallbackCompany.phone,
          email: data.company.email || fallbackCompany.email,
          website: data.company.website || fallbackCompany.website,
          address: data.company.address || fallbackCompany.address,
          products: data.company.products || fallbackCompany.products,
          features: data.company.achievements || fallbackCompany.features
        });
      } else {
        // If API returns invalid data, use fallback
        console.warn('API returned invalid data, using fallback');
        setCompany(fallbackCompany);
      }
    } catch (err) {
      console.error('Error fetching company data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch company data');
      // Use fallback data on error
      setCompany(fallbackCompany);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FCD900] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading company details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative font-['Roboto',sans-serif]">
      {/* Background */}
      <Image
        src="/images/Background.png"
        width={1920}
        height={1080}
        alt="Background"
        className="absolute -z-10 w-full h-full object-cover"
      />

      <main className="w-[90%] md:w-[80%] mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="py-10">
          <p className="text-4xl font-medium">Company Details</p>
          <div className="flex items-center text-gray-500 mt-2 text-xs gap-2">
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span>Industrial Sectors</span>
            <ChevronRight className="h-3 w-3" />
            <span>{company.name}</span>
          </div>
        </div>

        {/* Company Details Layout */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="md:w-[70%]">
            <p className="text-5xl md:text-7xl font-semibold my-8">
              {company.name}
            </p>

            {/* Image Gallery */}
            <div>
              <Image
                src="/images/company/Box.png"
                width={800}
                height={500}
                alt="Main Product"
              />
              <div className="my-2 flex gap-4">
                {["Box (1).png", "Box (2).png", "Box (1).png", "Box (1).png"].map(
                  (img, i) => (
                    <Image
                      key={i}
                      src={`/images/company/${img}`}
                      width={150}
                      height={150}
                      alt={`Gallery ${i + 1}`}
                    />
                  )
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="py-10">
              <div className="flex gap-4 border-b pb-2">
                <button
                  className={`py-2 px-8 ${
                    activeTab === "profile" ? "bg-[#FCD900]" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Company Profile
                </button>
                <button
                  className={activeTab === "info" ? "text-[#FCD900]" : ""}
                  onClick={() => setActiveTab("info")}
                >
                  Additional Information
                </button>
                <button
                  className={activeTab === "reviews" ? "text-[#FCD900]" : ""}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
              </div>

              {activeTab === "profile" && (
                <div>
                  <p className="text-2xl my-4">{company.products[0]}</p>
                  <p>
                    {company.description}
                  </p>
                  <ul className="space-y-2 mt-6">
                    {company.features.map((feature, index) => (
                      <li key={index} className="flex gap-2 items-center">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "info" && (
                <div className="py-6">
                  <p className="text-gray-600">
                    {company.description}
                  </p>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="py-6">
                  <p className="text-gray-600">
                    Customer reviews and feedback for {company.name} will appear here...
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:w-[30%]">
            <div className="w-full flex justify-end">
              <Image
                src={company.logo}
                width={208}
                height={208}
                alt={`${company.name} Logo`}
              />
            </div>
            <div className="p-4 space-y-6">
              <p>
                Are you interested? Contact our sales department now
              </p>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-black" />
                  <div>
                    <p className="text-xs">
                      <span className="font-semibold">{company.name}</span> / Sales
                      Manager
                    </p>
                    <p className="text-xs font-semibold">
                      <a href={`tel:${company.phone}`}>{company.phone}</a>
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-black" />
                  <div>
                    <p className="text-xs">Sales Department</p>
                    <p className="text-xs font-semibold">
                      <a href={`mailto:${company.email}`}>
                        {company.email}
                      </a>
                    </p>
                  </div>
                </div>
                {/* Website */}
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-black" />
                  <div>
                    <p className="text-xs">Website</p>
                    <p className="text-xs font-semibold">
                      <a href={company.website} target="_blank">
                        {company.website.replace('https://', '').replace('http://', '')}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Location Box */}
            <div className="flex items-center bg-white border border-gray-200 rounded-md shadow-sm p-4 border-b-4 border-yellow-400">
              {/* Location Icon */}
              <div className="flex-shrink-0">
                <img src="/images/company/pin_6218733 1.png" alt="Location" className="w-10 h-10" />
              </div>

              {/* Location Text */}
              <div className="ml-3">
                <p className="text-sm font-medium">
                  {company.address}
                </p>
                <p className="text-xs text-gray-500">Reach Out Now</p>
              </div>
            </div>

            {/* Error Message if any */}
            {error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-yellow-800 text-sm">
                  ⚠️ Using fallback data: {error}
                </p>
              </div>
            )}
          </div>
          
        </div>

        {/* Products Section */}
        <div className="my-10">
          <p className="text-xs font-medium text-gray-500">
            PRODUCTS BY THIS COMPANY
          </p>
          <p className="text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[40%] after:h-[6px] after:bg-yellow-400">
            OUR PRODUCTS
          </p>

          <div className="my-10 ">
            <div className="grid md:grid-cols-4 gap-8 ">
              {/* Product 1 - Air Cooler */}
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/images/main/products/aircooler.png"
                  width={250}
                  height={250}
                  alt="Air Cooler"
                  className="w-full h-auto"
                />
                <p className="text-center mt-2 text-xl font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Air Cooler
                </p>
              </div>

              {/* Product 2 - Refrigerator */}
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/images/main/products/fridge.png"
                  width={250}
                  height={250}
                  alt="Refrigerator"
                  className="w-full h-auto"
                />
                <p className="text-center mt-2 text-xl font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Refrigerator
                </p>
              </div>

              {/* Product 3 - Spin Dryer */}
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/images/main/products/spindryer.png"
                  width={250}
                  height={250}
                  alt="Spin Dryer"
                  className="w-full h-auto"
                />
                <p className="text-center mt-2 text-xl font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Spin Dryer
                </p>
              </div>

              {/* Product 4 - Washing Machine */}
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/images/main/products/washingmachine.png"
                  width={250}
                  height={250}
                  alt="Washing Machine"
                  className="w-full h-auto"
                />
                <p className="text-center mt-2 text-xl font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Washing Machine
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
