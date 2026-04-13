"use client";

import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building2 } from "lucide-react";

export default function OnboardingContent() {
  const router = useRouter();

  // Auto-create user in DB if not exists
  const { data: user, isLoading: userLoading, error: userError } = trpc.user.me.useQuery(
    undefined,
    { retry: 2 }
  );

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
        <div className="text-center space-y-2">
          <div className="text-destructive">Something went wrong setting up your account.</div>
          <p className="text-sm text-muted-foreground">{userError.message}</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const isSubmitting = setType.isPending;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to SkillPass</h1>
          <p className="mt-2 text-muted-foreground">
            How will you be using SkillPass?
          </p>
        </div>

        {setType.error && (
          <div className="rounded-md bg-destructive/10 p-3 text-center text-sm text-destructive">
            {setType.error.message}
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
      </div>
    </div>
  );
}
