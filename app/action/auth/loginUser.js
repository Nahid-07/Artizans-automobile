"use server";
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (loginData) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);
  const user = await userCollection.findOne({ email: loginData.email });
  const isPasswordValid = await bcrypt.compare(
    loginData.password,
    user.password
  );
  if (user && isPasswordValid) {
    console.log(user);
    return { success: true, message: "Login successful", user };
  } else {
    // User not found
    return { success: false, message: "User not found" };
  }
};
