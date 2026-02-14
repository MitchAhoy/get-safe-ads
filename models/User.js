import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  name: {
    type: mongoose.Schema.Types.String,
  },
  workplaceIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workspace" }],
});

const AccountList = mongoose.model("User", UserSchema);

export default mongoose.modles.AccountList || AccountList;
