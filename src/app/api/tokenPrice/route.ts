require("dotenv").config();
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); // file path to .env file
import { RESTClient } from "@/lib/rest";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res) {
  try {
    const { tokenList } = await req.json(); // tokenList should be an array of tokens

    const list = Object.values(tokenList as string);

    if (!tokenList || tokenList.length === 0) {
      return res.status(400).json({ error: "Token list is required" });
    }

    const API_KEY = process.env.NEXT_PUBLIC_CB_NAME;
    const API_SECRET = process.env.NEXT_PUBLIC_CB_PRIVATEKEY;

    if (!API_KEY || !API_SECRET) {
      console.error("Missing API credentials");
      return NextResponse.json(
        { error: "API credentials are not configured" },
        { status: 500 }
      );
    }

    const client = new RESTClient(API_KEY, API_SECRET);

    // Fetch data for each token in the list
    const data = await Promise.all(
      list.map(async (tokenPair) => {
        try {
          const productData = await client.getProduct({ productId: tokenPair });
          return { productData };
        } catch (error) {
          console.error(`Failed to fetch data for ${tokenPair}:`, error);
          return { tokenPair, error: "Failed to fetch data" };
        }
      })
    );

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Coinbase" },
      { status: 500 }
    );
  }
}
