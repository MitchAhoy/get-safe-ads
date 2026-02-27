import OnboardingCard from "@/components/OnboardingCard";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  return (
    <main className="bg-base-200 min-h-screen">
      <OnboardingCard session={session} />
    </main>
  );
}
