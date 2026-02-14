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

    if (!body.placementUrl) {
      return NextResponse.json(
        { error: "Placement URL required" },
        { status: 400 },
      );
    }

    await connectMongo();

    const user = await User.findById(session.user.id);
    const workspace = await Workspace.create({
      name: body.workspaceName,
      users: [...user._id],
    });
    user.workspaceIds.push(workspace._id);
    await workspace.save();

    return NextResponse.json({
      message: "New workspace create - ID: " + workspace._id,
    });
  } catch (e) {
    console.error("Something has gone wrong in the workspace route: " + e);
    NextResponse.json(
      {
        error: e.message,
      },
      { status: 500 },
    );
  }
}
