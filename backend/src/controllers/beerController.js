import Beer from "../models/beerModel.js";

export const getAllBeers = async (req, res) => {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : null;
    let query = Beer.find();
    if (limit) {
      query = query.limit(limit);
    }

    const beers = await query;
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

export const getBeerById = async (req, res) => {
  try {
    const beer = await Beer.findById(req.params.id);
    if (!beer) {
      return res.staus(404).json({ message: "Beer not found" });
    }
    res.json({
      id: beer._id,
      name: beer.name,
      brewery: beer.brewery,
      description: beer.description,
      price: beer.price,
      alcohol: beer.alcohol,
      image: beer.image,
      style: beer.style,
      bitternes: beer.bitterness,
      volume: beer.volume,
      tastingNotes: beer.tastingNotes,
      ingredients: beer.ingredients,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
