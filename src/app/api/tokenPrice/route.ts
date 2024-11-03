require("dotenv").config();
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); // file path to .env file
import { RESTClient } from "@/lib/rest";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_CB_NAME;
    const API_SECRET = process.env.NEXT_PUBLIC_CB_PRIVATEKEY;

    // Validate API credentials
    if (!API_KEY || !API_SECRET) {
      console.error("Missing API credentials");
      return NextResponse.json(
        { error: "API credentials are not configured" },
        { status: 500 }
      );
    }

    // Initialize REST client
    const client = new RESTClient(API_KEY, API_SECRET);

    //await the promise from getProduct
    const data = await client.getProduct({ productId: "AERO-USD" });

    console.log("Successfully fetched product data:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Coinbase" },
      { status: 500 }
    );
  }
}
