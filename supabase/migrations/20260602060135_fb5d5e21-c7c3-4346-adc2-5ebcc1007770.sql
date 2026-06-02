
CREATE TABLE public.referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clinician_name text NOT NULL,
  clinician_title text,
  facility_name text NOT NULL,
  clinician_phone text NOT NULL,
  clinician_email text NOT NULL,
  estimated_discharge_date date,
  notes text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.referrals TO authenticated;
GRANT INSERT ON public.referrals TO anon;
GRANT ALL ON public.referrals TO service_role;

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a referral"
  ON public.referrals FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(clinician_name) BETWEEN 1 AND 200
    AND length(facility_name) BETWEEN 1 AND 200
    AND length(clinician_phone) BETWEEN 1 AND 50
    AND length(clinician_email) BETWEEN 3 AND 320
    AND length(notes) BETWEEN 1 AND 4000
  );

CREATE POLICY "Authenticated staff can view referrals"
  ON public.referrals FOR SELECT
  TO authenticated
  USING (true);
