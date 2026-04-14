"use client";

import Link from "next/link";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Eye,
  Trophy,
  ShieldAlert,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboard() {
  const { data: stats, isLoading } = trpc.admin.stats.useQuery(undefined, {
    retry: false,
  });
  const { data: activity } = trpc.admin.recentActivity.useQuery(
    { limit: 10 },
    { retry: false }
  );
  const { data: signups } = trpc.admin.signupsByDay.useQuery(
    { days: 7 },
    { retry: false }
  );

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

  const kpiCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
      change: stats.recentSignupsWeek,
      changeLabel: "new this week",
      href: "/admin/users",
    },
    {
      title: "Companies",
      value: stats.totalCompanies,
      icon: Building2,
      change: stats.activeRoles,
      changeLabel: "active roles",
      href: "/admin/companies",
    },
    {
      title: "References",
      value: stats.totalReferences,
      icon: UserCheck,
      change: stats.completedReferences,
      changeLabel: "completed",
    },
    {
      title: "Total Hires",
      value: stats.totalHires,
      icon: Trophy,
      change: stats.totalCandidateViews,
      changeLabel: "candidate views",
    },
  ];

  const secondaryCards = [
    { label: "Admins", value: stats.adminUsers, icon: ShieldAlert },
    { label: "Banned", value: stats.bannedUsers, icon: ShieldAlert },
    { label: "Assessments", value: stats.totalAssessments, icon: ClipboardCheck },
    { label: "Transcripts", value: stats.totalTranscripts, icon: GraduationCap },
    { label: "Institutions", value: stats.totalInstitutions, icon: GraduationCap },
    { label: "Raters", value: stats.totalRaters, icon: UserCheck },
    { label: "Signups (24h)", value: stats.recentSignupsDay, icon: UserPlus },
    { label: "Audit (24h)", value: stats.recentAuditLogs, icon: Activity },
  ];

  const maxSignup = Math.max(...(signups?.map((s) => s.total) ?? [0]), 1);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and management</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/analytics">
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-1.5" />
              Analytics
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          const inner = (
            <Card className={card.href ? "cursor-pointer transition-shadow hover:shadow-md" : ""}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{card.value.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="font-medium text-primary">+{card.change}</span>{" "}
                  {card.changeLabel}
                </p>
              </CardContent>
            </Card>
          );
          return card.href ? (
            <Link key={card.title} href={card.href}>
              {inner}
            </Link>
          ) : (
            <div key={card.title}>{inner}</div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Signup Trend */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Signups (last 7 days)</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.recentSignupsWeek} new users this week
              </p>
            </div>
            <Link href="/admin/analytics">
              <Button variant="ghost" size="sm">
                Full Analytics <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 h-40">
              {signups?.map((s) => (
                <div key={s.date} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col gap-px justify-end" style={{ height: "140px" }}>
                    <div
                      className="bg-blue-500 rounded-t-sm"
                      style={{ height: `${(s.talent / maxSignup) * 100}%` }}
                      title={`Talent: ${s.talent}`}
                    />
                    <div
                      className="bg-green-500"
                      style={{ height: `${(s.employer / maxSignup) * 100}%` }}
                      title={`Employer: ${s.employer}`}
                    />
                    <div
                      className="bg-purple-500"
                      style={{ height: `${(s.admin / maxSignup) * 100}%` }}
                      title={`Admin: ${s.admin}`}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(s.date).toLocaleDateString("en", { weekday: "short" })}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-xs">
              <span className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-blue-500" /> Talent
              </span>
              <span className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500" /> Employer
              </span>
              <span className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-purple-500" /> Admin
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Secondary stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Platform Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {secondaryCards.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-semibold">{c.value}</div>
                      <div className="text-[10px] text-muted-foreground">{c.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Activity Feed */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Recent Activity
            </CardTitle>
            <Link href="/admin/audit-log">
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {activity?.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No recent activity
                </p>
              ) : (
                activity?.map((log) => (
                  <div key={log.id} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5">
                      <Badge variant="outline" className="text-[10px]">
                        {log.action.split(".").pop()}
                      </Badge>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-1 text-xs">
                        <span className="font-medium truncate">
                          {log.user?.name ?? "System"}
                        </span>
                        <span className="text-muted-foreground">
                          {log.resource && `on ${log.resource}`}
                        </span>
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        {new Date(log.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* User Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
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
                label="Banned"
                count={stats.bannedUsers}
                total={stats.totalUsers}
                color="bg-red-500"
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

            <div className="mt-6 pt-4 border-t space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reference completion rate</span>
                <span className="font-medium">
                  {stats.totalReferences > 0
                    ? `${Math.round((stats.completedReferences / stats.totalReferences) * 100)}%`
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg refs per talent</span>
                <span className="font-medium">
                  {stats.talentUsers > 0
                    ? (stats.totalReferences / stats.talentUsers).toFixed(1)
                    : "0"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Views per hire</span>
                <span className="font-medium">
                  {stats.totalHires > 0
                    ? (stats.totalCandidateViews / stats.totalHires).toFixed(0)
                    : "—"}
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
