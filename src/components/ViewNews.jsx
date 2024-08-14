"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ViewNews = ({ scrapedData }) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/main/home");
  };
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-row p-[16px] items-center justify-between">
        <img
          className="cursor-pointer"
          src="/chevron-left.svg"
          alt="back"
          onClick={handleGoBack}
        />
        <img className="cursor-pointer" src="/share.svg" alt="share" />
      </div>
      <div className="flex flex-col p-[16px] gap-[16px]">
        <span className="text-title3 font-semiBold text-title-3">
          {scrapedData?.title}
        </span>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row items-center gap-[4px]">
            {/* <span
              className={`self-center py-[2px] px-[8px] rounded-lg text-bg-booking-blue font-bold-500 text-title-5 ${"bg-custom-blue-100"}`}
            >
              {category}
            </span> */}
            <span className="text-text-inactive font-normal text-title-7">
              •
            </span>
            <span className="text-title3 font-semiBold text-title-7">
              By City of Worms
            </span>
            <span className="text-text-inactive font-normal text-title-7">
              •
            </span>
            <span className="text-text-inactive font-normal text-title-7">
              {scrapedData?.date}
            </span>
          </div>

          <span className="text-title3 font-semiBold text-title-7">
            {scrapedData?.description}
          </span>

          <img
            src={scrapedData?.images?.originalQuality}
            className="rounded-md"
            alt="news_image"
          />

          <span className="text-title3 font-normal text-header-description">
            {scrapedData?.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewNews;
