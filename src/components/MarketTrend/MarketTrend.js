import axios from "axios";
import { useEffect, useState } from "react";

import { CurrencyItem } from "../MarketTrend";

const MarketTrend = () => {
  const [currencyList, setCurrencyList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          per_page: 4,
          price_change_percentage: '1h,24h,7d,14d'
        },
      }
    );
    const data = await response.data;

    setCurrencyList(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <span className="text-xl">Market Trend</span>
      <ul className="mt-6 flex flex-col gap-y-6">
        {currencyList.map((i) => (
          <CurrencyItem key={i.id} data={i} />
        ))}
      </ul>
    </>
  );
};

export default MarketTrend;
