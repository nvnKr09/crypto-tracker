import axios from "axios";

export function getCoinData(id) {
  const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`,
    {
      headers: {
        "x-cg-demo-api-key": "CG-aUbU1LfTh3RvdHHQjzd9M7xS",
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
