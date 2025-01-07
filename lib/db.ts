import { config } from "@/config/config";
import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  if (!config.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  if (mongoose.connections[0]?.readyState) {
    return;
  }

  try {
    await mongoose.connect(config.MONGODB_URI);
  } catch (error) {
    console.error("Failed to connect to the database.", error);
    throw error;
  }
}
