"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Activity } from "lucide-react";

export default function AdminAnalyticsPage() {
  const [signupDays, setSignupDays] = useState(30);
  const [activityDays, setActivityDays] = useState(14);

  const { data: signups } = trpc.admin.signupsByDay.useQuery(
    { days: signupDays },
    { retry: false }
  );
  const { data: activity } = trpc.admin.activityByDay.useQuery(
    { days: activityDays },
    { retry: false }
  );
  const { data: topActions } = trpc.admin.topActions.useQuery(
    { days: 7 },
    { retry: false }
  );

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en", { month: "short", day: "numeric" });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed insights into platform growth and engagement
        </p>
      </div>

      {/* Signup Trend */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Signups Over Time
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              New users by type
            </p>
          </div>
          <div className="flex gap-1">
            {[7, 14, 30, 90].map((d) => (
              <Button
                key={d}
                variant={signupDays === d ? "default" : "outline"}
                size="sm"
                onClick={() => setSignupDays(d)}
              >
                {d}d
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {signups && (
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={signups}>
                <defs>
                  <linearGradient id="talentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="employerGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="adminGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" tickFormatter={formatDate} fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                  labelFormatter={formatDate}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="talent"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="url(#talentGradient)"
                  name="Talent"
                />
                <Area
                  type="monotone"
                  dataKey="employer"
                  stackId="1"
                  stroke="#10b981"
                  fill="url(#employerGradient)"
                  name="Employer"
                />
                <Area
                  type="monotone"
                  dataKey="admin"
                  stackId="1"
                  stroke="#a855f7"
                  fill="url(#adminGradient)"
                  name="Admin"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Activity over time */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Platform Activity
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Audit log events per day
              </p>
            </div>
            <div className="flex gap-1">
              {[7, 14, 30].map((d) => (
                <Button
                  key={d}
                  variant={activityDays === d ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActivityDays(d)}
                >
                  {d}d
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            {activity && (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={activity}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="date" tickFormatter={formatDate} fontSize={11} />
                  <YAxis fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                    labelFormatter={formatDate}
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    name="Events"
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Top actions */}
        <Card>
          <CardHeader>
            <CardTitle>Top Actions (7d)</CardTitle>
            <p className="text-xs text-muted-foreground">
              Most frequent audit log actions
            </p>
          </CardHeader>
          <CardContent>
            {topActions && (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topActions} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis type="number" fontSize={11} />
                  <YAxis
                    dataKey="action"
                    type="category"
                    width={130}
                    fontSize={10}
                    tickFormatter={(v: string) => v.split(".").pop() ?? v}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
