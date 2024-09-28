"use server";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { currentUser } from "@clerk/nextjs/server";

export const updateUser = async (name, email, image) => {
  const { id: userId } = await currentUser();

  const res = await clerkClient.users.updateUser(userId, {
    firstName: name,
    primaryEmailAddressID: email,
    profileImageID: image,
  });

  return res;
};
