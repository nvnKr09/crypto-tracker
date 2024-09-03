import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2, crypto1, crypto2) => {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: crypto1,
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 1,
          fill: true,
          backgroundColor: prices2 ? "transparent" : "rgba(58, 128, 233, 0.1)",
          tension: 0.25,
          pointRadius: 0,
        },
        prices2 && {
          label: crypto2,
          data: prices2.map((price) => price[1]),
          borderColor: "#61c96f",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
    // setChartData({
    //   labels: prices1.map((price) => convertDate(price[0])),
    //   datasets: [
    //     {
    //       data: prices1.map((price) => price[1]),
    //       borderColor: "#3a80e9",
    //       borderWidth: 1,
    //       fill: true,
    //       tension: 0.25,
    //       backgroundColor: "rgba(58, 128, 233, 0.1)",
    //       pointRadius: 0,

    //     },
    //   ],
    // });
};
