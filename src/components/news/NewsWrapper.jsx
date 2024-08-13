'use client'

import React, { useEffect, useState } from "react";
import Category from "./Category";
import NewsCard from "../NewsCard";

const NewsWrapper = ({ category, feedData }) => {
  const [cat, setCat] = useState(category);
  const [filteredFeedData, setFilteredFeedData] = useState(feedData);

  const filterFeedOnCategoryChange = (filter) => {
    if (filter?.category_name === "All") {
      setFilteredFeedData(feedData);
      return;
    }

    let filteredData = feedData?.filter((item) => {
      if (Array.isArray(item?.category)) {
        const isPresent = item?.category.some(
          (ele) => ele.toLowerCase() === filter?.category_name.toLowerCase()
        );
        if (isPresent) {
          return item;
        }
      } else {
        if (item?.category === filter?.category_name) {
          return item;
        }
      }
    });
    setFilteredFeedData(filteredData);
  }

  const handleCategoryChange = (index) => {
    console.log(index);
    setCat((prev) =>
      prev.map((filter, i) => ({
        ...filter,
        isActive: i === index,
      }))
    );
    filterFeedOnCategoryChange(cat[index]); 
  }

  useEffect(() => {}, [cat])

  return (
    <>
      {/* Filters */}
      <div className="flex flex-row ml-[16px] my-[16px] gap-[8px] overflow-x-auto pb-[10px]">
        {/* Category Filter Herer */}
        <Category filters={cat} onCategoryChange={handleCategoryChange}/>
      </div>

      {/* Latest News */}
      <div className="flex flex-col px-[16px] bg-bg-secondary gap-[12px]">
        <div className="flex flex-row items-center justify-between">
          <span className="text-title3 font-semiBold text-title-large">
            Latest News
          </span>
        </div>

        {/* News Cards */}
        <div className="flex flex-col p-[16px] bg-white rounded-xl gap-[16px]">
          <NewsCard feedData={filteredFeedData} />
        </div>
      </div>
    </>
  );
};

export default NewsWrapper;
