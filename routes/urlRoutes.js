import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import { shortUrl, redirectUrl, customUrl, updateShortUrl, updateCustomUrl, deleteUrl } from "../controllers/url.js";

const urlRouter = express.Router();

// Route to create a short URL
urlRouter.post("/shortUrl", verifyToken, shortUrl, (req, res) => {
  console.log("Short URL creation request received");
  res.status(201).json({ message: "Short URL created successfully" });
});

// Route to create a custom URL
urlRouter.post("/customUrl", verifyToken, customUrl, (req, res) => {
  console.log("Custom URL creation request received");
  res.status(201).json({ message: "Custom URL created successfully" });
});

// Route to handle redirection for custom URLs
urlRouter.get("/customUrl/:customId", redirectUrl, (req, res) => {
  console.log(`Redirecting to custom URL with ID: ${req.params.customId}`);
  res.status(302).redirect(req.url);  // Example response, adjust as needed
});

// Route to handle redirection for short URLs
urlRouter.get("/shortUrl/:urlId", redirectUrl, (req, res) => {
  console.log(`Redirecting to short URL with ID: ${req.params.urlId}`);
  res.status(302).redirect(req.url);  // Example response, adjust as needed
});

// Route to update an existing short URL
urlRouter.put("/updateShortUrl", updateShortUrl, (req, res) => {
  console.log("Short URL update request received");
  res.status(200).json({ message: "Short URL updated successfully" });
});

// Route to update an existing custom URL
urlRouter.put("/updateCustomUrl", updateCustomUrl, (req, res) => {
  console.log("Custom URL update request received");
  res.status(200).json({ message: "Custom URL updated successfully" });
});

// Route to delete a URL
urlRouter.delete("/deleteUrl", deleteUrl, (req, res) => {
  console.log("Delete URL request received");
  res.status(200).json({ message: "URL deleted successfully" });
});

export default urlRouter;
