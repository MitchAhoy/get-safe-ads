import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function checkHasPermissions() {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { error: "You do not have permissions to make this action." },
      { status: 401 },
    );
  }
}
