import Brewery from "../models/breweryModel.js";

export const getAllBrewerys = async (req, res) => {
  try {
    const brewery =await Brewery.find()
    res.json(brewery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};