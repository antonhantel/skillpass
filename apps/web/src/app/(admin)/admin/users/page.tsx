"use client";

import { useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Shield,
  Trash2,
  User,
  Building2,
  Download,
  Ban,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const TYPE_BADGE: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
  TALENT: { label: "Talent", variant: "default" },
  EMPLOYER: { label: "Employer", variant: "secondary" },
  ADMIN: { label: "Admin", variant: "destructive" },
};

export default function AdminUsersPage() {
  const utils = trpc.useUtils();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"TALENT" | "EMPLOYER" | "ADMIN" | undefined>();
  const [bannedOnly, setBannedOnly] = useState(false);
  const [promoteEmail, setPromoteEmail] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const { data, isLoading } = trpc.admin.listUsers.useQuery(
    { page, limit: 25, type: typeFilter, search: search || undefined, bannedOnly },
    { retry: false }
  );

  const updateType = trpc.admin.updateUserType.useMutation({
    onSuccess: () => utils.admin.listUsers.invalidate(),
  });

  const bulkUpdateType = trpc.admin.bulkUpdateType.useMutation({
    onSuccess: () => {
      utils.admin.listUsers.invalidate();
      setSelectedIds(new Set());
    },
  });

  const deleteUser = trpc.admin.deleteUser.useMutation({
    onSuccess: () => utils.admin.listUsers.invalidate(),
  });

  const promote = trpc.admin.promoteToAdmin.useMutation({
    onSuccess: () => {
      setPromoteEmail("");
      utils.admin.listUsers.invalidate();
    },
  });

  const csvExport = trpc.admin.exportUsersCsv.useQuery(undefined, {
    enabled: false,
    retry: false,
  });

  const downloadCsv = async () => {
    const result = await csvExport.refetch();
    if (!result.data) return;
    const blob = new Blob([result.data], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `users-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleAll = () => {
    if (!data) return;
    if (selectedIds.size === data.users.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(data.users.map((u) => u.id)));
    }
  };

  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-muted-foreground">
            {data ? `${data.total} total users` : "Loading..."}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={downloadCsv} disabled={csvExport.isFetching}>
          <Download className="h-4 w-4 mr-1.5" />
          {csvExport.isFetching ? "Exporting..." : "Export CSV"}
        </Button>
      </div>

      {/* Promote to Admin */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Promote User to Admin
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (promoteEmail) promote.mutate({ email: promoteEmail });
            }}
          >
            <Input
              placeholder="user@example.com"
              value={promoteEmail}
              onChange={(e) => setPromoteEmail(e.target.value)}
              className="max-w-sm"
            />
            <Button type="submit" disabled={promote.isPending || !promoteEmail}>
              {promote.isPending ? "Promoting..." : "Promote"}
            </Button>
          </form>
          {promote.error && (
            <p className="mt-2 text-sm text-destructive">{promote.error.message}</p>
          )}
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1">
          {[undefined, "TALENT", "EMPLOYER", "ADMIN"].map((t) => (
            <Button
              key={t ?? "all"}
              variant={typeFilter === t ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setTypeFilter(t as typeof typeFilter);
                setPage(1);
              }}
            >
              {t ?? "All"}
            </Button>
          ))}
        </div>
        <Button
          variant={bannedOnly ? "destructive" : "outline"}
          size="sm"
          onClick={() => {
            setBannedOnly(!bannedOnly);
            setPage(1);
          }}
        >
          <Ban className="h-3 w-3 mr-1" />
          Banned Only
        </Button>
      </div>

      {/* Bulk Actions */}
      {selectedIds.size > 0 && (
        <Card className="border-primary/50 bg-primary/5">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {selectedIds.size} user{selectedIds.size === 1 ? "" : "s"} selected
              </span>
              <div className="flex gap-2">
                {(["TALENT", "EMPLOYER", "ADMIN"] as const).map((t) => (
                  <Button
                    key={t}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      bulkUpdateType.mutate({ ids: Array.from(selectedIds), type: t })
                    }
                    disabled={bulkUpdateType.isPending}
                  >
                    Set {t}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedIds(new Set())}
                >
                  Clear
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-3 py-3 text-left w-8">
                    <input
                      type="checkbox"
                      checked={
                        !!data && selectedIds.size === data.users.length && data.users.length > 0
                      }
                      onChange={toggleAll}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </th>
                  <th className="px-4 py-3 text-left font-medium">User</th>
                  <th className="px-4 py-3 text-left font-medium">Type</th>
                  <th className="px-4 py-3 text-left font-medium">Details</th>
                  <th className="px-4 py-3 text-left font-medium">Joined</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                ) : data?.users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      No users found
                    </td>
                  </tr>
                ) : (
                  data?.users.map((user) => {
                    const badge = user.type ? TYPE_BADGE[user.type] : null;
                    return (
                      <tr key={user.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="px-3 py-3">
                          <input
                            type="checkbox"
                            checked={selectedIds.has(user.id)}
                            onChange={() => toggleOne(user.id)}
                            className="h-4 w-4 cursor-pointer"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Link href={`/admin/users/${user.id}`} className="hover:underline">
                            <div>
                              <div className="font-medium flex items-center gap-1">
                                {user.name}
                                {user.isBanned && <Ban className="h-3 w-3 text-destructive" />}
                              </div>
                              <div className="text-xs text-muted-foreground">{user.email}</div>
                            </div>
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          {badge ? (
                            <Badge variant={badge.variant}>{badge.label}</Badge>
                          ) : (
                            <span className="text-xs text-muted-foreground">Not set</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          {user.talentProfile && (
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              @{user.talentProfile.username}
                              {user.talentProfile.overallSkillScore != null && (
                                <> — Score: {user.talentProfile.overallSkillScore.toFixed(1)}</>
                              )}
                            </span>
                          )}
                          {user.employerMember?.company && (
                            <span className="flex items-center gap-1">
                              <Building2 className="h-3 w-3" />
                              {user.employerMember.company.name}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-1">
                            <Link href={`/admin/users/${user.id}`}>
                              <Button variant="ghost" size="sm" title="View">
                                <ExternalLink className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                            {user.type !== "ADMIN" && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  updateType.mutate({ id: user.id, type: "ADMIN" })
                                }
                                disabled={updateType.isPending}
                                title="Make admin"
                              >
                                <Shield className="h-3.5 w-3.5" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive hover:text-destructive"
                              onClick={() => {
                                if (confirm(`Delete user "${user.name}" (${user.email})?`)) {
                                  deleteUser.mutate({ id: user.id });
                                }
                              }}
                              disabled={deleteUser.isPending}
                              title="Delete user"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
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
