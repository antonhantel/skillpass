"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLSCORE_MIN, SKILLSCORE_MAX, CONFIDENCE_THIN, CONFIDENCE_MODERATE } from "@skillpass/shared";

interface ScoreCardProps {
  overallScore: number | null;
  academicScore: number | null;
  performanceScore: number | null;
  peerSignalScore: number | null;
  assessedAbilityScore: number | null;
  confidence: number | null;
}

function getScoreColor(score: number): string {
  if (score >= 750) return "text-green-600";
  if (score >= 600) return "text-blue-600";
  if (score >= 450) return "text-yellow-600";
  return "text-red-600";
}

function getConfidenceLabel(confidence: number | null): string {
  if (confidence == null || confidence === 0) return "No data";
  if (confidence <= CONFIDENCE_THIN) return "Thin file";
  if (confidence <= CONFIDENCE_MODERATE) return "Moderate";
  return "Thick file";
}

function ScoreMeter({ score, label }: { score: number | null; label: string }) {
  if (score == null) {
    return (
      <div className="text-center">
        <div className="text-2xl font-light text-muted-foreground">--</div>
        <div className="mt-1 text-xs text-muted-foreground">{label}</div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export function ScoreCard(props: ScoreCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">SkillScore</CardTitle>
          <Badge variant="secondary">{getConfidenceLabel(props.confidence)}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Score */}
        <div className="text-center">
          {props.overallScore != null ? (
            <div className={`text-5xl font-bold ${getScoreColor(props.overallScore)}`}>
              {props.overallScore}
            </div>
          ) : (
            <div className="text-3xl font-light text-muted-foreground">
              Not enough data
            </div>
          )}
          <div className="mt-1 text-xs text-muted-foreground">
            {SKILLSCORE_MIN} - {SKILLSCORE_MAX} scale
          </div>
        </div>

        {/* Sub-scores */}
        <div className="grid grid-cols-4 gap-4 border-t pt-4">
          <ScoreMeter score={props.academicScore} label="Academic" />
          <ScoreMeter score={props.performanceScore} label="Performance" />
          <ScoreMeter score={props.peerSignalScore} label="Peer Signal" />
          <ScoreMeter score={props.assessedAbilityScore} label="Assessed" />
        </div>
      </CardContent>
    </Card>
  );
}
