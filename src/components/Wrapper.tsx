"use client";
import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

type Props = {};

type TokenDataParams = {
  [key: string]: any;
};

const Wrapper = (props: Props) => {
  const [tokenData, setTokenData] = useState<TokenDataParams[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const tokenList = {
    0: "BTC-USDC",
    1: "ETH-USDC",
    2: "SOL-USDC",
    3: "UNI-USDC",
    4: "AERO-USDC",
    5: "LTC-USDC",
  };

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch("/api/tokenPrice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tokenList }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const parsedData = data.map((token: any) => ({
          ...token,
          productData: JSON.parse(token.productData),
        }));
        setTokenData(parsedData);
      } catch (err) {
        console.error("Data fetching failed Step: ", err);
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      }
    }

    fetchToken();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tokenData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-12 md:gap-y-10 sm:items-center justify-center">
      {tokenData.map((token, idx) => (
        <CoinCard
          key={idx}
          pair={token.productData.product_id}
          price={token.productData.price}
          volume={token.productData.volume_24h}
          volumePercentage={token.productData.volume_percentage_change_24h}
        />
      ))}
    </div>
  );
};

export default Wrapper;
