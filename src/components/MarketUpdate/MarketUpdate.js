import { useEffect, useState } from "react";

import { CategoriesList, CoinsList } from "../MarketUpdate";
import { useFetchData } from "../Shared";

const MarketUpdate = () => {
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [searchedCoins, setSearchedCoins] = useState([]);

  const [isLoading, setIsLoading, coinsData] = useFetchData(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      vs_currency: "usd",
      category: category ? category : null,
      sparkline: true,
    },
    // dependency for refetch data = category
    category
  );

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setIsTouched(true);
  };

  const handleCategory = (cat) => {
    setIsLoading(true);
    setCategory(cat);
    setSearchValue("");
  };

  useEffect(() => {
    setSearchedCoins(coinsData);
    setIsLoading(false);
  }, [coinsData]);

  useEffect(() => {
    const timeSearch = setTimeout(() => {
      if (searchValue) {
        let coinsArray = [];
        coinsData.forEach((i, index) => {
          if (
            coinsData[i.name.toLowerCase().indexOf(searchValue.toLowerCase())]
          ) {
            coinsArray.push(coinsData[index]);
          }
        });
        setSearchedCoins(coinsArray);
      } else if (searchValue === "" && isTouched) {
        // when user clear search bar => list all coins again
        setSearchedCoins(coinsData);
      }

      // every 0.5s user do not type any words => change list (+performance)
    }, 500);
    return () => clearTimeout(timeSearch);
  }, [searchValue]);

  return (
    <>
      <div className="overflow-hidden">
        <CategoriesList
          searchValue={searchValue}
          handleCategory={handleCategory}
          handleSearch={handleSearch}
          setCategory={setCategory}
        />
      </div>
      <CoinsList
        category={category}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        coinsData={searchedCoins}
      />
    </>
  );
};

export default MarketUpdate;
