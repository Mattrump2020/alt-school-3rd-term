import express from "express";
import { signUp, signIn, getUserUrlCount } from "../controllers/users.js";
import verifyToken from "../middleware/authMiddleware.js";

const userRouter = express.Router();

// Route for user registration
userRouter.post("/register", signUp, (req, res) => {
  console.log("User registration request received");
  res.status(201).json({ message: "User registered successfully" });
});

// Route for user login
userRouter.post("/login", signIn, (req, res) => {
  console.log("User login request received");
  res.status(200).json({ message: "User logged in successfully" });
});

// Route to get the count of URLs for the authenticated user
userRouter.get("/urlCount", verifyToken, getUserUrlCount, (req, res) => {
  console.log("Request to get user URL count received");
  res.status(200).json({ message: "User URL count retrieved successfully" });
});

export default userRouter;
