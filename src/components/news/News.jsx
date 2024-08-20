import NewsWrapper from "./NewsWrapper";

const News = ({ category, feedData }) => {
  // console.log('in news --> ', feedData);

  return (
    <div className="flex flex-col w-full">
      {/* HEADER */}
      <div className="sticky top-0 flex flex-row py-[15px] px-[16px] items-center justify-center z-10 bg-white">
        <span className="text-title3 font-semiBold text-title-large-1">
          News
        </span>
      </div>

      {/* This is a client wrappe component where user will interact */}
      <NewsWrapper category={category} feedData={feedData}/>
    </div>
  );
};

export default News;
