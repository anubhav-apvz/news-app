"use client";

import {
  subscribeData,
  subscriptionRevalidationHome,
  unSubscribeData,
} from "@/app/action";
import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  zIndex: 999999,
};

const MySubscription = ({ mySubscriptionData, userEmail }) => {
  const [mySubscription, setMySubscription] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubscribe = async (isSub, userEmail, categoryId, catName) => {
    setIsSubscribe(isSub);
    setCategoryName(catName);
    if (isSub) {
      setModalHeader("Subscribed succesfully!");
      let subResponse = subscribeData(userEmail, categoryId, catName);
      if (subResponse) {
        // console.log("sub response -- >>", subResponse);
        handleOpen();
      }
    } else {
      // console.log("unsub called");
      setModalHeader("Unsubscribed succesfully!");
      let unSubResponse = unSubscribeData(userEmail, categoryId, catName);
      if (unSubResponse) {
        // console.log("unsub response -- >>", unSubResponse);
        handleOpen();
      }
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = async () => {
    setOpen(false);
    subscriptionRevalidationHome();
  };

  useEffect(() => {
    if (mySubscriptionData) {
      setMySubscription(mySubscriptionData);
    }
  }, [mySubscriptionData]);

  return (
    <div className="flex flex-col py-[16px] bg-bg-secondary gap-[20px]">
      <div className="flex flex-row items-center justify-between mt-[24px] px-[16px]">
        <span className="text-title3 font-semiBold text-title-large">
          My Subscription
        </span>
        {mySubscription?.length !== 0 ? (
          <span className="text-primary font-bold-500 text-title-small">
            See all
          </span>
        ) : (
          <></>
        )}
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
                  {item?.total_subscribers}{" "}
                  {item?.total_subscribers > 1 ? "subscribers" : "subscriber"}
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
                <img src="/check.svg" alt="check" />
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

export default MySubscription;
