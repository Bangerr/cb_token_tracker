"use client";
import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

type Props = {};

type TokenDataParams = {
  product_id: string;
  price: string;
  volume_24h: string;
};

const Wrapper = (props: Props) => {
  const [tokenData, setTokenData] = useState<TokenDataParams | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch("/api/tokenPrice", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data recived:", JSON.parse(data));
        setTokenData(JSON.parse(data));
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
    <div>
      <CoinCard
        pair={tokenData.product_id}
        price={tokenData.price}
        volume={tokenData.volume_24h}
      />
    </div>
  );
};

export default Wrapper;
