import axios from "axios";

export const get100Coins = () => {
  const myCoins = axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      {
        headers: {
          "x-cg-demo-api-key": `${import.meta.env.VITE_COINGEKO_API}`,
        },
      },
    )
    .then((Response) => {
      // console.log("Response>>>>", Response);
      return Response.data;
    })
    .catch((error) => {
      console.log(error);
    });

    return myCoins;
};
