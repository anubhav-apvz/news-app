import News from "@/components/news/News";
import { convertDate, formatCategory } from "@/services/common";
import Endpoints from "@/services/constants";
import React from "react";

const fetchData = async () => {
  try {
    const categoryParams = new URLSearchParams({
      page: 1,
      size: 200,
      user_id: "prajjwal@kobil.com",
    });

    const newsfeedParams = new URLSearchParams({
      page: 1,
      size: 200,
    });

    const categoryRes = await (
      await fetch(`${Endpoints.BASE_URL}category-list?${categoryParams}`, {
        next: { revalidate: 900 },
      })
    ).json();

    const newsRes = await (
      await fetch(`${Endpoints.BASE_URL}latest-news?${newsfeedParams}`, {
        next: { revalidate: 900 },
      })
    ).json();

    const finalCategoryData = [
      {
        category_id: 0,
        category_name: "All",
        total_subscribers: 0,
        subscribed: 0,
      },
      ...categoryRes,
    ];
    let filterData = finalCategoryData.map((item, index) => {
      return { ...item, isActive: index === 0 ? true : false };
    });

    let latestNewsData = newsRes?.map((item) => ({
      ...item,
      category: formatCategory(item?.category),
      pubDate: convertDate(item?.pubDate)
    }));

    return [filterData, latestNewsData];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const page = async () => {
  const data = await fetchData();
  return <News category={data[0]} feedData={data[1]} />;
};

export default page;
