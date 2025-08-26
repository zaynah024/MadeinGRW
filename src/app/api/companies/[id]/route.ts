import { NextResponse } from 'next/server';

// Mock company database - replace with actual database queries
const companiesData = {
  1: {
    id: 1,
    name: "Super Asia",
    category: "Home Appliances",
    description: "Super Asia is a leading manufacturer of home appliances in Gujranwala, Pakistan. With decades of experience in the industry, we specialize in producing high-quality, energy-efficient appliances that meet international standards.",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
    founded: "1985",
    employees: "500+",
    location: "Gujranwala, Pakistan",
    website: "https://superasia.com",
    phone: "+92 315 1427899",
    email: "info@superasia.com",
    address: "Main G.T. Road, Opposite Mall of Gujranwala, Gujranwala, Punjab, Pakistan",
    products: [
      "Super Asia Washing Machine 1.0",
      "Refrigerators",
      "Air Conditioners",
      "Microwave Ovens",
      "Electric Fans"
    ],
    certifications: [
      "ISO 9001:2015",
      "CE Marking",
      "Pakistan Standards",
      "Energy Star"
    ],
    achievements: [
      "Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.",
      "Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet.",
      "Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet."
    ],
    additionalInfo: {
      founded: "1985",
      employees: "500+",
      location: "Gujranwala, Pakistan",
      certifications: ["ISO 9001:2015", "CE Marking", "Pakistan Standards", "Energy Star"],
      achievements: ["Exported to 30+ countries", "Awarded Best Manufacturer 2022", "ISO Certified since 2012"]
    }
    // Reviews removed - tab won't show
  },
  2: {
    id: 2,
    name: "Pak Steel",
    category: "Steel Manufacturing",
    description: "Pak Steel Industries is a premier steel manufacturing company in Gujranwala, producing high-quality steel products for construction and industrial applications.",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
    founded: "1990",
    employees: "300+",
    location: "Gujranwala, Pakistan",
    website: "https://paksteel.com",
    phone: "+92 315 1427900",
    email: "info@paksteel.com",
    address: "Steel Industrial Zone, Gujranwala, Punjab, Pakistan",
    products: [
      "Pak Steel Structural Beams",
      "Steel Pipes",
      "Structural Steel",
      "Steel Sheets",
      "Steel Fabrication"
    ],
    certifications: [
      "ISO 9001:2015",
      "ASTM Standards",
      "Pakistan Standards",
      "Quality Management"
    ],
    achievements: [
      "Leading steel supplier in Punjab",
      "Government approved contractor",
      "ISO Certified since 2012",
      "Exports to Middle East"
    ]
    // Both additionalInfo and reviews removed - only Company Profile tab will show
  },
  3: {
    id: 3,
    name: "Ceramic Plus",
    category: "Ceramic Industry",
    description: "Ceramic Plus specializes in manufacturing high-quality ceramic products including tiles, sanitary ware, and decorative ceramics for both domestic and international markets.",
    image: "/images/main/Rectangle 1033.svg",
    logo: "/images/main/Ellipse 61.png",
    founded: "1988",
    employees: "400+",
    location: "Gujranwala, Pakistan",
    website: "https://ceramicplus.com",
    phone: "+92 315 1427901",
    email: "info@ceramicplus.com",
    address: "Ceramic Industrial Park, Gujranwala, Punjab, Pakistan",
    products: [
      "Ceramic Plus Premium Tiles",
      "Sanitary Ware",
      "Decorative Ceramics",
      "Industrial Ceramics",
      "Bathroom Fixtures"
    ],
    certifications: [
      "ISO 9001:2015",
      "CE Marking",
      "Pakistan Standards",
      "Quality Assurance"
    ],
    achievements: [
      "Exported to 30+ countries",
      "Awarded Best Ceramic Manufacturer 2022",
      "ISO Certified since 2011",
      "Government recognized exporter"
    ],
    additionalInfo: {
      founded: "1988",
      employees: "400+",
      location: "Gujranwala, Pakistan",
      certifications: ["ISO 9001:2015", "CE Marking", "Pakistan Standards", "Quality Assurance"],
      achievements: ["Exported to 30+ countries", "Awarded Best Ceramic Manufacturer 2022", "ISO Certified since 2011", "Government recognized exporter"]
    },
    reviews: [
      {
        id: 1,
        customer: "Architectural Designs Ltd",
        rating: 5,
        comment: "Exceptional quality ceramic tiles. Perfect for our luxury projects!",
        date: "2024-01-20"
      },
      {
        id: 2,
        customer: "Interior Solutions Co",
        rating: 4,
        comment: "Great variety of designs and excellent customer service.",
        date: "2024-01-18"
      },
      {
        id: 3,
        customer: "Modern Homes",
        rating: 5,
        comment: "Best ceramic products in the market. Highly recommended!",
        date: "2024-01-15"
      }
    ]
  }
};

export async function GET(request: Request, context: any) {
  try {
    const companyId = parseInt(context?.params?.id);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real application, you would:
    // 1. Connect to your database
    // 2. Query the companies table by ID
    // 3. Return the formatted data
    
    // Example database query (replace with your actual implementation):
    // const company = await db.query('SELECT * FROM companies WHERE id = ?', [companyId]);
    
    const company = companiesData[companyId as keyof typeof companiesData];
    
    if (!company) {
      return NextResponse.json(
        {
          success: false,
          error: 'Company not found',
          message: `No company found with ID ${companyId}`
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      company: company,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching company:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch company',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}
