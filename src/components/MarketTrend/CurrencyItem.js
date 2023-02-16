// import {
//   CategoryScale,
//   Chart as ChartJS,
//   Legend,
//   LineElement,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";
import { HiArrowUpRight } from "react-icons/hi2";

import { Link } from "../Shared";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const chartOptions = {
//   animations: {
//     radius: {
//       duration: 400,
//       easing: 'linear',
//       loop: (context) => context.active
//     }
//   },
//   hoverRadius: 12,
//   hoverBackgroundColor: 'yellow',
//   interaction: {
//     mode: 'nearest',
//     intersect: false,
//     axis: 'x'
//   },
//   plugins: {
//     tooltip: {
//       enabled: false
//     }
//   }
// }
// const chartPrice = {
//   labels: ["ali", "hossein", "abbas", "sajjad", "bahar"],
//   datasets: [
//     {
//       data: [data.price_change_24h,data.low_24h, data.high_24h, data.current_price],
//       backgroundColor: "#0FAE96",
//     },
//   ],
// };
const CurrencyItem = ({ data }) => {
  const options = {
    chart: {
      opacity: 0,
      // foreColor: 'transparent',
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      tickAmount: undefined,
      crossharis: {
        show: false,
      },
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: [
        function () {
          if (data.price_change_24h > data.current_price) {
            return "#AE0000";
          } else {
            return "#0FAE96";
          }
        },
      ],
      curve: "smooth",
      width: 2,
    },
  };
  const series = [
    {
      name: "coin-trend",
      data: [
        data.price_change_percentage_14d_in_currency,
        data.price_change_percentage_7d_in_currency,
        data.price_change_percentage_24h_in_currency,
        data.price_change_percentage_1h_in_currency,
      ],
    },
  ];

  return (
    <li className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[18px] px-5">
      <div className="flex justify-between items-center py-[18px]">
        <div className="flex items-center gap-x-3">
          <img src={data.image} className="h-10 w-10" alt={data.name} />
          <span>{data.symbol.toUpperCase()}</span>
          <span className="text-tara-seventh bg-tara-sixth font-bold text-[9px] py-1 px-[6px] rounded-[6px]">
            {data.name.toUpperCase()}
          </span>
        </div>
        <Link
          href="/"
          className={
            "rounded-full bg-white bg-opacity-[0.05] w-8 h-8 flex items-center justify-center group"
          }
        >
          <HiArrowUpRight className="text-[#B6B6B6] text-lg group-hover:text-tara-second transition" />
        </Link>
      </div>
      <div className="border-t border-[#ECF1F0] border-opacity-5 py-[18px] flex items-start">
        <div className="w-1/2 flex flex-col justify-between gap-y-1 h-16">
          <span className="font-roboto text-xl">
            ${data.current_price.toLocaleString()}
          </span>
          <span className="font-roboto font-light text-sm text-tara-fifth">
            {data.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
        <div className="z-10 w-1/2 h-16">
          <Chart series={series} options={options} type="line" width="100%" height={'100%'} />
        </div>
      </div>
    </li>
  );
};

export default CurrencyItem;
