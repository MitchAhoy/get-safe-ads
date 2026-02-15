import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  workspaceIds: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workspace" }],
    default: [],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
