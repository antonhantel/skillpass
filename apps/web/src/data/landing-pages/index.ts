import type { LandingPage } from "./types";
import { studentPages } from "./students";
import { professionalPages } from "./professionals";
import { employerSegmentPages } from "./employers-segments";
import { employerUsecasePages } from "./employers-usecases";
import { talentUsecasePages } from "./talent-usecases";
import { featureSeoPages } from "./features-seo";
import { funnelEmotionalPages } from "./funnel-emotional";

const all: LandingPage[] = [
  ...studentPages,
  ...professionalPages,
  ...employerSegmentPages,
  ...employerUsecasePages,
  ...talentUsecasePages,
  ...featureSeoPages,
  ...funnelEmotionalPages,
];

export const allPages: Record<string, LandingPage> = Object.fromEntries(
  all.map((p) => [p.slug, p])
);

export const allSlugs: string[] = all.map((p) => p.slug);

export type { LandingPage } from "./types";
