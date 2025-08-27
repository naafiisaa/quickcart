// loginUser.js
"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async ({ email, password }) => {
  const userCollection = await dbConnect(collectionNameObj.userCollection);
  const user = await userCollection.findOne({ email });

  if (!user) return null;

  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    image: user.image || null,
  };
};
