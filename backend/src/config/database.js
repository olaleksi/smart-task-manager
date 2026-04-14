import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("✅ MongoDB connected successfully"))
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
      });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectToDB;


