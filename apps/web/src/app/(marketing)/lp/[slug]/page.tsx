import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPages, allSlugs } from "@/data/landing-pages";
import { LandingPageClient } from "./client";

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = allPages[slug];
  if (!page) return {};
  return {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      type: "website",
      siteName: "SkillPass",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = allPages[slug];
  if (!page) notFound();
  return <LandingPageClient page={page} />;
}
