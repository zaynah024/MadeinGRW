import { NextResponse } from "next/server";
import { companiesData } from "@/data/companies";

export async function GET(request: Request) {
  try {
    // allow optional query ?productId=#
    const url = new URL(request.url);
    const productIdParam = url.searchParams.get("productId");
    let result = companiesData;

    if (productIdParam) {
      const pid = Number(productIdParam);
      if (!Number.isNaN(pid)) {
        result = companiesData.filter((c) => Array.isArray(c.productIds) && c.productIds.includes(pid));
      } else {
        // if non-numeric, try match by product name substring (optional)
        const q = productIdParam.toLowerCase();
        result = companiesData.filter((c) =>
          Array.isArray(c.products) && c.products.some((p) => String(p).toLowerCase().includes(q))
        );
      }
    }

    // optional small delay
    await new Promise((r) => setTimeout(r, 80));
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
}