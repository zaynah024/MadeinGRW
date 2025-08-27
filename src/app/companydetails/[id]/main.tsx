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
  // No additionalInfo or reviews in fallback - only Company Profile tab will show
};

// All products data for the expanded view
const allProducts = [
  {
    id: 1,
    name: "Super Asia Washing Machine 1.0",
    description: "High-efficiency washing machine with advanced features",
    category: "Laundry",
    image: "/images/main/products/washingmachine.png"
  },
  {
    id: 2,
    name: "Super Asia Refrigerator Pro",
    description: "Energy-efficient refrigerator with smart cooling technology",
    category: "Kitchen",
    image: "/images/main/products/fridge.png"
  },
  {
    id: 3,
    name: "Super Asia Air Conditioner",
    description: "Split AC with inverter technology for optimal cooling",
    category: "Cooling",
    image: "/images/main/products/aircooler.png"
  },
  {
    id: 4,
    name: "Super Asia Microwave Oven",
    description: "Convection microwave with multiple cooking modes",
    category: "Kitchen",
    image: "/images/main/products/spindryer.png"
  },
  {
    id: 5,
    name: "Super Asia Electric Fan",
    description: "High-speed electric fan with oscillation",
    category: "Cooling",
    image: "/images/main/products/aircooler.png"
  },
  {
    id: 6,
    name: "Super Asia Water Heater",
    description: "Instant water heater with temperature control",
    category: "Bathroom",
    image: "/images/main/products/washingmachine.png"
  },
  {
    id: 7,
    name: "Super Asia Coffee Maker",
    description: "Programmable coffee maker with thermal carafe",
    category: "Kitchen",
    image: "/images/main/products/spindryer.png"
  },
  {
    id: 8,
    name: "Super Asia Food Processor",
    description: "Multi-functional food processor with attachments",
    category: "Kitchen",
    image: "/images/main/products/fridge.png"
  },
  {
    id: 9,
    name: "Super Asia Vacuum Cleaner",
    description: "Bagless vacuum cleaner with HEPA filter",
    category: "Cleaning",
    image: "/images/main/products/aircooler.png"
  },
  {
    id: 10,
    name: "Super Asia Electric Kettle",
    description: "Fast-boiling electric kettle with auto-shutoff",
    category: "Kitchen",
    image: "/images/main/products/washingmachine.png"
  },
  {
    id: 11,
    name: "Super Asia Toaster",
    description: "4-slice toaster with defrost and reheat functions",
    category: "Kitchen",
    image: "/images/main/products/spindryer.png"
  },
  {
    id: 12,
    name: "Super Asia Blender",
    description: "High-power blender for smoothies and food processing",
    category: "Kitchen",
    image: "/images/main/products/fridge.png"
  }
];

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
  additionalInfo?: {
    founded: string;
    employees: string;
    location: string;
    certifications: string[];
    achievements: string[];
  };
  reviews?: Array<{
    id: number;
    customer: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

export default function CompanyDetails() {
  const [activeTab, setActiveTab] = useState("profile");
  const [company, setCompany] = useState<CompanyData>(fallbackCompany);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

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
          features: data.company.achievements || fallbackCompany.features,
          additionalInfo: data.company.additionalInfo || undefined,
          reviews: data.company.reviews || undefined
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
        <div className="flex flex-col md:flex-row gap-10 overflow-x-hidden">
          {/* Left Section */}
          <div className="md:w-[70%] overflow-x-hidden">
            <p className="text-5xl md:text-7xl font-semibold my-8 break-words">
              {company.name}
            </p>

            {/* Image Gallery */}
            <div className="overflow-x-hidden">
              <Image
                src="/images/company/Box.png"
                width={800}
                height={500}
                alt="Main Product"
                className="w-full h-auto max-w-full"
              />
              <div className="my-2 flex gap-4 overflow-x-hidden">
                {["Box (1).png", "Box (2).png", "Box (1).png", "Box (1).png"].map(
                  (img, i) => (
                    <Image
                      key={i}
                      src={`/images/company/${img}`}
                      width={150}
                      height={150}
                      alt={`Gallery ${i + 1}`}
                      className="w-36 h-36 object-cover flex-shrink-0"
                    />
                  )
                )}
              </div>
            </div>

            {/* Tabs */}
<div className="py-10 overflow-x-hidden">
  <div className="flex gap-4 border-b pb-2 overflow-x-auto whitespace-nowrap">
    <button
      className={`py-2 px-8 rounded-t-lg transition-colors flex-shrink-0 ${
        activeTab === "profile" ? "bg-[#FCD900] text-black" : "text-gray-600 hover:text-[#FCD900]"
      }`}
      onClick={() => setActiveTab("profile")}
    >
      Company Profile
    </button>
    {company.additionalInfo && Object.keys(company.additionalInfo).length > 0 && (
      <button
        className={`py-2 px-8 rounded-t-lg transition-colors flex-shrink-0 ${
          activeTab === "info" ? "bg-[#FCD900] text-black" : "text-gray-600 hover:text-[#FCD900]"
        }`}
        onClick={() => setActiveTab("info")}
      >
        Additional Information
      </button>
    )}
    {company.reviews && Array.isArray(company.reviews) && company.reviews.length > 0 && (
      <button
        className={`py-2 px-8 rounded-t-lg transition-colors flex-shrink-0 ${
          activeTab === "reviews" ? "bg-[#FCD900] text-black" : "text-gray-600 hover:text-[#FCD900]"
        }`}
        onClick={() => setActiveTab("reviews")}
      >
        Reviews ({company.reviews.length})
      </button>
    )}
  </div>


              {activeTab === "profile" && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 mt-4 shadow-sm overflow-x-hidden">
                  <p className="text-2xl my-4 break-words">{company.products[0]}</p>
                  <p className="break-words">
                    {company.description}
                  </p>
                  <ul className="space-y-2 mt-6">
                    {company.features.map((feature, index) => (
                      <li key={index} className="flex gap-2 items-start">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "info" && company.additionalInfo && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 mt-4 shadow-sm overflow-x-hidden">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Company Information</h3>
                  <p className="text-gray-600 mb-4 break-words">
                    {company.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Founded</h4>
                      <p className="text-gray-600">{company.additionalInfo.founded}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Employees</h4>
                      <p className="text-gray-600">{company.additionalInfo.employees}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">{company.additionalInfo.location}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Category</h4>
                      <p className="text-gray-600">{company.category}</p>
                    </div>
                  </div>
                  
                  {company.additionalInfo.certifications && company.additionalInfo.certifications.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.additionalInfo.certifications.map((cert, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm break-words">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {company.additionalInfo.achievements && company.additionalInfo.achievements.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Achievements</h4>
                      <ul className="space-y-2">
                        {company.additionalInfo.achievements.map((achievement, index) => (
                          <li key={index} className="flex gap-2 items-start">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 break-words">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "reviews" && company.reviews && Array.isArray(company.reviews) && company.reviews.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 mt-4 shadow-sm overflow-x-hidden">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Reviews</h3>
                  <div className="space-y-4">
                    {company.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0 overflow-x-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800 break-words">{review.customer}</h4>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2 break-words">{review.comment}</p>
                        <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:w-[30%] overflow-x-hidden">
            <div className="w-full flex justify-end overflow-x-hidden">
              {/* Square logo container to keep consistent aspect ratio */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-md flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src={company.logo}
                  width={160}
                  height={160}
                  alt={`${company.name} Logo`}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
            <div className="p-4 space-y-6 overflow-x-hidden">
              <p className="break-words">
                Are you interested? Contact our sales department now
              </p>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-black flex-shrink-0" />
                  <div className="overflow-x-hidden">
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
                  <Mail className="h-5 w-5 text-black flex-shrink-0" />
                  <div className="overflow-x-hidden">
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
                  <Globe className="h-5 w-5 text-black flex-shrink-0" />
                  <div className="overflow-x-hidden">
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
            <div className="flex items-center bg-white border border-gray-200 rounded-md shadow-sm p-4 border-b-4 border-yellow-400 overflow-x-hidden">
              {/* Location Icon */}
              <div className="flex-shrink-0">
                <img src="/images/company/pin_6218733 1.png" alt="Location" className="w-10 h-10" />
              </div>

              {/* Location Text */}
              <div className="ml-3 overflow-x-hidden">
                <p className="text-sm font-medium break-words">
                  {company.address}
                </p>
                <p className="text-xs text-gray-500">Reach Out Now</p>
              </div>
            </div>

            {/* Error Message if any */}
            {error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 overflow-x-hidden">
                <p className="text-yellow-800 text-sm break-words">
                  ⚠️ Using fallback data: {error}
                </p>
              </div>
            )}
          </div>
          
        </div>

        {/* Products Section */}
<div className="my-10 overflow-x-hidden">
  <p className="text-xs font-medium text-gray-500">
    PRODUCTS BY THIS COMPANY
  </p>
  <p className="text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[40%] after:h-[6px] after:bg-yellow-400">
    OUR PRODUCTS
  </p>

  {/* Desktop: horizontal scroll */}
  <div className="hidden md:block my-10">
    <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
      {allProducts.map((product) => (
        <div key={product.id} className="hover:scale-105 transition-transform flex-shrink-0 w-64">
          <Image
            src={product.image}
            width={250}
            height={250}
            alt={product.name}
            className="w-full h-auto"
          />
          <p className="text-center mt-2 text-xl font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {product.name}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Mobile: stacked list */}
  <div className="md:hidden bg-white border border-gray-200 rounded-lg p-4 space-y-4">
    {(showAllProducts ? allProducts : allProducts.slice(0, 4)).map((product) => (
      <div key={product.id} className="flex gap-3 items-start">
        <Image
          src={product.image}
          width={50}
          height={50}
          alt={product.name}
          className="w-12 h-12 object-cover flex-shrink-0"
        />
        <div className="overflow-x-hidden">
          <p className="text-sm font-semibold break-words">{product.name}</p>
          <p className="text-xs text-gray-500 break-words">{product.category}</p>
        </div>
      </div>
    ))}
    {!showAllProducts && allProducts.length > 4 && (
      <button
        className="mt-3 text-sm font-semibold text-[#6CA7FF] hover:underline"
        onClick={() => setShowAllProducts(true)}
      >
        View All Products
      </button>
    )}
  </div>

  {/* Mobile "Show All / Show Less" button */}
  {allProducts.length > 4 && (
    <div className="flex justify-center mt-8 md:hidden">
      <button
        onClick={() => setShowAllProducts(!showAllProducts)}
        className="bg-[#FCD900] hover:bg-yellow-500 text-black px-8 py-3 font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
      >
        {showAllProducts ? 'Show Less' : 'View All Products'}
        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showAllProducts ? 'rotate-180' : ''}`} />
      </button>
    </div>
  )}
</div>

      </main>
    </div>
  );
}
