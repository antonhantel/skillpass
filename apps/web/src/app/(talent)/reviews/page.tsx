"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FileText,
  Plus,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ReviewsPage() {
  const { data: reviews, isLoading } = trpc.performanceReview.list.useQuery();
  const utils = trpc.useUtils();

  const createReview = trpc.performanceReview.create.useMutation({
    onSuccess: () => {
      utils.performanceReview.list.invalidate();
      resetForm();
    },
  });

  const [showForm, setShowForm] = useState(false);
  const [company, setCompany] = useState("");
  const [reviewerRole, setReviewerRole] = useState("");
  const [period, setPeriod] = useState("");
  const [rawText, setRawText] = useState("");
  const [anonymized, setAnonymized] = useState(false);

  function resetForm() {
    setCompany("");
    setReviewerRole("");
    setPeriod("");
    setRawText("");
    setAnonymized(false);
    setShowForm(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rawText.length < 10) return;

    createReview.mutate({
      company: anonymized ? undefined : company || undefined,
      reviewerRole: reviewerRole || undefined,
      period: period || undefined,
      rawText,
      anonymized,
    });
  }

  function getSentimentScores(raw: unknown): Record<string, string> | null {
    if (raw && typeof raw === "object" && !Array.isArray(raw)) return raw as Record<string, string>;
    return null;
  }

  function getStringArray(raw: unknown): string[] {
    if (Array.isArray(raw)) return raw as string[];
    return [];
  }

  function getSentimentIcon(sentiment: string | null | undefined) {
    if (!sentiment) return <Minus className="h-4 w-4 text-muted-foreground" />;
    if (sentiment === "POSITIVE")
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (sentiment === "NEGATIVE")
      return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-yellow-600" />;
  }

  function getSentimentLabel(sentiment: string | null | undefined) {
    if (!sentiment) return "Pending analysis";
    return sentiment.charAt(0) + sentiment.slice(1).toLowerCase();
  }

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Performance Reviews</h1>
          <p className="text-muted-foreground">
            Upload and manage your performance reviews to strengthen your
            SkillScore.
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Cancel
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Add Review
            </>
          )}
        </Button>
      </div>

      {/* Add Review Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Add Performance Review</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">
                    Company name{" "}
                    {anonymized && (
                      <span className="text-muted-foreground">(hidden)</span>
                    )}
                  </Label>
                  <Input
                    id="company"
                    placeholder="e.g., Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    disabled={anonymized}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewerRole">Reviewer role</Label>
                  <Input
                    id="reviewerRole"
                    placeholder="e.g., Direct Manager, Skip Level"
                    value={reviewerRole}
                    onChange={(e) => setReviewerRole(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="period">Review period</Label>
                <Input
                  id="period"
                  placeholder="e.g., 2024 H1"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rawText">Paste review text</Label>
                <Textarea
                  id="rawText"
                  placeholder="Paste your performance review text here (minimum 10 characters)..."
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  rows={6}
                />
                {rawText.length > 0 && rawText.length < 10 && (
                  <p className="text-xs text-destructive">
                    Review text must be at least 10 characters.
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anonymized"
                  checked={anonymized}
                  onChange={(e) => setAnonymized(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="anonymized" className="text-sm font-normal">
                  Anonymize this review (company name will be hidden from
                  employers)
                </Label>
              </div>

              <Button
                type="submit"
                disabled={rawText.length < 10 || createReview.isPending}
              >
                {createReview.isPending ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      {reviews?.length === 0 && !showForm && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No reviews yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Add your first performance review to build your profile.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews?.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      {review.anonymized
                        ? "Anonymized Company"
                        : review.company || "Unknown Company"}
                    </span>
                    {review.anonymized && (
                      <Badge variant="outline" className="text-xs">
                        Anonymized
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {review.reviewerRole && <span>{review.reviewerRole}</span>}
                    {review.period && (
                      <span className="border-l pl-3">{review.period}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  {getSentimentIcon(getSentimentScores(review.sentimentScores)?.overall)}
                  <span className="text-muted-foreground">
                    {getSentimentLabel(getSentimentScores(review.sentimentScores)?.overall)}
                  </span>
                </div>
              </div>

              {/* Parsed Themes */}
              {getStringArray(review.parsedThemes).length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {getStringArray(review.parsedThemes).map((theme, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {theme}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Strengths & Development Areas */}
              {(getStringArray(review.strengths).length > 0 ||
                getStringArray(review.developmentAreas).length > 0) && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {getStringArray(review.strengths).length > 0 && (
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                        Strengths
                      </div>
                      <ul className="space-y-0.5 text-sm">
                        {getStringArray(review.strengths).map(
                          (strength, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <TrendingUp className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                              {strength}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                  {getStringArray(review.developmentAreas).length > 0 && (
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                        Development Areas
                      </div>
                      <ul className="space-y-0.5 text-sm">
                        {getStringArray(review.developmentAreas).map(
                          (area, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <ChevronDown className="mt-0.5 h-3 w-3 shrink-0 text-amber-600" />
                              {area}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
