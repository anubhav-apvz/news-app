import Home from "@/components/Home";
import {
  convertDate,
  formatCategory,
  mapCategoryIcons,
} from "@/services/common";
import Endpoints from "@/services/constants";

const fetchFeedData = async (userEmail) => {
  try {
    const newsRes = await (
      await fetch(`${Endpoints.BASE_URL}latest-news`)
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
        next: { tags: ["homeSubscription"] },
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

const HomePage = async () => {
  const userEmail = "prajjwal@kobil.com";
  const feedData = await fetchFeedData(userEmail);
  const userData = await fetchUserData(userEmail);
  return (
    <Home
      feedData={feedData}
      mySubscription={userData ? userData?.mySubscriptionData : []}
      popularCategories={userData ? userData?.popularCategoriesData : []}
      userEmail={userEmail}
    />
  );
};

export default HomePage;
