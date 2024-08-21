"use server";
import { deleteSession, createSession, getUserSession } from "@/lib/session";
import Endpoints from "@/services/constants";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function subscriptionRevalidation() {
  revalidateTag("subscription");
}

export async function subscriptionRevalidationHome() {
  revalidateTag("homeSubscription");
}

export async function popularRevalidationHome() {
  revalidateTag("homePopular");
}

export async function signup(userDetails, state, formData) {
  await createSession(userDetails);
  redirect("/main/home");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}

export async function subscribeData(userEmail, categoryId, categoryName) {
  const subscribeParams = new URLSearchParams({
    user_id: userEmail,
    category_id: categoryId,
    name: categoryName,
  });
  // console.log("detaiils ", userEmail, categoryId, categoryName);
  // const newsRes = await (
  //   await fetch(`${Endpoints.BASE_URL}subscribe?${subscribeParams}`)
  // ).text();
  // console.log(newsRes)
  fetch(`${Endpoints.BASE_URL}subscribe?${subscribeParams}`)
    .then((res) => {
      if (res) {
        // throw new Error(`HTTP error! status: ${res.status}`);
        // console.log('some error while subscribing -> ', res)
        // return null;
        return res.text();
      }
    })
    .then((item) => {
      // console.log('--------------------------------------------', item);
      return item;
    })
    .catch((error) => {
      console.error("Error during fetch:", error); // Log any errors
    });
}

export async function unSubscribeData(userEmail, categoryId, categoryName) {
  const subscribeParams = new URLSearchParams({
    user_id: userEmail,
    category_id: categoryId,
    name: categoryName,
  });
  fetch(`${Endpoints.BASE_URL}unsubscribe?${subscribeParams}`)
    .then((res) => {
      if (res) {
        return res.text();
      }
    })
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
    });
}
