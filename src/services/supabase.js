import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://inqrmpcgrmdfxxexganv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlucXJtcGNncm1kZnh4ZXhnYW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMTI2NzAsImV4cCI6MjA0MTc4ODY3MH0.n9wZhWYPoO9PBur5HNBsjpUvmqlM3rj3qS86RMw_pmY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
