import React from "react";

function loading() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* HEADER */}
      <div className="sticky top-0 flex flex-row py-[8px] px-[16px] items-center justify-start z-10 bg-white">
        <img src="/logo.svg" alt="header" />
      </div>

      {/* WELCOME */}
      <div className="flex flex-col mt-[20px] py-[9px] px-[16px]">
        <span className="text-title3 font-semiBold text-title-3">
          Find your topics
        </span>
        <span className="text-text-secondary font-normal text-header-description">
          Updated news from the city of Worms
        </span>
      </div>

      <div className={`flex flex-row items-center justify-between px-[16px]`}>
        <span className="text-title3 font-semiBold text-title-large">
          Latest News
        </span>
        <span className="text-primary font-bold-500 text-title-small">
          See all news
        </span>
      </div>

      {/* This is a NewsCard */}
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
            {/* <div className="rounded-md w-[117px] h-[78px]"></div> */}
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
            {/* <div className="rounded-md w-[117px] h-[78px]"></div> */}
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
            {/* <div className="rounded-md w-[117px] h-[78px]"></div> */}
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
            {/* <div className="rounded-md w-[117px] h-[78px]"></div> */}
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
            {/* <div className="rounded-md w-[117px] h-[78px]"></div> */}
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
            {/* <div className="rounded-md w-[117px] h-[78px]"></div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col py-[16px] bg-bg-secondary gap-[20px]">
        <div className="flex flex-row items-center justify-between mt-[24px] px-[16px]">
          <span className="text-title3 font-semiBold text-title-large">
            My Subscription
          </span>

          <span className="text-primary font-bold-500 text-title-small">
            See all
          </span>
        </div>

        <div className="flex flex-row pl-[16px] gap-[16px] overflow-x-auto">
          <div className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] rounded-lg justify-between">
            <div className="flex flex-col gap-[16px] jus">
              <div className="size-10 w-[50px] h-[50px] animate-pulse bg-slate-300/50"></div>

              <div className="flex flex-col gap-[4px]">
                <span className="text-title3 font-semiBold text-text-tight">
                  {/* {item?.category_name} */}
                </span>
                <span className="text-text-secondary font-normal text-text-7">
                  {/* {item?.total_subscribers}{" "}
                  {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
                </span>
              </div>
            </div>

            {/* <button className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg  border-[1.5px] border-bg-booking-blue xl:self-center  animate-pulse bg-slate-300/50">
              {""}
            </button> */}
          </div>

          <div className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] rounded-lg justify-between">
            <div className="flex flex-col gap-[16px] jus">
              <div className="size-10 w-[50px] h-[50px] animate-pulse bg-slate-300/50"></div>

              <div className="flex flex-col gap-[4px]">
                <span className="text-title3 font-semiBold text-text-tight">
                  {/* {item?.category_name} */}
                </span>
                <span className="text-text-secondary font-normal text-text-7">
                  {/* {item?.total_subscribers}{" "}
                  {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
                </span>
              </div>
            </div>

            {/* <button className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg  border-[1.5px] border-bg-booking-blue xl:self-center  animate-pulse bg-slate-300/50">
              {""}
            </button> */}
          </div>

          <div className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] rounded-lg justify-between">
            <div className="flex flex-col gap-[16px] jus">
              <div className="size-10 w-[50px] h-[50px] animate-pulse bg-slate-300/50"></div>

              <div className="flex flex-col gap-[4px]">
                <span className="text-title3 font-semiBold text-text-tight">
                  {/* {item?.category_name} */}
                </span>
                <span className="text-text-secondary font-normal text-text-7">
                  {/* {item?.total_subscribers}{" "}
                  {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
                </span>
              </div>
            </div>

            {/* <button className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg  border-[1.5px] border-bg-booking-blue xl:self-center  animate-pulse bg-slate-300/50">
              {""}
            </button> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col py-[16px] bg-bg-secondary gap-[20px]">
        <div className="flex flex-row items-center justify-between mt-[24px] px-[16px]">
          <span className="text-title3 font-semiBold text-title-large">
            Popular Subscription
          </span>
          <span className="text-primary font-bold-500 text-title-small">
            See all
          </span>
        </div>

        <div className="flex flex-row pl-[16px] gap-[16px] overflow-x-auto">
          <div className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] rounded-lg justify-between">
            <div className="flex flex-col gap-[16px] jus">
              <div className="size-10 w-[50px] h-[50px] animate-pulse bg-slate-300/50"></div>

              <div className="flex flex-col gap-[4px]">
                <span className="text-title3 font-semiBold text-text-tight">
                  {/* {item?.category_name} */}
                </span>
                <span className="text-text-secondary font-normal text-text-7">
                  {/* {item?.total_subscribers}{" "}
                  {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
                </span>
              </div>
            </div>

            {/* <button className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg  border-[1.5px] border-bg-booking-blue xl:self-center  animate-pulse bg-slate-300/50">
              {""}
            </button> */}
          </div>

          <div className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] rounded-lg justify-between">
            <div className="flex flex-col gap-[16px] jus">
              <div className="size-10 w-[50px] h-[50px] animate-pulse bg-slate-300/50"></div>

              <div className="flex flex-col gap-[4px]">
                <span className="text-title3 font-semiBold text-text-tight">
                  {/* {item?.category_name} */}
                </span>
                <span className="text-text-secondary font-normal text-text-7">
                  {/* {item?.total_subscribers}{" "}
                  {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
                </span>
              </div>
            </div>

            {/* <button className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg  border-[1.5px] border-bg-booking-blue xl:self-center  animate-pulse bg-slate-300/50">
              {""}
            </button> */}
          </div>

          <div className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] rounded-lg justify-between">
            <div className="flex flex-col gap-[16px] jus">
              <div className="size-10 w-[50px] h-[50px] animate-pulse bg-slate-300/50"></div>

              <div className="flex flex-col gap-[4px]">
                <span className="text-title3 font-semiBold text-text-tight">
                  {/* {item?.category_name} */}
                </span>
                <span className="text-text-secondary font-normal text-text-7">
                  {/* {item?.total_subscribers}{" "}
                  {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
                </span>
              </div>
            </div>

            {/* <button className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg  border-[1.5px] border-bg-booking-blue xl:self-center  animate-pulse bg-slate-300/50">
              {""}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading;
