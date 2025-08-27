import { NextResponse } from "next/server";
import { companiesData } from "@/data/companies";

export async function GET(_request: Request, context: any) {
  try {
    // await params in case Next.js provides a promise-like params object
    const params = await context?.params;
    const id = Number(params?.id ?? 0);

    // simulate small delay (optional)
    await new Promise((r) => setTimeout(r, 150));

    const company = companiesData.find((c) => c.id === id);
    if (!company) {
      return NextResponse.json({ success: false, error: "Company not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, company });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Failed to fetch company" }, { status: 500 });
  }
}
