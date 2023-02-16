import { CurrencyItem } from "../MarketTrend";
import { Skeleton, useFetchData } from "../Shared";

const MarketTrend = () => {
  const [isLoading, setIsLoading, currencyList] = useFetchData(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      vs_currency: "usd",
      sparkline: true,
      per_page: 4,
    }
  );

  let content;

  if (isLoading) {
    content = <Skeleton className={"w-full rounded-[18px] h-40"} times={4} />;
  } else {
    content = currencyList.map((i) => <CurrencyItem key={i.id} data={i} />);
  }

  return (
    <>
      <strong className="text-xl font-medium">Market Trend</strong>
      <ul className="mt-6 grid sm:grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-x-2 xl:gap-x-6">
        {content}
      </ul>
    </>
  );
};

export default MarketTrend;
