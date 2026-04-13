"use client";

import { trpc } from "@/lib/trpc-client";
import { ScoreCard } from "@/components/talent/score-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function ScorePage() {
  const { data: profile, isLoading } = trpc.talent.getProfile.useQuery();
  const utils = trpc.useUtils();

  const recalculate = trpc.score.recalculate.useMutation({
    onSuccess: () => {
      utils.talent.getProfile.invalidate();
    },
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  if (!profile) {
    return <div className="text-muted-foreground">Profile not found</div>;
  }

  const completedRefs = profile.references.filter(
    (r) => r.status === "COMPLETED"
  ).length;

  const hasMinData =
    profile.transcripts.length > 0 &&
    completedRefs >= 2 &&
    profile.assessments.length >= 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your SkillScore</h1>
        <Button
          variant="outline"
          onClick={() => recalculate.mutate()}
          disabled={recalculate.isPending}
        >
          <RefreshCw className={"mr-2 h-4 w-4" + (recalculate.isPending ? " animate-spin" : "")} />
          {recalculate.isPending ? "Calculating..." : "Recalculate"}
        </Button>
      </div>

      <ScoreCard
        overallScore={profile.overallSkillScore}
        academicScore={profile.academicScore}
        performanceScore={profile.performanceScore}
        peerSignalScore={profile.peerSignalScore}
        assessedAbilityScore={profile.assessedAbilityScore}
        confidence={profile.scoreConfidence}
      />

      {!hasMinData && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Complete your profile to generate a score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Badge variant={profile.transcripts.length > 0 ? "default" : "secondary"}>
                {profile.transcripts.length > 0 ? "Done" : "Needed"}
              </Badge>
              Upload at least 1 transcript
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={completedRefs >= 2 ? "default" : "secondary"}>
                {completedRefs >= 2 ? "Done" : `${completedRefs}/2`}
              </Badge>
              Get at least 2 completed references
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={profile.assessments.length >= 1 ? "default" : "secondary"}>
                {profile.assessments.length >= 1 ? "Done" : "Needed"}
              </Badge>
              Complete at least 1 assessment
            </div>
          </CardContent>
        </Card>
      )}

      {/* Score History */}
      {profile.scoreHistory.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Score History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {profile.scoreHistory.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between text-sm"
                >
                  <div>
                    <span className="font-medium">{entry.overallScore}</span>
                    <span className="ml-2 text-muted-foreground">
                      {entry.triggerEvent.replace(/_/g, " ")}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(entry.recordedAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
