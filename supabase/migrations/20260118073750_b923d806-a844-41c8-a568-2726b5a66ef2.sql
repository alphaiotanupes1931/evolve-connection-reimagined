-- Allow users to insert their own role (for initial admin setup)
CREATE POLICY "Users can insert own role during setup"
  ON public.user_roles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());