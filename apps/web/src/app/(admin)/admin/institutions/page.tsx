"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Trash2,
  Plus,
  X,
} from "lucide-react";

export default function AdminInstitutionsPage() {
  const utils = trpc.useUtils();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    country: "",
    stateOrProvince: "",
    tierScore: "",
    rankingUsNews: "",
    acceptanceRate: "",
  });

  const { data, isLoading } = trpc.admin.listInstitutions.useQuery(
    { page, limit: 25, search: search || undefined },
    { retry: false }
  );

  const create = trpc.admin.createInstitution.useMutation({
    onSuccess: () => {
      utils.admin.listInstitutions.invalidate();
      setShowForm(false);
      setForm({
        name: "",
        country: "",
        stateOrProvince: "",
        tierScore: "",
        rankingUsNews: "",
        acceptanceRate: "",
      });
    },
  });

  const deleteInst = trpc.admin.deleteInstitution.useMutation({
    onSuccess: () => utils.admin.listInstitutions.invalidate(),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Institutions</h1>
          <p className="text-muted-foreground">
            {data ? `${data.total} institutions` : "Loading..."}
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} size="sm">
          {showForm ? (
            <>
              <X className="h-4 w-4 mr-1" /> Cancel
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 mr-1" /> Add Institution
            </>
          )}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">New Institution</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                create.mutate({
                  name: form.name,
                  country: form.country,
                  stateOrProvince: form.stateOrProvince || undefined,
                  tierScore: form.tierScore ? Number(form.tierScore) : undefined,
                  rankingUsNews: form.rankingUsNews ? Number(form.rankingUsNews) : undefined,
                  acceptanceRate: form.acceptanceRate ? Number(form.acceptanceRate) : undefined,
                });
              }}
              className="grid gap-3 md:grid-cols-2"
            >
              <div>
                <Label>Name *</Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Country *</Label>
                <Input
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>State/Province</Label>
                <Input
                  value={form.stateOrProvince}
                  onChange={(e) => setForm({ ...form, stateOrProvince: e.target.value })}
                />
              </div>
              <div>
                <Label>Tier Score (0-10)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={form.tierScore}
                  onChange={(e) => setForm({ ...form, tierScore: e.target.value })}
                />
              </div>
              <div>
                <Label>US News Ranking</Label>
                <Input
                  type="number"
                  value={form.rankingUsNews}
                  onChange={(e) => setForm({ ...form, rankingUsNews: e.target.value })}
                />
              </div>
              <div>
                <Label>Acceptance Rate (0-1)</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={form.acceptanceRate}
                  onChange={(e) => setForm({ ...form, acceptanceRate: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" disabled={create.isPending || !form.name || !form.country}>
                  {create.isPending ? "Creating..." : "Create Institution"}
                </Button>
                {create.error && (
                  <span className="ml-3 text-sm text-destructive">{create.error.message}</span>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search institutions..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="pl-9"
        />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Institution</th>
                  <th className="px-4 py-3 text-left font-medium">Location</th>
                  <th className="px-4 py-3 text-left font-medium">Tier</th>
                  <th className="px-4 py-3 text-left font-medium">Rankings</th>
                  <th className="px-4 py-3 text-left font-medium">Students</th>
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
                ) : data?.institutions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      No institutions found
                    </td>
                  </tr>
                ) : (
                  data?.institutions.map((inst) => (
                    <tr key={inst.id} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-4 py-3">
                        <div className="font-medium flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
                          {inst.name}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {inst.stateOrProvince ? `${inst.stateOrProvince}, ` : ""}
                        {inst.country}
                      </td>
                      <td className="px-4 py-3">
                        {inst.tierScore != null ? (
                          <Badge variant="outline">{inst.tierScore.toFixed(1)}</Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {inst.rankingUsNews && <span>USN #{inst.rankingUsNews}</span>}
                        {inst.rankingQs && (
                          <span className="ml-2">QS #{inst.rankingQs}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {inst._count.education}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                            onClick={() => {
                              if (confirm(`Delete "${inst.name}"?`)) {
                                deleteInst.mutate({ id: inst.id });
                              }
                            }}
                            disabled={deleteInst.isPending}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

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
