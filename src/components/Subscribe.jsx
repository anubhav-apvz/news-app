"use client";
import { useState, useEffect } from "react";
import { cleanObject, mapCategoryIcons } from "@/services/common";
import Endpoints from "@/services/constants";
import { GET } from "@/services/api";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  subscribeData,
  subscriptionRevalidation,
  unSubscribeData,
} from "@/app/action";
import SkeletonCard from "./home/SkeletonCard";
import SkeletonSubscribe from "./SkeletonSubscribe";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use vw or percentage for better responsiveness
  maxWidth: "343px",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "28px",
  borderRadius: "16px",
  zIndex: 999999,
};

const Subscribe = ({ subscriptionData, userEmail }) => {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [revalidate, setRevalidate] = useState(false);
  // const [subscriptionData, setSubscriptionData] = useState([]);
  const [filteredSubscriptionData, setFilteredSubscriptionData] = useState();

  const callServerAction = async () => {
    setRevalidate(true);
    try {
      await subscriptionRevalidation();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 5000);
        return;
      });
    } catch (error) {
      console.error("Error calling server action:", error);
    } finally {
      setRevalidate(false);
    }
  };

  useEffect(() => {
    if (subscriptionData) {
      setFilteredSubscriptionData(subscriptionData);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const [filters, setFilters] = useState([
    { id: 0, name: "Explore", isActive: true },
    { id: 1, name: "My subscription", isActive: false },
    { id: 2, name: "Popular", isActive: false },
    { id: 3, name: "New", isActive: false },
  ]);

  // const userEmail = JSON.parse(localStorage.getItem("userEmail"));
  // const userEmail = "prajjwal@kobil.com";

  const fetchData = async () => {
    try {
      const activeFilters = filters.filter((filter) => filter.isActive);
      let payload = {};
      if (activeFilters[0]?.id == 1) {
        payload = {
          page: 1,
          size: 200,
          subscribe: true,
          user_id: userEmail,
        };
      } else {
        payload = {
          page: 1,
          size: 200,
          popular: true,
          user_id: userEmail,
        };
      }
      const cleanedPayload = cleanObject(payload);

      const popularRes = await GET(
        `${Endpoints.CATEGORY_LIST}`,
        cleanedPayload
      );

      const popularData = popularRes?.data?.map((item) => ({
        ...item,
        image: mapCategoryIcons(item?.category_name),
      }));
      setFilteredSubscriptionData(popularData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (subscriptionData) {
      const activeFilterId = filters.filter((filter) => filter.isActive)[0]?.id;
      if (activeFilterId === 1) {
        setFilteredSubscriptionData(
          subscriptionData
            ?.filter((item) => item.subscribed === 1)
            .map((item) => ({
              ...item,
              image: mapCategoryIcons(item?.category_name),
            }))
        );
      } else {
        setFilteredSubscriptionData(
          subscriptionData.map((item) => ({
            ...item,
            image: mapCategoryIcons(item?.category_name),
          }))
        );
      }
    }
  }, [filters, subscriptionData]);

  const handleFilterChange = async (index) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) => ({
        ...filter,
        isActive: i === index,
      }))
    );
  };

  const handleOpen = () => setOpen(true);
  const handleClose = async () => {
    setOpen(false);
    // await fetchData();
    callServerAction();
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const handleSubscribe = async (isSub, userEmail, categoryId, catName) => {
    setLoading((prev) => ({ ...prev, [categoryId]: true }));
    setIsSubscribe(isSub);
    setCategoryName(catName);
    if (isSub) {
      setModalHeader("Subscribed succesfully!");
      let subResponse = subscribeData(userEmail, categoryId, catName);
      if (subResponse) {
        handleOpen();
      }
    } else {
      setModalHeader("Unsubscribed succesfully!");
      let unSubResponse = unSubscribeData(userEmail, categoryId, catName);
      if (unSubResponse) {
        handleOpen();
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HEADER */}
      <div className="sticky top-0 flex flex-row py-[8px] px-[16px] h-[56px] items-center justify-center z-10 bg-white">
        <span className="text-title3 font-semiBold text-title-large-1">
          Subscribe Topics
        </span>
      </div>

      {/* SEARCH */}
      {/* <div className="flex flex-col p-[16px] bg-white">
        <div className="relative flex items-center w-full">
          <img
            className="absolute left-3 text-gray-500"
            src="search.svg"
            alt="bg-image"
          />
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-border-color"
            placeholder="Search topics..."
          />
        </div>
      </div> */}

      {/* Listing */}
      <div className="flex flex-row ml-[16px] mt-[16px] gap-[8px] overflow-x-auto pb-[10px]">
        {filters.map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilterChange(index)}
            className={`flex flex-row felx-grow py-[4px] px-[14px] whitespace-nowrap font-normal text-title-tight rounded-2xl cursor-pointer ${
              item.isActive
                ? "border-[1px] border-primary bg-custom-blue-100"
                : "text-title3 bg-white"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="flex flex-col px-[16px] mb-[10px]">
        {revalidate ? (
          <SkeletonSubscribe></SkeletonSubscribe>
        ) : (
          filteredSubscriptionData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row mt-[14px] p-[16px] bg-white rounded-xl gap-[10px] cursor-pointer"
            >
              <div className="flex flex-row flex-grow items-center gap-[16px]">
                <img src={item?.image} alt="header" />
                <div className="flex flex-col gap-[4px]">
                  <span className="text-title3 font-semiBold text-title-tight">
                    {item?.category_name}
                  </span>
                  <span className="self-start text-text-secondary font-bold-normal text-title-7">
                    {item?.total_subscribers} subscribers
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                {item?.subscribed ? (
                  <button
                    className="inline-flex max-w-[120px] self-center p-[4px] text-bg-booking-blue items-center gap-[8px] rounded-lg bg-custom-blue-100 border-[1.5px] border-bg-booking-blue xl:self-center"
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
                    <img src="/check.svg" alt="check" />
                  </button>
                ) : (
                  <button
                    className="py-[4px] px-[12px] text-primary items-center gap-[8px] rounded-lg border-[1.5px] border-border-color self-center"
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
            </div>
          ))
        )}
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
                <img src="/check_circle.svg" alt="tick" />
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

            <div className="flex flex-row justify-center gap-[16px]">
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
                  <img src="/external-link.svg" alt="share" />
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

export default Subscribe;
