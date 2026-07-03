
-- 1. Create private schema for security-definer helpers (not exposed via API)
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

-- Recreate helpers in private schema
CREATE OR REPLACE FUNCTION private.is_retro_member(_retro_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.retros r
    WHERE r.id = _retro_id AND r.created_by = auth.uid()
  ) OR EXISTS (
    SELECT 1 FROM public.retro_participants p
    WHERE p.retro_id = _retro_id AND p.user_id = auth.uid()
  );
$$;

CREATE OR REPLACE FUNCTION private.shares_retro_with(_other_user uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT _other_user = auth.uid() OR EXISTS (
    SELECT 1
    FROM public.retro_participants me
    JOIN public.retro_participants them ON them.retro_id = me.retro_id
    WHERE me.user_id = auth.uid() AND them.user_id = _other_user
  ) OR EXISTS (
    SELECT 1 FROM public.retros r
    JOIN public.retro_participants p ON p.retro_id = r.id
    WHERE (r.created_by = auth.uid() AND p.user_id = _other_user)
       OR (r.created_by = _other_user AND p.user_id = auth.uid())
  );
$$;

REVOKE ALL ON FUNCTION private.is_retro_member(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION private.shares_retro_with(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.is_retro_member(uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION private.shares_retro_with(uuid) TO authenticated, service_role;

-- 2. Drop policies that reference the public.* helpers
DROP POLICY IF EXISTS "Members can select action_items" ON public.action_items;
DROP POLICY IF EXISTS "Users can view profiles of retro co-members" ON public.profiles;
DROP POLICY IF EXISTS "Members can select comments" ON public.response_comments;
DROP POLICY IF EXISTS "Members can select response_groups" ON public.response_groups;
DROP POLICY IF EXISTS "Members can select upvotes" ON public.response_upvotes;
DROP POLICY IF EXISTS "Members can select responses" ON public.responses;
DROP POLICY IF EXISTS "Members can select retro_participants" ON public.retro_participants;
DROP POLICY IF EXISTS "Members can select retro_questions" ON public.retro_questions;
DROP POLICY IF EXISTS "Members can select retros" ON public.retros;
DROP POLICY IF EXISTS "Creators or retro members can select teams" ON public.teams;
DROP POLICY IF EXISTS "Members can select timeline_entries" ON public.timeline_entries;
DROP POLICY IF EXISTS "Members can select top3_entries" ON public.top3_entries;

-- Drop old INSERT policies to replace with membership-checked ones
DROP POLICY IF EXISTS "Authenticated can insert action_items" ON public.action_items;
DROP POLICY IF EXISTS "Users can insert own comments" ON public.response_comments;
DROP POLICY IF EXISTS "Authenticated can insert upvotes" ON public.response_upvotes;
DROP POLICY IF EXISTS "Authenticated can insert responses" ON public.responses;
DROP POLICY IF EXISTS "Authenticated can insert timeline_entries" ON public.timeline_entries;
DROP POLICY IF EXISTS "Authenticated can insert top3_entries" ON public.top3_entries;

-- Drop old projects SELECT
DROP POLICY IF EXISTS "Authenticated can select projects" ON public.projects;

-- Drop old public functions
DROP FUNCTION IF EXISTS public.is_retro_member(uuid);
DROP FUNCTION IF EXISTS public.shares_retro_with(uuid);

-- 3. Recreate SELECT policies using private.*
CREATE POLICY "Members can select action_items" ON public.action_items
  FOR SELECT TO authenticated USING (private.is_retro_member(retro_id));

CREATE POLICY "Members can select comments" ON public.response_comments
  FOR SELECT TO authenticated USING (EXISTS (
    SELECT 1 FROM public.responses r
    WHERE r.id = response_comments.response_id AND private.is_retro_member(r.retro_id)
  ));

CREATE POLICY "Members can select response_groups" ON public.response_groups
  FOR SELECT TO authenticated USING (private.is_retro_member(retro_id));

CREATE POLICY "Members can select upvotes" ON public.response_upvotes
  FOR SELECT TO authenticated USING (EXISTS (
    SELECT 1 FROM public.responses r
    WHERE r.id = response_upvotes.response_id AND private.is_retro_member(r.retro_id)
  ));

CREATE POLICY "Members can select responses" ON public.responses
  FOR SELECT TO authenticated USING (private.is_retro_member(retro_id));

CREATE POLICY "Members can select retro_participants" ON public.retro_participants
  FOR SELECT TO authenticated USING (private.is_retro_member(retro_id));

CREATE POLICY "Members can select retro_questions" ON public.retro_questions
  FOR SELECT TO authenticated USING (private.is_retro_member(retro_id));

CREATE POLICY "Members can select retros" ON public.retros
  FOR SELECT TO authenticated USING (created_by = auth.uid() OR private.is_retro_member(id));

CREATE POLICY "Creators or retro members can select teams" ON public.teams
  FOR SELECT TO authenticated USING (
    created_by = auth.uid() OR EXISTS (
      SELECT 1 FROM public.retros r WHERE r.team_id = teams.id AND private.is_retro_member(r.id)
    )
  );

CREATE POLICY "Members can select timeline_entries" ON public.timeline_entries
  FOR SELECT TO authenticated USING (private.is_retro_member(retro_id));

CREATE POLICY "Members can select top3_entries" ON public.top3_entries
  FOR SELECT TO authenticated USING (private.is_retro_member(retro_id));

-- 4. INSERT policies with membership verification
CREATE POLICY "Members can insert responses" ON public.responses
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() AND private.is_retro_member(retro_id));

CREATE POLICY "Members can insert action_items" ON public.action_items
  FOR INSERT TO authenticated
  WITH CHECK (created_by = auth.uid() AND private.is_retro_member(retro_id));

CREATE POLICY "Members can insert timeline_entries" ON public.timeline_entries
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() AND private.is_retro_member(retro_id));

CREATE POLICY "Members can insert top3_entries" ON public.top3_entries
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() AND private.is_retro_member(retro_id));

CREATE POLICY "Members can insert comments" ON public.response_comments
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() AND EXISTS (
    SELECT 1 FROM public.responses r
    WHERE r.id = response_id AND private.is_retro_member(r.retro_id)
  ));

CREATE POLICY "Members can insert upvotes" ON public.response_upvotes
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() AND EXISTS (
    SELECT 1 FROM public.responses r
    WHERE r.id = response_id AND private.is_retro_member(r.retro_id)
  ));

-- 5. Projects: restrict SELECT
CREATE POLICY "Members can select projects" ON public.projects
  FOR SELECT TO authenticated USING (
    created_by = auth.uid() OR EXISTS (
      SELECT 1 FROM public.retros r
      WHERE r.project_id = projects.id AND private.is_retro_member(r.id)
    )
  );

-- 6. Profiles: hide email from co-members. Restore co-member visibility for non-sensitive columns only via column privileges.
REVOKE SELECT ON public.profiles FROM authenticated;
GRANT SELECT (id, display_name, avatar_url, created_at, updated_at) ON public.profiles TO authenticated;
GRANT SELECT (email) ON public.profiles TO authenticated;
-- Re-add co-member visibility policy (email column protected by column-level: only own row via other policy will include email)
CREATE POLICY "Users can view profiles of retro co-members" ON public.profiles
  FOR SELECT TO authenticated USING (private.shares_retro_with(id));

-- Restrict email column: create a policy-based guard by revoking column SELECT for non-owners is not possible directly.
-- Instead, enforce via a BEFORE trigger view: simplest safe approach — revoke email column from authenticated globally,
-- and expose own email through a dedicated view.
REVOKE SELECT (email) ON public.profiles FROM authenticated;

CREATE OR REPLACE VIEW public.my_profile_email
WITH (security_invoker = true)
AS SELECT id, email FROM public.profiles WHERE id = auth.uid();

GRANT SELECT ON public.my_profile_email TO authenticated;
