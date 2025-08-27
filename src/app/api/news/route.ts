import { NextResponse } from "next/server";
import { newsData } from "@/data/news";

export async function GET() {
  try {
    // small delay to simulate network if desired
    // await new Promise((r) => setTimeout(r, 100));
    return NextResponse.json(newsData);
  } catch (err) {
    return NextResponse.json({ error: "Failed to load news" }, { status: 500 });
  }
}