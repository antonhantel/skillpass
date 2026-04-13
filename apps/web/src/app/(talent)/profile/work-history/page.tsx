"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/lib/trpc-client";
import { createWorkHistorySchema, type CreateWorkHistoryInput } from "@skillpass/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Plus, Trash2 } from "lucide-react";

export default function WorkHistoryPage() {
  const [showForm, setShowForm] = useState(false);
  const { data: workList, isLoading } = trpc.workHistory.list.useQuery();
  const utils = trpc.useUtils();

  const createWork = trpc.workHistory.create.useMutation({
    onSuccess: () => {
      utils.workHistory.list.invalidate();
      setShowForm(false);
      form.reset();
    },
  });

  const deleteWork = trpc.workHistory.delete.useMutation({
    onSuccess: () => {
      utils.workHistory.list.invalidate();
    },
  });

  const form = useForm<CreateWorkHistoryInput>({
    resolver: zodResolver(createWorkHistorySchema),
  });

  const isCurrent = form.watch("isCurrent");

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Work History</h1>
        <Button onClick={() => setShowForm(!showForm)} size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Position
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Add Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={form.handleSubmit((data) => createWork.mutate(data))}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input placeholder="Google" {...form.register("company")} />
                </div>
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    placeholder="Software Engineer"
                    {...form.register("title")}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" {...form.register("startDate")} />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    disabled={isCurrent}
                    {...form.register("endDate")}
                  />
                </div>
                <div className="flex items-end space-x-2">
                  <input
                    type="checkbox"
                    id="isCurrent"
                    className="h-4 w-4"
                    {...form.register("isCurrent")}
                  />
                  <Label htmlFor="isCurrent">Current role</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  placeholder="Mountain View, CA"
                  {...form.register("location")}
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Key responsibilities and achievements..."
                  rows={3}
                  {...form.register("description")}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={createWork.isPending}>
                  {createWork.isPending ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {workList?.length === 0 && !showForm && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Briefcase className="h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">
                No work experience yet. Add your first position.
              </p>
            </CardContent>
          </Card>
        )}

        {workList?.map((work) => (
          <Card key={work.id}>
            <CardContent className="flex items-start justify-between p-4">
              <div>
                <div className="font-semibold">{work.title}</div>
                <div className="text-sm text-muted-foreground">
                  {work.company}
                  {work.location && ` - ${work.location}`}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {new Date(work.startDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {work.isCurrent
                    ? "Present"
                    : work.endDate
                      ? new Date(work.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })
                      : "N/A"}
                </div>
                {work.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {work.description}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteWork.mutate({ id: work.id })}
              >
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
