import mongoose from "mongoose";

const brewerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    founded: { type: Number, required: true },
    shortDescription: { type: String, required: true },
    story: { type: String, required: true },
    image: { type: String },
    imagePublicId: { type: String },
    lockedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    lockedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const Brewery = mongoose.model("Brewery", brewerySchema);
export default Brewery;
