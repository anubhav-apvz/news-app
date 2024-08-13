// import News from "@/components/News";
import { GET } from "@/services/api";
import { cleanObject } from "@/services/common";
import Endpoints from "@/services/constants";
import React from "react";

const fetchData = async () => {
  try {
    const categoryListRes = await GET(
      `${Endpoints.CATEGORY_LIST}`,
      cleanObject({
        page: 1,
        size: 200,
        user_id: "prajjwal@kobil.com",
      })
    );

    console.log(categoryListRes);

    // const latestNewsRes = await GET(`${Endpoints.LATEST_NEWS}`, {
    //   page: 1,
    //   size: 200,
    // });

    // let filterData = [];
    // if (categoryListRes?.status === 200) {
    //   const finalCategoryData = [
    //     {
    //       category_id: 0,
    //       category_name: "All",
    //       total_subscribers: 0,
    //       subscribed: 0,
    //     },
    //     ...categoryListRes?.data,
    //   ];
    //   filterData = finalCategoryData.map((item, index) => {
    //     return { ...item, isActive: index === 0 ? true : false };
    //   });
    //   setFilters(filterData);
    // } else {
    //   setFilters(filterData);
    // }

    // let latestNewsData = [];
    // if (latestNewsRes?.status === 200) {
    //   latestNewsData = latestNewsRes?.data.map((item) => ({
    //     ...item,
    //     category: formatCategory(item?.category),
    //     pubDate: convertDate(item?.pubDate),
    //     image: "culture.png",
    //   }));
    //   // setFeedData(latestNewsData);
    //   // setAllFeedData(latestNewsData);
    // } else {
    //   // setFeedData(latestNewsData);
    //   // setAllFeedData(latestNewsData);
    // }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


const page = async () => {
  const d = await fetchData();
  console.log(d);
  // return <News />;
  return <></>
};

export default page;
