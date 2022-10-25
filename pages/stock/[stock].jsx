import { useRouter } from "next/router";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Stock() {
  const router = useRouter();
  const stock = router.query.stock;
  const api_key = process.env.api_key;
  const [data_state, setData] = useState(null);

  useEffect(() => {
    if (stock !== undefined) {
      (async () => {
        const data = await axios.get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo"
        );
        setData(data);
        console.log(data);
      })();
    }
  }, [stock]);

  const options = {
    legend: {
      display: false,
    },
    hover: {
      intersect: false,
    },
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {},
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  const stock_data = [];
  if (data_state !== null) {
    for (let i of Object.keys(data_state.data["Time Series (Daily)"])) {
      stock_data.push(data_state.data["Time Series (Daily)"][i]["4. close"]);
    }
    console.log(stock_data);
  }

  const data = {
    labels: stock_data.map(() => ""),
    datasets: [
      {
        label: stock !== undefined ? stock.toUpperCase() : "",
        data: data_state ? stock_data : [],
        type: "line",
        backgroundColor: "black",
        borderColor: "#5AC53B",
        borderWidth: 2,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointHoverBackgroundColor: "#5AC53B",
        pointHoverBorderColor: "#000000",
        pointHoverBorderWidth: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <div className="w-screen h-screen flex flex-row bg-gray-900 items-center">
      <div className="basis-1/4 h-1/2 bg-white mx-10"></div>
      <div className="basis-2/4 h-1/2 bg-black border-2 border-gray-500">
        <Line data={data} options={options} />
      </div>
      <div className="basis-1/4 h-1/2 bg-white mx-10"></div>
    </div>
  );
}
