import express from "express";
import {
  getAdminBeers,
  getAdminBrewery,
  addAdminBeer,
  updateAdminBeer,
  deleteAdminBeer,
  addAdminBrewery,
  updateAdminBrewery,
  deleteAdminBrewery,
} from "../controllers/beerAdminController.js";
const router = express.Router();

router.get("/beers", getAdminBeers);
router.post("/beers", addAdminBeer);
router.put("/beers/:id", updateAdminBeer);
router.delete("/beers/:id", deleteAdminBeer);

// Brewery routes
router.get("/brewery", getAdminBrewery);
router.post("/brewery", addAdminBrewery);
router.put("/brewery/:id", updateAdminBrewery);
router.delete("/brewery/:id", deleteAdminBrewery);

export default router;
