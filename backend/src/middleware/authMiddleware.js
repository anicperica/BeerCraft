  import jwt from "jsonwebtoken";
  import User from "../models/userModel.js";

  export const protectRoute = async (req, res, next) => {
    try {
      const token = req.cookies?.jwt;

      if (!token) {
        return res.status(401).json({ message: "Not authorized not token" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "Not authorized" });
      }
      req.user=user;
      next();
    } catch (error) {
      console.error("Auth middleware error:", error.message);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  };

  export const adminOnly = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Admin only" });
    }
  };
