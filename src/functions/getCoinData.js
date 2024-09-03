import axios from "axios";

export function getCoinData(id) {
  const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`,
    {
      headers: {
        "x-cg-demo-api-key": `${import.meta.env.VITE_COINGEKO_API}`,
      },
    },
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
    return myData;
}
