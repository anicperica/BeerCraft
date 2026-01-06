// backend/seeds/beerSeed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Beer from "../models/beerModel.js"

dotenv.config();

const beers =[
  {
    "name": "Medvedgrad Pale Ale",
    "brewery": "6952dd0d2043d50c34b3cb58",
    "description": "Classic pale ale, hoppy and refreshing.",
    "price": 5,
    "alcohol": "5.5%",
    "image": "/images/piva1.jpg",
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
    "image": "/images/piva2.jpg",
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
    "image": "/images/piva3.jpg",
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
    "image": "/images/piva4.jpg",
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
    "image": "/images/piva5.jpg",
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
    "image": "/images/piva6.jpeg",
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
    "image": "/images/piva7.jpeg",
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
    "image": "/images/piva8.jpg",
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
    "image": "/images/piva9.jpg",
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
    "image": "/images/piva10.jpg",
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
    "image": "/images/piva11.jpg",
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
    "image": "/images/piva3.jpg",
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
    "image": "/images/piva2.jpg",
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
    "image": "/images/piva1.jpg",
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
    "image": "/images/piva11.jpg",
    "style": "Saison",
    "bitterness": "low",
    "volume": "500 ml",
    "tastingNotes": "Pepper, citrus, dry finish",
    "ingredients": ["Water", "Barley malt", "Hops", "Yeast"]
  }
];


const seedBeers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

 
    await Beer.insertMany(beers);
    console.log("Beers seeded");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedBeers();
