import type { Metadata } from "next";
import { TRPCProvider } from "@/lib/trpc-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillPass - Your Skills Should Follow You",
  description:
    "The credit score for professional ability. Build a portable, employer-accepted profile that replaces redundant screening.",
};

// Force dynamic rendering — Supabase auth requires runtime cookies
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
