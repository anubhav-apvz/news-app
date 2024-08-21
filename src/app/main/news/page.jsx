import News from "@/components/news/News";
import { getUserSession } from "@/lib/session";
import { convertDate, formatCategory } from "@/services/common";
import Endpoints from "@/services/constants";
import React from "react";

const fetchData = async (userEmail) => {
  try {
    const categoryParams = new URLSearchParams({
      page: 1,
      size: 200,
      user_id: userEmail,
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
      pubDate: convertDate(item?.pubDate),
    }));

    return [filterData, latestNewsData];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getUserDetails = async (key) => {
  try {
    let data = await getUserSession(key);
    return data;
  } catch (e) {
    return null;
  }
};

const page = async () => {
  const userEmail = (await getUserDetails("session"))?.userDetails?.email;
  // const userEmail = "temmuz.aslan@kobil.com";
  const data = await fetchData(userEmail);

  return <News category={data[0]} feedData={data[1]} />;
};

export default page;
