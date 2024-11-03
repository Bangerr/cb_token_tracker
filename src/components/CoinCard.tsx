"use client";
import React from "react";

type Props = {
  pair: string;
  price: string;
  volume: string;
  volumePercentage: string;
};

const CoinCard = ({ pair, price, volume, volumePercentage }: Props) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-max border rounded-lg p-2">
      <div className="mb-2">
        <h1 className="text-xl font-semibold">Pair: {pair}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row w-full justify-between">
          <p className="font-semibold">
            Price:{" "}
            <span className="font-normal">{`$${parseFloat(price).toFixed(
              2
            )}`}</span>
          </p>
          <p className="font-semibold">
            Volume 24h:{" "}
            <span className="font-normal">{`$${parseFloat(volume).toFixed(
              2
            )}`}</span>
          </p>
        </div>
        <div className="flex flex-row">
          <p className="font-semibold">Volume 24h: </p>
          <p className="ml-2">{parseFloat(volumePercentage).toFixed(2)}%</p>
        </div>
        <button className="p-1.5 border rounded-lg" onClick={handleClick}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default CoinCard;
