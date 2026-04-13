"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  Briefcase,
  ChevronUp,
  Target,
  MapPin,
  Clock,
} from "lucide-react";

type RoleStatus = "ACTIVE" | "PAUSED" | "FILLED" | "ARCHIVED";

interface RoleItem {
  id: string;
  title: string;
  status: string;
  description: string | null;
  weightConfig: unknown;
  autoQualifyThreshold: number | null;
  requiredSkills: unknown;
  preferredLocation: string | null;
  experienceMin: number | null;
  experienceMax: number | null;
}

const STATUS_BADGES: Record<
  RoleStatus,
  { label: string; variant: "default" | "secondary" | "outline" | "destructive" }
> = {
  ACTIVE: { label: "Active", variant: "default" },
  PAUSED: { label: "Paused", variant: "secondary" },
  FILLED: { label: "Filled", variant: "outline" },
  ARCHIVED: { label: "Archived", variant: "outline" },
};

const WEIGHT_LABELS = [
  { key: "academic" as const, label: "Academic" },
  { key: "performance" as const, label: "Performance" },
  { key: "peerSignal" as const, label: "Peer Signal" },
  { key: "assessedAbility" as const, label: "Assessed Ability" },
];

export default function RolesPage() {
  const { data: roles, isLoading } = trpc.employer.listRoles.useQuery();
  const utils = trpc.useUtils();

  const createRole = trpc.employer.createRole.useMutation({
    onSuccess: () => {
      utils.employer.listRoles.invalidate();
      resetForm();
    },
  });

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [weights, setWeights] = useState({
    academic: 0.25,
    performance: 0.25,
    peerSignal: 0.25,
    assessedAbility: 0.25,
  });
  const [autoQualifyThreshold, setAutoQualifyThreshold] = useState<
    number | undefined
  >(undefined);
  const [preferredLocation, setPreferredLocation] = useState("");
  const [experienceMin, setExperienceMin] = useState<number | undefined>(
    undefined
  );
  const [experienceMax, setExperienceMax] = useState<number | undefined>(
    undefined
  );

  function resetForm() {
    setTitle("");
    setDescription("");
    setWeights({
      academic: 0.25,
      performance: 0.25,
      peerSignal: 0.25,
      assessedAbility: 0.25,
    });
    setAutoQualifyThreshold(undefined);
    setPreferredLocation("");
    setExperienceMin(undefined);
    setExperienceMax(undefined);
    setShowForm(false);
  }

  function updateWeight(
    key: keyof typeof weights,
    newValue: number
  ) {
    const clamped = Math.max(0, Math.min(1, newValue));
    const otherKeys = WEIGHT_LABELS.map((w) => w.key).filter(
      (k) => k !== key
    );
    const remaining = 1 - clamped;
    const otherSum = otherKeys.reduce((sum, k) => sum + weights[k], 0);

    const updated = { ...weights, [key]: clamped };

    if (otherSum > 0) {
      otherKeys.forEach((k) => {
        updated[k] = Math.max(0, (weights[k] / otherSum) * remaining);
      });
    } else {
      const share = remaining / otherKeys.length;
      otherKeys.forEach((k) => {
        updated[k] = share;
      });
    }

    setWeights(updated);
  }

  const weightSum = Object.values(weights).reduce((a, b) => a + b, 0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    createRole.mutate({
      title: title.trim(),
      description: description.trim() || undefined,
      weightConfig: {
        academic: Math.round(weights.academic * 100) / 100,
        performance: Math.round(weights.performance * 100) / 100,
        peerSignal: Math.round(weights.peerSignal * 100) / 100,
        assessedAbility: Math.round(weights.assessedAbility * 100) / 100,
      },
      autoQualifyThreshold,
      preferredLocation: preferredLocation.trim() || undefined,
      experienceMin,
      experienceMax,
    });
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl p-6">
        <div className="flex h-64 items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Roles</h1>
          <p className="text-muted-foreground">
            Define roles with custom scoring weights to automatically rank
            candidates.
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Cancel
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Create Role
            </>
          )}
        </Button>
      </div>

      {/* Create Role Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Create New Role</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Role title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Senior Frontend Engineer"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredLocation">Preferred location</Label>
                  <Input
                    id="preferredLocation"
                    placeholder="e.g., San Francisco, Remote"
                    value={preferredLocation}
                    onChange={(e) => setPreferredLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the role..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="autoQualify">
                    Auto-qualify threshold
                  </Label>
                  <Input
                    id="autoQualify"
                    type="number"
                    placeholder="e.g., 80"
                    min={0}
                    max={100}
                    value={autoQualifyThreshold ?? ""}
                    onChange={(e) =>
                      setAutoQualifyThreshold(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expMin">Min experience (years)</Label>
                  <Input
                    id="expMin"
                    type="number"
                    placeholder="e.g., 3"
                    min={0}
                    value={experienceMin ?? ""}
                    onChange={(e) =>
                      setExperienceMin(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expMax">Max experience (years)</Label>
                  <Input
                    id="expMax"
                    type="number"
                    placeholder="e.g., 10"
                    min={0}
                    value={experienceMax ?? ""}
                    onChange={(e) =>
                      setExperienceMax(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                  />
                </div>
              </div>

              {/* Weight Configuration */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Score weight configuration</Label>
                  <span
                    className={`text-xs ${
                      Math.abs(weightSum - 1) < 0.01
                        ? "text-green-600"
                        : "text-destructive"
                    }`}
                  >
                    Total: {(weightSum * 100).toFixed(0)}%
                  </span>
                </div>
                {WEIGHT_LABELS.map(({ key, label }) => (
                  <div key={key} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{label}</span>
                      <span className="font-medium">
                        {(weights[key] * 100).toFixed(0)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={Math.round(weights[key] * 100)}
                      onChange={(e) =>
                        updateWeight(key, Number(e.target.value) / 100)
                      }
                      className="w-full accent-primary"
                    />
                  </div>
                ))}
              </div>

              <Button
                type="submit"
                disabled={!title.trim() || createRole.isPending}
              >
                {createRole.isPending ? "Creating..." : "Create Role"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Roles List */}
      {roles?.length === 0 && !showForm && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Briefcase className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No roles yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create your first role to start ranking candidates automatically.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {(roles as RoleItem[] | undefined)?.map((role) => {
          const status = (role.status as RoleStatus) || "ACTIVE";
          const badge = STATUS_BADGES[status] ?? STATUS_BADGES.ACTIVE;

          return (
            <Card key={role.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{role.title}</CardTitle>
                  <Badge variant={badge.variant}>{badge.label}</Badge>
                </div>
                {role.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {role.description}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Weight Breakdown */}
                <div className="space-y-1.5">
                  {WEIGHT_LABELS.map(({ key, label }) => {
                    const wc = role.weightConfig as Record<string, number> | null;
                    const value = wc?.[key] ?? 0;
                    return (
                      <div key={key} className="flex items-center gap-2">
                        <span className="w-24 text-xs text-muted-foreground">
                          {label}
                        </span>
                        <Progress
                          value={value * 100}
                          className="h-2 flex-1"
                        />
                        <span className="w-10 text-right text-xs font-medium">
                          {(value * 100).toFixed(0)}%
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 pt-1 text-xs text-muted-foreground">
                  {role.autoQualifyThreshold != null && (
                    <span className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      Threshold: {role.autoQualifyThreshold}
                    </span>
                  )}
                  {role.preferredLocation && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {role.preferredLocation}
                    </span>
                  )}
                  {(role.experienceMin != null ||
                    role.experienceMax != null) && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {role.experienceMin ?? 0}-{role.experienceMax ?? "any"}{" "}
                      yrs
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
