import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";  // important for chart to work
import { convertNumbers } from "../../../functions/convertNumbers";

const LineChart = ({ chartData, priceType, multiAxis }) => {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (priceType == "total_volumes"){ 
              return convertNumbers(value);
            }else if(priceType == "market_caps") {
              return "$" + convertNumbers(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
      crypto2: multiAxis && {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (priceType == "total_volumes"){ 
              return convertNumbers(value);
            }else if(priceType == "market_caps") {
              return "$" + convertNumbers(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },

    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
