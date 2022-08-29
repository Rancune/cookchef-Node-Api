import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/", {
      user: process.env.MONGO_USERNAME,
      pass: process.env.MONGO_ROOTPASSWORD,
      dbName: process.env.DATABASE_NAME,
      // authSource: process.env.MONGO_DB_AUTH_SOURCE,
      // authMechanism: process.env.MONGO_DB_AUTH_MECHANISM,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
