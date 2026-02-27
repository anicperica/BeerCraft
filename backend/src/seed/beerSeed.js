// backend/seeds/beerSeed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Beer from "../models/beerModel.js"
import Brewery from "../models/breweryModel.js";
dotenv.config();

const beers =[
  {
    "name": "Medvedgrad Pale Ale",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Classic pale ale, hoppy and refreshing.",
    "price": 5,
    "alcohol": "5.5%",
    "style": "Pale Ale",
    "bitterness": "medium",
    "volume": "500 ml",
    "tastingNotes": "Citrus, floral hops, light malt",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Medvedgrad IPA",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Intense hops and citrus aroma.",
    "price": 5.5,
    "alcohol": "6.2%",
    "style": "IPA",
    "bitterness": "high",
    "volume": "500 ml",
    "tastingNotes": "Grapefruit, pine, tropical fruit",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Medvedgrad Stout",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Dark and rich stout with coffee notes.",
    "price": 5,
    "alcohol": "7.5%",
    "style": "Stout",
    "bitterness": "medium",
    "volume": "330 ml",
    "tastingNotes": "Coffee, dark chocolate, roasted malt",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Medvedgrad Amber Ale",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Smooth amber ale with caramel notes.",
    "price": 5.2,
    "alcohol": "5.2%",
    "style": "Amber Ale",
    "bitterness": "medium",
    "volume": "500 ml",
    "tastingNotes": "Caramel, toffee, light hops",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Medvedgrad Wheat Beer",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Fruity wheat beer, light and refreshing.",
    "price": 4.8,
    "alcohol": "5.0%",
    "style": "Wheat Beer",
    "bitterness": "low",
    "volume": "500 ml",
    "tastingNotes": "Banana, clove, citrus",
    "ingredients": ["Water", "Wheat malt", "Barley malt", "Yeast"]
  },
  {
    "name": "Medvedgrad Dark Lager",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Rich dark lager with smooth finish.",
    "price": 5,
    "alcohol": "5.6%",
    "style": "Dark Lager",
    "bitterness": "low",
    "volume": "500 ml",
    "tastingNotes": "Roasted malt, bread, mild sweetness",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Zagreb IPA",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Hoppy IPA inspired by the capital city.",
    "price": 5.5,
    "alcohol": "6.0%",
    "style": "IPA",
    "bitterness": "medium",
    "volume": "500 ml",
    "tastingNotes": "Pine, resin, citrus zest",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Dubrovnik Lager",
    "brewery": "6952dd0d2043d50c34b3cb59",
    "description": "Light and crisp lager, perfect for summer.",
    "price": 4.5,
    "alcohol": "5.0%",
    "style": "Lager",
    "bitterness": "low",
    "volume": "500 ml",
    "tastingNotes": "Crisp malt, subtle hops",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Sarajevo Stout",
    "brewery": "6952dd0d2043d50c34b3cb5a",
    "description": "Dark stout with chocolate and coffee hints.",
    "price": 5.8,
    "alcohol": "7.5%",
    "style": "Stout",
    "bitterness": "medium",
    "volume": "330 ml",
    "tastingNotes": "Dark chocolate, espresso, roasted malt",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Belgrade Pale Ale",
    "brewery": "6952dd0d2043d50c34b3cb5b",
    "description": "Fruity and bitter pale ale.",
    "price": 4.8,
    "alcohol": "5.8%",
    "style": "Pale Ale",
    "bitterness": "medium",
    "volume": "500 ml",
    "tastingNotes": "Stone fruit, citrus, light bitterness",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Split Wheat Ale",
    "brewery": "6952dd0d2043d50c34b3cb5c",
    "description": "Smooth and refreshing wheat ale inspired by the Adriatic coast.",
    "price": 4.6,
    "alcohol": "5.2%",
    "style": "Wheat Ale",
    "bitterness": "low",
    "volume": "500 ml",
    "tastingNotes": "Citrus peel, wheat, light spice",
    "ingredients": ["Water", "Wheat malt", "Barley malt", "Yeast"]
  },
  {
    "name": "Mostar Tripel",
    "brewery": "6952dd0d2043d50c34b3cb60",
    "description": "Strong Belgian-style tripel, fruity and spicy.",
    "price": 6,
    "alcohol": "8.5%",
    "style": "Belgian Tripel",
    "bitterness": "medium",
    "volume": "330 ml",
    "tastingNotes": "Banana, clove, honey",
    "ingredients": ["Water", "Barley malt", "Sugar", "Yeast", "Hops"]
  },
  {
    "name": "Ljubljana Porter",
    "brewery": "6952dd0d2043d50c34b3cb5d",
    "description": "Creamy porter with deep roasted malt character.",
    "price": 5.3,
    "alcohol": "6.3%",
    "style": "Porter",
    "bitterness": "medium",
    "volume": "330 ml",
    "tastingNotes": "Cocoa, roasted malt, caramel",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Zadar Amber Ale",
    "brewery": "6952dd0d2043d50c34b3cb5e",
    "description": "Balanced amber ale with caramel malt backbone.",
    "price": 4.9,
    "alcohol": "5.4%",
    "style": "Amber Ale",
    "bitterness": "medium",
    "volume": "500 ml",
    "tastingNotes": "Caramel, biscuit, light hops",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  },
  {
    "name": "Skopje Saison",
    "brewery": "6952dd0d2043d50c34b3cb5f",
    "description": "Dry and spicy farmhouse ale with fruity yeast character.",
    "price": 5.1,
    "alcohol": "6.2%",
    "style": "Saison",
    "bitterness": "low",
    "volume": "500 ml",
    "tastingNotes": "Pepper, citrus, dry finish",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  }
];



const breweries = [
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb59"),
    name: "Dubrovnik Brewery",
    location: "Dubrovnik, Croatia",
    founded: 2016,
    shortDescription:
      "Coastal craft brewery inspired by the Adriatic lifestyle and Mediterranean flavors.",
    story:
      "Dubrovnik Brewery was founded to capture the spirit of the Adriatic coast through fresh, modern craft beer styles.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb58"),
    name: "Medvedgrad Brewery",
    location: "Zagreb, Croatia",
    founded: 1996,
    shortDescription:
      "Pioneer of the Croatian craft beer scene, blending tradition with bold modern brewing.",
    story:
      "Founded in Zagreb, Medvedgrad Brewery is one of the pioneers of Croatian craft beer culture.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb5a"),
    name: "Pivnica Sarajevo",
    location: "Sarajevo, Bosnia and Herzegovina",
    founded: 2004,
    shortDescription:
      "Traditional brewpub celebrating rich dark beers and Balkan hospitality.",
    story:
      "Located in the heart of Sarajevo, Pivnica Sarajevo blends tradition and modern brewing techniques.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb5b"),
    name: "Kabinet Brewery",
    location: "Branicevo, Serbia",
    founded: 2011,
    shortDescription:
      "Award-winning Serbian craft brewery focused on expressive hop-forward beers.",
    story:
      "Kabinet Brewery was founded to create bold and modern craft beers with strong character.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb5c"),
    name: "Bura Brew",
    location: "Split, Croatia",
    founded: 2018,
    shortDescription:
      "Modern Dalmatian craft brewery inspired by sea, sun, and wind.",
    story:
      "Bura Brew takes its name from the strong coastal wind shaping the Dalmatian region.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb5d"),
    name: "Union Brewery",
    location: "Ljubljana, Slovenia",
    founded: 1864,
    shortDescription:
      "Historic Slovenian brewery with over a century of brewing excellence.",
    story:
      "Union Brewery is one of the oldest and most respected breweries in Slovenia.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb5e"),
    name: "Garden Brewery",
    location: "Zagreb, Croatia",
    founded: 2016,
    shortDescription:
      "Internationally recognized craft brewery with experimental brewing style.",
    story:
      "The Garden Brewery started as a passion project and quickly gained global recognition.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb5f"),
    name: "Pivara Skopje",
    location: "Skopje, North Macedonia",
    founded: 1922,
    shortDescription:
      "Traditional Balkan brewery with strong regional identity.",
    story:
      "Pivara Skopje has been brewing beer for over a century and remains a regional icon.",
  },
  {
    _id: new mongoose.Types.ObjectId("6952dd0d2043d50c34b3cb60"),
    name: "Mostar Brewery",
    location: "Mostar, Bosnia and Herzegovina",
    founded: 2019,
    shortDescription:
      "Young craft brewery blending Belgian inspiration with local tradition.",
    story:
      "Mostar Brewery is a modern craft brewery inspired by Belgian styles and local heritage.",
  },
];



const seedBeers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
     await Beer.deleteMany();
    console.log("Old beers deleted");
 
    await Brewery.deleteMany();
    console.log("Old breweries deleted");
    
  await Brewery.insertMany(breweries);
    console.log("Breweries seeded");



    await Beer.insertMany(beers);
    console.log("Beers seeded");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedBeers();
