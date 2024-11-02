import CoinCard from "@/components/CoinCard";
import Wrapper from "@/components/Wrapper";

export default async function Home() {
  return (
    <div className="md:w-[50%] w-[85%] mx-auto mt-16">
      <main className="grid md:grid-cols-3 grid-cols-1 md:gap-x-12 md:gap-y-10 sm:items-center justify-center">
        <Wrapper />

        <CoinCard pair={"AERO-USD"} price={"69000"} volume={"32232"} />
        <CoinCard pair={"BTC-USD"} price={"69000"} volume={"32232"} />
        <CoinCard pair={"AERO-USD"} price={"69000"} volume={"32232"} />
        <CoinCard pair={"BTC-USD"} price={"69000"} volume={"32232"} />
        <CoinCard pair={"AERO-USD"} price={"69000"} volume={"32232"} />
        <CoinCard pair={"BTC-USD"} price={"69000"} volume={"32232"} />
      </main>
    </div>
  );
}
