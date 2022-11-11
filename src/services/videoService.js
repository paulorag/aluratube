import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ppuwudepzsfawanucbgf.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwdXd1ZGVwenNmYXdhbnVjYmdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjkwNjgsImV4cCI6MTk4Mzc0NTA2OH0.wMYxXYvLtlVnRjEFoZkyPByi8rIM-K480PiroXo6EvQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}