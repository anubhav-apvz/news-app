import NewsCard from "../NewsCard";
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
