import ViewNews from "@/components/ViewNews";
import Endpoints from "@/services/constants";
import React from "react";

const fetchData = async (url) => {
  try {
    const scrapeParams = new URLSearchParams({
      url: url,
    });
    const scrapesRes = await (
      await fetch(`${Endpoints.BASE_URL}scrape?${scrapeParams}`)
    ).json();

    return scrapesRes;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const page = async ({ searchParams }) => {
  let { link } = searchParams;
  const pageData = await fetchData(link);

  return <ViewNews scrapedData={pageData} />;
};

export default page;
