import Subscribe from "@/components/Subscribe";
import React from "react";
import { cleanObject, mapCategoryIcons } from "@/services/common";
import Endpoints from "@/services/constants";

const fetchData = async () => {
  try {
    const userEmail = "prajjwal@kobil.com";
    const payload = new URLSearchParams({
      page: 1,
      size: 200,
      popular: true,
      user_id: userEmail,
    });
    // const cleanedPayload = cleanObject(payload);

    const popularRes = await (
      await fetch(`${Endpoints.BASE_URL}category-list?${payload}`, {
        next: { tags: ["subscription"] },
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

const page = async () => {
  const data = await fetchData();
  return (
    <Subscribe subscriptionData={data} />
  );
};

export default page;
