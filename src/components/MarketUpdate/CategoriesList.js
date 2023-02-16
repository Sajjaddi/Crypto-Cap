import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { CategoryItem } from "../MarketUpdate";
import { Skeleton, useFetchData } from "../Shared";

const CategoriesList = ({
  setCategory,
  setSearchValue,
  searchValue,
  setIsTouched,
}) => {
  const [isShowMoreCategories, setIsShowMoreCategories] = useState(false);
  const [isLoading, _, categories] = useFetchData(
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
      <span className="px-2 xs:px-4 md:px-6 lg:px-8 text-2xl font-medium">
        Market Update
      </span>
      <div className="mt-10">
        <span className="px-2 xs:px-4 md:px-6 lg:px-8 text-sm text-tara-fifth">
          Cryptocurrency Categories
        </span>
        {isLoading ? (
          <Skeleton
            className={
              "w-full rounded-[18px] h-10 mt-6 mx-2 xs:mx-4 lg:mx-8 xl:w-auto"
            }
            times={1}
          />
        ) : (
          <div className="xl:flex xl:justify-between xl:items-start xl:mt-6">
            <div className="xl:hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1.2}
                className="mt-6 px-2 xs:px-4 md:px-6 lg:px-8"
                breakpoints={{
                  370: {
                    slidesPerView: 1.6,
                  },
                  500: {
                    slidesPerView: 2.0,
                  },
                  700: {
                    slidesPerView: 2.5,
                  },
                  900: {
                    slidesPerView: 3.8,
                  },
                }}
              >
                <SwiperSlide>
                  <div
                    className={
                      "bg-white flex cursor-pointer items-center text-tara-fourth py-[10px] font-bold px-3 rounded-[6px] w-full hover:bg-tara-secondBrightnessHero transition hover:text-white"
                    }
                    onClick={() => setCategory("")}
                  >
                    Popular
                  </div>
                </SwiperSlide>
                {categories.map((i) => (
                  <SwiperSlide key={i.id}>
                    <CategoryItem onClick={handleCategory} data={i} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-3/4 xl:flex xl:ml-8 xl:px-0 xl:pb-2 xl:overflow-x-auto hidden mt-6 lg:px-8 gap-x-2 xl:mt-0 custom-scroller xl:mr-10">
              <div
                className={
                  "bg-white flex cursor-pointer w-auto items-center text-tara-fourth py-[10px] font-bold px-3 rounded-[6px] text-sm hover:bg-tara-secondBrightnessHero transition hover:text-white h-fit"
                }
                onClick={() => setCategory("")}
              >
                Popular
              </div>
              {categories.slice(0, isShowMoreCategories ? -1 : 5).map((i) => (
                <div key={i.id} className="min-w-fit group">
                  <CategoryItem onClick={handleCategory} data={i} />
                </div>
              ))}
              <div
                onClick={() => setIsShowMoreCategories(true)}
                className={`${
                  isShowMoreCategories && "hidden"
                } py-[10px] px-3 text-sm h-fit min-w-fit cursor-pointer text-fifth bg-[rgba(255,255,255,0.05)] rounded-[6px] border border-[rgba(255,255,255,0.05)] transition group-hover:bg-tara-fourth`}
                secondary
              >
                See All{" "}
                <span className="font-roboto">{categories.length - 5}</span> +
              </div>
            </div>
            <div className="mt-4 xl:ml-0 xl:mt-0 xl:h-10 mx-2 xs:mx-4 lg:mx-8 relative bg-[#160C24] border border-[rgba(255,255,255,0.1)] rounded-md">
              <BiSearch className="text-tara-fifth text-2xl absolute left-[10px] top-1/2 translate-y-[-50%]" />
              <input
                value={searchValue}
                onChange={handleSeach}
                className="bg-transparent text-tara-fifth pl-10 w-full h-full p-[10px] lg:py-3 focus:border-none focus:outline-tara-second"
                type={"text"}
                placeholder="Search Coin"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const MemorizedCategoriesList = React.memo(CategoriesList);
export default MemorizedCategoriesList;
