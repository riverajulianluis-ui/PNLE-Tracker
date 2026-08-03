import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, {
                ...options,
                maxAge: 60 * 60 * 24 * 365, // keep the session alive for a year
                sameSite: 'lax',
                secure: true,
              })
            );
          } catch {
            // setAll can be called from a Server Component where cookies
            // can't be mutated. Safe to ignore if middleware refreshes sessions.
          }
        },
      },
    }
  );
}
