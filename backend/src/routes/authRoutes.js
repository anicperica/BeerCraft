import express from "express";
import { registerUser, loginUser, getCurrentUserProfile, getAllRegularUsers, updateUser } from "../controllers/authController.js";
import { protectRoute, adminOnly } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protectRoute, getCurrentUserProfile);
router.get("/users", protectRoute, adminOnly, getAllRegularUsers);
router.put("/users/:id", protectRoute, adminOnly, updateUser);

export default router;
