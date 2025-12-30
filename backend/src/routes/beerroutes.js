import express from "express";
import { getAllBeers,getBeerById ,getBeersByBreweryName} from "../controllers/beerController.js";
const router = express.Router();



router.get("/", getAllBeers);
router.get("/:id",getBeerById);
router.get("/brewery/name/:name",getBeersByBreweryName);

export default router;