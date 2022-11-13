import { StorageClient } from "@supabase/storage-js";
import { createClient } from "@supabase/supabase-js";

const STORAGE_URL = "https://dnzrwruemisjpqasqonz.supabase.co/storage/v1";
const SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuenJ3cnVlbWlzanBxYXNxb256Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODAzMjc0MSwiZXhwIjoxOTgzNjA4NzQxfQ.ATCahnbAKC_F8NvIBYMUDG72-YWpPOn4SI2LbYIah78";
const SUPABASE_URL = "https://dnzrwruemisjpqasqonz.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuenJ3cnVlbWlzanBxYXNxb256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMzI3NDEsImV4cCI6MTk4MzYwODc0MX0.V_2bE60X7HVcSO1y0VFSfKG4bMvyF3AOXOLB1b3dAc0";

export const storageClient = new StorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
});

export const supabaseClient = createClient(SUPABASE_URL, ANON_KEY);
