import { NextResponse } from "next/server";
import { generateCoinbaseJWTToken } from "@/lib/jwt";

export async function GET() {
  try {
    const token = generateCoinbaseJWTToken();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const response = await fetch(
      "https://api.coinbase.com/api/v3/brokerage/products/BTC-USD",
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Coinbase" },
      { status: 500 }
    );
  }
}
