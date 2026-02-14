import mongoose from "mongoose";

const placementSchema = new mongoose.Schema({
  url: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  domainRating: {
    type: mongoose.Schema.Types.Number,
    required: false,
  },
  firstSeen: {
    type: mongoose.Schema.Types.Date,
  },
  lastSeen: {
    type: mongoose.Schema.Types.Date,
  },
});

const Placement = mongoose.model("Placement", placementSchema);

export default mongoose.modles.Placements || Placement;
