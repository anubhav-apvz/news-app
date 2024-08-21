import Home from "@/components/Home";
import SetSession from "@/components/SetSession";
import { getUserSession } from "@/lib/session";
import {
  convertDate,
  formatCategory,
  mapCategoryIcons,
} from "@/services/common";
import Endpoints from "@/services/constants";

const fetchFeedData = async () => {
  try {
    const newsRes = await (
      await fetch(`${Endpoints.BASE_URL}latest-news`, {
        cache: "force-cache",
      })
    ).json();

    let latestNewsData = newsRes?.map((item) => ({
      ...item,
      category: formatCategory(item?.category),
      pubDate: convertDate(item?.pubDate),
    }));

    return latestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchUserData = async (userEmail) => {
  try {
    const categoryParams = new URLSearchParams({
      page: 1,
      size: 200,
      subscribe: true,
      user_id: userEmail,
    });

    const mySubscriptionRes = await (
      await fetch(`${Endpoints.BASE_URL}category-list?${categoryParams}`, {
        next: { tags: ["homeSubscription"]},
      })
    ).json();

    let mySubscriptionData = mySubscriptionRes?.map((item) => ({
      ...item,
      image: mapCategoryIcons(item?.category_name),
    }));

    const popularCategoryParams = new URLSearchParams({
      page: 1,
      size: 200,
      popular: true,
      user_id: userEmail,
    });

    const popularRes = await (
      await fetch(
        `${Endpoints.BASE_URL}category-list?${popularCategoryParams}`,
        {
          next: { tags: ["homePopular"] },
        }
      )
    ).json();

    let popularCategoriesData = popularRes?.map((item) => ({
      ...item,
      image: mapCategoryIcons(item?.category_name),
    }));

    return { mySubscriptionData, popularCategoriesData };
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

const HomePage = async ({ searchParams }) => {
  const userEmail = (await getUserDetails("session"))?.userDetails?.email;
  // const userEmail = "temmuz.aslan@kobil.com";
  const feedData = await fetchFeedData();
  const userData = await fetchUserData(userEmail);
  return (
    <>
      {!userEmail && <SetSession userParams={searchParams} />}
      <Home
        feedData={feedData}
        mySubscription={userData ? userData?.mySubscriptionData : []}
        popularCategories={userData ? userData?.popularCategoriesData : []}
        userEmail={userEmail}
      />
    </>
  );
};

export default HomePage;
