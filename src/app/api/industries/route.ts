import { NextResponse } from 'next/server';

const industriesData = [
  { id: 1, name: 'Super Asia', category: 'Home Appliances', image: '/images/main/Rectangle 1033.svg', logo: '/images/main/Ellipse 61.png' },
  { id: 2, name: 'Super Asia', category: 'Home Appliances', image: '/images/main/Rectangle 1033.svg', logo: '/images/main/Ellipse 61.png' },
  { id: 3, name: 'Super Asia', category: 'Home Appliances', image: '/images/main/Rectangle 1033.svg', logo: '/images/main/Ellipse 61.png' },
  { id: 4, name: 'Super Asia', category: 'Home Appliances', image: '/images/main/Rectangle 1033.svg', logo: '/images/main/Ellipse 61.png' },
  { id: 5, name: 'Super Asia', category: 'Home Appliances', image: '/images/main/Rectangle 1033.svg', logo: '/images/main/Ellipse 61.png' },
  { id: 6, name: 'Super Asia', category: 'Home Appliances', image: '/images/main/Rectangle 1033.svg', logo: '/images/main/Ellipse 61.png' },
];

export async function GET() {
  try {
    await new Promise(r => setTimeout(r, 200));
    return NextResponse.json({ success: true, industries: industriesData });
  } catch (e) {
    return NextResponse.json({ success: false, industries: [] }, { status: 500 });
  }
}
