"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Shield,
  Ban,
  CheckCircle,
  Trash2,
  GraduationCap,
  Briefcase,
  Users,
  ClipboardCheck,
  BarChart3,
  Mail,
  Calendar,
  Building2,
} from "lucide-react";

export default function AdminUserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const utils = trpc.useUtils();
  const [banReason, setBanReason] = useState("");
  const [showBanForm, setShowBanForm] = useState(false);

  const { data: user, isLoading } = trpc.admin.getUser.useQuery(
    { id },
    { retry: false }
  );

  const updateType = trpc.admin.updateUserType.useMutation({
    onSuccess: () => utils.admin.getUser.invalidate({ id }),
  });

  const ban = trpc.admin.banUser.useMutation({
    onSuccess: () => {
      utils.admin.getUser.invalidate({ id });
      setShowBanForm(false);
      setBanReason("");
    },
  });

  const unban = trpc.admin.unbanUser.useMutation({
    onSuccess: () => utils.admin.getUser.invalidate({ id }),
  });

  const deleteUser = trpc.admin.deleteUser.useMutation({
    onSuccess: () => router.push("/admin/users"),
  });

  if (isLoading) {
    return <div className="flex h-64 items-center justify-center text-muted-foreground">Loading...</div>;
  }

  if (!user) {
    return <div className="flex h-64 items-center justify-center text-destructive">User not found</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/users">
          <Button variant="ghost" size="sm" className="mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Users
          </Button>
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              {user.isBanned && <Badge variant="destructive">BANNED</Badge>}
              {user.type && (
                <Badge
                  variant={
                    user.type === "ADMIN"
                      ? "destructive"
                      : user.type === "EMPLOYER"
                        ? "secondary"
                        : "default"
                  }
                >
                  {user.type}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                {user.email}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Joined {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            {user.isBanned ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => unban.mutate({ id })}
                disabled={unban.isPending}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Unban
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowBanForm(!showBanForm)}
                className="text-orange-600 hover:text-orange-700"
              >
                <Ban className="h-4 w-4 mr-1" />
                Ban
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="text-destructive hover:text-destructive"
              onClick={() => {
                if (confirm(`Delete user ${user.name}? This cannot be undone.`)) {
                  deleteUser.mutate({ id });
                }
              }}
              disabled={deleteUser.isPending}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Ban Form */}
      {showBanForm && (
        <Card className="border-orange-500/50">
          <CardHeader>
            <CardTitle className="text-base text-orange-600">Ban User</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea
              placeholder="Reason for ban..."
              value={banReason}
              onChange={(e) => setBanReason(e.target.value)}
              rows={3}
            />
            <div className="flex gap-2">
              <Button
                variant="destructive"
                size="sm"
                disabled={!banReason || ban.isPending}
                onClick={() => ban.mutate({ id, reason: banReason })}
              >
                {ban.isPending ? "Banning..." : "Confirm Ban"}
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowBanForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {user.isBanned && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Ban className="h-5 w-5 text-destructive mt-0.5" />
              <div>
                <div className="font-medium text-destructive">Banned</div>
                <p className="text-sm text-muted-foreground">
                  {user.banReason ?? "No reason provided"}
                </p>
                {user.bannedAt && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Banned on {new Date(user.bannedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Type Control */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="h-4 w-4" />
            User Type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {(["TALENT", "EMPLOYER", "ADMIN"] as const).map((t) => (
              <Button
                key={t}
                variant={user.type === t ? "default" : "outline"}
                size="sm"
                onClick={() => updateType.mutate({ id, type: t })}
                disabled={updateType.isPending}
              >
                {t}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Talent Profile */}
      {user.talentProfile && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Talent Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Stat label="Username" value={`@${user.talentProfile.username}`} />
              <Stat
                label="SkillScore"
                value={
                  user.talentProfile.overallSkillScore?.toFixed(1) ?? "—"
                }
              />
              <Stat
                label="Location"
                value={user.talentProfile.location ?? "—"}
              />
              <Stat
                label="Experience"
                value={
                  user.talentProfile.yearsExperience
                    ? `${user.talentProfile.yearsExperience}y`
                    : "—"
                }
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t text-sm">
              <Stat
                label="Education"
                value={user.talentProfile.education.length}
                icon={GraduationCap}
              />
              <Stat
                label="Work History"
                value={user.talentProfile.workHistory.length}
                icon={Briefcase}
              />
              <Stat
                label="References"
                value={user.talentProfile.references.length}
                icon={Users}
              />
              <Stat
                label="Assessments"
                value={user.talentProfile.assessments.length}
                icon={ClipboardCheck}
              />
            </div>

            <Link href={`/admin/talent/${user.talentProfile.id}`}>
              <Button variant="outline" size="sm" className="w-full mt-2">
                View Full Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Employer Info */}
      {user.employerMember && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Employer Membership
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Stat label="Company" value={user.employerMember.company.name} />
              <Stat label="Role" value={user.employerMember.role} />
              <Stat label="Plan" value={user.employerMember.company.plan} />
              <Stat
                label="Joined"
                value={
                  user.employerMember.joinedAt
                    ? new Date(user.employerMember.joinedAt).toLocaleDateString()
                    : "—"
                }
              />
            </div>
            <Link href={`/admin/companies/${user.employerMember.companyId}`}>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Company
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {user.auditLogs.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No activity yet</p>
          ) : (
            <div className="space-y-2">
              {user.auditLogs.slice(0, 10).map((log) => (
                <div key={log.id} className="flex items-start gap-3 text-sm border-b pb-2 last:border-0">
                  <Badge variant="outline" className="text-[10px]">
                    {log.action.split(".").pop()}
                  </Badge>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">
                      {log.resource ?? "—"}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {new Date(log.createdAt).toLocaleString()}
                    </div>
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

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        {Icon && <Icon className="h-3 w-3" />}
        {label}
      </div>
      <div className="font-semibold mt-0.5">{value}</div>
    </div>
  );
}
