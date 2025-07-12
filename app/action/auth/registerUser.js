"use server";

import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";


export const registerUser = async (userData) => {
  const useCollection = dbConnect(collectionNameObj.userCollection);
  const existingUser = await useCollection.findOne({ email: userData.email });
  
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    // If user does not exist, insert new user data
    const result = await useCollection.insertOne(userData);
    if (result.acknowledged) {
      return { success: true, message: "User registered successfully" };
    } else {
      return { success: false, message: "Failed to register user" };
    }
  }
};
