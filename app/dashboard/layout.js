import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardShell from "@/components/DashboardShell";

export default async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session) redirect("/");

  return <DashboardShell session={session}>{children}</DashboardShell>;
}
