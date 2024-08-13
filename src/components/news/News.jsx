
import Category from "./Category";
import NewsCard from "../NewsCard";
import ClientWrapper from "./ClientWrapper";

const News = ({ category, feedData }) => {
  // console.log('in news --> ', feedData);

  return (
    <div className="flex flex-col w-full">
      {/* HEADER */}
      <div className="flex flex-row py-[15px] px-[16px] items-center justify-center bg-white">
        <span className="text-title3 font-semiBold text-title-large-1">
          News
        </span>
      </div>

      {/* This is a client wrappe component where user will interact */}
      <ClientWrapper category={category} feedData={feedData} />
    </div>
  );
};

export default News;
