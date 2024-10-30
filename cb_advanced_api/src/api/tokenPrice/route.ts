import axios from "axios";

export function getTokenPrice() {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.coinbase.com/api/v3/brokerage/market/products/AERO-USD/candles?start=1730242740&end=1730319934&granularity=ONE_HOUR&limit=10",
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}
