import { auth } from "@/auth";
import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoose";
import Workspace from "@/models/Workspace";
import { checkHasPermissions } from "@/lib/utils";

export async function PATCH(req) {
  checkHasPermissions();
}
