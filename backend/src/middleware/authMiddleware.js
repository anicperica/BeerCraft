import jwt from "jsonwebtoken";
import User from "../models/userModel";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie?.jwt;

    if (!token) {
      return res.status(401).json({ message: "Not authorized not token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    }
    req.user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
