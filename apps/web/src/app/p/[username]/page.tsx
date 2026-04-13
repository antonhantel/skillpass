import { db } from "@skillpass/db";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, GraduationCap, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ username: string }>;
}

export default async function PublicProfilePage({ params }: Props) {
  const { username } = await params;

  const profile = await db.talentProfile.findUnique({
    where: { username },
    include: {
      user: { select: { name: true, avatarUrl: true } },
      education: {
        include: { institution: true },
        orderBy: { graduationYear: "desc" },
      },
      workHistory: { orderBy: { startDate: "desc" } },
      skills: { orderBy: { name: "asc" } },
    },
  });

  if (!profile || !profile.isPublic) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl py-12 px-4">
      {/* Header */}
      <div className="text-center">
        {profile.user.avatarUrl && (
          <img
            src={profile.user.avatarUrl}
            alt={profile.user.name}
            className="mx-auto h-24 w-24 rounded-full"
          />
        )}
        <h1 className="mt-4 text-3xl font-bold">{profile.user.name}</h1>
        {profile.headline && (
          <p className="mt-1 text-lg text-muted-foreground">
            {profile.headline}
          </p>
        )}
        <div className="mt-2 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          {profile.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          )}
          {profile.yearsExperience != null && (
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {profile.yearsExperience} years experience
            </span>
          )}
        </div>
        {profile.linkedinUrl && (
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            LinkedIn <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      {/* SkillScore */}
      {profile.overallSkillScore != null && (
        <Card className="mt-8">
          <CardContent className="py-6 text-center">
            <div className="text-sm font-medium text-muted-foreground">
              SkillScore
            </div>
            <div className="mt-1 text-5xl font-bold text-primary">
              {Math.round(profile.overallSkillScore)}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4 border-t pt-4">
              {[
                { label: "Academic", value: profile.academicScore },
                { label: "Performance", value: profile.performanceScore },
                { label: "Peer Signal", value: profile.peerSignalScore },
                { label: "Assessed", value: profile.assessedAbilityScore },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-xl font-semibold">
                    {value != null ? Math.round(value) : "--"}
                  </div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bio */}
      {profile.bio && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{profile.bio}</p>
          </CardContent>
        </Card>
      )}

      {/* Skills */}
      {profile.skills.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill.id} variant="secondary">
                {skill.name}
              </Badge>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Education */}
      {profile.education.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.id} className="flex gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-medium">{edu.institutionName}</div>
                  <div className="text-sm text-muted-foreground">
                    {edu.degree} in {edu.major}
                    {edu.graduationYear && ` | ${edu.graduationYear}`}
                  </div>
                  {edu.gpaCalibrated != null && (
                    <div className="mt-1 text-sm">
                      <span className="text-muted-foreground">
                        GPA: {edu.gpaRaw}/{edu.gpaScale}
                      </span>
                      <span className="ml-2 font-medium text-primary">
                        Calibrated: {edu.gpaCalibrated}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Work History */}
      {profile.workHistory.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {profile.workHistory.map((work) => (
              <div key={work.id} className="flex gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-medium">{work.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {work.company}
                    {work.location && ` - ${work.location}`}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(work.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {work.isCurrent
                      ? "Present"
                      : work.endDate
                        ? new Date(work.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        Verified by SkillPass
      </div>
    </div>
  );
}
