"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ViewNews = ({ title, date, description, text, image }) => {
  const router = useRouter();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const handleGoBack = () => {
    router.push("/main/home");
  };

  const handleImageLoad = () => {
    setIsImageLoading(false); // Set loading state to false once the image is loaded
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
        {/* <img className="cursor-pointer" src="/share.svg" alt="share" /> */}
      </div>
      <div className="flex flex-col p-[16px] gap-[16px]">
        <span className="text-title3 font-semiBold text-title-3">{title}</span>
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
              {date}
            </span>
          </div>

          <span className="text-title3 font-semiBold text-title-7">
            {description}
          </span>

          <div className="relative w-[350x] h-[260px]">
            {isImageLoading && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded-md" />
            )}

            <Image
              src={image}
              alt="news_image"
              className={`rounded-md ${
                isImageLoading ? "opacity-0" : "opacity-100"
              }`}
              width={375}
              height={260}
              onLoad={handleImageLoad}
            />
          </div>

          <span className="text-title3 font-normal text-header-description">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewNews;
