import express from "express";
import { getAllBrewerys,getBrewerysById } from "../controllers/breweryController.js";

const router = express.Router();

router.get("/", getAllBrewerys);
router.get("/:id", getBrewerysById);


export default router;
