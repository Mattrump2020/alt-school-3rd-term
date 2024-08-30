import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Authentication middleware
const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    console.log("Authorization header is missing");
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.API_SECRET);
    req.user = decoded;
    console.log("Token successfully verified");
    next();
  } catch (error) {
    console.log("Token verification failed:", error.message);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default verifyToken;
