"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc-client";
import { Search, Users, Briefcase, Heart, Eye, Trophy } from "lucide-react";
import Link from "next/link";

function CompanySetup() {
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const utils = trpc.useUtils();

  const createCompany = trpc.employer.createCompany.useMutation({
    onSuccess: () => {
      utils.employer.getCompany.invalidate();
      utils.employer.getStats.invalidate();
    },
  });

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Set up your company</CardTitle>
          <p className="text-sm text-muted-foreground">
            Create your company account to start searching for candidates.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Acme Corp" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain">Company Domain</Label>
            <Input id="domain" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="acme.com" />
          </div>
          {createCompany.error && (
            <p className="text-sm text-destructive">{createCompany.error.message}</p>
          )}
          <Button className="w-full" disabled={!name || !domain || createCompany.isPending} onClick={() => createCompany.mutate({ name, domain })}>
            {createCompany.isPending ? "Creating..." : "Create Company"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">30-day free trial. No credit card required.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function EmployerDashboardPage() {
  const { data: company, isLoading } = trpc.employer.getCompany.useQuery();
  const { data: stats } = trpc.employer.getStats.useQuery();

  if (isLoading) {
    return <div className="flex h-64 items-center justify-center"><div className="text-muted-foreground">Loading...</div></div>;
  }

  if (!company) {
    return <CompanySetup />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Employer Dashboard</h1>
        <p className="text-muted-foreground">
          Search pre-vetted candidates and manage your hiring pipeline.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <Eye className="mr-1.5 inline h-4 w-4" />
              Candidates Viewed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.candidatesViewed ?? 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <Heart className="mr-1.5 inline h-4 w-4" />
              Shortlisted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.shortlisted ?? 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <Briefcase className="mr-1.5 inline h-4 w-4" />
              Active Roles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.activeRoles ?? 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <Trophy className="mr-1.5 inline h-4 w-4" />
              Hires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.hires ?? 0}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/search">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <Search className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Search Candidates</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/roles">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Manage Roles</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/shortlist">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Shortlist</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/search">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Browse Talent</span>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
