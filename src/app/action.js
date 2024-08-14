"use server";

import { revalidateTag } from "next/cache";

export async function subscriptionRevalidation() {
  revalidateTag("subscription");
}

export async function subscriptionRevalidationHome() {
  revalidateTag("homeSubscription");
}
