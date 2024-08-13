'use client'

import React from "react";

const Category = ({ filters, onCategoryChange }) => {
  return (
    <>
      {filters.map((item, index) => (
        <div
          key={index}
          onClick={() => handleFilterChange(index)}
          className={`flex flex-row felx-grow py-[4px] px-[14px] whitespace-nowrap font-normal text-title-tight rounded-2xl cursor-pointer ${
            item.isActive
              ? "border-[1px] border-primary bg-custom-blue-100"
              : "text-title3 bg-white"
          }`}
        >
          {item.category_name}
        </div>
      ))}
    </>
  );
};

export default Category;
