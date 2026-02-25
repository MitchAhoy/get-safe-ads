import { auth } from "@/auth";
import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoose";
import Workspace from "@/models/Workspace";
import User from "@/models/User";

export async function POST(req) {
  const { cid } = await req.json();
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { error: "You do not have permissions to make this action." },
      { status: 401 },
    );
  }

  if (cid) {
    await connectMongo();
    const workspace = Workspace.findById();
    return NextResponse.json({ message: user }, { status: 200 });
  }

  return NextResponse({ error: "You made a request" }, { status: 200 });
}
