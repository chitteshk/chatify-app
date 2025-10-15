import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected: ", conn.connection.host);
  } catch (error) {
    console.log("Error connecting MongoDb: ", error);
    process.exit(1) // 1 means failed, 0 means success
  }
};
