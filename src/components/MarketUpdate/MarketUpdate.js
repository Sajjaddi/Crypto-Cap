import { useEffect, useState } from "react";

import { CategoriesList, CoinsList } from "../MarketUpdate";
import { useFetchData } from "../Shared";

const MarketUpdate = () => {
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, coinsData] = useFetchData(
    "https://api.coingecko.com/api/v3/coins/markets",
    category
      ? {
          vs_currency: "usd",
          category: category,
          sparkline: true,
        }
      : {
          vs_currency: "usd",
          sparkline: true,
        },
    category
  );
  const [searchedCoin, setSearchedCoin] = useState(coinsData);

  useEffect(() => {
    if (searchValue) {
      let coinsArray = [];
      coinsData.forEach((i) => {
        if (coinsData[i.name.toLowerCase().indexOf(searchValue)]) {
          coinsArray.push(coinsData[i.name.toLowerCase().indexOf(searchValue)]);
        }
      });
      setSearchedCoin(coinsArray);
    } else if (searchValue === "") {
      setSearchedCoin([]);
    }
  }, [searchValue]);

  return (
    <>
      <CategoriesList
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setCategory={setCategory}
      />
      <CoinsList coinsData={coinsData} category={category} />
    </>
  );
};

export default MarketUpdate;
