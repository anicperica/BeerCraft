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

import  {protectRoute,adminOnly} from "../middleware/authMiddleware.js"

const router = express.Router();

router.get("/beers",protectRoute, adminOnly,getAdminBeers);
router.post("/beers", protectRoute,adminOnly,addAdminBeer);
router.put("/beers/:id",protectRoute ,adminOnly,updateAdminBeer);
router.delete("/beers/:id",protectRoute ,adminOnly, deleteAdminBeer);

// Brewery routes
router.get("/brewery", protectRoute ,adminOnly,getAdminBrewery);
router.post("/brewery",protectRoute ,adminOnly, addAdminBrewery);
router.put("/brewery/:id",protectRoute ,adminOnly, updateAdminBrewery);
router.delete("/brewery/:id", protectRoute ,adminOnly,deleteAdminBrewery);

export default router;
