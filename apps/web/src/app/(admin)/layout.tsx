"use client";

import { AdminSidebar } from "@/components/shared/navigation";
import { TypeGuard } from "@/components/shared/type-guard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TypeGuard allow={["ADMIN"]}>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl p-6">{children}</div>
        </main>
      </div>
    </TypeGuard>
  );
}
