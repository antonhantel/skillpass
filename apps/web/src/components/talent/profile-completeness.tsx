"use client";

import { Progress } from "@/components/ui/progress";
import { PROFILE_COMPLETENESS } from "@skillpass/shared";
import { CheckCircle2, Circle } from "lucide-react";

interface CompletenessProps {
  hasBasicInfo: boolean;
  hasEducation: boolean;
  hasWorkHistory: boolean;
  hasTranscript: boolean;
  referenceCount: number;
  assessmentCount: number;
}

export function ProfileCompleteness(props: CompletenessProps) {
  const items = [
    {
      label: "Basic info",
      done: props.hasBasicInfo,
      weight: PROFILE_COMPLETENESS.basicInfo,
    },
    {
      label: "Education",
      done: props.hasEducation,
      weight: PROFILE_COMPLETENESS.education,
    },
    {
      label: "Work history",
      done: props.hasWorkHistory,
      weight: PROFILE_COMPLETENESS.workHistory,
    },
    {
      label: "Transcript",
      done: props.hasTranscript,
      weight: PROFILE_COMPLETENESS.transcript,
    },
    {
      label: "References (2+)",
      done: props.referenceCount >= 2,
      weight: PROFILE_COMPLETENESS.references,
    },
    {
      label: "Assessment",
      done: props.assessmentCount >= 1,
      weight: PROFILE_COMPLETENESS.assessment,
    },
  ];

  const completeness = items.reduce(
    (sum, item) => sum + (item.done ? item.weight : 0),
    0
  );
  const percentage = Math.round(completeness * 100);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Profile completeness</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <Progress value={percentage} />
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-sm">
            {item.done ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <Circle className="h-4 w-4 text-muted-foreground" />
            )}
            <span className={item.done ? "text-muted-foreground" : ""}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
