/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://oqzphfrkjcxappzbpzah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xenBoZnJramN4YXBwemJwemFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzODIwNzEsImV4cCI6MjA2ODk1ODA3MX0.B3LSrgDNXC8fwOPNkCwywb7MMB-_lEqqg9U1UsUQbp0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
