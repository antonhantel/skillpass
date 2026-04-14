"use client";

import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building2, Shield } from "lucide-react";

export default function OnboardingContent() {
  const router = useRouter();

  // Auto-create user in DB if not exists
  const { data: user, isLoading: userLoading, error: userError } = trpc.user.me.useQuery(
    undefined,
    { retry: 2 }
  );

  // Check if platform has any admins (to show bootstrap option)
  const { data: hasAdmin } = trpc.user.hasAdmin.useQuery(undefined, { retry: false });

  const setType = trpc.user.setType.useMutation({
    onSuccess: (data) => {
      if (data.type === "TALENT") {
        router.push("/dashboard");
      } else if (data.type === "EMPLOYER") {
        router.push("/employer-dashboard");
      } else {
        router.push("/admin");
      }
    },
  });

  const becomeAdmin = trpc.user.becomeFirstAdmin.useMutation({
    onSuccess: () => router.push("/admin"),
  });

  // If user already has a type, redirect them
  if (user?.type === "TALENT") {
    router.replace("/dashboard");
    return null;
  }
  if (user?.type === "EMPLOYER") {
    router.replace("/employer-dashboard");
    return null;
  }
  if (user?.type === "ADMIN") {
    router.replace("/admin");
    return null;
  }

  if (userLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-muted-foreground">Setting up your account...</div>
      </div>
    );
  }

  if (userError) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-2 max-w-md">
          <div className="text-destructive font-medium">Something went wrong setting up your account.</div>
          <p className="text-sm text-muted-foreground">{userError.message}</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const isSubmitting = setType.isPending || becomeAdmin.isPending;
  const error = setType.error || becomeAdmin.error;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to SkillPass</h1>
          <p className="mt-2 text-muted-foreground">
            How will you be using SkillPass?
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-destructive/10 p-3 text-center text-sm text-destructive">
            {error.message}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            className="cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => !isSubmitting && setType.mutate({ type: "TALENT" })}
          >
            <CardHeader className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">I&apos;m looking for a job</CardTitle>
              <CardDescription>
                Build your SkillPass profile, upload transcripts, collect
                references, and share your verified credentials with employers.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                variant="outline"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Setting up..." : "Join as Talent"}
              </Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => !isSubmitting && setType.mutate({ type: "EMPLOYER" })}
          >
            <CardHeader className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">I&apos;m hiring</CardTitle>
              <CardDescription>
                Search pre-vetted candidates, filter by verified skills and
                scores, and skip redundant screening rounds.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                variant="outline"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Setting up..." : "Join as Employer"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Admin bootstrap: only shown when no admin exists yet */}
        {hasAdmin === false && (
          <Card className="border-dashed">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Shield className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-base">Platform Setup</CardTitle>
              <CardDescription className="text-xs">
                No admin exists yet. The first user can claim admin access to
                manage this platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button
                variant="ghost"
                size="sm"
                disabled={isSubmitting}
                onClick={() => !isSubmitting && becomeAdmin.mutate()}
              >
                Claim Admin Access
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
