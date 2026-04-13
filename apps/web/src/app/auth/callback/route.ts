import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { db } from "@skillpass/db";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Check if user exists in DB and has a type set
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (authUser) {
        const dbUser = await db.user.findFirst({
          where: { supabaseId: authUser.id },
        });

        if (!dbUser || !dbUser.type) {
          // New user or user without type → onboarding
          return NextResponse.redirect(`${origin}/onboarding`);
        }

        // Existing user → route to their dashboard
        const dest =
          dbUser.type === "ADMIN"
            ? "/admin"
            : dbUser.type === "EMPLOYER"
              ? "/employer-dashboard"
              : "/dashboard";
        return NextResponse.redirect(`${origin}${dest}`);
      }

      return NextResponse.redirect(`${origin}/onboarding`);
    }
  }

  return NextResponse.redirect(`${origin}/sign-in`);
}
