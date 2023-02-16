import React from "react";

import { CoinItem } from "../MarketUpdate";
import { Button, Skeleton } from "../Shared";

const CoinsList = ({ coinsData, isLoading }) => {
  return (
    <ul className="mt-6 bg-[rgba(255,255,255,0.02] grid gap-y-2 px-2 xs:px-4">
      {isLoading ? (
        <Skeleton className={"w-full rounded-[18px] h-40"} times={4} />
      ) : (
        <>
          {!coinsData.length && <strong>Not Found!</strong>}
          {coinsData &&
            coinsData
              .slice(0, 7)
              .map((i, index) => (
                <CoinItem key={i.id} data={i} index={index + 1} />
              ))}
          <Button
            href="/"
            className={
              "text-tara-second border-b border-tara-second w-fit mx-auto my-4"
            }
          >
            See All Coins
          </Button>
        </>
      )}
    </ul>
  );
};
const MemorizedCoinsList = React.memo(CoinsList);
export default MemorizedCoinsList;
