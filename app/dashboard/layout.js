import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LayoutPrivate({ children }) {
  const session = await auth();

  !session && redirect("/");

  return children;
}
