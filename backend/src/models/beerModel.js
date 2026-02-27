import mongoose from "mongoose";

const beerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brewery: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brewery",
      required: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    alcohol: { type: String, required: true },
    image: { type: String },
    imagePublicId: { type: String},

 
    style: { type: String, required: true },
    bitterness: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true,
    },
    volume: { type: String, required: true },
    tastingNotes: { type: String, required: true },
    ingredients: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Beer = mongoose.model("Beer", beerSchema);
export default Beer;
