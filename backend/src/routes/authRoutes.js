import express from "express";
import { registerUser, loginUser,getCurrentUserProfile } from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",protectRoute,getCurrentUserProfile)

export default router;
