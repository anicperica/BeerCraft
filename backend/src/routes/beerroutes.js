import express from "express";
import { getAllBeers } from "../controllers/beerController.js";
const router = express.Router();



router.get("/", getAllBeers);

export default router;