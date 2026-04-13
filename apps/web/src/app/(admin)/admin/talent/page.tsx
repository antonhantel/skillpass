"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Users,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

export default function AdminTalentPage() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<"score" | "created" | "name">("created");

  const { data, isLoading } = trpc.admin.listTalentProfiles.useQuery(
    { page, limit: 25, sortBy },
    { retry: false }
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Talent Profiles</h1>
        <p className="text-muted-foreground">
          {data ? `${data.total} total profiles` : "Loading..."}
        </p>
      </div>

      {/* Sort */}
      <div className="flex gap-2">
        <span className="text-sm text-muted-foreground self-center">Sort by:</span>
        {(["created", "score", "name"] as const).map((s) => (
          <Button
            key={s}
            variant={sortBy === s ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSortBy(s);
              setPage(1);
            }}
          >
            {s === "created" ? "Newest" : s === "score" ? "Score" : "Name"}
          </Button>
        ))}
      </div>

      {/* Profiles Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">User</th>
                  <th className="px-4 py-3 text-left font-medium">Username</th>
                  <th className="px-4 py-3 text-left font-medium">SkillScore</th>
                  <th className="px-4 py-3 text-left font-medium">Education</th>
                  <th className="px-4 py-3 text-left font-medium">Work</th>
                  <th className="px-4 py-3 text-left font-medium">References</th>
                  <th className="px-4 py-3 text-left font-medium">Assessments</th>
                  <th className="px-4 py-3 text-left font-medium">Location</th>
                  <th className="px-4 py-3 text-left font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                ) : data?.profiles.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">
                      No talent profiles found
                    </td>
                  </tr>
                ) : (
                  data?.profiles.map((profile) => (
                    <tr key={profile.id} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">{profile.user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {profile.user.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        @{profile.username}
                      </td>
                      <td className="px-4 py-3">
                        {profile.overallSkillScore != null ? (
                          <div className="flex items-center gap-1">
                            <BarChart3 className="h-3.5 w-3.5 text-primary" />
                            <span className="font-semibold">
                              {profile.overallSkillScore.toFixed(1)}
                            </span>
                            {profile.scoreConfidence != null && (
                              <span className="text-xs text-muted-foreground">
                                ({(profile.scoreConfidence * 100).toFixed(0)}%)
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <GraduationCap className="h-3 w-3" />
                          {profile._count.education}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Briefcase className="h-3 w-3" />
                          {profile._count.workHistory}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {profile._count.references}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <ClipboardCheck className="h-3 w-3" />
                          {profile._count.assessments}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {profile.location || "—"}
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {new Date(profile.user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {data && data.pages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Page {page} of {data.pages}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(data.pages, p + 1))}
              disabled={page === data.pages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
