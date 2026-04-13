"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { trpc } from "@/lib/trpc-client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Loader2,
  ShieldCheck,
  AlertTriangle,
  Clock,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DIMENSIONS = [
  "technical_ability",
  "leadership",
  "communication",
  "reliability",
  "creativity",
  "coachability",
  "work_ethic",
  "collaboration",
] as const;

const FORCED_CHOICE_OPTIONS = [
  { value: "top_5_pct", label: "Top 5%" },
  { value: "top_10_pct", label: "Top 10%" },
  { value: "top_25_pct", label: "Top 25%" },
  { value: "top_50_pct", label: "Top 50%" },
  { value: "bottom_50_pct", label: "Bottom 50%" },
] as const;

const SCORE_ANCHORS: Record<number, string> = {
  1: "Poor",
  2: "Below Average",
  3: "Average",
  4: "Above Average",
  5: "Exceptional",
};

const RELATIONSHIP_LABELS: Record<string, string> = {
  MANAGER: "Manager",
  PEER: "Peer / Colleague",
  DIRECT_REPORT: "Direct Report",
  PROFESSOR: "Professor / Instructor",
  CLIENT: "Client",
  MENTOR: "Mentor",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** "technical_ability" -> "Technical Ability" */
function formatDimension(dim: string): string {
  return dim
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------

export default function RaterResponsePage() {
  const { token } = useParams<{ token: string }>();

  // Data fetching
  const {
    data: reference,
    isLoading,
    error,
  } = trpc.reference.getByToken.useQuery(
    { token },
    { enabled: !!token, retry: false }
  );

  const submitMutation = trpc.reference.submit.useMutation();

  // Form state
  const [dimensionScores, setDimensionScores] = useState<
    Record<string, number>
  >({});
  type RankingValue = (typeof FORCED_CHOICE_OPTIONS)[number]["value"];
  const [forcedChoiceRankings, setForcedChoiceRankings] = useState<
    Record<string, RankingValue>
  >({});
  const [freeTextResponses, setFreeTextResponses] = useState<
    Record<string, string>
  >({});
  const [submitted, setSubmitted] = useState(false);

  // Handlers
  const handleSetScore = (dim: string, val: number) => {
    setDimensionScores((prev) => ({ ...prev, [dim]: val }));
  };

  const handleSetRanking = (dim: string, val: string) => {
    setForcedChoiceRankings((prev) => ({ ...prev, [dim]: val as RankingValue }));
  };

  const handleSetFreeText = (dim: string, val: string) => {
    if (val.length <= 200) {
      setFreeTextResponses((prev) => ({ ...prev, [dim]: val }));
    }
  };

  const allScoresFilled = DIMENSIONS.every((d) => dimensionScores[d] !== undefined);
  const allRankingsFilled = DIMENSIONS.every((d) => forcedChoiceRankings[d] !== undefined);
  const canSubmit = allScoresFilled && allRankingsFilled;

  const handleSubmit = async () => {
    const filteredFreeText = Object.fromEntries(
      Object.entries(freeTextResponses).filter(([, v]) => v.trim().length > 0)
    );

    await submitMutation.mutateAsync({
      token,
      dimensionScores,
      forcedChoiceRankings,
      freeTextResponses:
        Object.keys(filteredFreeText).length > 0 ? filteredFreeText : undefined,
    });

    setSubmitted(true);
  };

  const candidateName = reference?.candidateName ?? "this candidate";

  // =========================================================================
  // RENDER
  // =========================================================================

  // Loading
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Loading reference form...
          </p>
        </div>
      </div>
    );
  }

  // Error states
  if (error) {
    const message = error.message ?? "";
    const isNotFound =
      error.data?.code === "NOT_FOUND" || message.includes("not found");
    const isExpired = message.toLowerCase().includes("expired");
    const isAlreadySubmitted =
      message.toLowerCase().includes("already been submitted");

    if (isAlreadySubmitted) {
      return (
        <ErrorShell
          icon={<CheckCircle2 className="h-12 w-12 text-green-500" />}
          title="Reference Already Submitted"
          description="This reference has already been submitted. Thank you!"
        />
      );
    }

    if (isExpired) {
      return (
        <ErrorShell
          icon={<Clock className="h-12 w-12 text-amber-500" />}
          title="Link Expired"
          description="This reference request has expired. Please ask the candidate to send a new request."
        />
      );
    }

    if (isNotFound) {
      return (
        <ErrorShell
          icon={<AlertTriangle className="h-12 w-12 text-destructive" />}
          title="Invalid Link"
          description="This reference link is invalid. Please check the link in your email and try again."
        />
      );
    }

    return (
      <ErrorShell
        icon={<AlertTriangle className="h-12 w-12 text-destructive" />}
        title="Something Went Wrong"
        description="We couldn't load this reference form. Please try again later."
      />
    );
  }

  // Success (post-submit)
  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="py-12 space-y-4">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
            <h1 className="text-2xl font-bold">Thank you for your reference!</h1>
            <p className="text-muted-foreground">
              Your feedback helps {candidateName} build a verified skill profile.
              Structured references like yours make hiring more fair and
              efficient for everyone.
            </p>
            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-3">
                Want your own verified skill profile? It&apos;s free.
              </p>
              <Button asChild variant="outline">
                <Link href="/sign-up">Create Your SkillPass</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main form
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold tracking-tight">SkillPass</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            You&apos;ve been asked to provide a reference for {candidateName}
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            Your structured feedback helps build a verified professional
            profile. This takes about 5 minutes.
          </p>
          {reference?.relationshipType && (
            <div className="mt-3">
              <Badge variant="secondary">
                {RELATIONSHIP_LABELS[reference.relationshipType] ??
                  reference.relationshipType}
              </Badge>
              {reference.relationshipDuration && (
                <Badge variant="outline" className="ml-2">
                  {reference.relationshipDuration} months
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Score legend */}
        <Card className="mb-6">
          <CardContent className="py-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">
              Rating Scale
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-1 text-xs text-muted-foreground">
              {Object.entries(SCORE_ANCHORS).map(([val, label]) => (
                <div key={val}>
                  <span className="font-medium">{val}</span> &mdash; {label}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dimension rows */}
        <div className="space-y-4">
          {DIMENSIONS.map((dim) => (
            <Card key={dim}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  {formatDimension(dim)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Score (1-5 radio buttons) */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    Rating
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleSetScore(dim, val)}
                        className={cn(
                          "flex-1 min-w-[56px] rounded-md border px-2 py-2.5 text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          dimensionScores[dim] === val
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  {dimensionScores[dim] !== undefined && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {SCORE_ANCHORS[dimensionScores[dim]]}
                    </p>
                  )}
                </div>

                {/* Forced-choice ranking */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    Compared to all professionals you&apos;ve worked with
                  </p>
                  <select
                    value={forcedChoiceRankings[dim] ?? ""}
                    onChange={(e) => handleSetRanking(dim, e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>
                      Select a ranking...
                    </option>
                    {FORCED_CHOICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Free text (optional) */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Additional context{" "}
                    <span className="font-normal">(optional)</span>
                  </p>
                  <Textarea
                    placeholder={`Any specific examples of ${formatDimension(dim).toLowerCase()}?`}
                    value={freeTextResponses[dim] ?? ""}
                    onChange={(e) => handleSetFreeText(dim, e.target.value)}
                    rows={2}
                    className="resize-none"
                  />
                  <p className="mt-1 text-xs text-muted-foreground text-right">
                    {(freeTextResponses[dim] ?? "").length}/200
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {!canSubmit && (
            <p className="text-sm text-muted-foreground">
              Please rate all dimensions and select a ranking for each to
              continue.
            </p>
          )}
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={!canSubmit || submitMutation.isPending}
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Reference"
            )}
          </Button>

          {submitMutation.isError && (
            <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
              Something went wrong while submitting. Please try again.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-muted-foreground">
          <p>
            Your response is confidential and will be aggregated with other
            references.
          </p>
          <p className="mt-1">
            Powered by{" "}
            <Link href="/" className="text-primary hover:underline">
              SkillPass
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Error shell component
// ---------------------------------------------------------------------------

function ErrorShell({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="py-12 space-y-4">
          <div className="flex justify-center">{icon}</div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
          <div className="pt-4">
            <Button asChild variant="outline">
              <Link href="/">Go to SkillPass</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
