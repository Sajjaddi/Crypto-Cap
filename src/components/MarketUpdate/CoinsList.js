import { CoinItem } from "../MarketUpdate";
import { Button } from "../Shared";

const CoinsList = ({ category, coinsData }) => {
  return (
    <ul className="mt-6 bg-[rgba(255,255,255,0.02] grid gap-y-2 px-2 xs:px-4">
      {coinsData.slice(0, 7).map((i, index) => (
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
    </ul>
  );
};

export default CoinsList;
