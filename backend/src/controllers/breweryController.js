import Brewery from "../models/breweryModel.js";

export const getAllBrewerys = async (req, res) => {
  try {
    const brewery = await Brewery.find();
    res.json(
      brewery.map((brewery) => ({
        id: brewery._id,
        name: brewery.name,
        location: brewery.location,
        shortDescription: brewery.shortDescription,
        founded: brewery.founded,
        story: brewery.story,
        image: brewery.image,
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getBrewerysById = async (req, res) => {
  try {
    const breweryDetails = await Brewery.findById(req.params.id);
    if (!breweryDetails) {
      return res.status(404).json({ message: "Brewery not found" });
    }
    res.json({
      id: breweryDetails._id,
      name: breweryDetails.name,
      location: breweryDetails.location,
      shortDescription: breweryDetails.shortDescription,
      founded: breweryDetails.founded,
      story: breweryDetails.story,
      image: breweryDetails.image,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
