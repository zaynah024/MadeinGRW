import { NextResponse } from 'next/server';

// Mock products database - replace with actual database queries
const productsData = [
  {
    id: 1,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Pro",
    category: "Kitchen Appliances",
    description: "High-quality refrigerators for modern homes with advanced cooling technology"
  },
  {
    id: 2,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Plus",
    category: "Laundry Appliances",
    description: "Efficient washing machines for clean clothes with smart features"
  },
  {
    id: 3,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Elite",
    category: "Laundry Appliances",
    description: "Fast spin drying technology for quick laundry results"
  },
  {
    id: 4,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Max",
    category: "Cooling Appliances",
    description: "Energy-efficient air cooling solutions for hot summers"
  },
  {
    id: 5,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Deluxe",
    category: "Kitchen Appliances",
    description: "Luxury refrigeration solutions with premium features"
  },
  {
    id: 6,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Deluxe",
    category: "Laundry Appliances",
    description: "Premium laundry experience with advanced technology"
  },
  {
    id: 7,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Pro",
    category: "Laundry Appliances",
    description: "Professional spin drying for commercial use"
  },
  {
    id: 8,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Pro",
    category: "Cooling Appliances",
    description: "Professional cooling solutions for large spaces"
  },
  {
    id: 9,
    src: "/images/main/products/fridge.png",
    name: "Refrigerator Compact",
    category: "Kitchen Appliances",
    description: "Space-saving refrigeration for small kitchens"
  },
  {
    id: 10,
    src: "/images/main/products/washingmachine.png",
    name: "Washing Machine Compact",
    category: "Laundry Appliances",
    description: "Compact washing solution for small spaces"
  },
  {
    id: 11,
    src: "/images/main/products/spindryer.png",
    name: "Spin Dryer Compact",
    category: "Laundry Appliances",
    description: "Compact spin drying for small laundry needs"
  },
  {
    id: 12,
    src: "/images/main/products/aircooler.png",
    name: "Air Cooler Compact",
    category: "Cooling Appliances",
    description: "Compact cooling for personal spaces"
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real application, you would:
    // 1. Connect to your database
    // 2. Query the products table
    // 3. Return the formatted data
    
    // Example database query (replace with your actual implementation):
    // const products = await db.query('SELECT * FROM products ORDER BY id');
    
    return NextResponse.json({
      success: true,
      products: productsData,
      total: productsData.length,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching products:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would:
    // 1. Validate the incoming data
    // 2. Connect to your database
    // 3. Insert the new product
    // 4. Return the created product
    
    // Example database insert (replace with your actual implementation):
    // const newProduct = await db.query('INSERT INTO products (name, category, description, src) VALUES (?, ?, ?, ?)', [body.name, body.category, body.description, body.src]);
    
    const newProduct = {
      id: productsData.length + 1,
      src: body.src || "/images/main/products/fridge.png",
      name: body.name || "New Product",
      category: body.category || "General",
      description: body.description || "Product description"
    };
    
    // Add to mock data (in real app, this would be database insert)
    productsData.push(newProduct);
    
    return NextResponse.json({
      success: true,
      product: newProduct,
      message: 'Product created successfully',
      timestamp: new Date().toISOString()
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error creating product:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create product',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}
