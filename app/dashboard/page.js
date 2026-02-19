import OnboardingCard from "@/components/OnboardingCard";

export default function Dashboard() {
  return (
    <main className="bg-base-200 min-h-screen">
      <OnboardingCard
        heading={"Add your Google Ads ID"}
        description={
          "In order for us to be able to apply changes to your account, please add the ad ID located in the top right of your account"
        }
      />
    </main>
  );
}
