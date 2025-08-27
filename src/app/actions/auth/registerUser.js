"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async ({ name, email, password }) => {
  if (!name || !email || !password) return null;

  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) return null;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { name, email, password: hashedPassword };
  const result = await userCollection.insertOne(newUser);

  return { _id: result.insertedId.toString(), name, email };
};
