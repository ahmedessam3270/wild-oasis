import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iibpwzerpvchlzuseawu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpYnB3emVycHZjaGx6dXNlYXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTIzODUsImV4cCI6MjAyMTUyODM4NX0.zBXknOKh6WOvJu8EfU-TEn2sETW1AnlsnL_mrkfXlqM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
