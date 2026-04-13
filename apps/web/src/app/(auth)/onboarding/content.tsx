"use client";

import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building2 } from "lucide-react";

export default function OnboardingContent() {
  const router = useRouter();
  const setType = trpc.user.setType.useMutation({
    onSuccess: (data) => {
      if (data.type === "TALENT") {
        router.push("/dashboard");
      } else {
        router.push("/employer-dashboard");
      }
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to SkillPass</h1>
          <p className="mt-2 text-muted-foreground">
            How will you be using SkillPass?
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            className="cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => setType.mutate({ type: "TALENT" })}
          >
            <CardHeader className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">I'm looking for a job</CardTitle>
              <CardDescription>
                Build your SkillPass profile, upload transcripts, collect
                references, and share your verified credentials with employers.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                variant="outline"
                className="w-full"
                disabled={setType.isPending}
              >
                Join as Talent
              </Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => setType.mutate({ type: "EMPLOYER" })}
          >
            <CardHeader className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">I'm hiring</CardTitle>
              <CardDescription>
                Search pre-vetted candidates, filter by verified skills and
                scores, and skip redundant screening rounds.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                variant="outline"
                className="w-full"
                disabled={setType.isPending}
              >
                Join as Employer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
