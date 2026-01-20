import express from "express";
import { getAllBeers,getBeerById ,getBeersByBreweryId} from "../controllers/beerController.js";
import  {protectRoute} from "../middleware/authMiddleware.js"
const router = express.Router();



router.get("/",protectRoute, getAllBeers);
router.get("/brewery/:id",protectRoute,getBeersByBreweryId);
router.get("/:id",protectRoute,getBeerById);


export default router;