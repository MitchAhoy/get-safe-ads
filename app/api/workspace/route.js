import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/lib/mongoose";
import User from "@/models/User";
import Workspace from "@/models/Workspace";

export async function POST(req) {
  try {
    const body = await req.json();
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { error: "You do not have permissions to make this action." },
        { status: 401 },
      );
    }

    if (!body.workspaceName) {
      return NextResponse.json(
        { error: "Workspace name required" },
        { status: 400 },
      );
    }

    await connectMongo();

    const user = await User.findById(session.user.id);
    if (!user)
      return NextResponse.json({ error: "No user found" }, { status: 404 });
    const workspace = await Workspace.create({
      name: body.workspaceName,
      users: [user._id],
    });

    if (!user.workspaceIds) {
      user.workspaceIds = [];
    }

    user.workspaceIds.push(workspace._id);
    await user.save();

    return NextResponse.json(
      {
        message: "New workspace create - ID: " + workspace._id,
      },
      { status: 200 },
    );
  } catch (e) {
    console.error("Workspace route error: ", e);
    return NextResponse.json(
      {
        error: e.message,
      },
      { status: 500 },
    );
  }
}
