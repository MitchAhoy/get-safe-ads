import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoose";
import Workspace from "@/models/Workspace";
import { checkHasPermissions } from "@/lib/utils";

export async function PATCH(req, { params }) {
  checkHasPermissions();

  const request = NextRequest();

  return NextResponse.json({ message: params });
}
