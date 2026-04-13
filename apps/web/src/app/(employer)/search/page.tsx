"use client";

import { useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Users,
  Filter,
} from "lucide-react";

export default function CandidateSearchPage() {
  const [filters, setFilters] = useState({
    minScore: undefined as number | undefined,
    location: "",
    minExperience: undefined as number | undefined,
    maxExperience: undefined as number | undefined,
    skills: "",
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);
  const [showFilters, setShowFilters] = useState(true);

  const queryFilters = {
    minScore: appliedFilters.minScore,
    location: appliedFilters.location || undefined,
    minExperience: appliedFilters.minExperience,
    maxExperience: appliedFilters.maxExperience,
    skills: appliedFilters.skills
      ? appliedFilters.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined,
  };

  const { data, isLoading } =
    trpc.employer.searchCandidates.useQuery(queryFilters);

  const utils = trpc.useUtils();

  const toggleShortlist = trpc.employer.toggleShortlist.useMutation({
    onSuccess: () => {
      utils.employer.searchCandidates.invalidate();
    },
  });

  const viewCandidate = trpc.employer.viewCandidate.useMutation();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setAppliedFilters(filters);
  }

  function handleViewProfile(username: string, profileId: string) {
    viewCandidate.mutate({ talentProfileId: profileId });
    // Navigation is handled by the Link component
  }

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Search Candidates</h1>
          <p className="text-muted-foreground">
            Find pre-vetted talent that matches your requirements.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2 h-4 w-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card>
          <CardContent className="p-5">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="minScore">Minimum score</Label>
                  <Input
                    id="minScore"
                    type="number"
                    placeholder="e.g., 600"
                    min={300}
                    max={850}
                    value={filters.minScore ?? ""}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        minScore: e.target.value
                          ? Number(e.target.value)
                          : undefined,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., San Francisco"
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minExp">Min experience (years)</Label>
                  <Input
                    id="minExp"
                    type="number"
                    placeholder="e.g., 2"
                    min={0}
                    value={filters.minExperience ?? ""}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        minExperience: e.target.value
                          ? Number(e.target.value)
                          : undefined,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxExp">Max experience (years)</Label>
                  <Input
                    id="maxExp"
                    type="number"
                    placeholder="e.g., 10"
                    min={0}
                    value={filters.maxExperience ?? ""}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        maxExperience: e.target.value
                          ? Number(e.target.value)
                          : undefined,
                      })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  placeholder="e.g., React, TypeScript, Node.js"
                  value={filters.skills}
                  onChange={(e) =>
                    setFilters({ ...filters, skills: e.target.value })
                  }
                />
              </div>
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Results header */}
      {data && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>
            {data.total} candidate{data.total !== 1 ? "s" : ""} found
          </span>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex h-48 items-center justify-center">
          <div className="text-muted-foreground">Searching...</div>
        </div>
      )}

      {/* Results */}
      {data && data.candidates.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Search className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No candidates found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your filters to broaden your search.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {data?.candidates.map((candidate) => (
          <Card
            key={candidate.username}
            className="transition-shadow hover:shadow-md"
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="shrink-0">
                  {candidate.user.avatarUrl ? (
                    <img
                      src={candidate.user.avatarUrl}
                      alt={candidate.user.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-lg font-semibold text-muted-foreground">
                      {candidate.user.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Main info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/p/${candidate.username}`}
                      onClick={() =>
                        handleViewProfile(candidate.username, candidate.id)
                      }
                      className="text-lg font-semibold hover:text-primary hover:underline"
                    >
                      {candidate.user.name}
                    </Link>
                    <div className="flex items-center gap-3">
                      {/* Score */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {candidate.overallSkillScore != null
                            ? Math.round(candidate.overallSkillScore)
                            : "--"}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Score
                        </div>
                      </div>
                      {/* Shortlist toggle */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          toggleShortlist.mutate({
                            talentProfileId: candidate.id,
                          })
                        }
                        disabled={toggleShortlist.isPending}
                        className="shrink-0"
                      >
                        <Star className="h-5 w-5 text-muted-foreground hover:text-yellow-400 hover:fill-yellow-400 transition-colors" />
                      </Button>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    {candidate.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {candidate.location}
                      </span>
                    )}
                    {candidate.yearsExperience != null && (
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {candidate.yearsExperience} yr
                        {candidate.yearsExperience !== 1 ? "s" : ""} exp
                      </span>
                    )}
                    {candidate.education?.[0] && (
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-3.5 w-3.5" />
                        {candidate.education[0].degree},{" "}
                        {candidate.education[0].institutionName}
                      </span>
                    )}
                    {candidate.workHistory?.[0] && (
                      <span className="border-l pl-3">
                        {candidate.workHistory[0].title} at{" "}
                        {candidate.workHistory[0].company}
                      </span>
                    )}
                  </div>

                  {/* Sub-scores */}
                  <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                    {[
                      { label: "Academic", value: candidate.academicScore },
                      {
                        label: "Performance",
                        value: candidate.performanceScore,
                      },
                      { label: "Peer", value: candidate.peerSignalScore },
                      {
                        label: "Assessed",
                        value: candidate.assessedAbilityScore,
                      },
                    ].map(({ label, value }) => (
                      <span key={label}>
                        {label}:{" "}
                        <span className="font-medium text-foreground">
                          {value != null ? Math.round(value) : "--"}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Skills */}
                  {candidate.skills?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {candidate.skills
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
                      {candidate.skills.length > 8 && (
                        <Badge variant="outline" className="text-xs">
                          +{candidate.skills.length - 8} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
