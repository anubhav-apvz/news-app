"use server";
import { deleteSession, createSession, getUserSession } from "@/lib/session";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function subscriptionRevalidation() {
  revalidateTag("subscription");
}

export async function subscriptionRevalidationHome() {
  revalidateTag("homeSubscription");
}

export async function signup(userDetails, state, formData) {
  await createSession(userDetails);
  redirect("/main/home");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}

// export async function getSession() {
//   getUserSession()
// }
