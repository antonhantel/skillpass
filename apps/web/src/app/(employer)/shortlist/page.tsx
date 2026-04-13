"use client";

import Link from "next/link";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, StarOff, Clock, Users } from "lucide-react";

export default function ShortlistPage() {
  const { data: shortlist, isLoading } =
    trpc.employer.getShortlist.useQuery();
  const utils = trpc.useUtils();

  const toggleShortlist = trpc.employer.toggleShortlist.useMutation({
    onSuccess: () => {
      utils.employer.getShortlist.invalidate();
    },
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl p-6">
        <div className="flex h-64 items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </div>
    );
  }

  const candidates = shortlist?.filter((entry) => entry.shortlisted) ?? [];

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Shortlisted Candidates</h1>
        <p className="text-muted-foreground">
          Candidates you have saved for further review.
        </p>
      </div>

      {/* Count */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Users className="h-4 w-4" />
        <span>
          {candidates.length} candidate{candidates.length !== 1 ? "s" : ""}{" "}
          shortlisted
        </span>
      </div>

      {/* Empty state */}
      {candidates.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Star className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No shortlisted candidates</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Star candidates from the{" "}
              <Link href="/search" className="text-primary hover:underline">
                search page
              </Link>{" "}
              to add them here.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Candidate cards */}
      <div className="space-y-4">
        {candidates.map((entry) => {
          const profile = entry.talentProfile;
          const user = profile.user;

          return (
            <Card
              key={entry.id}
              className="transition-shadow hover:shadow-md"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="shrink-0">
                    {user.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-lg font-semibold text-muted-foreground">
                        {user.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/p/${profile.username}`}
                        className="text-lg font-semibold hover:text-primary hover:underline"
                      >
                        {user.name}
                      </Link>
                      <div className="flex items-center gap-3">
                        {/* Score */}
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {profile.overallSkillScore != null
                              ? Math.round(profile.overallSkillScore)
                              : "--"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Score
                          </div>
                        </div>
                        {/* Un-shortlist */}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            toggleShortlist.mutate({
                              talentProfileId: profile.id,
                            })
                          }
                          disabled={toggleShortlist.isPending}
                          title="Remove from shortlist"
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </Button>
                      </div>
                    </div>

                    {/* Skills */}
                    {profile.skills?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {profile.skills
                          .slice(0, 8)
                          .map((skill: { id: string; name: string }) => (
                            <Badge
                              key={skill.id}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill.name}
                            </Badge>
                          ))}
                        {profile.skills.length > 8 && (
                          <Badge variant="outline" className="text-xs">
                            +{profile.skills.length - 8} more
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Viewed at timestamp */}
                    {entry.viewedAt && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        Viewed{" "}
                        {new Date(entry.viewedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
