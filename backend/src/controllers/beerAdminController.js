import Beer from "../models/beerModel.js";
import Brewery from "../models/breweryModel.js";

export const getAdminBeers = async (req, res) => {
  try {
    const adminBeers = await Beer.find().populate("brewery");

    res.json(
      adminBeers.map((beer) => ({
        id: beer._id,
        name: beer.name,
        brewery: {
          id: beer.brewery?._id,
          name: beer.brewery?.name,
        },
        description: beer.description,
        price: beer.price,
        alcohol: beer.alcohol,
        image: beer.image,
        style: beer.style,
        bitternes: beer.bitterness,
        volume: beer.volume,
        tastingNotes: beer.tastingNotes,
        ingredients: beer.ingredients,
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addAdminBeer = async (req, res) => {
  try {
    const {
      name,
      brewery,
      description,
      price,
      alcohol,
      image,
      style,
      bitternes,
      volume,
      tastingNotes,
      ingredients,
    } = req.body;

    if (!name || !brewery || price === undefined) {
      return res
        .status(400)
        .json({ message: "Name, brewery, and price are required" });
    }

    const newBeer = new Beer({
      name,
      brewery,
      description,
      price,
      alcohol,
      image,
      style,
      bitterness: bitternes,
      volume,
      tastingNotes,
      ingredients,
    });

    const savedBeer = await newBeer.save();

    res.status(200).json(savedBeer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateAdminBeer = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      brewery,
      description,
      price,
      alcohol,
      image,
      style,
      bitternes,
      volume,
      tastingNotes,
      ingredients,
    } = req.body;

    const updatedData = {
      name,
      brewery,
      description,
      price,
      alcohol,
      image,
      style,
      bitterness: bitternes,
      volume,
      tastingNotes,
      ingredients,
    };
   
    const updatedBeer = await Beer.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedBeer) {
      return res.status(404).json({ message: "Beer not found" });
    }

    res.status(200).json(updatedBeer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteAdminBeer = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBeer = await Beer.findByIdAndDelete(id);

    if (!deletedBeer) {
      return res.status(404).json({ message: "Beer not found" });
    }

    res
      .status(200)
      .json({ message: "Beer deleted successfully", beer: deletedBeer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAdminBrewery = async (req, res) => {
  try {
    const adminBrewery = await Brewery.find();

    res.json(
      adminBrewery.map((brewery) => ({
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
    res.status(500).json({ message: "Server error" });
  }
};

export const addAdminBrewery = async (req, res) => {
  try {
    const { name, location, shortDescription, founded, story, image } =
      req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const newBrewery = new Brewery({
      name,
      location,
      shortDescription,
      founded,
      story,
      image,
    });

    const savedBrewery = await newBrewery.save();
    res.status(200).json(savedBrewery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateAdminBrewery = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, shortDescription, founded, story, image } =
      req.body;

    const updatedBrewery = await Brewery.findByIdAndUpdate(
      id,
      { name, location, shortDescription, founded, story, image },
      { new: true }
    );

    if (!updatedBrewery) {
      return res.status(404).json({ message: "Brewery not found" });
    }

    res.status(200).json(updatedBrewery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteAdminBrewery = async (req, res) => {
  try {
    const { id } = req.params;

    const brewery = await Brewery.findById(id);

    if (!brewery) {
      return res.status(404).json({ message: "Brewery not found" });
    }

    const beerCount = await Beer.countDocuments({ brewery: id });

    if (beerCount > 0) {
      return res.status(400).json({
        message:
          "Cannot delete brewery. There are beers linked to this brewery.",
      });
    }

    await Brewery.findByIdAndDelete(id);

    res.status(200).json({
      message: "Brewery deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
