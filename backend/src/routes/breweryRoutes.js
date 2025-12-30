import express from "express";
import { getAllBrewerys } from "../controllers/breweryController.js";

const router = express.Router();

router.get("/", getAllBrewerys);

export default router;
