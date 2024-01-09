import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ebwaysrlsunfrskoksyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid2F5c3Jsc3VuZnJza29rc3ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2ODIxMDQsImV4cCI6MjAyMDI1ODEwNH0.rR-d2ztyg2TrjjmuzwXHJG7i6ZuBWoQEFrfLNiXGd38";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
