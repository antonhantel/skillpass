-- ================================================================
-- SkillPass — Supabase Schema
-- ================================================================
--
-- Portable proof-of-skill platform ("credit score for
-- professional ability"). Two-sided marketplace: talent builds
-- verified profiles, employers search/filter by SkillScore.
--
-- This file mirrors packages/db/prisma/schema.prisma exactly.
-- Run it in the Supabase SQL Editor for initial table setup.
--
-- Sections:
--   1. Extensions
--   2. Enum types
--   3. Trigger function
--   4. Tables (20, in foreign-key dependency order)
--   5. Updated-at triggers
--   6. Additional indexes
--   7. Row Level Security + Clerk auth helper
--
-- ================================================================


-- ────────────────────────────────────────────────────────────────
-- 1. EXTENSIONS
-- ────────────────────────────────────────────────────────────────

create extension if not exists "pgcrypto" with schema "extensions";


-- ────────────────────────────────────────────────────────────────
-- 2. ENUM TYPES
-- ────────────────────────────────────────────────────────────────
-- Names are PascalCase-quoted to match Prisma's PostgreSQL output.
-- Values are SCREAMING_SNAKE_CASE per the Prisma schema.

create type "UserType" as enum (
  'TALENT',
  'EMPLOYER',
  'ADMIN'
);

create type "WorkAuthStatus" as enum (
  'US_CITIZEN',
  'GREEN_CARD',
  'H1B',
  'OPT',
  'OTHER',
  'UNDISCLOSED'
);

create type "ReferenceStatus" as enum (
  'PENDING',
  'COMPLETED',
  'DECLINED',
  'EXPIRED'
);

create type "RelationshipType" as enum (
  'MANAGER',
  'PEER',
  'DIRECT_REPORT',
  'PROFESSOR',
  'CLIENT',
  'MENTOR'
);

create type "AssessmentModule" as enum (
  'CODING_ALGORITHMS',
  'CODING_SYSTEM_DESIGN',
  'CASE_CONSULTING',
  'DATA_ANALYSIS',
  'WRITING',
  'GMA',
  'PERSONALITY_BIG5',
  'SJT'
);

create type "ReviewSource" as enum (
  'SELF_UPLOAD',
  'EMPLOYER_PUSH'
);

create type "VerificationStatus" as enum (
  'UNVERIFIED',
  'PENDING',
  'VERIFIED',
  'REJECTED'
);

create type "CompanyPlan" as enum (
  'FREE_TRIAL',
  'STARTER',
  'GROWTH',
  'ENTERPRISE'
);

create type "RoleStatus" as enum (
  'ACTIVE',
  'PAUSED',
  'FILLED',
  'ARCHIVED'
);

create type "TranscriptStatus" as enum (
  'UPLOADED',
  'PROCESSING',
  'PARSED',
  'VERIFIED',
  'FAILED'
);


-- ────────────────────────────────────────────────────────────────
-- 3. TRIGGER FUNCTION — auto-set updated_at
-- ────────────────────────────────────────────────────────────────
-- Prisma's @updatedAt is application-level. This trigger is a
-- safety net for direct SQL updates (dashboard, edge functions).

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


-- ────────────────────────────────────────────────────────────────
-- 4. TABLES
-- ────────────────────────────────────────────────────────────────
-- Ordered by foreign-key dependencies (parents before children).
-- Column types match Prisma 6 PostgreSQL defaults:
--   String  → text       Float    → double precision
--   Int     → integer    Boolean  → boolean
--   DateTime→ timestamp(3) without time zone
--   Json    → jsonb      @db.Uuid → uuid


-- ╔══════════════════════════════════════════════════════════════╗
-- ║  INDEPENDENT TABLES (no FK to other app tables)             ║
-- ╚══════════════════════════════════════════════════════════════╝

-- ── users ──────────────────────────────────────────────────────

create table public.users (
  id            uuid        primary key default gen_random_uuid(),
  clerk_id      text        not null,
  email         text        not null,
  name          text        not null,
  type          "UserType",
  avatar_url    text,
  created_at    timestamp(3) without time zone not null default now(),
  updated_at    timestamp(3) without time zone not null default now(),
  last_login_at timestamp(3) without time zone,

  constraint users_clerk_id_key  unique (clerk_id),
  constraint users_email_key     unique (email)
);


-- ── institutions ───────────────────────────────────────────────

create table public.institutions (
  id                    uuid             primary key default gen_random_uuid(),
  name                  text             not null,
  country               text             not null,
  state_or_province     text,
  tier_score            double precision,
  avg_gpa               double precision,
  acceptance_rate       double precision,
  ranking_us_news       integer,
  ranking_qs            integer,
  research_output       double precision,
  student_faculty_ratio double precision,
  created_at            timestamp(3) without time zone not null default now(),
  updated_at            timestamp(3) without time zone not null default now(),

  constraint institutions_name_key unique (name),

  constraint institutions_acceptance_rate_range
    check (acceptance_rate is null or (acceptance_rate >= 0 and acceptance_rate <= 100)),
  constraint institutions_rankings_positive
    check (
      (ranking_us_news is null or ranking_us_news > 0) and
      (ranking_qs      is null or ranking_qs > 0)
    )
);


-- ── raters ─────────────────────────────────────────────────────

create table public.raters (
  id                    uuid                 primary key default gen_random_uuid(),
  name                  text                 not null,
  email                 text                 not null,
  linkedin_url          text,
  company               text,
  title                 text,
  historical_mean       double precision,
  historical_stdev      double precision,
  total_references_given integer             not null default 0,
  verification_status   "VerificationStatus" not null default 'UNVERIFIED',
  email_domain_verified boolean              not null default false,
  created_at            timestamp(3) without time zone not null default now(),
  updated_at            timestamp(3) without time zone not null default now(),

  constraint raters_email_key unique (email),

  constraint raters_total_refs_non_negative
    check (total_references_given >= 0),
  constraint raters_stdev_non_negative
    check (historical_stdev is null or historical_stdev >= 0)
);


-- ── companies ──────────────────────────────────────────────────

create table public.companies (
  id                      uuid          primary key default gen_random_uuid(),
  name                    text          not null,
  domain                  text          not null,
  domain_verified         boolean       not null default false,
  plan                    "CompanyPlan" not null default 'FREE_TRIAL',
  seats_total             integer       not null default 1,
  seats_used              integer       not null default 0,
  trial_ends_at           timestamp(3) without time zone,
  stripe_customer_id      text,
  stripe_subscription_id  text,
  logo_url                text,
  created_at              timestamp(3) without time zone not null default now(),
  updated_at              timestamp(3) without time zone not null default now(),

  constraint companies_domain_key            unique (domain),
  constraint companies_stripe_customer_id_key unique (stripe_customer_id),

  constraint companies_seats_valid
    check (seats_total >= 1 and seats_used >= 0 and seats_used <= seats_total)
);


-- ╔══════════════════════════════════════════════════════════════╗
-- ║  SECOND-TIER TABLES (FK → independent tables only)          ║
-- ╚══════════════════════════════════════════════════════════════╝

-- ── talent_profiles ────────────────────────────────────────────

create table public.talent_profiles (
  id                     uuid             primary key default gen_random_uuid(),
  user_id                uuid             not null,
  username               text             not null,
  headline               text,
  bio                    text,
  location               text,
  work_auth              "WorkAuthStatus",
  years_experience       integer,
  linkedin_url           text,
  phone_number           text,

  -- Denormalized scores (SkillScore 300-850)
  overall_skill_score    double precision,
  academic_score         double precision,
  performance_score      double precision,
  peer_signal_score      double precision,
  assessed_ability_score double precision,
  score_confidence       double precision,
  score_updated_at       timestamp(3) without time zone,

  -- Privacy
  is_public              boolean not null default true,
  privacy_settings       jsonb   not null default '{}',

  created_at timestamp(3) without time zone not null default now(),
  updated_at timestamp(3) without time zone not null default now(),

  constraint talent_profiles_user_id_key     unique (user_id),
  constraint talent_profiles_username_key    unique (username),

  constraint talent_profiles_user_id_fkey
    foreign key (user_id) references public.users (id) on delete cascade,

  -- SkillScore range: 300-850 (like a credit score)
  constraint tp_overall_score_range
    check (overall_skill_score is null or (overall_skill_score >= 300 and overall_skill_score <= 850)),
  constraint tp_confidence_range
    check (score_confidence is null or (score_confidence >= 0 and score_confidence <= 1)),
  constraint tp_years_exp_non_negative
    check (years_experience is null or years_experience >= 0)
);

create index idx_talent_profiles_score     on public.talent_profiles (overall_skill_score);
create index idx_talent_profiles_location  on public.talent_profiles (location);
create index idx_talent_profiles_years_exp on public.talent_profiles (years_experience);


-- ── departments ────────────────────────────────────────────────

create table public.departments (
  id                 uuid             primary key default gen_random_uuid(),
  institution_id     uuid             not null,
  name               text             not null,
  ranking_score      double precision,
  median_salary      double precision,
  phd_placement_rate double precision,

  constraint departments_institution_name_key
    unique (institution_id, name),

  constraint departments_institution_id_fkey
    foreign key (institution_id) references public.institutions (id) on delete cascade,

  constraint departments_placement_rate_range
    check (phd_placement_rate is null or (phd_placement_rate >= 0 and phd_placement_rate <= 100)),
  constraint departments_salary_non_negative
    check (median_salary is null or median_salary >= 0)
);


-- ── employer_members ───────────────────────────────────────────

create table public.employer_members (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null,
  company_id uuid not null,
  role       text not null default 'member',
  invited_at timestamp(3) without time zone not null default now(),
  joined_at  timestamp(3) without time zone,

  constraint employer_members_user_id_key unique (user_id),

  constraint employer_members_user_id_fkey
    foreign key (user_id) references public.users (id) on delete cascade,
  constraint employer_members_company_id_fkey
    foreign key (company_id) references public.companies (id) on delete cascade
);


-- ── roles ──────────────────────────────────────────────────────

create table public.roles (
  id                       uuid         primary key default gen_random_uuid(),
  company_id               uuid         not null,
  title                    text         not null,
  description              text,
  weight_config            jsonb        not null,
  auto_qualify_threshold   double precision,
  required_skills          jsonb,
  preferred_location       text,
  experience_min           integer,
  experience_max           integer,
  status                   "RoleStatus" not null default 'ACTIVE',
  created_at               timestamp(3) without time zone not null default now(),
  updated_at               timestamp(3) without time zone not null default now(),

  constraint roles_company_id_fkey
    foreign key (company_id) references public.companies (id) on delete cascade,

  constraint roles_experience_range_valid
    check (
      (experience_min is null or experience_min >= 0) and
      (experience_max is null or experience_max >= 0) and
      (experience_min is null or experience_max is null or experience_min <= experience_max)
    )
);


-- ╔══════════════════════════════════════════════════════════════╗
-- ║  THIRD-TIER TABLES (FK → talent_profiles, institutions)     ║
-- ╚══════════════════════════════════════════════════════════════╝

-- ── education ──────────────────────────────────────────────────

create table public.education (
  id                     uuid             primary key default gen_random_uuid(),
  talent_profile_id      uuid             not null,
  institution_id         uuid,
  institution_name       text             not null,
  degree                 text             not null,
  major                  text             not null,
  minor                  text,
  gpa_raw                double precision,
  gpa_scale              double precision not null default 4.0,
  gpa_calibrated         double precision,
  gpa_percentile         double precision,
  institution_tier_score double precision,
  department_score       double precision,
  start_date             timestamp(3) without time zone,
  graduation_year        integer,

  constraint education_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade,
  constraint education_institution_id_fkey
    foreign key (institution_id) references public.institutions (id),

  constraint education_gpa_scale_positive
    check (gpa_scale > 0),
  constraint education_gpa_raw_in_scale
    check (gpa_raw is null or (gpa_raw >= 0 and gpa_raw <= gpa_scale)),
  constraint education_gpa_percentile_range
    check (gpa_percentile is null or (gpa_percentile >= 0 and gpa_percentile <= 100)),
  constraint education_graduation_year_sane
    check (graduation_year is null or (graduation_year >= 1900 and graduation_year <= 2100))
);


-- ── talent_skills ──────────────────────────────────────────────

create table public.talent_skills (
  id                uuid    primary key default gen_random_uuid(),
  talent_profile_id uuid    not null,
  name              text    not null,
  category          text,
  years_used        integer,

  constraint talent_skills_profile_name_key
    unique (talent_profile_id, name),

  constraint talent_skills_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade,

  constraint talent_skills_years_used_non_negative
    check (years_used is null or years_used >= 0)
);


-- ── transcripts ────────────────────────────────────────────────

create table public.transcripts (
  id                  uuid                 primary key default gen_random_uuid(),
  talent_profile_id   uuid                 not null,
  file_url            text                 not null,
  file_name           text                 not null,
  file_type           text                 not null,
  status              "TranscriptStatus"   not null default 'UPLOADED',
  ocr_raw_output      jsonb,
  parsed_data         jsonb,
  verification_status "VerificationStatus" not null default 'UNVERIFIED',
  verification_hash   text,
  error_message       text,
  created_at          timestamp(3) without time zone not null default now(),
  updated_at          timestamp(3) without time zone not null default now(),

  constraint transcripts_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade
);


-- ── work_history ───────────────────────────────────────────────

create table public.work_history (
  id                uuid    primary key default gen_random_uuid(),
  talent_profile_id uuid    not null,
  company           text    not null,
  title             text    not null,
  start_date        timestamp(3) without time zone not null,
  end_date          timestamp(3) without time zone,
  is_current        boolean not null default false,
  description       text,
  location          text,

  constraint work_history_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade,

  constraint work_history_dates_valid
    check (end_date is null or end_date >= start_date),
  -- If end_date is null, is_current should be true (and vice versa).
  -- Enforced loosely: only block the contradictory case of having
  -- an end_date AND is_current = true.
  constraint work_history_current_consistency
    check (not (end_date is not null and is_current = true))
);


-- ── performance_reviews ────────────────────────────────────────

create table public.performance_reviews (
  id                uuid           primary key default gen_random_uuid(),
  talent_profile_id uuid           not null,
  company           text,
  reviewer_role     text,
  period            text,
  raw_text          text,
  file_url          text,
  parsed_themes     jsonb,
  sentiment_scores  jsonb,
  overall_sentiment double precision,
  strengths         jsonb,
  development_areas jsonb,
  source            "ReviewSource" not null default 'SELF_UPLOAD',
  verified          boolean        not null default false,
  anonymized        boolean        not null default false,
  created_at        timestamp(3) without time zone not null default now(),
  updated_at        timestamp(3) without time zone not null default now(),

  constraint performance_reviews_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade
);


-- ── "references" ───────────────────────────────────────────────
-- NOTE: "references" is a PostgreSQL reserved word. Always quote it.

create table public."references" (
  id                       uuid               primary key default gen_random_uuid(),
  talent_profile_id        uuid               not null,
  rater_id                 uuid,
  rater_email              text               not null,
  rater_name               text,
  relationship_type        "RelationshipType" not null,
  relationship_duration    integer,
  recency                  timestamp(3) without time zone,
  status                   "ReferenceStatus"  not null default 'PENDING',
  token                    text               not null,
  dimension_scores         jsonb,
  forced_choice_rankings   jsonb,
  free_text_responses      jsonb,
  rater_calibration_factor double precision,
  normalized_score         double precision,
  requested_at             timestamp(3) without time zone not null default now(),
  completed_at             timestamp(3) without time zone,
  expires_at               timestamp(3) without time zone not null,

  constraint references_token_key unique (token),

  constraint references_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade,
  constraint references_rater_id_fkey
    foreign key (rater_id) references public.raters (id),

  constraint references_relationship_duration_positive
    check (relationship_duration is null or relationship_duration > 0),
  constraint references_expires_after_request
    check (expires_at >= requested_at),
  constraint references_completed_after_request
    check (completed_at is null or completed_at >= requested_at)
);


-- ── assessments ────────────────────────────────────────────────

create table public.assessments (
  id                uuid               primary key default gen_random_uuid(),
  talent_profile_id uuid               not null,
  module            "AssessmentModule"  not null,
  score_raw         double precision,
  score_percentile  double precision,
  details           jsonb,
  integrity_flags   jsonb,
  proctoring_data   jsonb,
  started_at        timestamp(3) without time zone,
  completed_at      timestamp(3) without time zone,
  expires_at        timestamp(3) without time zone,
  created_at        timestamp(3) without time zone not null default now(),

  constraint assessments_profile_module_key
    unique (talent_profile_id, module),

  constraint assessments_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade,

  constraint assessments_percentile_range
    check (score_percentile is null or (score_percentile >= 0 and score_percentile <= 100)),
  constraint assessments_score_raw_non_negative
    check (score_raw is null or score_raw >= 0),
  constraint assessments_timing_valid
    check (completed_at is null or started_at is null or completed_at >= started_at)
);


-- ── score_history ──────────────────────────────────────────────

create table public.score_history (
  id                     uuid             primary key default gen_random_uuid(),
  talent_profile_id      uuid             not null,
  overall_score          double precision not null,
  academic_score         double precision,
  performance_score      double precision,
  peer_signal_score      double precision,
  assessed_ability_score double precision,
  confidence             double precision,
  trigger_event          text             not null,
  recorded_at            timestamp(3) without time zone not null default now(),

  constraint score_history_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade,

  constraint score_history_overall_range
    check (overall_score >= 300 and overall_score <= 850),
  constraint score_history_confidence_range
    check (confidence is null or (confidence >= 0 and confidence <= 1))
);

create index idx_score_history_profile_time
  on public.score_history (talent_profile_id, recorded_at);


-- ╔══════════════════════════════════════════════════════════════╗
-- ║  FOURTH-TIER TABLES                                         ║
-- ╚══════════════════════════════════════════════════════════════╝

-- ── courses ────────────────────────────────────────────────────

create table public.courses (
  id            uuid             primary key default gen_random_uuid(),
  education_id  uuid             not null,
  course_code   text,
  course_name   text             not null,
  grade         text,
  grade_numeric double precision,
  credits       double precision,
  semester      text,
  rigor_score   double precision,
  category      text,

  constraint courses_education_id_fkey
    foreign key (education_id) references public.education (id) on delete cascade,

  constraint courses_credits_non_negative
    check (credits is null or credits >= 0),
  constraint courses_grade_numeric_non_negative
    check (grade_numeric is null or grade_numeric >= 0)
);


-- ── candidate_views ────────────────────────────────────────────

create table public.candidate_views (
  id                uuid    primary key default gen_random_uuid(),
  company_id        uuid    not null,
  talent_profile_id uuid    not null,
  viewed_at         timestamp(3) without time zone not null default now(),
  shortlisted       boolean not null default false,
  notes             text,
  stage             text,

  constraint candidate_views_company_talent_key
    unique (company_id, talent_profile_id),

  constraint candidate_views_company_id_fkey
    foreign key (company_id) references public.companies (id) on delete cascade,
  constraint candidate_views_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade
);


-- ── hires ──────────────────────────────────────────────────────

create table public.hires (
  id                 uuid primary key default gen_random_uuid(),
  company_id         uuid not null,
  talent_profile_id  uuid not null,
  role_id            uuid,
  hired_at           timestamp(3) without time zone not null default now(),
  hire_quality_score double precision,
  feedback_at        timestamp(3) without time zone,

  constraint hires_company_id_fkey
    foreign key (company_id) references public.companies (id) on delete cascade,
  constraint hires_talent_profile_id_fkey
    foreign key (talent_profile_id) references public.talent_profiles (id) on delete cascade,
  constraint hires_role_id_fkey
    foreign key (role_id) references public.roles (id)
);


-- ── audit_logs ─────────────────────────────────────────────────

create table public.audit_logs (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid,
  action     text not null,
  resource   text,
  metadata   jsonb,
  ip_address text,
  created_at timestamp(3) without time zone not null default now(),

  constraint audit_logs_user_id_fkey
    foreign key (user_id) references public.users (id)
);

create index idx_audit_logs_user_time
  on public.audit_logs (user_id, created_at);
create index idx_audit_logs_action_time
  on public.audit_logs (action, created_at);


-- ────────────────────────────────────────────────────────────────
-- 5. UPDATED-AT TRIGGERS
-- ────────────────────────────────────────────────────────────────
-- Applied to every table that has an updated_at column.

create trigger set_users_updated_at
  before update on public.users
  for each row execute function public.set_updated_at();

create trigger set_institutions_updated_at
  before update on public.institutions
  for each row execute function public.set_updated_at();

create trigger set_raters_updated_at
  before update on public.raters
  for each row execute function public.set_updated_at();

create trigger set_companies_updated_at
  before update on public.companies
  for each row execute function public.set_updated_at();

create trigger set_talent_profiles_updated_at
  before update on public.talent_profiles
  for each row execute function public.set_updated_at();

create trigger set_transcripts_updated_at
  before update on public.transcripts
  for each row execute function public.set_updated_at();

create trigger set_performance_reviews_updated_at
  before update on public.performance_reviews
  for each row execute function public.set_updated_at();

create trigger set_roles_updated_at
  before update on public.roles
  for each row execute function public.set_updated_at();


-- ────────────────────────────────────────────────────────────────
-- 6. ADDITIONAL INDEXES
-- ────────────────────────────────────────────────────────────────
-- Beyond what's declared in the Prisma schema. Designed for the
-- primary query patterns: employer search, talent dashboards,
-- reference tracking, and analytics.

-- Employer search: public profiles sorted by score
create index idx_talent_profiles_public_score
  on public.talent_profiles (overall_skill_score desc)
  where is_public = true;

-- Employer search: filter by work authorization
create index idx_talent_profiles_work_auth
  on public.talent_profiles (work_auth)
  where is_public = true;

-- Skill-based candidate search
create index idx_talent_skills_name
  on public.talent_skills (name);

-- Reference status tracking (talent dashboard)
create index idx_references_profile_status
  on public."references" (talent_profile_id, status);

-- Candidate pipeline views (employer dashboard)
create index idx_candidate_views_company
  on public.candidate_views (company_id, viewed_at desc);

-- Hire analytics
create index idx_hires_company
  on public.hires (company_id, hired_at desc);

-- Transcript processing queue
create index idx_transcripts_status
  on public.transcripts (status)
  where status in ('UPLOADED', 'PROCESSING');


-- ────────────────────────────────────────────────────────────────
-- 7. ROW LEVEL SECURITY
-- ────────────────────────────────────────────────────────────────
-- SkillPass uses Clerk for auth, not Supabase Auth. To make RLS
-- work with Clerk, you must configure Clerk as a custom JWT
-- provider in Supabase (Dashboard → Authentication → JWT).
--
-- Once configured, auth.jwt() ->> 'sub' returns the Clerk user ID
-- (the clerk_id column in the users table).
--
-- The helper function below resolves clerk_id → internal uuid.
-- ────────────────────────────────────────────────────────────────

-- Helper: resolve the calling user's internal UUID from Clerk JWT.
-- SECURITY DEFINER so it can read the users table even when
-- the anon role is restricted by RLS.

create or replace function public.requesting_user_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
  select id
  from public.users
  where clerk_id = (select auth.jwt() ->> 'sub')
$$;

-- Helper: check if the calling user is a member of a given company.

create or replace function public.is_company_member(_company_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.employer_members
    where company_id = _company_id
      and user_id   = public.requesting_user_id()
  )
$$;

-- Helper: get the talent_profile.id for the calling user (if any).

create or replace function public.requesting_talent_profile_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
  select id
  from public.talent_profiles
  where user_id = public.requesting_user_id()
$$;


-- ── Enable RLS on all tables ──────────────────────────────────

alter table public.users               enable row level security;
alter table public.institutions        enable row level security;
alter table public.raters              enable row level security;
alter table public.companies           enable row level security;
alter table public.talent_profiles     enable row level security;
alter table public.departments         enable row level security;
alter table public.employer_members    enable row level security;
alter table public.roles               enable row level security;
alter table public.education           enable row level security;
alter table public.talent_skills       enable row level security;
alter table public.transcripts         enable row level security;
alter table public.work_history        enable row level security;
alter table public.performance_reviews enable row level security;
alter table public."references"        enable row level security;
alter table public.assessments         enable row level security;
alter table public.score_history       enable row level security;
alter table public.courses             enable row level security;
alter table public.candidate_views     enable row level security;
alter table public.hires               enable row level security;
alter table public.audit_logs          enable row level security;


-- ── Policies ──────────────────────────────────────────────────
-- Convention:  {table}_{action}_{who}
-- Service role (used by tRPC server) bypasses RLS automatically.
-- These policies govern the anon/authenticated key paths.

-- users: read own row; cannot modify via client (Clerk webhook handles creation)
create policy users_select_own on public.users
  for select using (clerk_id = (select auth.jwt() ->> 'sub'));

-- institutions & departments: public reference data, read-only
create policy institutions_select_all on public.institutions
  for select using (true);

create policy departments_select_all on public.departments
  for select using (true);

-- talent_profiles: public profiles visible to everyone; own profile fully editable
create policy talent_profiles_select_public on public.talent_profiles
  for select using (
    is_public = true
    or user_id = public.requesting_user_id()
  );

create policy talent_profiles_update_own on public.talent_profiles
  for update using (user_id = public.requesting_user_id());

-- Talent sub-tables: owner can CRUD; public if parent profile is public
-- (education, talent_skills, work_history, transcripts, performance_reviews,
--  assessments, score_history)

create policy education_select on public.education
  for select using (
    talent_profile_id = public.requesting_talent_profile_id()
    or talent_profile_id in (
      select id from public.talent_profiles where is_public = true
    )
  );

create policy education_modify_own on public.education
  for all using (talent_profile_id = public.requesting_talent_profile_id());

create policy talent_skills_select on public.talent_skills
  for select using (
    talent_profile_id = public.requesting_talent_profile_id()
    or talent_profile_id in (
      select id from public.talent_profiles where is_public = true
    )
  );

create policy talent_skills_modify_own on public.talent_skills
  for all using (talent_profile_id = public.requesting_talent_profile_id());

create policy work_history_select on public.work_history
  for select using (
    talent_profile_id = public.requesting_talent_profile_id()
    or talent_profile_id in (
      select id from public.talent_profiles where is_public = true
    )
  );

create policy work_history_modify_own on public.work_history
  for all using (talent_profile_id = public.requesting_talent_profile_id());

create policy transcripts_select_own on public.transcripts
  for select using (talent_profile_id = public.requesting_talent_profile_id());

create policy transcripts_modify_own on public.transcripts
  for all using (talent_profile_id = public.requesting_talent_profile_id());

create policy performance_reviews_select_own on public.performance_reviews
  for select using (talent_profile_id = public.requesting_talent_profile_id());

create policy performance_reviews_modify_own on public.performance_reviews
  for all using (talent_profile_id = public.requesting_talent_profile_id());

create policy assessments_select on public.assessments
  for select using (
    talent_profile_id = public.requesting_talent_profile_id()
    or talent_profile_id in (
      select id from public.talent_profiles where is_public = true
    )
  );

create policy assessments_modify_own on public.assessments
  for all using (talent_profile_id = public.requesting_talent_profile_id());

create policy score_history_select_own on public.score_history
  for select using (talent_profile_id = public.requesting_talent_profile_id());

-- courses: readable if parent education is accessible
create policy courses_select on public.courses
  for select using (
    education_id in (
      select id from public.education
      where talent_profile_id = public.requesting_talent_profile_id()
    )
    or education_id in (
      select e.id from public.education e
      join public.talent_profiles tp on tp.id = e.talent_profile_id
      where tp.is_public = true
    )
  );

create policy courses_modify_own on public.courses
  for all using (
    education_id in (
      select id from public.education
      where talent_profile_id = public.requesting_talent_profile_id()
    )
  );

-- references: talent owner can see their own; rater can see
-- the reference they're responding to (via token, handled in app layer)
create policy references_select_own on public."references"
  for select using (talent_profile_id = public.requesting_talent_profile_id());

create policy references_insert_own on public."references"
  for insert with check (talent_profile_id = public.requesting_talent_profile_id());

-- raters: read-only reference data (raters are created server-side)
create policy raters_select_all on public.raters
  for select using (true);

-- companies: members can read their company
create policy companies_select_member on public.companies
  for select using (public.is_company_member(id));

-- employer_members: members can see their co-members
create policy employer_members_select on public.employer_members
  for select using (
    user_id = public.requesting_user_id()
    or public.is_company_member(company_id)
  );

-- roles: members can manage their company's roles
create policy roles_select on public.roles
  for select using (public.is_company_member(company_id));

create policy roles_modify on public.roles
  for all using (public.is_company_member(company_id));

-- candidate_views: company members can read/write their company's views
create policy candidate_views_select on public.candidate_views
  for select using (public.is_company_member(company_id));

create policy candidate_views_modify on public.candidate_views
  for all using (public.is_company_member(company_id));

-- hires: company members can read/write their company's hires
create policy hires_select on public.hires
  for select using (public.is_company_member(company_id));

create policy hires_modify on public.hires
  for all using (public.is_company_member(company_id));

-- audit_logs: no client access (read via service role / tRPC only)
-- No SELECT policy = denied by default with RLS enabled.


-- ════════════════════════════════════════════════════════════════
-- Done. Verify with:
--   select table_name from information_schema.tables
--   where table_schema = 'public' and table_type = 'BASE TABLE'
--   order by table_name;
-- ════════════════════════════════════════════════════════════════
