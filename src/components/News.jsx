import React, { useEffect, useState } from "react";
import {
  cleanObject,
  convertDate,
  formatCategory,
} from "@/services/common";
import { GET } from "@/services/api";
import Endpoints from "@/services/constants";

const News = () => {
  // const navigate = useNavigate();
  const [feedData, setFeedData] = useState([]);
  const [allFeedData, setAllFeedData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const userEmail = JSON.parse(localStorage.getItem("userEmail"));
  const userEmail = "prajjwal@kobil.com";

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    // setLoading(true);
    const fetchData = async () => {
      try {
        const categoryListRes = await GET(
          `${Endpoints.CATEGORY_LIST}`,
          cleanObject({
            page: 1,
            size: 200,
            user_id: userEmail,
          })
        );

        const latestNewsRes = await GET(`${Endpoints.LATEST_NEWS}`, {
          page: 1,
          size: 200,
        });

        let filterData = [];
        if (categoryListRes?.status === 200) {
          const finalCategoryData = [{category_id: 0, category_name: 'All', total_subscribers: 0, subscribed: 0}, ...categoryListRes?.data]
          filterData = finalCategoryData.map((item, index) => {
            return { ...item, isActive: index === 0 ? true : false };
          });
          setFilters(filterData);
        } else {
          setFilters(filterData);
        }

        let latestNewsData = [];
        if (latestNewsRes?.status === 200) {
          latestNewsData = latestNewsRes?.data.map((item) => ({
            ...item,
            category: formatCategory(item?.category),
            pubDate: convertDate(item?.pubDate),
            image: "culture.png",
          }));
          setFeedData(latestNewsData);
          setAllFeedData(latestNewsData);
        } else {
          setFeedData(latestNewsData);
          setAllFeedData(latestNewsData);
        }
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const filterNewsOnCategoryChange = (filter) => {
    if (filter?.category_name === "All") {
      setFeedData(allFeedData);
      return;
    }

    let filteredData = allFeedData?.filter((item) => {
      if (Array.isArray(item?.category)) {
        const isPresent = item?.category.some(
          (ele) => ele.toLowerCase() === filter?.category_name.toLowerCase()
        );
        if (isPresent) {
          return item;
        }
      } else {
        if (item?.category === filter?.category_name) {
          return item;
        }
      }
    });
    setFeedData(filteredData);
  }

  const handleFilterChange = (index) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) => ({
        ...filter,
        isActive: i === index,
      }))
    );
    filterNewsOnCategoryChange(filters[index]);
  };

  const handleNavigation = (link) => {
    navigate("/view-news", { state: { data: link } });
  };

  return (
    <div className="flex flex-col w-full">
      {/* HEADER */}
      <div className="flex flex-row py-[15px] px-[16px] items-center justify-center bg-white">
        <span className="text-title3 font-semiBold text-title-large-1">
          News
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-row ml-[16px] my-[16px] gap-[8px] overflow-x-auto pb-[10px]">
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
          {feedData && feedData.length > 0 ? (
            feedData?.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-[12px] items-center"
                onClick={() => {
                  handleNavigation(item?.link);
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
                    src={item?.image}
                    alt="placeholder"
                  />
                </div>
              </div>
            ))
          ) : (
            <span className="text-text-secondary font-normal text-title-5">
              No data Found! Please reload.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
