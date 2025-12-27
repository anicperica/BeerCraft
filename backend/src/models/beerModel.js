import mongoose from "mongoose";

const beerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brewery: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  alcohol: { type: String, required: true },
  image: { type: String, required: true }
}, { timestamps: true });


const Beer = mongoose.model("Beer", beerSchema);

export default Beer;
