"use client";

import { TalentSidebar } from "@/components/shared/navigation";
import { TypeGuard } from "@/components/shared/type-guard";

export default function TalentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TypeGuard allow={["TALENT"]}>
      <div className="flex min-h-screen">
        <TalentSidebar />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-5xl p-6">{children}</div>
        </main>
      </div>
    </TypeGuard>
  );
}
