import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      {
        headers: {
          "x-cg-demo-api-key": "CG-aUbU1LfTh3RvdHHQjzd9M7xS",
        },
      },
    )
    .then((response) => {
    //   console.log("Prices with keys>>>", response.data);
      return response.data[priceType];
    })
    .catch((error) => {
      console.log(error);
    });

  return prices;
};
