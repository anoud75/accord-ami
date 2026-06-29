
-- Helper: is the current user a member (creator or participant) of a retro
CREATE OR REPLACE FUNCTION public.is_retro_member(_retro_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.retros r
    WHERE r.id = _retro_id AND r.created_by = auth.uid()
  ) OR EXISTS (
    SELECT 1 FROM public.retro_participants p
    WHERE p.retro_id = _retro_id AND p.user_id = auth.uid()
  );
$$;

-- Helper: do the current user and _other_user share any retro
CREATE OR REPLACE FUNCTION public.shares_retro_with(_other_user uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
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

-- retros
DROP POLICY IF EXISTS "Authenticated can select retros" ON public.retros;
CREATE POLICY "Members can select retros" ON public.retros
  FOR SELECT TO authenticated
  USING (created_by = auth.uid() OR public.is_retro_member(id));

-- responses
DROP POLICY IF EXISTS "Authenticated can select responses" ON public.responses;
CREATE POLICY "Members can select responses" ON public.responses
  FOR SELECT TO authenticated
  USING (public.is_retro_member(retro_id));

-- response_comments
DROP POLICY IF EXISTS "Authenticated can select comments" ON public.response_comments;
CREATE POLICY "Members can select comments" ON public.response_comments
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.responses r
    WHERE r.id = response_comments.response_id
      AND public.is_retro_member(r.retro_id)
  ));

-- response_groups
DROP POLICY IF EXISTS "Authenticated can select response_groups" ON public.response_groups;
CREATE POLICY "Members can select response_groups" ON public.response_groups
  FOR SELECT TO authenticated
  USING (public.is_retro_member(retro_id));

-- retro_questions
DROP POLICY IF EXISTS "Authenticated can select retro_questions" ON public.retro_questions;
CREATE POLICY "Members can select retro_questions" ON public.retro_questions
  FOR SELECT TO authenticated
  USING (public.is_retro_member(retro_id));

-- retro_participants
DROP POLICY IF EXISTS "Authenticated can select retro_participants" ON public.retro_participants;
CREATE POLICY "Members can select retro_participants" ON public.retro_participants
  FOR SELECT TO authenticated
  USING (public.is_retro_member(retro_id));

-- action_items
DROP POLICY IF EXISTS "Authenticated can select action_items" ON public.action_items;
CREATE POLICY "Members can select action_items" ON public.action_items
  FOR SELECT TO authenticated
  USING (public.is_retro_member(retro_id));

-- timeline_entries
DROP POLICY IF EXISTS "Authenticated can select timeline_entries" ON public.timeline_entries;
CREATE POLICY "Members can select timeline_entries" ON public.timeline_entries
  FOR SELECT TO authenticated
  USING (public.is_retro_member(retro_id));

-- top3_entries
DROP POLICY IF EXISTS "Authenticated can select top3_entries" ON public.top3_entries;
CREATE POLICY "Members can select top3_entries" ON public.top3_entries
  FOR SELECT TO authenticated
  USING (public.is_retro_member(retro_id));

-- response_upvotes (uses response_id, lookup retro through responses)
DROP POLICY IF EXISTS "Authenticated can select upvotes" ON public.response_upvotes;
CREATE POLICY "Members can select upvotes" ON public.response_upvotes
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.responses r
    WHERE r.id = response_upvotes.response_id
      AND public.is_retro_member(r.retro_id)
  ));

-- teams: restrict to creators or users who share a retro under that team
DROP POLICY IF EXISTS "Authenticated can select teams" ON public.teams;
CREATE POLICY "Creators or retro members can select teams" ON public.teams
  FOR SELECT TO authenticated
  USING (
    created_by = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.retros r
      WHERE r.team_id = teams.id AND public.is_retro_member(r.id)
    )
  );

-- profiles: allow viewing co-members' profiles so display names/avatars work
CREATE POLICY "Users can view profiles of retro co-members" ON public.profiles
  FOR SELECT TO authenticated
  USING (public.shares_retro_with(id));
