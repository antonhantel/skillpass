"use client";

import dynamic from "next/dynamic";

// Prevent SSR/prerendering — Clerk requires runtime env vars
const OnboardingContent = dynamic(() => import("./content"), { ssr: false });

export default function OnboardingPage() {
  return <OnboardingContent />;
}
