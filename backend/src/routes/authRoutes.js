import express from "express";
import { registerUser, loginUser, getCurrentUserProfile, getAllRegularUsers, updateUser, deleteUser } from "../controllers/authController.js";
import { protectRoute, adminOnly } from "../middleware/authMiddleware.js";
import { logoutUser } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protectRoute, getCurrentUserProfile);
router.get("/users", protectRoute, adminOnly, getAllRegularUsers);
router.put("/users/:id", protectRoute, adminOnly, updateUser);
router.delete("/users/:id", protectRoute, adminOnly, deleteUser);

router.post("/logout", logoutUser);
export default router;
