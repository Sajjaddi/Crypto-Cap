import Chart from "react-apexcharts";
import { HiArrowUpRight } from "react-icons/hi2";

import { Button } from "../Shared";

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
          if (data.price_change_percentage_24h_in_currency < 0) {
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
      // get 2 hours past and first 2 hours in 24 hours past also current price
      data: [
        ...data.sparkline_in_7d.price.slice(142, 144),
        ...data.sparkline_in_7d.price.slice(-2),
        data.current_price,
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
        <Button
          href="/"
          className={
            "rounded-full bg-white bg-opacity-[0.05] w-8 h-8 flex items-center justify-center group"
          }
        >
          <HiArrowUpRight className="text-[#B6B6B6] text-lg group-hover:text-tara-second transition" />
        </Button>
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
        <div className="w-1/2 h-16">
          <Chart
            series={series}
            options={options}
            type="line"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </li>
  );
};

export default CurrencyItem;
