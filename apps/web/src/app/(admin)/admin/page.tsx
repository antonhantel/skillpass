"use client";

import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Building2,
  Briefcase,
  FileText,
  UserCheck,
  UserPlus,
  Activity,
  GraduationCap,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

export default function AdminDashboard() {
  const { data: stats, isLoading } = trpc.admin.stats.useQuery(undefined, {
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-muted-foreground">Loading admin dashboard...</div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-destructive">
          Access denied. Admin privileges required.
        </div>
      </div>
    );
  }

  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
      description: `${stats.talentUsers} talent, ${stats.employerUsers} employer, ${stats.adminUsers} admin`,
    },
    {
      title: "New Signups (7d)",
      value: stats.recentSignups,
      icon: UserPlus,
      description: "Last 7 days",
    },
    {
      title: "Companies",
      value: stats.totalCompanies,
      icon: Building2,
      description: `${stats.activeRoles} active roles`,
    },
    {
      title: "Active Roles",
      value: stats.activeRoles,
      icon: Briefcase,
      description: "Open positions",
    },
    {
      title: "References",
      value: stats.totalReferences,
      icon: UserCheck,
      description: `${stats.completedReferences} completed`,
    },
    {
      title: "Assessments",
      value: stats.totalAssessments,
      icon: ClipboardCheck,
      description: "Total taken",
    },
    {
      title: "Transcripts",
      value: stats.totalTranscripts,
      icon: GraduationCap,
      description: "Uploaded",
    },
    {
      title: "Audit Events (24h)",
      value: stats.recentAuditLogs,
      icon: Activity,
      description: "Last 24 hours",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Platform overview and management
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              User Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <UserBreakdownBar
                label="Talent"
                count={stats.talentUsers}
                total={stats.totalUsers}
                color="bg-blue-500"
              />
              <UserBreakdownBar
                label="Employer"
                count={stats.employerUsers}
                total={stats.totalUsers}
                color="bg-green-500"
              />
              <UserBreakdownBar
                label="Admin"
                count={stats.adminUsers}
                total={stats.totalUsers}
                color="bg-purple-500"
              />
              <UserBreakdownBar
                label="Unset"
                count={
                  stats.totalUsers -
                  stats.talentUsers -
                  stats.employerUsers -
                  stats.adminUsers
                }
                total={stats.totalUsers}
                color="bg-gray-400"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Platform Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Reference completion rate</span>
                <span className="font-medium">
                  {stats.totalReferences > 0
                    ? `${Math.round((stats.completedReferences / stats.totalReferences) * 100)}%`
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg references per talent</span>
                <span className="font-medium">
                  {stats.talentUsers > 0
                    ? (stats.totalReferences / stats.talentUsers).toFixed(1)
                    : "0"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg assessments per talent</span>
                <span className="font-medium">
                  {stats.talentUsers > 0
                    ? (stats.totalAssessments / stats.talentUsers).toFixed(1)
                    : "0"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Roles per company</span>
                <span className="font-medium">
                  {stats.totalCompanies > 0
                    ? (stats.activeRoles / stats.totalCompanies).toFixed(1)
                    : "0"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function UserBreakdownBar({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted-foreground">
          {count} ({pct.toFixed(0)}%)
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
