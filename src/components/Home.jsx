import HomeWrapper from "./home/HomeWrapper";

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

const Home = ({feedData}) => {
  // const [feedData, setFeedData] = useState([]);
  // const [mySubscription, setMySubscription] = useState([]);
  // const [popularSubscription, setPopularSubscription] = useState([]);
  // // const [loading, setLoading] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [categoryName, setCategoryName] = useState("");
  // const [modalHeader, setModalHeader] = useState("");
  // const [isSubscribe, setIsSubscribe] = useState(false);

  // const location = useLocation();

  // const queryParams = new URLSearchParams(location.search);
  // const userEmail = queryParams.get("email");
  const userEmail = "prajjwal@kobil.com";
  // const userId = queryParams.get("sub");

  // localStorage.setItem("userEmail", JSON.stringify(userEmail));
  // localStorage.setItem("userId", JSON.stringify(userId));

  // const fetchData = async () => {
  //   try {
  //     let payload = {};
  //     const cleanedPayload = cleanObject(payload);

  //     const latestNewsRes = await GET(
  //       `${Endpoints.LATEST_NEWS}`,
  //       cleanedPayload
  //     );

  //     const [mySubscriptionRes, popularRes] = await Promise.all([
  //       GET(
  //         `${Endpoints.CATEGORY_LIST}`,
  //         cleanObject({
  //           page: 1,
  //           size: 200,
  //           subscribe: true,
  //           user_id: userEmail,
  //         })
  //       ),
  //       GET(
  //         `${Endpoints.CATEGORY_LIST}`,
  //         cleanObject({
  //           page: 1,
  //           size: 200,
  //           popular: true,
  //           user_id: userEmail,
  //         })
  //       ),
  //     ]);

  //     let latestNewsData = [];
  //     if (latestNewsRes?.status === 200) {
  //       latestNewsData = latestNewsRes?.data.map((item) => ({
  //         ...item,
  //         category: formatCategory(item?.category),
  //         pubDate: convertDate(item?.pubDate),
  //         image: "culture.png",
  //       }));
  //       setFeedData(latestNewsData);
  //     } else {
  //       setFeedData(latestNewsData);
  //     }

  //     let mySubscriptionData = [];
  //     if (mySubscriptionRes?.status === 200) {
  //       mySubscriptionData = mySubscriptionRes?.data.map((item) => ({
  //         ...item,
  //         image: mapCategoryIcons(item?.category_name),
  //       }));
  //       setMySubscription(mySubscriptionData);
  //     } else {
  //       setMySubscription(mySubscriptionData);
  //     }

  //     let popularData = [];
  //     if (popularRes?.status === 200) {
  //       popularData = popularRes?.data.map((item) => ({
  //         ...item,
  //         image: mapCategoryIcons(item?.category_name),
  //       }));
  //       setPopularSubscription(popularData);
  //     } else {
  //       setPopularSubscription(popularData);
  //     }
  //     // setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const handleNavigation = (link) => {
  //   navigate("/view-news", { state: { data: link } });
  // };

  // const handleOpen = () => setOpen(true);
  // const handleClose = async () => {
  //   setOpen(false);
  //   await fetchData();
  // };

  // const handleSubscribe = async (isSub, userEmail, categoryId, catName) => {
  //   console.log(isSubscribe, userEmail, categoryId);
  //   setIsSubscribe(isSub);
  //   console.log(isSub);
  //   setCategoryName(catName);
  //   if (isSub) {
  //     setModalHeader("Subscribed succesfully!");
  //     let res = await GET(
  //       `${Endpoints.SUBSCRIBE}?user_id=${userEmail}&category_id=${categoryId}`,
  //       {}
  //     );
  //     console.log("subscribe -> ", res);
  //     if (res) {
  //       handleOpen();
  //     }
  //   } else {
  //     setModalHeader("Unsubscribed succesfully!");
  //     let res = await GET(
  //       `${Endpoints.UNSUBSCRIBE}?user_id=${userEmail}&category_id=${categoryId}`,
  //       {}
  //     );
  //     console.log("unsubscribe -> ", res);
  //     if (res) {
  //       handleOpen();
  //     }
  //   }
  // };

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

      {/* This is a Home Wrapper */}
      <HomeWrapper feedData={feedData}/>
    </div>
  );
};

export default Home;
