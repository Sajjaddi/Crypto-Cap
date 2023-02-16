import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { CategoryItem } from "../MarketUpdate";
import { Button } from "../Shared";
import { useFetchData } from "../Shared";

const CategoriesList = ({ setCategory }) => {
  const [isLoading, categories] = useFetchData(
    "https://api.coingecko.com/api/v3/coins/categories"
  );

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
        <Swiper
          spaceBetween={10}
          slidesPerView={1.6}
          loop={false}
          className="mt-6 px-2 xs:px-4"
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
            <SwiperSlide key={i.id} className="w-fit">
              <CategoryItem onClick={handleCategory} data={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CategoriesList;
