"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc-client";

type UserType = "TALENT" | "EMPLOYER" | "ADMIN";

/**
 * Client-side guard that ensures the logged-in user has one of the allowed types.
 * If not, redirects them to their correct dashboard (or onboarding if no type set).
 * Admins always pass (they can access anything).
 */
export function TypeGuard({
  allow,
  children,
}: {
  allow: UserType[];
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: user, isLoading } = trpc.user.me.useQuery(undefined, {
    retry: false,
  });

  useEffect(() => {
    if (isLoading || !user) return;

    // Admins can access anything
    if (user.type === "ADMIN") return;

    if (!user.type) {
      router.replace("/onboarding");
      return;
    }

    if (!allow.includes(user.type)) {
      const dest =
        user.type === "EMPLOYER"
          ? "/employer-dashboard"
          : user.type === "TALENT"
            ? "/dashboard"
            : "/onboarding";
      router.replace(dest);
    }
  }, [user, isLoading, allow, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Admins always pass; non-admins must match allow list
  if (user?.type !== "ADMIN" && user?.type && !allow.includes(user.type)) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Redirecting...</div>
      </div>
    );
  }

  return <>{children}</>;
}
