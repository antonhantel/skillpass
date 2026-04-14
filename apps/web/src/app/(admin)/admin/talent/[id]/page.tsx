"use client";

import { use, useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  BarChart3,
  GraduationCap,
  Briefcase,
  Users,
  ClipboardCheck,
  MapPin,
  Phone,
  Linkedin,
  Save,
  ExternalLink,
} from "lucide-react";

export default function AdminTalentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: talentProfileId } = use(params);
  const utils = trpc.useUtils();
  const [scoreInput, setScoreInput] = useState("");
  const [confidenceInput, setConfidenceInput] = useState("");

  // Find the user via the talent profile (we fetch all profiles and find by id)
  // Better: add an admin.getTalentProfile endpoint. Using listTalentProfiles then filtering for simplicity:
  const { data: profileList } = trpc.admin.listTalentProfiles.useQuery(
    { page: 1, limit: 100, sortBy: "created" },
    { retry: false }
  );

  const profileItem = profileList?.profiles.find((p) => p.id === talentProfileId);

  const { data: user } = trpc.admin.getUser.useQuery(
    { id: profileItem?.user?.id ?? "" },
    { enabled: !!profileItem?.user?.id, retry: false }
  );

  const override = trpc.admin.overrideSkillScore.useMutation({
    onSuccess: () => {
      utils.admin.getUser.invalidate();
      utils.admin.listTalentProfiles.invalidate();
      setScoreInput("");
      setConfidenceInput("");
    },
  });

  const profile = user?.talentProfile;

  if (!profileList) {
    return <div className="flex h-64 items-center justify-center text-muted-foreground">Loading...</div>;
  }

  if (!profile || !user) {
    return <div className="flex h-64 items-center justify-center text-destructive">Profile not found</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/talent">
          <Button variant="ghost" size="sm" className="mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Talent
          </Button>
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <Badge variant="outline">@{profile.username}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
              <span>{user.email}</span>
              {profile.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {profile.location}
                </span>
              )}
              {profile.phoneNumber && (
                <span className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  {profile.phoneNumber}
                </span>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <Linkedin className="h-3 w-3" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
          <Link href={`/p/${profile.username}`} target="_blank">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-1" />
              Public Profile
            </Button>
          </Link>
        </div>
      </div>

      {/* Score Override */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            SkillScore
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <ScoreStat label="Overall" value={profile.overallSkillScore} />
            <ScoreStat label="Academic" value={profile.academicScore} />
            <ScoreStat label="Performance" value={profile.performanceScore} />
            <ScoreStat label="Peer Signal" value={profile.peerSignalScore} />
            <ScoreStat label="Assessed Ability" value={profile.assessedAbilityScore} />
            <ScoreStat
              label="Confidence"
              value={
                profile.scoreConfidence != null
                  ? profile.scoreConfidence * 100
                  : null
              }
              suffix="%"
            />
          </div>

          <div className="border-t pt-4">
            <Label className="text-xs text-muted-foreground">
              Override Score (admin only)
            </Label>
            <div className="flex gap-2 mt-2">
              <Input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="Score (0-100)"
                value={scoreInput}
                onChange={(e) => setScoreInput(e.target.value)}
                className="max-w-[150px]"
              />
              <Input
                type="number"
                step="0.01"
                min="0"
                max="1"
                placeholder="Confidence (0-1)"
                value={confidenceInput}
                onChange={(e) => setConfidenceInput(e.target.value)}
                className="max-w-[180px]"
              />
              <Button
                size="sm"
                onClick={() =>
                  override.mutate({
                    talentProfileId: profile.id,
                    overallSkillScore: scoreInput ? Number(scoreInput) : null,
                    scoreConfidence: confidenceInput ? Number(confidenceInput) : null,
                  })
                }
                disabled={override.isPending}
              >
                <Save className="h-4 w-4 mr-1" />
                {override.isPending ? "Saving..." : "Override"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Education ({profile.education.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {profile.education.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No education added</p>
          ) : (
            <div className="space-y-3">
              {profile.education.map((e) => (
                <div key={e.id} className="border-b pb-2 last:border-0">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{e.institutionName}</div>
                    {e.graduationYear && (
                      <span className="text-xs text-muted-foreground">{e.graduationYear}</span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {e.degree} in {e.major}
                    {e.minor && `, minor in ${e.minor}`}
                  </div>
                  {e.gpaRaw && (
                    <div className="text-xs text-muted-foreground mt-1">
                      GPA: {e.gpaRaw}/{e.gpaScale}
                      {e.gpaPercentile && ` (${(e.gpaPercentile * 100).toFixed(0)}th percentile)`}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Work History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Work History ({profile.workHistory.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {profile.workHistory.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No work history</p>
          ) : (
            <div className="space-y-3">
              {profile.workHistory.map((w) => (
                <div key={w.id} className="border-b pb-2 last:border-0">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{w.title}</div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(w.startDate).toLocaleDateString()} —{" "}
                      {w.isCurrent ? "Present" : w.endDate ? new Date(w.endDate).toLocaleDateString() : "—"}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">{w.company}</div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* References */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4" />
            References ({profile.references.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {profile.references.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No references</p>
          ) : (
            <div className="space-y-2">
              {profile.references.map((r) => (
                <div key={r.id} className="flex items-center justify-between border-b pb-2 last:border-0 text-sm">
                  <div>
                    <div className="font-medium">{r.raterName ?? r.raterEmail}</div>
                    <div className="text-xs text-muted-foreground">
                      {r.relationshipType.replace("_", " ").toLowerCase()}
                    </div>
                  </div>
                  <Badge
                    variant={
                      r.status === "COMPLETED" ? "default" :
                        r.status === "DECLINED" || r.status === "EXPIRED" ? "destructive" :
                        "secondary"
                    }
                  >
                    {r.status}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Score History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Score History</CardTitle>
        </CardHeader>
        <CardContent>
          {profile.scoreHistory.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No history</p>
          ) : (
            <div className="space-y-2">
              {profile.scoreHistory.slice(0, 10).map((h) => (
                <div key={h.id} className="flex items-center justify-between border-b pb-2 last:border-0 text-sm">
                  <div>
                    <div className="font-medium">{h.overallScore.toFixed(1)}</div>
                    <div className="text-xs text-muted-foreground">{h.triggerEvent}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(h.recordedAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ScoreStat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number | null | undefined;
  suffix?: string;
}) {
  return (
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-xl font-bold mt-0.5">
        {value != null ? (
          <>
            {value.toFixed(1)}
            {suffix}
          </>
        ) : (
          <span className="text-muted-foreground font-normal text-sm">—</span>
        )}
      </div>
    </div>
  );
}
