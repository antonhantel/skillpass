"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Globe,
  Users,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const PLAN_BADGE: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
  FREE_TRIAL: { label: "Free Trial", variant: "outline" },
  STARTER: { label: "Starter", variant: "secondary" },
  GROWTH: { label: "Growth", variant: "default" },
  ENTERPRISE: { label: "Enterprise", variant: "destructive" },
};

export default function AdminCompaniesPage() {
  const utils = trpc.useUtils();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading } = trpc.admin.listCompanies.useQuery(
    { page, limit: 25, search: search || undefined },
    { retry: false }
  );

  const updatePlan = trpc.admin.updateCompanyPlan.useMutation({
    onSuccess: () => utils.admin.listCompanies.invalidate(),
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Company Management</h1>
        <p className="text-muted-foreground">
          {data ? `${data.total} total companies` : "Loading..."}
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name or domain..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="pl-9"
        />
      </div>

      {/* Companies Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Company</th>
                  <th className="px-4 py-3 text-left font-medium">Plan</th>
                  <th className="px-4 py-3 text-left font-medium">Seats</th>
                  <th className="px-4 py-3 text-left font-medium">Members</th>
                  <th className="px-4 py-3 text-left font-medium">Roles</th>
                  <th className="px-4 py-3 text-left font-medium">Hires</th>
                  <th className="px-4 py-3 text-left font-medium">Created</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                ) : data?.companies.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                      No companies found
                    </td>
                  </tr>
                ) : (
                  data?.companies.map((company) => {
                    const planBadge = PLAN_BADGE[company.plan] ?? PLAN_BADGE.FREE_TRIAL;
                    return (
                      <tr key={company.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="px-4 py-3">
                          <div>
                            <div className="font-medium">{company.name}</div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Globe className="h-3 w-3" />
                              {company.domain}
                              {company.domainVerified && (
                                <CheckCircle className="h-3 w-3 text-green-500" />
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant={planBadge.variant}>{planBadge.label}</Badge>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {company.seatsUsed}/{company.seatsTotal}
                        </td>
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Users className="h-3 w-3" />
                            {company.members.length}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Briefcase className="h-3 w-3" />
                            {company.roles.length}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {company.hires.length}
                        </td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          {new Date(company.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-1">
                            <select
                              className="rounded border bg-background px-2 py-1 text-xs"
                              value={company.plan}
                              onChange={(e) =>
                                updatePlan.mutate({
                                  id: company.id,
                                  plan: e.target.value as "FREE_TRIAL" | "STARTER" | "GROWTH" | "ENTERPRISE",
                                })
                              }
                              disabled={updatePlan.isPending}
                            >
                              <option value="FREE_TRIAL">Free Trial</option>
                              <option value="STARTER">Starter</option>
                              <option value="GROWTH">Growth</option>
                              <option value="ENTERPRISE">Enterprise</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    );
                  })
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
