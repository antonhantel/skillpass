"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PREDEFINED_SETTINGS = [
  {
    key: "signups_enabled",
    label: "Signups Enabled",
    description: "Allow new users to sign up",
    type: "boolean" as const,
    default: true,
  },
  {
    key: "maintenance_mode",
    label: "Maintenance Mode",
    description: "Lock the platform for maintenance",
    type: "boolean" as const,
    default: false,
  },
  {
    key: "trial_duration_days",
    label: "Trial Duration (days)",
    description: "Default trial period for new employer signups",
    type: "number" as const,
    default: 30,
  },
  {
    key: "min_references_for_score",
    label: "Min References for Score",
    description: "Minimum references needed to compute a SkillScore",
    type: "number" as const,
    default: 3,
  },
  {
    key: "allowed_email_domains",
    label: "Allowed Email Domains",
    description: "Comma-separated list, or leave empty for all",
    type: "string" as const,
    default: "",
  },
  {
    key: "announcement_banner",
    label: "Announcement Banner",
    description: "Platform-wide message shown to all users",
    type: "text" as const,
    default: "",
  },
];

export default function AdminSettingsPage() {
  const utils = trpc.useUtils();
  const { data: settings } = trpc.admin.getSettings.useQuery(undefined, { retry: false });
  const setSetting = trpc.admin.setSetting.useMutation({
    onSuccess: () => utils.admin.getSettings.invalidate(),
  });

  const settingsMap = new Map(settings?.map((s) => [s.key, s.value]) ?? []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Platform Settings</h1>
        <p className="text-muted-foreground">
          Configure platform-wide behavior and policies
        </p>
      </div>

      <div className="grid gap-4">
        {PREDEFINED_SETTINGS.map((def) => {
          const current = settingsMap.get(def.key) ?? def.default;
          return (
            <SettingRow
              key={def.key}
              definition={def}
              currentValue={current}
              onSave={(value) => setSetting.mutate({ key: def.key, value })}
              isSaving={setSetting.isPending}
            />
          );
        })}
      </div>

      {/* Custom settings */}
      {settings && settings.filter((s) => !PREDEFINED_SETTINGS.find((d) => d.key === s.key)).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Custom Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {settings
              .filter((s) => !PREDEFINED_SETTINGS.find((d) => d.key === s.key))
              .map((s) => (
                <div key={s.key} className="flex items-center justify-between text-sm border-b last:border-0 pb-2 last:pb-0">
                  <div>
                    <div className="font-medium font-mono text-xs">{s.key}</div>
                    <div className="text-xs text-muted-foreground truncate max-w-md">
                      {JSON.stringify(s.value)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(s.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

type SettingDef = (typeof PREDEFINED_SETTINGS)[number];

function SettingRow({
  definition,
  currentValue,
  onSave,
  isSaving,
}: {
  definition: SettingDef;
  currentValue: unknown;
  onSave: (value: unknown) => void;
  isSaving: boolean;
}) {
  const [value, setValue] = useState<unknown>(currentValue);
  const changed = JSON.stringify(value) !== JSON.stringify(currentValue);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Label className="text-base font-semibold">{definition.label}</Label>
            <p className="text-xs text-muted-foreground mt-0.5 mb-3">
              {definition.description}
            </p>
            {definition.type === "boolean" ? (
              <div className="flex gap-2">
                <Button
                  variant={value === true ? "default" : "outline"}
                  size="sm"
                  onClick={() => setValue(true)}
                >
                  Enabled
                </Button>
                <Button
                  variant={value === false ? "default" : "outline"}
                  size="sm"
                  onClick={() => setValue(false)}
                >
                  Disabled
                </Button>
              </div>
            ) : definition.type === "number" ? (
              <Input
                type="number"
                value={String(value ?? "")}
                onChange={(e) => setValue(Number(e.target.value))}
                className="max-w-[200px]"
              />
            ) : definition.type === "text" ? (
              <Textarea
                value={String(value ?? "")}
                onChange={(e) => setValue(e.target.value)}
                rows={2}
              />
            ) : (
              <Input
                value={String(value ?? "")}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
          </div>
          {changed && (
            <Button
              size="sm"
              onClick={() => onSave(value)}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
