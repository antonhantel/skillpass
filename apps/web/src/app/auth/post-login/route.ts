import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { db } from "@skillpass/db";

/**
 * Post-login router: called after email/password sign-in or session resume.
 * Determines user type from DB and routes to the correct dashboard.
 * Auto-creates DB user record if it doesn't exist.
 */
export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) {
    return NextResponse.redirect(`${origin}/sign-in`);
  }

  // Find or create DB user
  let dbUser = await db.user.findFirst({
    where: { supabaseId: authUser.id },
  });

  if (!dbUser) {
    const email = authUser.email ?? `${authUser.id}@placeholder.local`;
    const name =
      authUser.user_metadata?.full_name ??
      authUser.user_metadata?.name ??
      email.split("@")[0] ??
      "User";
    const avatarUrl =
      authUser.user_metadata?.avatar_url ??
      authUser.user_metadata?.picture ??
      null;

    dbUser = await db.user.create({
      data: {
        supabaseId: authUser.id,
        email,
        name,
        avatarUrl,
      },
    });
  }

  if (!dbUser.type) {
    return NextResponse.redirect(`${origin}/onboarding`);
  }

  const dest =
    dbUser.type === "ADMIN"
      ? "/admin"
      : dbUser.type === "EMPLOYER"
        ? "/employer-dashboard"
        : "/dashboard";
  return NextResponse.redirect(`${origin}${dest}`);
}
