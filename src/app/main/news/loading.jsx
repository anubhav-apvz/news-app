import Category from "@/components/news/Category";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col w-full">
      {/* HEADER */}
      <div className="sticky top-0 flex flex-row py-[15px] px-[16px] items-center justify-center z-10 bg-white">
        <span className="text-title3 font-semiBold text-title-large-1">
          News
        </span>
      </div>

      {/* This is a client wrappe component where user will interact */}
      <div className="flex flex-row ml-[16px] my-[16px] gap-[8px] overflow-x-auto pb-[10px] aniimate-pulse">
        {/* Category Filter Herer */}
        <div
          className={`flex flex-row felx-grow py-[4px] px-[14px] whitespace-nowrap font-normal text-title-tight rounded-2xl cursor-pointer`}
        >
          {/* {item.category_name} */}
        </div>
      </div>

      <div className="flex flex-col px-[16px] bg-bg-secondary gap-[12px]">
        <div className={`flex flex-row items-center justify-between`}>
          <span className="text-title3 font-semiBold text-title-large">
            Latest News
          </span>
          <span className="text-primary font-bold-500 text-title-small">
            See all news
          </span>
        </div>

        <div className="flex flex-col p-[16px] bg-white rounded-xl gap-[16px]">
          <div className="flex flex-row gap-[12px] items-center bg-slate-300/50 animate-pulse">
            <div className="flex flex-col w-[80%] gap-[8px]">
              <span className="text-title3 font-semiBold text-title-tight">
                {/* {item?.title} */}
              </span>
              <span className="text-text-secondary font-normal text-title-5">
                {/* {item?.description?.slice(0, 60)} ... */}
              </span>

              <span className="text-text-inactive font-normal text-title-7">
                {/* {item?.pubDate} */}
              </span>
            </div>
            <div>
              <div className="rounded-md w-[117px] h-[78px]"></div>
            </div>
          </div>

          <div className="flex flex-row gap-[12px] items-center bg-slate-300/50 animate-pulse">
            <div className="flex flex-col w-[80%] gap-[8px]">
              <span className="text-title3 font-semiBold text-title-tight">
                {/* {item?.title} */}
              </span>
              <span className="text-text-secondary font-normal text-title-5">
                {/* {item?.description?.slice(0, 60)} ... */}
              </span>

              <span className="text-text-inactive font-normal text-title-7">
                {/* {item?.pubDate} */}
              </span>
            </div>
            <div>
              <div className="rounded-md w-[117px] h-[78px]"></div>
            </div>
          </div>

          <div className="flex flex-row gap-[12px] items-center bg-slate-300/50 animate-pulse">
            <div className="flex flex-col w-[80%] gap-[8px]">
              <span className="text-title3 font-semiBold text-title-tight">
                {/* {item?.title} */}
              </span>
              <span className="text-text-secondary font-normal text-title-5">
                {/* {item?.description?.slice(0, 60)} ... */}
              </span>

              <span className="text-text-inactive font-normal text-title-7">
                {/* {item?.pubDate} */}
              </span>
            </div>
            <div>
              <div className="rounded-md w-[117px] h-[78px]"></div>
            </div>
          </div>

          <div className="flex flex-row gap-[12px] items-center bg-slate-300/50 animate-pulse">
            <div className="flex flex-col w-[80%] gap-[8px]">
              <span className="text-title3 font-semiBold text-title-tight">
                {/* {item?.title} */}
              </span>
              <span className="text-text-secondary font-normal text-title-5">
                {/* {item?.description?.slice(0, 60)} ... */}
              </span>

              <span className="text-text-inactive font-normal text-title-7">
                {/* {item?.pubDate} */}
              </span>
            </div>
            <div>
              <div className="rounded-md w-[117px] h-[78px]"></div>
            </div>
          </div>

          <div className="flex flex-row gap-[12px] items-center bg-slate-300/50 animate-pulse">
            <div className="flex flex-col w-[80%] gap-[8px]">
              <span className="text-title3 font-semiBold text-title-tight">
                {/* {item?.title} */}
              </span>
              <span className="text-text-secondary font-normal text-title-5">
                {/* {item?.description?.slice(0, 60)} ... */}
              </span>

              <span className="text-text-inactive font-normal text-title-7">
                {/* {item?.pubDate} */}
              </span>
            </div>
            <div>
              <div className="rounded-md w-[117px] h-[78px]"></div>
            </div>
          </div>
          <div className="flex flex-row gap-[12px] items-center bg-slate-300/50 animate-pulse">
            <div className="flex flex-col w-[80%] gap-[8px]">
              <span className="text-title3 font-semiBold text-title-tight">
                {/* {item?.title} */}
              </span>
              <span className="text-text-secondary font-normal text-title-5">
                {/* {item?.description?.slice(0, 60)} ... */}
              </span>

              <span className="text-text-inactive font-normal text-title-7">
                {/* {item?.pubDate} */}
              </span>
            </div>
            <div>
              <div className="rounded-md w-[117px] h-[78px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading;
