import dynamic from "next/dynamic";
// const NewsCard = dynamic(() => import("../NewsCard"), {
//   ssr: false, // Ensure it only runs on the client-side
// });
// const MySubscription = dynamic(() => import("./MySubscription"), {
//   ssr: false, // Ensure it only runs on the client-side
// });
// const PopularCategories = dynamic(() => import("./PopularCategories"), {
//   ssr: false, // Ensure it only runs on the client-side
// });
import NewsCard from "../NewsCard";
import MySubscription from "./MySubscription";
import PopularCategories from "./PopularCategories";
import BottomPanelWrapper from "./BottomPanelWrapper";

const HomeWrapper = ({
  feedData,
  mySubscription,
  popularCategories,
  userEmail,
}) => {
  return (
    <>
      {/* Latest News */}

      <NewsCard feedData={feedData} isHome={true} />

      <BottomPanelWrapper
        userEmail={userEmail}
        popularCategories={popularCategories}
        mySubscription={mySubscription}
      />
    </>
  );
};

export default HomeWrapper;
