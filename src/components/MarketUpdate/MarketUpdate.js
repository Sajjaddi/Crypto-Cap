import { useEffect, useState } from "react";

import { CategoriesList, CoinsList } from "../MarketUpdate";
import { useFetchData } from "../Shared";

const MarketUpdate = () => {
  const [category, setCategory] = useState("");
  const [isLoading, coinsData, setCoinData] = useFetchData(
    "https://api.coingecko.com/api/v3/coins/markets",
    category
      ? {
          vs_currency: "usd",
          category: category,
        }
      : {
          vs_currency: "usd",
        },
    category
  );

  return (
    <>
      <CategoriesList setCategory={setCategory} />
      <CoinsList coinsData={coinsData} category={category} />
    </>
  );
};

export default MarketUpdate;
