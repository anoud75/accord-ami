
-- Profiles: restrict reads to own row
DROP POLICY IF EXISTS "Authenticated users can read all profiles" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- Action items: restrict updates to creator or owner
DROP POLICY IF EXISTS "Authenticated can update action_items" ON public.action_items;
CREATE POLICY "Creator or owner can update action_items"
  ON public.action_items FOR UPDATE
  TO authenticated
  USING (created_by = auth.uid() OR owner_id = auth.uid())
  WITH CHECK (created_by = auth.uid() OR owner_id = auth.uid());

-- Revoke EXECUTE on internal SECURITY DEFINER trigger functions from API roles.
-- These run from triggers as table owner; they should never be callable via PostgREST.
REVOKE EXECUTE ON FUNCTION public.validate_retro_format() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.validate_sentiment() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_updated_at() FROM PUBLIC, anon, authenticated;
