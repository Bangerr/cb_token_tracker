import CoinCard from "@/components/CoinCard";

export default async function Home() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let data;

  await fetch(
    "https://api.coinbase.com/api/v3/brokerage/market/products/ETH-USD/ticker?limit=1&start=1730242740&end=1730319934",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      data = result;
      console.log(result);
    })
    .catch((error) => console.error(error));

  if (data) {
    data = JSON.parse(data);
    console.log("Pricsse: ", data.trades[0].price);
  }

  return (
    <div className="w-[50%] mx-auto mt-16">
      <main className="grid grid-cols-3 gap-x-16 gap-y-10 sm:items-start">
        <CoinCard pair={"BTC-USD"} price={69000} volume={32232} />
        <CoinCard pair={"ETH-USD"} price={2700} volume={32232} />
        <CoinCard pair={"AERO-USD"} price={69000} volume={32232} />
        <CoinCard pair={"BTC-USD"} price={69000} volume={32232} />
        <CoinCard pair={"BTC-USD"} price={69000} volume={32232} />
        <CoinCard pair={"AERO-USD"} price={69000} volume={32232} />
        <CoinCard pair={"BTC-USD"} price={69000} volume={32232} />
        <CoinCard pair={"BTC-USD"} price={69000} volume={32232} />
      </main>
      <p className="mt-16">Price: {data.trades[0].price}</p>
    </div>
  );
}
