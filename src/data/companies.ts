export type Company = {
  id: number;
  name: string;
  category?: string;
  description?: string;
  image?: string;
  logo?: string;
  founded?: string;
  employees?: string;
  location?: string;
  website?: string;
  phone?: string;
  email?: string;
  address?: string;
  products?: string[];        // human readable product names
  productIds?: number[];     // numeric ids linked to src/data/products.ts
  certifications?: string[];
  achievements?: string[];
  additionalInfo?: Record<string, any>;
  reviews?: any[];
};

export const companiesData: Company[] = [
  {
    id: 1,
    name: "Super Asia",
    category: "Home Appliances",
    description:
      "Super Asia is a leading manufacturer of home appliances in Gujranwala, Pakistan...",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
    founded: "1985",
    employees: "500+",
    location: "Gujranwala, Pakistan",
    website: "https://superasia.com",
    phone: "+92 315 1427899",
    email: "info@superasia.com",
    address: "Main G.T. Road, Opposite Mall of Gujranwala",
    products: [
      "Super Asia Washing Machine 1.0",
      "Refrigerator Pro",
      "Washing Machine Plus",
      "Refrigerators",
      "Air Conditioners"
    ],
    // productIds must match ids in /src/data/products.ts
    productIds: [1, 2, 6],
    certifications: ["ISO 9001:2015", "CE Marking"],
    achievements: ["Exported to 30+ countries"]
  },
  {
    id: 2,
    name: "Pak Steel",
    category: "Steel Manufacturing",
    description: "Pak Steel Industries is a premier steel manufacturing company...",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
    productIds: [9], // e.g. refrigerator compact (if applicable) or keep empty
    products: ["Pak Steel Structural Beams","Super Asia Washing Machine 1.0",
      "Refrigerator Pro",
      "Washing Machine Plus",
      "Refrigerators",
      "Air Conditioners"],
    certifications: ["ISO 9001:2015"],
    achievements: []
  },
  {
    id: 3,
    name: "Ceramic Plus",
    category: "Ceramic Industry",
    description: "Ceramic Plus specializes in manufacturing high-quality ceramic products...",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
    productIds: [],
    products: ["Ceramic Plus Premium Tiles"],
    certifications: ["ISO 9001:2015"],
    achievements: []
  },
  // add / update other companies with productIds as needed
];