import React from "react";
import NewsCard from "../NewsCard";
import MySubscription from "./MySubscription";
import PopularCategories from "./PopularCategories";

const HomeWrapper = ({
  feedData,
  mySubscription,
  popularCategories,
  userEmail,
}) => {
  return (
    <>
      {/* Latest News */}
      <NewsCard feedData={feedData} isHome={true}/>

      <MySubscription
        mySubscriptionData={mySubscription}
        userEmail={userEmail}
      />

      <PopularCategories
        popularCategoriesData={popularCategories}
        userEmail={userEmail}
      />
    </>
  );
};

export default HomeWrapper;
