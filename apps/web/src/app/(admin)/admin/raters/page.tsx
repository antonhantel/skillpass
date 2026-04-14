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
  CheckCircle,
  XCircle,
  Clock,
  MessageSquareText,
} from "lucide-react";

const STATUS_BADGE: Record<
  string,
  { label: string; variant: "default" | "secondary" | "outline" | "destructive" }
> = {
  UNVERIFIED: { label: "Unverified", variant: "outline" },
  PENDING: { label: "Pending", variant: "secondary" },
  VERIFIED: { label: "Verified", variant: "default" },
  REJECTED: { label: "Rejected", variant: "destructive" },
};

export default function AdminRatersPage() {
  const utils = trpc.useUtils();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading } = trpc.admin.listRaters.useQuery(
    { page, limit: 25, search: search || undefined },
    { retry: false }
  );

  const updateVerification = trpc.admin.updateRaterVerification.useMutation({
    onSuccess: () => utils.admin.listRaters.invalidate(),
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Raters</h1>
        <p className="text-muted-foreground">
          {data ? `${data.total} reference providers` : "Loading..."}
        </p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name, email, or company..."
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
                  <th className="px-4 py-3 text-left font-medium">Rater</th>
                  <th className="px-4 py-3 text-left font-medium">Company</th>
                  <th className="px-4 py-3 text-left font-medium">References</th>
                  <th className="px-4 py-3 text-left font-medium">Mean Score</th>
                  <th className="px-4 py-3 text-left font-medium">Status</th>
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
                ) : data?.raters.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      No raters found
                    </td>
                  </tr>
                ) : (
                  data?.raters.map((rater) => {
                    const badge = STATUS_BADGE[rater.verificationStatus] ?? STATUS_BADGE.UNVERIFIED;
                    return (
                      <tr key={rater.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="px-4 py-3">
                          <div>
                            <div className="font-medium flex items-center gap-1">
                              <MessageSquareText className="h-3.5 w-3.5 text-muted-foreground" />
                              {rater.name}
                            </div>
                            <div className="text-xs text-muted-foreground">{rater.email}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {rater.company ? (
                            <div>
                              <div className="text-sm">{rater.company}</div>
                              {rater.title && (
                                <div className="text-xs">{rater.title}</div>
                              )}
                            </div>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {rater._count.references} ({rater.totalReferencesGiven} given)
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {rater.historicalMean != null
                            ? rater.historicalMean.toFixed(2)
                            : "—"}
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant={badge.variant}>{badge.label}</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-1">
                            {rater.verificationStatus !== "VERIFIED" && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  updateVerification.mutate({
                                    id: rater.id,
                                    status: "VERIFIED",
                                  })
                                }
                                disabled={updateVerification.isPending}
                                title="Verify"
                              >
                                <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                              </Button>
                            )}
                            {rater.verificationStatus !== "PENDING" && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  updateVerification.mutate({
                                    id: rater.id,
                                    status: "PENDING",
                                  })
                                }
                                disabled={updateVerification.isPending}
                                title="Mark pending"
                              >
                                <Clock className="h-3.5 w-3.5" />
                              </Button>
                            )}
                            {rater.verificationStatus !== "REJECTED" && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  updateVerification.mutate({
                                    id: rater.id,
                                    status: "REJECTED",
                                  })
                                }
                                disabled={updateVerification.isPending}
                                title="Reject"
                              >
                                <XCircle className="h-3.5 w-3.5 text-destructive" />
                              </Button>
                            )}
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
