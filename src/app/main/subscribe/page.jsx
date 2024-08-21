import Subscribe from "@/components/Subscribe";
import React from "react";
import { cleanObject, mapCategoryIcons } from "@/services/common";
import Endpoints from "@/services/constants";
import { getUserSession } from "@/lib/session";

const fetchData = async (userEmail) => {
  try {
    // const userEmail = "prajjwal@kobil.com";
    const payload = new URLSearchParams({
      page: 1,
      size: 200,
      popular: true,
      user_id: userEmail,
    });
    // const cleanedPayload = cleanObject(payload);

    const popularRes = await (
      await fetch(`${Endpoints.BASE_URL}category-list?${payload}`, {
        next: { tags: ["subscription"], revalidate: 900 },
        cache: 'force-cache'
      })
    ).json();

    const popularData = popularRes?.map((item) => ({
      ...item,
      image: mapCategoryIcons(item?.category_name),
    }));

    return popularData;
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
  let data = [];
  const userEmail = (await getUserDetails("session"))?.userDetails?.email;
  // const userEmail = "temmuz.aslan@kobil.com";
  if (userEmail) {
    data = await fetchData(userEmail);
  }

  return <Subscribe subscriptionData={data} userEmail={userEmail} />;
};

export default page;
