import React, { useEffect, useState } from "react";

import { CoinItem } from "../MarketUpdate";
import { Button, Skeleton } from "../Shared";

const CoinsList = ({ category, coinsData, isLoading, setIsLoading }) => {
  const [isShowMoreCoins, setIsShowMoreCoins] = useState(false);

  const handleMoreCoinsClick = () => {
    setIsLoading(true);
    setIsShowMoreCoins(true);
  };

  useEffect(() => {
    setIsShowMoreCoins(false);
  }, [category]);

  useEffect(() => {
    setIsLoading(false);
  }, [isShowMoreCoins]);

  return (
    <ul
      className={`${
        isShowMoreCoins && "mr-2 xs:mr-4 xs:pr-6 md:mr-6 xl:mr-8"
      } mt-6 grid gap-y-4 lg:gap-y-0 px-2 xs:px-4 md:px-6 lg:px-8 overflow-y-auto max-h-[1350px] xs:max-h-[1450px] sm:max-h-[1500px] md:max-h-[1500px] lg:max-h-[730px] custom-scroller`}
    >
      {isLoading ? (
        <Skeleton
          className={"w-full rounded-[18px] h-40 lg:h-16 lg:rounded-[4px]"}
          times={7}
        />
      ) : (
        <>
          {!coinsData.length && (
            <span className="text-center text-xl p-4 text-tara-second">
              Not Found! - Please search your coin currectly
            </span>
          )}
          {coinsData.length ? (
            <li className="hidden lg:grid bg-[rgba(255,255,255,0.02)] border text-sm border-[rgba(255,255,255,0.05)] lg:items-center lg:grid-cols-12 text-[15px] text-tara-fifth px-6 rounded-t-[4px]">
              <span className="col-start-1 col-end-2 text-left">NO</span>
              <div className="col-start-2 col-end-7 xl:col-end-6 flex items-center justify-start gap-x-4">
                <span>NAME</span>
              </div>
              <span className="col-start-7 col-end-8 xl:col-start-6 xl:col-end-7">
                LAST PRICE
              </span>
              <span className="col-start-9 col-end-10 xl:col-start-8 xl:col-end-9">
                CHANGE
              </span>
              <div className="col-start-10 col-end-12 xl:col-start-9 min-w-fit w-24 h-16 mx-auto items-center flex justify-center">
                MARKET STATS
              </div>
              <span className={"col-start-12 col-end-13"}>Trade</span>
            </li>
          ) : null}
          {coinsData
            ?.slice(0, isShowMoreCoins ? coinsData.length : 7)
            ?.map((i, index) => (
              <CoinItem
                isShowMoreCoins={isShowMoreCoins}
                last={
                  isShowMoreCoins ? coinsData.length === index : index + 1 === 7
                }
                key={i.id}
                data={i}
                index={index + 1}
              />
            ))}
          {!isShowMoreCoins && (
            <Button
              onClick={handleMoreCoinsClick}
              className={
                "text-tara-second border-b border-tara-second w-fit mx-auto my-4 lg:ml-0 lg:mt-8 lg:text-sm"
              }
            >
              See All Coins
            </Button>
          )}
        </>
      )}
    </ul>
  );
};

// memorize for don't change component for every word user type in search bar
const MemorizedCoinsList = React.memo(CoinsList);
export default MemorizedCoinsList;
