"use client";

import { EmployerSidebar } from "@/components/shared/navigation";
import { TypeGuard } from "@/components/shared/type-guard";

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TypeGuard allow={["EMPLOYER"]}>
      <div className="flex min-h-screen">
        <EmployerSidebar />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-5xl p-6">{children}</div>
        </main>
      </div>
    </TypeGuard>
  );
}
