"use client";
import React, { useState } from "react";
import PopularCategories from "./PopularCategories";
import MySubscription from "./MySubscription";

const BottomPanelWrapper = ({
  mySubscription,
  userEmail,
  popularCategories,
}) => {
  const [revalidate, setRevalidate] = useState(false);
  return (
    <>
      <MySubscription
        mySubscriptionData={mySubscription}
        userEmail={userEmail}
        revalidate={revalidate}
        setRevalidate={setRevalidate}
      />

      <PopularCategories
        popularCategoriesData={popularCategories}
        userEmail={userEmail}
        revalidate={revalidate}
        setRevalidate={setRevalidate}
      />
    </>
  );
};

export default BottomPanelWrapper;
