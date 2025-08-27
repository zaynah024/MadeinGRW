export type Product = {
  id: number;
  src: string;
  logo?: string;
  name: string;
  category: string;
  description: string;
  industries?: string[]; // industry names that make this product
};

export const productsData: Product[] = [
  { id: 1, src: "/images/main/products/fridge.png", logo: "/images/main/products/fridge.png", name: "Refrigerator Pro", category: "Kitchen Appliances", description: "High-quality refrigerators for modern homes with advanced cooling technology", industries: ["Home Appliances", "Kitchen Equipment"] },
  { id: 2, src: "/images/main/products/washingmachine.png", logo: "/images/main/products/washingmachine.png", name: "Washing Machine Plus", category: "Laundry Appliances", description: "Efficient washing machines for clean clothes with smart features", industries: ["Laundry Appliances", "Textile"] },
  { id: 3, src: "/images/main/products/spindryer.png", logo: "/images/main/products/spindryer.png", name: "Spin Dryer Elite", category: "Laundry Appliances", description: "Fast spin drying technology for quick laundry results", industries: ["Laundry Appliances"] },
  { id: 4, src: "/images/main/products/aircooler.png", logo: "/images/main/products/aircooler.png", name: "Air Cooler Max", category: "Cooling Appliances", description: "Energy-efficient air cooling solutions for hot summers", industries: ["Cooling Appliances", "HVAC"] },
  { id: 5, src: "/images/main/products/fridge.png", logo: "/images/main/products/fridge.png", name: "Refrigerator Deluxe", category: "Kitchen Appliances", description: "Luxury refrigeration solutions with premium features", industries: ["Kitchen Equipment"] },
  { id: 6, src: "/images/main/products/washingmachine.png", logo: "/images/main/products/washingmachine.png", name: "Washing Machine Deluxe", category: "Laundry Appliances", description: "Premium laundry experience with advanced technology", industries: ["Laundry Appliances"] },
  { id: 7, src: "/images/main/products/spindryer.png", logo: "/images/main/products/spindryer.png", name: "Spin Dryer Pro", category: "Laundry Appliances", description: "Professional spin drying for commercial use", industries: ["Commercial Appliances"] },
  { id: 8, src: "/images/main/products/aircooler.png", logo: "/images/main/products/aircooler.png", name: "Air Cooler Pro", category: "Cooling Appliances", description: "Professional cooling solutions for large spaces", industries: ["Cooling Appliances", "HVAC"] },
  // add more as needed
];