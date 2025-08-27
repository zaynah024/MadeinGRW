import { NextResponse } from "next/server";
import { newsData } from "@/data/news";

export async function GET(_req: Request, context: any) {
  try {
    const id = String(context?.params?.id || "");
    const item = newsData.find((n) => n.id === id);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}