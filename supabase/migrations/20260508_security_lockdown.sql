-- ============================================================================
-- SECURITY LOCKDOWN: Enable RLS + revoke public access on all tables
-- ============================================================================
-- Context: All 21 tables had RLS OFF with full CRUD grants to anon/authenticated.
-- The anon key is exposed in frontend JS — anyone could read/write/delete all data
-- directly via Supabase REST API (PostgREST).
--
-- Architecture: This app uses Prisma via service_role (server-side only).
-- No client-side Supabase data queries. So we:
--   1. Enable RLS on every table
--   2. Revoke ALL from anon and authenticated
--   3. Grant only what's needed to service_role (already has bypass, but explicit)
-- ============================================================================

-- ─── Step 1: Enable RLS on all tables ──────────────────────────────────────

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE talent_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE talent_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE transcripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE work_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE raters ENABLE ROW LEVEL SECURITY;
ALTER TABLE "references" ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE score_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidate_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE hires ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- ─── Step 2: Revoke ALL privileges from anon and authenticated ─────────────
-- These roles should have ZERO direct access. All data flows through
-- the Next.js API using service_role via Prisma.

REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM anon;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA public FROM anon;

REVOKE ALL ON ALL TABLES IN SCHEMA public FROM authenticated;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM authenticated;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA public FROM authenticated;

-- Also revoke default privileges so new tables aren't auto-granted
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON SEQUENCES FROM anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON FUNCTIONS FROM anon;

ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON SEQUENCES FROM authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON FUNCTIONS FROM authenticated;

-- ─── Step 3: Deny-all RLS policies ────────────────────────────────────────
-- Even if somehow grants get re-added, RLS blocks everything.
-- service_role bypasses RLS automatically (it has the `bypassrls` attribute).

-- Users
CREATE POLICY "deny_all" ON users FOR ALL USING (false);

-- Platform settings
CREATE POLICY "deny_all" ON platform_settings FOR ALL USING (false);

-- Talent profiles
CREATE POLICY "deny_all" ON talent_profiles FOR ALL USING (false);

-- Talent skills
CREATE POLICY "deny_all" ON talent_skills FOR ALL USING (false);

-- Institutions
CREATE POLICY "deny_all" ON institutions FOR ALL USING (false);

-- Departments
CREATE POLICY "deny_all" ON departments FOR ALL USING (false);

-- Education
CREATE POLICY "deny_all" ON education FOR ALL USING (false);

-- Transcripts
CREATE POLICY "deny_all" ON transcripts FOR ALL USING (false);

-- Courses
CREATE POLICY "deny_all" ON courses FOR ALL USING (false);

-- Work history
CREATE POLICY "deny_all" ON work_history FOR ALL USING (false);

-- Performance reviews
CREATE POLICY "deny_all" ON performance_reviews FOR ALL USING (false);

-- Raters
CREATE POLICY "deny_all" ON raters FOR ALL USING (false);

-- References
CREATE POLICY "deny_all" ON "references" FOR ALL USING (false);

-- Assessments
CREATE POLICY "deny_all" ON assessments FOR ALL USING (false);

-- Score history
CREATE POLICY "deny_all" ON score_history FOR ALL USING (false);

-- Companies
CREATE POLICY "deny_all" ON companies FOR ALL USING (false);

-- Employer members
CREATE POLICY "deny_all" ON employer_members FOR ALL USING (false);

-- Roles
CREATE POLICY "deny_all" ON roles FOR ALL USING (false);

-- Candidate views
CREATE POLICY "deny_all" ON candidate_views FOR ALL USING (false);

-- Hires
CREATE POLICY "deny_all" ON hires FOR ALL USING (false);

-- Audit logs
CREATE POLICY "deny_all" ON audit_logs FOR ALL USING (false);
