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
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch(
          "https://api.exchange.coinbase.com/products/ETH-USD/ticker",
          {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Data recived:", data);
          setTokenData(data);
        } else {
          const error = await response.json();
          console.error("Data fetching failed", error.message);
        }
      } catch (err) {
        console.error("Data fetching failed Step: ", err);
      }
    }

    fetchToken();
  }, []);

  if (!tokenData) {
    return <div>Loading...</div>;
  }

  // const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  // };
  // let data;

  // await fetch(
  //     "https://api.coinbase.com/api/v3/brokerage/market/products/ETH-USD/ticker?limit=1&start=1730242740&end=1730319934",
  //     requestOptions
  // )
  //     .then((response) => response.text())
  //     .then((result) => {
  //     data = result;
  //     console.log(result);
  //     })
  //     .catch((error) => console.error(error));

  // if (data) {
  //     data = JSON.parse(data);
  //     console.log("Pricsse: ", data.trades[0].price);
  // }
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
