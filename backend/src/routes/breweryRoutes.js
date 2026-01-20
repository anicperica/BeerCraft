import express from "express";
import { getAllBrewerys,getBrewerysById } from "../controllers/breweryController.js";
import  {protectRoute} from "../middleware/authMiddleware.js"
const router = express.Router();

router.get("/",protectRoute, getAllBrewerys);
router.get("/:id",protectRoute, getBrewerysById);


export default router;
