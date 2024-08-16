"use client";

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
  };

  const handleCategoryChange = (index) => {
    setCat((prev) =>
      prev.map((filter, i) => ({
        ...filter,
        isActive: i === index,
      }))
    );
    filterFeedOnCategoryChange(cat[index]);
  };

  useEffect(() => {}, [cat]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-row ml-[16px] my-[16px] gap-[8px] overflow-x-auto pb-[10px]">
        {/* Category Filter Herer */}
        <Category filters={cat} onCategoryChange={handleCategoryChange} />
      </div>

      {/* Latest News */}

      <NewsCard feedData={filteredFeedData} />
    </>
  );
};

export default NewsWrapper;
