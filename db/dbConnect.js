import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI); // Ensure MONGODB_URI is a string
    console.log("mongoose Connected");
  } catch (error) {
    console.log(error);
  }
};
