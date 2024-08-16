'use client'

import React, { useEffect, useState } from "react";
import Category from "./Category";
import NewsCard from "../NewsCard";

const ClientWrapper = ({ category, feedData }) => {
  const handleCategoryChange = (e) => {
    
  }

  return (
    <>
      {/* Filters */}
      <div className="flex flex-row ml-[16px] my-[16px] gap-[8px] overflow-x-auto pb-[10px]">
        {/* Category Filter Herer */}
        <Category filters={category} onCategoryChange={handleCategoryChange}/>
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
          <NewsCard feedData={feedData} />
        </div>
      </div>
    </>
  );
};

export default ClientWrapper;
