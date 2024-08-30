import express from "express";
import generateQrCode from "../controllers/qrCode.js";
import verifyToken from "../middleware/authMiddleware.js";

const qrRouter = express.Router();

// Route to create a QR code
qrRouter.post("/createQrCode", verifyToken, generateQrCode, (req, res) => {
  console.log("QR code creation request received for user:", req.user?.id);
  res.status(201).json({ message: "QR code created successfully" });
});

export default qrRouter;
