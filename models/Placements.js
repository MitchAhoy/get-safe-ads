import mongoose from "mongoose";

const placementSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  domainRating: {
    type: Number,
    required: false,
  },
  firstSeen: {
    type: Date,
  },
  lastSeen: {
    type: Date,
  },
});

const Placement = mongoose.model("Placement", placementSchema);

export default mongoose.modles.Placements || Placement;
