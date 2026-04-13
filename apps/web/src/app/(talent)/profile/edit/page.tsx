"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/lib/trpc-client";
import { updateProfileSchema, type UpdateProfileInput } from "@skillpass/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EditProfilePage() {
  const { data: profile, isLoading } = trpc.talent.getProfile.useQuery();
  const utils = trpc.useUtils();

  const updateProfile = trpc.talent.updateProfile.useMutation({
    onSuccess: () => {
      utils.talent.getProfile.invalidate();
    },
  });

  const form = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
    values: profile
      ? {
          username: profile.username,
          headline: profile.headline ?? "",
          bio: profile.bio ?? "",
          location: profile.location ?? "",
          workAuth: profile.workAuth ?? undefined,
          yearsExperience: profile.yearsExperience ?? undefined,
          linkedinUrl: profile.linkedinUrl ?? "",
          phoneNumber: profile.phoneNumber ?? "",
        }
      : undefined,
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  const onSubmit = (data: UpdateProfileInput) => {
    updateProfile.mutate(data);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Profile</h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="anton-hantel"
                  {...form.register("username")}
                />
                {form.formState.errors.username && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.username.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="headline">Headline</Label>
                <Input
                  id="headline"
                  placeholder="Software Engineer at Google"
                  {...form.register("headline")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell employers about yourself..."
                rows={4}
                {...form.register("bio")}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="San Francisco, CA"
                  {...form.register("location")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearsExperience">Years of Experience</Label>
                <Input
                  id="yearsExperience"
                  type="number"
                  min={0}
                  max={50}
                  {...form.register("yearsExperience", { valueAsNumber: true })}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                <Input
                  id="linkedinUrl"
                  placeholder="https://linkedin.com/in/..."
                  {...form.register("linkedinUrl")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workAuth">Work Authorization</Label>
                <select
                  id="workAuth"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  {...form.register("workAuth")}
                >
                  <option value="">Select...</option>
                  <option value="US_CITIZEN">US Citizen</option>
                  <option value="GREEN_CARD">Green Card</option>
                  <option value="H1B">H-1B Visa</option>
                  <option value="OPT">OPT</option>
                  <option value="OTHER">Other</option>
                  <option value="UNDISCLOSED">Prefer not to say</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={updateProfile.isPending}>
            {updateProfile.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        {updateProfile.isSuccess && (
          <p className="text-sm text-green-600">Profile updated successfully!</p>
        )}
      </form>
    </div>
  );
}
