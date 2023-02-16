import { CurrencyItem } from "../MarketTrend";
import { useFetchData } from "../Shared";

const MarketTrend = () => {
  const [isLoading, currencyList] = useFetchData(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      vs_currency: "usd",
      sparkline: true,
      per_page: 4,
      price_change_percentage: "1h,24h,7d,14d",
    }
  );

  return (
    <>
      <strong className="text-2xl font-medium">Market Trend</strong>
      <ul className="mt-6 flex flex-col gap-y-6">
        {currencyList.map((i) => (
          <CurrencyItem key={i.id} data={i} />
        ))}
      </ul>
    </>
  );
};

export default MarketTrend;
