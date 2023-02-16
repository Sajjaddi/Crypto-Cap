import React, { useState } from "react";

import { CoinItem } from "../MarketUpdate";
import { Button, Skeleton } from "../Shared";

const CoinsList = ({ coinsData, isLoading }) => {
  const [isShowMoreCoins, setIsShowMoreCoins] = useState(false);

  return (
    <ul className={`${isShowMoreCoins && 'mr-10'} mt-6 grid gap-y-2 lg:gap-y-0 px-2 xs:px-4 md:px-6 lg:px-8 overflow-y-auto xl:h-[730px] custom-scroller`}>
      {isLoading ? (
        <Skeleton className={"w-full rounded-[18px] h-40"} times={4} />
      ) : (
        <>
          {!coinsData.length && (
            <span className="text-center text-lg">Not Found!</span>
          )}
          {coinsData.length ? (
            <li className="hidden lg:grid bg-[rgba(255,255,255,0.02)] border text-sm border-[rgba(255,255,255,0.05)] lg:items-center lg:grid-cols-12 text-[15px] text-tara-fifth px-6 rounded-t-[4px]">
              <span className="col-start-1 col-end-2 text-left">NO</span>
              <div className="col-start-2 col-end-7 flex items-center justify-start gap-x-4">
                <span>NAME</span>
              </div>
              <span className="col-start-7 col-end-8">LAST PRICE</span>
              <span className="col-start-9 col-end-10">CHANGE</span>
              <div className="col-start-10 col-end-12 w-24 h-16 mx-auto items-center flex justify-center">
                MARKET STATS
              </div>
              <span className={"col-start-12 col-end-13"}>Trade</span>
            </li>
          ) : null}
          {coinsData
            ?.slice(0, isShowMoreCoins ? coinsData.length : 7)
            ?.map((i, index) => (
              <CoinItem
                last={coinsData.length === index}
                key={i.id}
                data={i}
                index={index + 1}
              />
            ))}
          {!isShowMoreCoins && (
            <Button
              onClick={() => setIsShowMoreCoins(true)}
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
const MemorizedCoinsList = React.memo(CoinsList);
export default MemorizedCoinsList;
