import React from "react";

const SkeletonCard = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] jus bg-slate-300/50   h-[150px] w-[150px] animate-pulse">
        {/* <img className="size-10" src={item?.image} alt="header" /> */}
        <div className="flex flex-col gap-[4px]">
          <span className="text-title3 font-semiBold text-text-tight">
            {/* {item?.category_name} */}
          </span>
          <span className="text-text-secondary font-normal text-text-7">
            {/* {item?.total_subscribers}{" "} */}
            {/* {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] jus bg-slate-300/50  h-[150px] w-[150px] animate-pulse">
        {/* <img className="size-10" src={item?.image} alt="header" /> */}
        <div className="flex flex-col gap-[4px]">
          <span className="text-title3 font-semiBold text-text-tight">
            {/* {item?.category_name} */}
          </span>
          <span className="text-text-secondary font-normal text-text-7">
            {/* {item?.total_subscribers}{" "} */}
            {/* {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] jus bg-slate-300/50   h-[150px] w-[150px]  animate-pulse">
        {/* <img className="size-10" src={item?.image} alt="header" /> */}
        <div className="flex flex-col gap-[4px]">
          <span className="text-title3 font-semiBold text-text-tight">
            {/* {item?.category_name} */}
          </span>
          <span className="text-text-secondary font-normal text-text-7">
            {/* {item?.total_subscribers}{" "} */}
            {/* {item?.total_subscribers > 1 ? "subscribers" : "subscriber"} */}
          </span>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
