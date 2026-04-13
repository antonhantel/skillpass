"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/lib/trpc-client";
import { createEducationSchema, type CreateEducationInput } from "@skillpass/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

export default function EducationPage() {
  const [showForm, setShowForm] = useState(false);
  const { data: educationList, isLoading } = trpc.education.list.useQuery();
  const utils = trpc.useUtils();

  const createEducation = trpc.education.create.useMutation({
    onSuccess: () => {
      utils.education.list.invalidate();
      setShowForm(false);
      form.reset();
    },
  });

  const deleteEducation = trpc.education.delete.useMutation({
    onSuccess: () => {
      utils.education.list.invalidate();
    },
  });

  const form = useForm<CreateEducationInput>({
    resolver: zodResolver(createEducationSchema),
    defaultValues: { gpaScale: 4.0 },
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Education</h1>
        <Button onClick={() => setShowForm(!showForm)} size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Add Education</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={form.handleSubmit((data) => createEducation.mutate(data))}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Institution</Label>
                  <Input
                    placeholder="Massachusetts Institute of Technology"
                    {...form.register("institutionName")}
                  />
                  {form.formState.errors.institutionName && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.institutionName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Degree</Label>
                  <Input
                    placeholder="Bachelor of Science"
                    {...form.register("degree")}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Major</Label>
                  <Input
                    placeholder="Computer Science"
                    {...form.register("major")}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Minor (optional)</Label>
                  <Input
                    placeholder="Mathematics"
                    {...form.register("minor")}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>GPA</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    max="5"
                    placeholder="3.85"
                    {...form.register("gpaRaw", { valueAsNumber: true })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>GPA Scale</Label>
                  <Input
                    type="number"
                    step="0.1"
                    defaultValue={4.0}
                    {...form.register("gpaScale", { valueAsNumber: true })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Graduation Year</Label>
                  <Input
                    type="number"
                    min="1950"
                    max="2035"
                    placeholder="2025"
                    {...form.register("graduationYear", { valueAsNumber: true })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={createEducation.isPending}>
                  {createEducation.isPending ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Education List */}
      <div className="space-y-4">
        {educationList?.length === 0 && !showForm && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <GraduationCap className="h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">
                No education entries yet. Add your first one.
              </p>
            </CardContent>
          </Card>
        )}

        {educationList?.map((edu) => (
          <Card key={edu.id}>
            <CardContent className="flex items-start justify-between p-4">
              <div>
                <div className="font-semibold">{edu.institutionName}</div>
                <div className="text-sm text-muted-foreground">
                  {edu.degree} in {edu.major}
                  {edu.minor ? `, Minor: ${edu.minor}` : ""}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {edu.gpaRaw != null && `GPA: ${edu.gpaRaw}/${edu.gpaScale}`}
                  {edu.gpaCalibrated != null && (
                    <span className="ml-2 font-medium text-primary">
                      Calibrated: {edu.gpaCalibrated}
                    </span>
                  )}
                  {edu.graduationYear && ` | Class of ${edu.graduationYear}`}
                </div>
                {edu.institution && (
                  <div className="mt-1 text-xs text-muted-foreground">
                    Institution tier: {edu.institution.tierScore?.toFixed(1) ?? "N/A"}
                    {edu.institution.rankingUsNews &&
                      ` | US News #${edu.institution.rankingUsNews}`}
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteEducation.mutate({ id: edu.id })}
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
