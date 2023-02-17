import Chart from "react-apexcharts";

import { Button } from "../Shared";

const CoinItem = ({ data, index, last, isShowMoreCoins }) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
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
          if (data?.price_change_percentage_24h < 0) {
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
        ...data?.sparkline_in_7d.price?.slice(144, 146),
        ...data?.sparkline_in_7d.price?.slice(-2),
        data?.current_price,
      ],
    },
  ];

  return (
    <>
      <li className="lg:hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[18px] px-2 xs:px-3 sm:px-5">
        <div className="flex justify-between items-center py-[18px]">
          <div className="flex items-center gap-x-2 xs:gap-x-3">
            <span className="hidden xs:inline font-roboto text-tara-fifth text-sm">
              {index}
            </span>
            <img
              src={data?.image}
              className="h-9 xs:h-10 w-9 xs:w-10"
              alt={data?.name}
            />
            <span className="capitalize sm:text-base text-sm">
              {data?.name}
            </span>
            <span
              className={`${
                isShowMoreCoins && "hidden sm:inline"
              } hidden xs:inline border-l border-[#403A3A] pl-3 text-tara-fifth text-xs`}
            >
              {data?.symbol.toUpperCase()}
            </span>
          </div>
          <Button
            primary
            href="/"
            className={"py-1 px-6 rounded-[10px] text-sm md:text-base"}
          >
            Trade
          </Button>
        </div>
        <div className="border-t border-[#ECF1F0] border-opacity-5 py-[18px] flex items-start">
          <div className="w-1/2 flex flex-col justify-between gap-y-1 h-16">
            <span className="font-roboto sm:text-lg">
              ${data?.current_price?.toLocaleString()}
            </span>
            <span className="font-roboto font-light text-sm text-tara-fifth">
              {data?.price_change_percentage_24h?.toFixed(2)}%
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
      <li
        className={`${
          last && "rounded-b-[4px]"
        } hidden lg:grid bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] lg:items-center lg:grid-cols-12 text-[15px] text-tara-fifth px-6`}
      >
        <span className="font-roboto text-sm col-start-1 col-end-2 text-left">
          {index}
        </span>
        <div className="col-start-2 col-end-7 xl:col-end-6 flex items-center justify-start gap-x-4">
          <img src={data?.image} alt={data?.name} className="h-10 w-10" />
          <span className="capitalize text-sm">{data?.name}</span>
          <span
            className={`${
              isShowMoreCoins && "hidden"
            } border-l border-[#403A3A] pl-3 text-sm`}
          >
            {data?.symbol?.toUpperCase()}
          </span>
        </div>
        <span className="font-roboto col-start-7 col-end-8 xl:col-start-6 xl:col-end-7">
          ${data?.current_price?.toLocaleString()}
        </span>
        <span className="font-roboto col-start-9 col-end-10 xl:col-start-8 xl:col-end-9">
          {data?.price_change_percentage_24h}%
        </span>
        <div className="col-start-10 mx-auto col-end-12 xl:col-start-9 w-24 h-16 flex justify-center">
          <Chart
            series={series}
            options={options}
            type="line"
            width="100%"
            height="100%"
          />
        </div>
        <Button
          primary
          href="/"
          className={"py-1 px-6 rounded-[10px] col-start-12 col-end-13"}
        >
          Trade
        </Button>
      </li>
    </>
  );
};

export default CoinItem;
