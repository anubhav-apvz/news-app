import React from "react";

function loading() {
  const filters = [
    { id: 0, name: "Explore", isActive: true },
    { id: 1, name: "My subscription", isActive: false },
    { id: 2, name: "Popular", isActive: false },
    { id: 3, name: "New", isActive: false },
  ];
  return (
    <div className="flex flex-col w-full">
      {/* HEADER */}
      <div className="sticky top-0 flex flex-row py-[8px] px-[16px] h-[56px] items-center justify-center z-10 bg-white">
        <span className="text-title3 font-semiBold text-title-large-1">
          Subscribe Topics
        </span>
      </div>

      <div className="flex flex-row ml-[16px] mt-[16px] gap-[8px] overflow-x-auto pb-[10px]">
        {filters.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row felx-grow py-[4px] px-[14px] whitespace-nowrap font-normal text-title-tight rounded-2xl cursor-pointer ${
              item.isActive
                ? "border-[1px] border-primary bg-custom-blue-100"
                : "text-title3 bg-white"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="flex flex-col px-[16px] mb-[10px] justify-between gap-6">
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
        <div className="animate-pulse bg-white h-[70px] w-full rounded-xl"></div>
      </div>
    </div>
  );
}

export default loading;
