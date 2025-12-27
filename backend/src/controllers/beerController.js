import Beer from "../models/beerModel.js";

export const getAllBeers = async (req, res) => {
  try {
    const beers = await Beer.find();
    res.json(
      beers.map((beer) => ({
        id: beer._id,
        name: beer.name,
        brewery: beer.brewery,
        description: beer.description,
        price: beer.price,
        alcohol: beer.alcohol,
        image: beer.image,
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
