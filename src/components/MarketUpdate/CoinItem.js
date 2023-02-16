import Chart from "react-apexcharts";
import { HiArrowUpRight } from "react-icons/hi2";

import { Button } from "../Shared";

const CoinItem = ({ data, index }) => {
  const options = {
    chart: {
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
          if (data.price_change_percentage_24h < 0) {
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
        <div className="flex items-center gap-x-2 xs:gapx-3">
          <span className="hidden xs:inline font-roboto text-tara-fifth text-sm">{index}</span>
          <img src={data.image} className="h-9 xs:h-10 w-9 xs:w-10" alt={data.name} />
          <span className="capitalize">{data.name}</span>
          <span className="hidden xs:inline border-l border-[#403A3A] pl-3 text-tara-fifth text-xs">
            {data.symbol.toUpperCase()}
          </span>
        </div>
        <Button primary href="/" className={"py-1 px-6 rounded-[10px]"}>
          Trade
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

export default CoinItem;
