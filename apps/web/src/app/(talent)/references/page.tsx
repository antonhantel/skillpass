"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Users, Plus, Mail, Clock, CheckCircle2, XCircle,
  AlertCircle, Copy, Star, Send,
} from "lucide-react";

const RELATIONSHIP_TYPES = ["MANAGER","PEER","DIRECT_REPORT","PROFESSOR","CLIENT","MENTOR"] as const;

const RELATIONSHIP_LABELS: Record<string, string> = {
  MANAGER: "Manager", PEER: "Peer", DIRECT_REPORT: "Direct Report",
  PROFESSOR: "Professor", CLIENT: "Client", MENTOR: "Mentor",
};

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { cls: string; icon: typeof Clock; label: string }> = {
    PENDING: { cls: "border-yellow-300 bg-yellow-50 text-yellow-700", icon: Clock, label: "Pending" },
    COMPLETED: { cls: "border-green-300 bg-green-50 text-green-700", icon: CheckCircle2, label: "Completed" },
    DECLINED: { cls: "border-red-300 bg-red-50 text-red-700", icon: XCircle, label: "Declined" },
    EXPIRED: { cls: "border-gray-300 bg-gray-50 text-gray-500", icon: AlertCircle, label: "Expired" },
  };
  const c = config[status];
  if (!c) return <Badge variant="outline">{status}</Badge>;
  const Icon = c.icon;
  return <Badge variant="outline" className={c.cls}><Icon className="mr-1 h-3 w-3" />{c.label}</Badge>;
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getDimensionAvg(scores: unknown): number | null {
  if (!scores || typeof scores !== "object") return null;
  const vals = Object.values(scores as Record<string, number>);
  if (vals.length === 0) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

export default function ReferencesPage() {
  const [showForm, setShowForm] = useState(false);
  const [raterName, setRaterName] = useState("");
  const [raterEmail, setRaterEmail] = useState("");
  const [relationshipType, setRelationshipType] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { data: references, isLoading } = trpc.reference.list.useQuery();
  const utils = trpc.useUtils();

  const requestRef = trpc.reference.request.useMutation({
    onSuccess: () => {
      utils.reference.list.invalidate();
      setRaterName("");
      setRaterEmail("");
      setRelationshipType("");
      setShowForm(false);
    },
  });

  function handleCopyLink(token: string, id: string) {
    navigator.clipboard.writeText(window.location.origin + "/r/" + token);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const completed = references?.filter((r) => r.status === "COMPLETED").length ?? 0;
  const pending = references?.filter((r) => r.status === "PENDING").length ?? 0;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">References</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Request structured references from managers, peers, and mentors.
            Collect once, share with every employer.
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Request Reference
        </Button>
      </div>

      {references && references.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{references.length}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{completed}</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">{pending}</p>
                <p className="text-xs text-muted-foreground">Pending</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showForm && (
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="font-semibold">New Reference Request</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="rName">Name</Label>
                <Input id="rName" value={raterName} onChange={(e) => setRaterName(e.target.value)} placeholder="Jane Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rEmail">Email</Label>
                <Input id="rEmail" type="email" value={raterEmail} onChange={(e) => setRaterEmail(e.target.value)} placeholder="jane@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relType">Relationship</Label>
                <select
                  id="relType"
                  value={relationshipType}
                  onChange={(e) => setRelationshipType(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select...</option>
                  {RELATIONSHIP_TYPES.map((t) => (
                    <option key={t} value={t}>{RELATIONSHIP_LABELS[t]}</option>
                  ))}
                </select>
              </div>
            </div>
            {requestRef.error && (
              <p className="text-sm text-destructive">{requestRef.error.message}</p>
            )}
            <Button
              disabled={!raterName || !raterEmail || !relationshipType || requestRef.isPending}
              onClick={() =>
                requestRef.mutate({
                  raterName,
                  raterEmail,
                  relationshipType: relationshipType as (typeof RELATIONSHIP_TYPES)[number],
                })
              }
            >
              <Send className="mr-2 h-4 w-4" />
              {requestRef.isPending ? "Sending..." : "Send Request"}
            </Button>
          </CardContent>
        </Card>
      )}

      {!references || references.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Users className="h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No references yet</h3>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              Request your first reference to start building your peer signal score.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {references.map((ref) => {
            const avgScore = ref.status === "COMPLETED" ? getDimensionAvg(ref.dimensionScores) : null;
            return (
              <Card key={ref.id}>
                <CardContent className="p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{ref.raterName ?? ref.raterEmail}</h3>
                        <Badge variant="outline">
                          {RELATIONSHIP_LABELS[ref.relationshipType] ?? ref.relationshipType}
                        </Badge>
                        <StatusBadge status={ref.status} />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="h-3.5 w-3.5" />
                        {ref.raterEmail}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {"Requested " + formatDate(ref.requestedAt)}
                        {ref.completedAt && " | Completed " + formatDate(ref.completedAt)}
                      </div>
                      {avgScore !== null && (
                        <div className="flex items-center gap-1 pt-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{avgScore.toFixed(1)} / 5.0</span>
                        </div>
                      )}
                    </div>
                    {ref.status === "PENDING" && (
                      <Button variant="outline" size="sm" onClick={() => handleCopyLink(ref.token, ref.id)}>
                        <Copy className="mr-1.5 h-3.5 w-3.5" />
                        {copiedId === ref.id ? "Copied!" : "Copy Link"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
