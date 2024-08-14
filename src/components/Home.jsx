import HomeWrapper from "./home/HomeWrapper";

const Home = ({ feedData, mySubscription, popularCategories, userEmail }) => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* HEADER */}
      <div className="flex flex-row py-[8px] px-[16px] items-center justify-start">
        <img src="/logo.svg" alt="header" />
      </div>

      {/* WELCOME */}
      <div className="flex flex-col mt-[20px] py-[9px] px-[16px]">
        <span className="text-title3 font-semiBold text-title-3">
          Find your topics
        </span>
        <span className="text-text-secondary font-normal text-header-description">
          Updated news from the city of Worms
        </span>
      </div>

      {/* This is a Home Wrapper */}
      <HomeWrapper
        feedData={feedData}
        mySubscription={mySubscription}
        popularCategories={popularCategories}
        userEmail={userEmail}
      />
    </div>
  );
};

export default Home;
