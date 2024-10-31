"use client";
import React from "react";

type Props = {
  pair: string;
  price: number;
  volume: number;
};

const CoinCard = ({ pair, price, volume }: Props) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-max w-[250px] border rounded-lg p-2">
      <div className="">
        <div className="">
          <h1 className="text-xl font-semibold">Pair: {pair}</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row w-full justify-between">
            <p className="font-semibold">
              Price: <span className="font-normal">{`$${price}`}</span>
            </p>
            <p className="font-semibold">
              Volume: <span className="font-normal">{`$${volume}`}</span>
            </p>
          </div>
          <button className="p-1.5 border rounded-lg" onClick={handleClick}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
