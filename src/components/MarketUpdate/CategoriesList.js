import React from "react";
import { BiSearch } from "react-icons/bi";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { CategoryItem } from "../MarketUpdate";
import { Button } from "../Shared";
import { Skeleton, useFetchData } from "../Shared";

const CategoriesList = ({
  setCategory,
  setSearchValue,
  searchValue,
  setIsTouched,
}) => {
  const [isLoading, categories] = useFetchData(
    "https://api.coingecko.com/api/v3/coins/categories"
  );

  const handleSeach = (e) => {
    setSearchValue(e.target.value);
    setIsTouched(true);
  };

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <>
      <span className="px-2 xs:px-4 text-2xl font-medium">Market Update</span>
      <div className="mt-10">
        <span className="px-2 xs:px-4 text-sm text-tara-fifth">
          Cryptocurrency Categories
        </span>
        {isLoading ? (
          <Skeleton
            className={"w-full rounded-[18px] h-10 mt-6 mx-2 xs:mx-4"}
            times={1}
          />
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={1.2}
            loop={false}
            className="mt-6 px-2 xs:px-4 h-fit"
            breakpoints={{
              370: {
                slidesPerView: 1.6,
              },
            }}
          >
            <SwiperSlide>
              <Button
                className={
                  "bg-white text-tara-fourth w-full py-[10px] font-bold px-3 rounded-[6px]"
                }
                onClick={() => handleCategory("")}
              >
                Popular
              </Button>
            </SwiperSlide>
            {categories.map((i) => (
              <SwiperSlide key={i.id} className="w-fit h-fit">
                <CategoryItem onClick={handleCategory} data={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="mx-2 xs:mx-4 relative bg-[#160C24] border border-[rgba(255,255,255,0.1)] rounded-md">
          <BiSearch className="text-tara-fifth text-2xl absolute left-[10px] top-1/2 translate-y-[-50%]" />
          <input
            value={searchValue}
            onChange={handleSeach}
            className="bg-transparent text-tara-fifth pl-10 w-full h-full p-[10px] focus:border-none focus:outline-tara-second"
            type={"text"}
            placeholder="Search Coin"
          />
        </div>
      </div>
    </>
  );
};

const MemorizedCategoriesList = React.memo(CategoriesList);
export default MemorizedCategoriesList;
