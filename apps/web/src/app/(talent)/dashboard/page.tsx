"use client";

import { trpc } from "@/lib/trpc-client";
import { ScoreCard } from "@/components/talent/score-card";
import { ProfileCompleteness } from "@/components/talent/profile-completeness";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, GraduationCap, Users, ClipboardCheck } from "lucide-react";

export default function DashboardPage() {
  const { data: profile, isLoading } = trpc.talent.getProfile.useQuery();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-muted-foreground">Profile not found</div>
      </div>
    );
  }

  const completedReferences = profile.references.filter(
    (r) => r.status === "COMPLETED"
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome{profile.headline ? `, ${profile.headline}` : ""}
        </h1>
        <p className="text-muted-foreground">
          Your SkillPass dashboard — here&apos;s your profile at a glance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Score Card */}
        <div className="md:col-span-2">
          <ScoreCard
            overallScore={profile.overallSkillScore}
            academicScore={profile.academicScore}
            performanceScore={profile.performanceScore}
            peerSignalScore={profile.peerSignalScore}
            assessedAbilityScore={profile.assessedAbilityScore}
            confidence={profile.scoreConfidence}
          />
        </div>

        {/* Profile Completeness */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <ProfileCompleteness
              hasBasicInfo={!!(profile.headline && profile.location)}
              hasEducation={profile.education.length > 0}
              hasWorkHistory={profile.workHistory.length > 0}
              hasTranscript={profile.transcripts.length > 0}
              referenceCount={completedReferences}
              assessmentCount={profile.assessments.length}
            />
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/profile/edit">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Edit Profile</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/profile/education">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Add Education</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/transcript">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <ClipboardCheck className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Upload Transcript</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/references">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Request References</span>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Public Profile Link */}
      <Card>
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <div className="text-sm font-medium">Your public profile</div>
            <div className="text-sm text-muted-foreground">
              skillpass.io/p/{profile.username}
            </div>
          </div>
          <Link href={`/p/${profile.username}`}>
            <Button variant="outline" size="sm">
              View Profile
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
