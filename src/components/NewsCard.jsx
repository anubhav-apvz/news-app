"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NewsCard = ({ feedData }) => {
  const router = useRouter();

  const handleOnNewsClick = (e) => {
    console.log(e);
    const query = new URLSearchParams({
      link: e,
    }).toString();
    router.push(`/view-news?${query}`);
  };

  return (
    <>
      {feedData && feedData.length > 0 ? (
        feedData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-[12px] items-center"
            onClick={() => {
              handleOnNewsClick(item?.link);
            }}
          >
            <div className="flex flex-col w-[80%] gap-[8px]">
              <span className="text-title3 font-semiBold text-title-tight">
                {item?.title}
              </span>
              <span className="text-text-secondary font-normal text-title-5">
                {item?.description?.slice(0, 60)} ...
              </span>
              <div className="flex flex-wrap items-center gap-[4px]">
                {Array.isArray(item?.category) ? (
                  item?.category?.slice(0, 3)?.map((ele, i) => (
                    <span
                      key={i}
                      className={`py-[3px] px-[6px] rounded-lg text-bg-booking-blue font-bold-500 text-title-5 bg-custom-blue-100`}
                    >
                      {ele}
                    </span>
                  ))
                ) : (
                  <span
                    className={`py-[3px] px-[6px] rounded-lg text-bg-booking-blue font-bold-500 text-title-5 bg-custom-blue-100`}
                  >
                    {item?.category}
                  </span>
                )}
              </div>
              <span className="text-text-inactive font-normal text-title-7">
                {item?.pubDate}
              </span>
            </div>
            <div>
              <img
                className="rounded-md"
                src={item?.image ? item?.image : "/culture.png"}
                alt="placeholder"
                style={{ width: "117px", height: "78px" }}
              />
            </div>
          </div>
        ))
      ) : (
        <span className="text-text-secondary font-normal text-title-5">
          No data Found! Please reload.
        </span>
      )}
    </>
  );
};

export default NewsCard;
