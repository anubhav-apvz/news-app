import Home from "@/components/Home";
import { convertDate, formatCategory } from "@/services/common";
import Endpoints from "@/services/constants";

const fetchData = async () => {
  try {
    const newsRes = await (
      await fetch(`${Endpoints.BASE_URL}latest-news`)
    ).json();

    let latestNewsData = newsRes?.map((item) => ({
      ...item,
      category: formatCategory(item?.category),
      pubDate: convertDate(item?.pubDate),
      image: "culture.png",
    }));
    return latestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const HomePage = async () => {
  const data = await fetchData();
  return <Home feedData={data}/>;
  // return <></>
};

export default HomePage;
