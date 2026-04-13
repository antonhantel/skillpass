"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  GraduationCap,
  FileText,
  Users,
  ClipboardCheck,
  BarChart3,
  MessageSquareText,
  Search,
  Briefcase,
  Heart,
} from "lucide-react";

const talentNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile/edit", label: "Profile", icon: User },
  { href: "/profile/education", label: "Education", icon: GraduationCap },
  { href: "/transcript", label: "Transcripts", icon: FileText },
  { href: "/profile/work-history", label: "Work History", icon: ClipboardCheck },
  { href: "/references", label: "References", icon: Users },
  { href: "/reviews", label: "Reviews", icon: MessageSquareText },
  { href: "/score", label: "SkillScore", icon: BarChart3 },
];

const employerNavItems = [
  { href: "/employer-dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/search", label: "Search Candidates", icon: Search },
  { href: "/roles", label: "Roles", icon: Briefcase },
  { href: "/shortlist", label: "Shortlist", icon: Heart },
];

function Sidebar({ items }: { items: typeof talentNavItems }) {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r bg-muted/30">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="text-xl font-bold text-primary">
          SkillPass
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-4">
        <button
          onClick={async () => {
            const supabase = createBrowserClient(
              process.env.NEXT_PUBLIC_SUPABASE_URL!,
              process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
            );
            await supabase.auth.signOut();
            window.location.href = "/";
          }}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}

export function TalentSidebar() {
  return <Sidebar items={talentNavItems} />;
}

export function EmployerSidebar() {
  return <Sidebar items={employerNavItems} />;
}
