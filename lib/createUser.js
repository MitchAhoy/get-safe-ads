import User from "@/models/User";
import connectMongo from "./mongoose";

const createUser = async (id) => {
  try {
    await connectMongo();
    await User.findOneAndUpdate(
      { _id: id },
      {
        workspaceIds: [],
        currentWorkspaceId: "ObjectId('empty')",
      },
    );
  } catch (e) {
    console.error(e);
  }
};

export default createUser;
