"use client";
import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

type Props = {};

type TokenDataParams = {
  ask: string;
  bid: string;
  trade_id: number;
  volume: string;
  price: string;
  size: string;
  time: string;
  rfq_volume: string;
};

const Wrapper = (props: Props) => {
  const [tokenData, setTokenData] = useState<TokenDataParams | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      // // Optional: Add API Key if required
      // myHeaders.append(
      //   "CB-ACCESS-KEY",
      //   process.env.NEXT_PUBLIC_CB_ACCESS_KEY || ""
      // );

      try {
        const response = await fetch("/api/coinbase/btc-usd");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data recived:", data);
        setTokenData(data);
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
        pair={tokenData.trade_id}
        price={tokenData.price}
        volume={tokenData.volume}
      />
    </div>
  );
};

export default Wrapper;
