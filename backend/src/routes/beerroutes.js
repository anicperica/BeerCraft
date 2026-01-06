import express from "express";
import { getAllBeers,getBeerById ,getBeersByBreweryId} from "../controllers/beerController.js";
const router = express.Router();



router.get("/", getAllBeers);
router.get("/brewery/:id",getBeersByBreweryId);
router.get("/:id",getBeerById);


export default router;