import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function db() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
    
  } catch (error) {
    console.log(`Failed to connect database : ${error}`);
  }
}

export default db;
