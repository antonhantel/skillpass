import OnboardingContent from "./content";

// Force dynamic rendering — Supabase auth requires runtime cookies
export const dynamic = "force-dynamic";

export default function OnboardingPage() {
  return <OnboardingContent />;
}
