import { useEffect, useState } from "react";
import { GET } from "@/services/api";
import {
  cleanObject,
  convertDate,
  formatCategory,
  mapCategoryIcons,
} from "@/services/common";
import Endpoints from "@/services/constants";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 343,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "28px",
  borderRadius: "16px",
};

const Home = () => {
  const [feedData, setFeedData] = useState([]);
  const [mySubscription, setMySubscription] = useState([]);
  const [popularSubscription, setPopularSubscription] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);

  // const location = useLocation();

  // const queryParams = new URLSearchParams(location.search);
  // const userEmail = queryParams.get("email");
  const userEmail = "prajjwal@kobil.com";
  // const userId = queryParams.get("sub");

  // localStorage.setItem("userEmail", JSON.stringify(userEmail));
  // localStorage.setItem("userId", JSON.stringify(userId));

  const fetchData = async () => {
    try {
      let payload = {};
      const cleanedPayload = cleanObject(payload);

      const latestNewsRes = await GET(
        `${Endpoints.LATEST_NEWS}`,
        cleanedPayload
      );

      const [mySubscriptionRes, popularRes] = await Promise.all([
        GET(
          `${Endpoints.CATEGORY_LIST}`,
          cleanObject({
            page: 1,
            size: 200,
            subscribe: true,
            user_id: userEmail,
          })
        ),
        GET(
          `${Endpoints.CATEGORY_LIST}`,
          cleanObject({
            page: 1,
            size: 200,
            popular: true,
            user_id: userEmail,
          })
        ),
      ]);

      let latestNewsData = [];
      if (latestNewsRes?.status === 200) {
        latestNewsData = latestNewsRes?.data.map((item) => ({
          ...item,
          category: formatCategory(item?.category),
          pubDate: convertDate(item?.pubDate),
          image: "culture.png",
        }));
        setFeedData(latestNewsData);
      } else {
        setFeedData(latestNewsData);
      }

      let mySubscriptionData = [];
      if (mySubscriptionRes?.status === 200) {
        mySubscriptionData = mySubscriptionRes?.data.map((item) => ({
          ...item,
          image: mapCategoryIcons(item?.category_name),
        }));
        setMySubscription(mySubscriptionData);
      } else {
        setMySubscription(mySubscriptionData);
      }

      let popularData = [];
      if (popularRes?.status === 200) {
        popularData = popularRes?.data.map((item) => ({
          ...item,
          image: mapCategoryIcons(item?.category_name),
        }));
        setPopularSubscription(popularData);
      } else {
        setPopularSubscription(popularData);
      }
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      // setLoading(true);
      await fetchData();
      // setLoading(false);
    };

    initialize();
  }, []);

  const handleNavigation = (link) => {
    navigate("/view-news", { state: { data: link } });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = async () => {
    setOpen(false);
    await fetchData();
  };

  const handleSubscribe = async (isSub, userEmail, categoryId, catName) => {
    console.log(isSubscribe, userEmail, categoryId);
    setIsSubscribe(isSub);
    console.log(isSub);
    setCategoryName(catName);
    if (isSub) {
      setModalHeader("Subscribed succesfully!");
      let res = await GET(
        `${Endpoints.SUBSCRIBE}?user_id=${userEmail}&category_id=${categoryId}`,
        {}
      );
      console.log("subscribe -> ", res);
      if (res) {
        handleOpen();
      }
    } else {
      setModalHeader("Unsubscribed succesfully!");
      let res = await GET(
        `${Endpoints.UNSUBSCRIBE}?user_id=${userEmail}&category_id=${categoryId}`,
        {}
      );
      console.log("unsubscribe -> ", res);
      if (res) {
        handleOpen();
      }
    }
  };

  const handleOnInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* HEADER */}
      <div className="flex flex-row py-[8px] px-[16px] items-center justify-start">
        <img src="logo.svg" alt="header" />
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

      {/* SEARCH */}
      <div className="flex flex-col p-[16px]">
        <div className="relative flex items-center w-full">
          <img
            className="absolute left-3 text-gray-500"
            src="search.svg"
            alt="bg-image"
          />
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-border-color"
            placeholder="Search Service here..."
            onChange={handleOnInputChange}
          />
        </div>
      </div>

      {/* Latest News */}
      <div className="flex flex-col px-[16px] bg-bg-secondary gap-[12px]">
        <div className="flex flex-row items-center justify-between mt-[24px]">
          <span className="text-title3 font-semiBold text-title-large">
            Latest News
          </span>
          <span className="text-primary font-bold-500 text-title-small">
            See all news
          </span>
        </div>

        {/* News Cards */}
        <div className="flex flex-col p-[16px] bg-white rounded-xl gap-[16px]">
          {feedData && feedData?.length > 0 ? (
            feedData?.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-[12px] items-center"
                onClick={() => {
                  handleNavigation(item?.link);
                }}
              >
                <div className="flex flex-col w-[80%] gap-[8px]">
                  <span className="text-title3 font-semiBold text-title-tight">
                    {item?.title}
                  </span>
                  <span className="text-text-secondary font-normal text-title-5">
                    {item?.description?.slice(0, 60)} ...
                  </span>
                  <div className="flex flex-wrap items-center gap-[4px]">
                    {Array.isArray(item?.category) ? (
                      item?.category?.slice(0, 3)?.map((ele, i) => (
                        <span
                          key={i}
                          className={`py-[3px] px-[6px] rounded-lg text-bg-booking-blue font-bold-500 text-title-5 bg-custom-blue-100`}
                        >
                          {ele}
                        </span>
                      ))
                    ) : (
                      <span
                        className={`py-[3px] px-[6px] rounded-lg text-bg-booking-blue font-bold-500 text-title-5 bg-custom-blue-100`}
                      >
                        {item?.category}
                      </span>
                    )}
                  </div>
                  <span className="text-text-inactive font-normal text-title-7">
                    {item?.pubDate}
                  </span>
                </div>
                <div>
                  <img
                    className="rounded-md"
                    src={item?.image}
                    alt="placeholder"
                  />
                </div>
              </div>
            ))
          ) : (
            <span className="text-text-secondary font-normal text-title-5">
              No data Found! Please reload.
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col py-[16px] bg-bg-secondary gap-[20px]">
        <div className="flex flex-row items-center justify-between mt-[24px] px-[16px]">
          <span className="text-title3 font-semiBold text-title-large">
            My Subscription
          </span>
          <span className="text-primary font-bold-500 text-title-small">
            See all
          </span>
        </div>
        <div className="flex flex-row pl-[16px] gap-[16px] overflow-x-auto">
          {mySubscription?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] rounded-lg justify-between"
            >
              <div className="flex flex-col gap-[16px] jus">
                <img className="size-10" src={item?.image} alt="header" />
                <div className="flex flex-col gap-[4px]">
                  <span className="text-title3 font-semiBold text-text-tight">
                    {item?.category_name}
                  </span>
                  <span className="text-text-secondary font-normal text-text-7">
                    {item?.total_subscribers} subscribers
                  </span>
                </div>
              </div>
              {item?.subscribed ? (
                <button className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg bg-custom-blue-100 border-[1.5px] border-bg-booking-blue xl:self-center">
                  Subscribed
                  <img src="check.svg" alt="check" />
                </button>
              ) : (
                <button className="py-[4px] px-[28px] text-primary items-center gap-[8px] rounded-lg border-[1.5px] border-border-color xl:self-center">
                  <span>Subscribe</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col py-[16px] bg-bg-secondary gap-[20px]">
        <div className="flex flex-row items-center justify-between mt-[24px] px-[16px]">
          <span className="text-title3 font-semiBold text-title-large">
            Popular Subscription
          </span>
          <span className="text-primary font-bold-500 text-title-small">
            See all
          </span>
        </div>
        <div className="flex flex-row pl-[16px] gap-[16px] overflow-x-auto">
          {popularSubscription?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col mb-[10px] p-[16px] bg-white gap-[10px] w-[344px] rounded-lg justify-between"
            >
              <div className="flex flex-col gap-[16px] jus">
                <img className="size-10" src={item?.image} alt="header" />
                <div className="flex flex-col gap-[4px]">
                  <span className="text-title3 font-semiBold text-text-tight">
                    {item?.category_name}
                  </span>
                  <span className="text-text-secondary font-normal text-text-7">
                    {item?.total_subscribers} subscribers
                  </span>
                </div>
              </div>
              {item?.subscribed ? (
                <button
                  className="inline-flex py-[4px] pl-[12px] pr-[26px] text-bg-booking-blue items-center gap-[8px] rounded-lg bg-custom-blue-100 border-[1.5px] border-bg-booking-blue xl:self-center"
                  onClick={() =>
                    handleSubscribe(
                      false,
                      userEmail,
                      item?.category_id,
                      item?.category_name
                    )
                  }
                >
                  Subscribed
                  <img src="check.svg" alt="check" />
                </button>
              ) : (
                <button
                  className="py-[4px] px-[28px] text-primary items-center gap-[8px] rounded-lg border-[1.5px] border-border-color xl:self-center"
                  onClick={() =>
                    handleSubscribe(
                      true,
                      userEmail,
                      item?.category_id,
                      item?.category_name
                    )
                  }
                >
                  <span>Subscribe</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-[28px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row items-center justify-center">
                <img src="check_circle.svg" alt="tick" />
              </div>
              <div className="flex flex-col gap-[8px] text-center">
                <span className="text-title3 font-bold-700 text-title-large-1">
                  {modalHeader}
                </span>

                {isSubscribe ? (
                  <span className="text-text-secondary font-normal text-title-tight">
                    You’ll get updates from{" "}
                    <span className="text-primary font-semiBold text-title-tight">
                      {categoryName}
                    </span>{" "}
                    topic in the chat menu
                  </span>
                ) : (
                  <span className="text-text-secondary font-normal text-title-tight">
                    You’ll not get updates from{" "}
                    <span className="text-primary font-semiBold text-title-tight">
                      {categoryName}
                    </span>{" "}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-[16px]">
              <button
                className="py-[12px] px-[24px] text-primary bg-custom-blue-100 items-center gap-[8px] rounded-lg"
                onClick={handleClose}
              >
                <span className="text-primary font-semiBold text-title-8">
                  Close
                </span>
              </button>
              {isSubscribe && (
                <button
                  className="inline-flex flex-grow py-[12px] px-[24px] text-white bg-primary justify-center items-center gap-[12px] rounded-lg"
                  onClick={handleClose}
                >
                  <img src="external-link.svg" alt="share" />
                  <span className="text-white font-semiBold text-title-8">
                    Open chats
                  </span>
                </button>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
