import { auth } from "@/auth";
import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoose";

export async function POST(req) {
  const { cid } = await req.json();
  const session = auth();

  if (!session) {
    return NextResponse.json(
      { error: "You do not have permissions to make this action." },
      { status: 401 },
    );
  }

  await connectMongo();

  return NextResponse({ error: "You made a request" }, { status: 200 });
}
