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
    "https://api.coinbase.com/api/v3/brokerage/market/products/ETH-USD/ticker?limit=10&start=1730242740&end=1730319934",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      data = result;
      console.log(result);
    })
    .catch((error) => console.error(error));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>{data}</p>
      </main>
    </div>
  );
}
