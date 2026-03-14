import express from "express";
import Beer from "../models/beerModel.js";
import Brewery from "../models/breweryModel.js";
import { upload } from "../middleware/upload.js";
import { uploadAdminImage } from "../controllers/beerAdminController.js";
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

import { protectRoute, adminOnly } from "../middleware/authMiddleware.js";
import { lockResource } from "../middleware/lockingResources/lockResource.js";
import { unlockResource } from "../middleware/lockingResources/unlockResource.js";
import { checkLockOwnership } from "../middleware/lockingResources/checkLockOwnership.js";
const router = express.Router();

router.post(
  "/upload",
  protectRoute,
  adminOnly,
  upload.single("image"),
  uploadAdminImage,
);

router.get("/beers", protectRoute, adminOnly, getAdminBeers);
router.post("/beers", protectRoute, adminOnly, addAdminBeer);
router.put("/beers/:id", protectRoute, adminOnly,checkLockOwnership(Beer),updateAdminBeer);
router.delete("/beers/:id", protectRoute, adminOnly, deleteAdminBeer);
router.post("/beer/:id/lock", protectRoute, adminOnly, lockResource(Beer));
router.post("/beers/:id/unlock", protectRoute, adminOnly, unlockResource(Beer));


router.get("/brewery", protectRoute, adminOnly, getAdminBrewery);
router.post("/brewery", protectRoute, adminOnly, addAdminBrewery);
router.put("/brewery/:id", protectRoute, adminOnly, updateAdminBrewery);
router.delete("/brewery/:id", protectRoute, adminOnly, deleteAdminBrewery);
router.post("/brewery/:id/lock", protectRoute, adminOnly, lockResource(Brewery));
router.post("/brewery/:id/unlock", protectRoute, adminOnly, unlockResource(Brewery));
//router.put("/brewery/:id", protectRoute, adminOnly, checkLockOwnership(Brewery), updateAdminBrewery);


export default router;
