import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-row p-[16px] items-center justify-between">
        <Image
          className="cursor-pointer"
          src="/chevron-left.svg"
          alt="back"
          width={24}
          height={24}
        />
        {/* <img className="cursor-pointer" src="/share.svg" alt="share" /> */}
      </div>
      <div className="flex flex-col p-[16px] gap-[16px] ">
        <span className="text-title3 font-semiBold text-title-3 animate-pulse bg-slate-300/50 w-full h-[40px]">
          {/* {scrapedData?.title} */}
          {""}
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
            <span className="text-text-inactive font-normal text-title-7 animation-pulse w-[40px] h-[15px] bg-slate-300/50">
              {/* {scrapedData?.date} */}
              {""}
            </span>
          </div>

          <span className="text-title3 font-semiBold text-title-7 bg-slate-300/50 h-[30px] w-[100%] animation-pulse">
            {/* {scrapedData?.description} */}
            {""}
          </span>

          <div className="rounded-md bg-slate-300/50 animate-pulse w-[100%] h-[272px]"></div>

          <span className="text-title3 font-normal text-header-description  bg-slate-300/50 h-[300px] w-[100%] animation-pulse">
            {/* {scrapedData?.text} */}
            {""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
