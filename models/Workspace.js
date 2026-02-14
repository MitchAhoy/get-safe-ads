import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    require: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Workspace = mongoose.model("Workspace", workspaceSchema);

export default mongoose.modles.Workspace || Workspace;
