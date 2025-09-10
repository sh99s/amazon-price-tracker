import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGOGB_URI)
    return console.log("MONGOGB_URI is not connected");

  if (isConnected) return console.log("=> using existing database connection");

  try {
    await mongoose.connect(process.env.MONGOGB_URI);

    isConnected = true;

    console.log("mongodb is connected");
  } catch (error) {
    console.log(error);
  }
}
