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
    console.log("[post-login] no authUser → /sign-in");
    return NextResponse.redirect(`${origin}/sign-in`);
  }

  console.log(
    `[post-login] authUser.id=${authUser.id} email=${authUser.email}`
  );

  let dbUser = await db.user.findFirst({
    where: { supabaseId: authUser.id },
  });

  if (dbUser) {
    console.log(
      `[post-login] matched dbUser.id=${dbUser.id} type=${dbUser.type}`
    );
  }

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

    // Recover from supabaseId rotation (e.g. user re-created in Supabase dashboard):
    // if a row exists with this email but a different supabaseId, relink it.
    const existingByEmail = await db.user.findUnique({ where: { email } });
    if (existingByEmail) {
      console.log(
        `[post-login] RELINK: row by email has supabaseId=${existingByEmail.supabaseId}, auth has ${authUser.id} — updating`
      );
      dbUser = await db.user.update({
        where: { id: existingByEmail.id },
        data: { supabaseId: authUser.id, name, avatarUrl },
      });
    } else {
      dbUser = await db.user.create({
        data: {
          supabaseId: authUser.id,
          email,
          name,
          avatarUrl,
        },
      });
      console.log(
        `[post-login] CREATED dbUser.id=${dbUser.id} for authUser.id=${authUser.id}`
      );
    }
  }

  if (!dbUser.type) {
    console.log(`[post-login] no type → /onboarding`);
    return NextResponse.redirect(`${origin}/onboarding`);
  }

  const dest =
    dbUser.type === "ADMIN"
      ? "/admin"
      : dbUser.type === "EMPLOYER"
        ? "/employer-dashboard"
        : "/dashboard";
  console.log(`[post-login] → ${dest}`);
  return NextResponse.redirect(`${origin}${dest}`);
}
