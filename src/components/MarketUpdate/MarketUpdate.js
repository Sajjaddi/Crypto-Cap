import { useEffect, useState } from "react";

import { CategoriesList, CoinsList } from "../MarketUpdate";
import { useFetchData } from "../Shared";

const MarketUpdate = () => {
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  console.log("run component top");
  const [isLoading, setIsLoading, coinsData] = useFetchData(
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
  const [searchedCoins, setSearchedCoins] = useState([]);

  useEffect(() => {
    setSearchedCoins(coinsData);
  }, [coinsData]);

  useEffect(() => {
    const timeSearch = setTimeout(() => {
      if (searchValue) {
        let coinsArray = [];
        coinsData.forEach((i) => {
          if (
            coinsData[i.name.toLowerCase().indexOf(searchValue.toLowerCase())]
          ) {
            coinsArray.push(
              coinsData[i.name.toLowerCase().indexOf(searchValue)]
            );
          }
        });
        setSearchedCoins(coinsArray);
      } else if (searchValue === "" && isTouched) {
        setSearchedCoins(coinsData);
      }
    }, 500);
    return () => clearTimeout(timeSearch);
  }, [searchValue]);

  return (
    <>
      <div className="overflow-hidden">
        <CategoriesList
          setIsTouched={setIsTouched}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setCategory={setCategory}
        />
      </div>

      <CoinsList
        isLoading={isLoading}
        coinsData={searchedCoins}
        category={category}
      />
    </>
  );
};

export default MarketUpdate;
