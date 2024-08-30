import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Initialize MongoDB connection
function initializeMongoDBConnection() {
    const DB_Url = process.env.MONGODB_CONNECTION_URL;
    if (!DB_Url) {
        throw new Error("MONGODB_CONNECTION_URL environment variable is missing. Please set it in your .env file.");
    }

    mongoose.connect(DB_Url, { 
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err.message);
    });

    // Set event handlers
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connection established.");
    });

    mongoose.connection.on("error", (err) => {
        console.error("MongoDB connection error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB connection disconnected.");
    });
}

export default initializeMongoDBConnection;
