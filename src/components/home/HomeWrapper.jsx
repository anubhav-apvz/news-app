import React from "react";
import NewsCard from "../NewsCard";
import MySubscription from "./MySubscription";
import PopularCategories from "./PopularCategories";

const HomeWrapper = ({feedData}) => {
  return (
    <>
      {/* Latest News */}
      <div className="flex flex-col px-[16px] bg-bg-secondary gap-[12px]">
        <div className="flex flex-row items-center justify-between mt-[24px]">
          <span className="text-title3 font-semiBold text-title-large">
            Latest News
          </span>
          <span className="text-primary font-bold-500 text-title-small">
            See all news
          </span>
        </div>
        <div className="flex flex-col p-[16px] bg-white rounded-xl gap-[16px]">
          <NewsCard feedData={feedData}/>
        </div>
      </div>

      <MySubscription />

      <PopularCategories />
    </>
  );
};

export default HomeWrapper;
