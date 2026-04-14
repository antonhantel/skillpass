"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Building2,
  Globe,
  CheckCircle,
  XCircle,
  Users,
  Briefcase,
  Trophy,
  Eye,
  Trash2,
  Calendar,
} from "lucide-react";

const PLAN_BADGE: Record<
  string,
  { label: string; variant: "default" | "secondary" | "outline" | "destructive" }
> = {
  FREE_TRIAL: { label: "Free Trial", variant: "outline" },
  STARTER: { label: "Starter", variant: "secondary" },
  GROWTH: { label: "Growth", variant: "default" },
  ENTERPRISE: { label: "Enterprise", variant: "destructive" },
};

export default function AdminCompanyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const utils = trpc.useUtils();

  const { data: company, isLoading } = trpc.admin.getCompany.useQuery(
    { id },
    { retry: false }
  );

  const updatePlan = trpc.admin.updateCompanyPlan.useMutation({
    onSuccess: () => utils.admin.getCompany.invalidate({ id }),
  });

  const verifyDomain = trpc.admin.verifyCompanyDomain.useMutation({
    onSuccess: () => utils.admin.getCompany.invalidate({ id }),
  });

  const deleteCompany = trpc.admin.deleteCompany.useMutation({
    onSuccess: () => router.push("/admin/companies"),
  });

  if (isLoading) {
    return <div className="flex h-64 items-center justify-center text-muted-foreground">Loading...</div>;
  }

  if (!company) {
    return <div className="flex h-64 items-center justify-center text-destructive">Company not found</div>;
  }

  const planBadge = PLAN_BADGE[company.plan] ?? PLAN_BADGE.FREE_TRIAL;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/companies">
          <Button variant="ghost" size="sm" className="mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Companies
          </Button>
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{company.name}</h1>
              <Badge variant={planBadge.variant}>{planBadge.label}</Badge>
              {company.domainVerified && (
                <Badge variant="default" className="bg-green-600">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {company.domain}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Created {new Date(company.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                verifyDomain.mutate({ id, verified: !company.domainVerified })
              }
              disabled={verifyDomain.isPending}
            >
              {company.domainVerified ? (
                <><XCircle className="h-4 w-4 mr-1" /> Unverify</>
              ) : (
                <><CheckCircle className="h-4 w-4 mr-1" /> Verify Domain</>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-destructive hover:text-destructive"
              onClick={() => {
                if (confirm(`Delete company ${company.name}? This deletes ALL related roles, members, and hires.`)) {
                  deleteCompany.mutate({ id });
                }
              }}
              disabled={deleteCompany.isPending}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi icon={Users} label="Members" value={company.members.length} sub={`${company.seatsUsed}/${company.seatsTotal} seats`} />
        <Kpi icon={Briefcase} label="Roles" value={company.roles.length} sub={`${company.roles.filter(r => r.status === "ACTIVE").length} active`} />
        <Kpi icon={Eye} label="Candidate Views" value={company.candidateViews.length} />
        <Kpi icon={Trophy} label="Hires" value={company.hires.length} />
      </div>

      {/* Plan Management */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {(["FREE_TRIAL", "STARTER", "GROWTH", "ENTERPRISE"] as const).map((p) => (
              <Button
                key={p}
                variant={company.plan === p ? "default" : "outline"}
                size="sm"
                onClick={() => updatePlan.mutate({ id, plan: p })}
                disabled={updatePlan.isPending}
              >
                {p.replace("_", " ")}
              </Button>
            ))}
          </div>
          {company.trialEndsAt && (
            <p className="text-xs text-muted-foreground mt-3">
              Trial ends: {new Date(company.trialEndsAt).toLocaleDateString()}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Members */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4" />
            Team Members ({company.members.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {company.members.map((m) => (
              <Link
                key={m.id}
                href={`/admin/users/${m.user.id}`}
                className="flex items-center justify-between border-b pb-2 last:border-0 hover:bg-muted/30 rounded px-2 py-1 -mx-2"
              >
                <div>
                  <div className="font-medium text-sm">{m.user.name}</div>
                  <div className="text-xs text-muted-foreground">{m.user.email}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">{m.role}</Badge>
                  {m.joinedAt ? (
                    <span className="text-xs text-muted-foreground">
                      Joined {new Date(m.joinedAt).toLocaleDateString()}
                    </span>
                  ) : (
                    <Badge variant="secondary" className="text-xs">Invited</Badge>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Roles */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Roles ({company.roles.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {company.roles.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No roles posted</p>
          ) : (
            <div className="space-y-2">
              {company.roles.map((r) => (
                <div key={r.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div>
                    <div className="font-medium text-sm">{r.title}</div>
                    {r.preferredLocation && (
                      <div className="text-xs text-muted-foreground">{r.preferredLocation}</div>
                    )}
                  </div>
                  <Badge variant={r.status === "ACTIVE" ? "default" : "outline"}>
                    {r.status}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Hires */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Hires ({company.hires.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {company.hires.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No hires yet</p>
          ) : (
            <div className="space-y-2">
              {company.hires.map((h) => (
                <div key={h.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div>
                    <div className="font-medium text-sm">{h.talentProfile.user.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {h.role?.title ?? "—"}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(h.hiredAt).toLocaleDateString()}
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

function Kpi({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  sub?: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
      </CardContent>
    </Card>
  );
}
