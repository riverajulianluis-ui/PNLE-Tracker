# PNLE Coverage Tracker

A personal PNLE review tracker with Google sign-in. Each user sees only their
own subject progress and weekly schedule — enforced at the database level
with Supabase Row Level Security, not just in the app's UI.

- **Frontend:** Next.js 15 (App Router)
- **Auth + Database:** Supabase (Google OAuth, Postgres, Row Level Security)
- **Hosting:** Vercel (or any Node host)

---

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → **New project**. Pick any name/region, and save the database password somewhere safe.
2. Once it's ready, open **SQL Editor → New query**, paste in the contents of [`supabase/schema.sql`](./supabase/schema.sql), and run it. This creates the `topic_progress` and `schedule_blocks` tables with Row Level Security policies that restrict every row to `auth.uid() = user_id` — so one user's SQL client, API key, or app bug can never expose another user's data.
3. Go to **Project Settings → API** and copy:
   - `Project URL`
   - `anon` `public` key

---

## 2. Set up Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/) → create (or pick) a project → **APIs & Services → Credentials**.
2. **Create Credentials → OAuth client ID → Web application.**
3. In Supabase, go to **Authentication → Providers → Google** and enable it. Supabase will show you the exact **Redirect URL** to use (it looks like `https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback`).
4. Back in Google Cloud Console, add that URL under **Authorized redirect URIs**, and add your app's domains (e.g. `http://localhost:3000` and your production URL) under **Authorized JavaScript origins**.
5. Copy the **Client ID** and **Client Secret** from Google into the Supabase Google provider settings, and save.

---

## 3. Configure the app

```bash
cp .env.local.example .env.local
```

Fill in your Supabase project URL and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

---

## 4. Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/login`. Click **Sign in with Google**. After signing in you'll land on your private dashboard.

---

## 5. Deploy

The easiest path is [Vercel](https://vercel.com):

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Add the same two environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the Vercel project settings.
4. Deploy. Once you have your production URL, add it to both:
   - Google Cloud Console → Authorized JavaScript origins
   - Supabase → Authentication → URL Configuration → Site URL / Redirect URLs

---

## Using it on Android and iOS

Once it's deployed to a real HTTPS URL (step 5 below), the app is a fully
installable **Progressive Web App** — no App Store or Play Store submission
needed to get an app-like experience on either platform:

- **`public/manifest.json`** defines the app name, icons, and standalone
  display mode Android/Chrome use to install it.
- **`public/sw.js`** is a small service worker that makes the app installable
  and shows a clean offline screen if someone opens it with no connection
  (their actual PNLE progress still requires a connection to load/save, since
  it lives in Supabase, not on the device).
- Icons (`icon-192.png`, `icon-512.png`, `icon-maskable-512.png`,
  `apple-touch-icon.png`, `favicon.ico`) are already generated in `public/`.

**On Android (Chrome):** open the deployed URL → Chrome shows an "Install
app" prompt automatically, or the user can tap the ⋮ menu → **Install app**.

**On iOS (Safari):** Safari doesn't show an auto-install prompt. The user
taps the **Share** icon → **Add to Home Screen**. The `appleWebApp` metadata
in `app/layout.js` and the `apple-touch-icon.png` are what make it launch
full-screen with a proper icon instead of opening as a Safari tab.

### If you want it in the actual App Store / Play Store later

The PWA above covers "works like an app on every phone" with the least
overhead. If you later want a real App Store/Play Store listing (needed for
push notifications, app store discovery, etc.), the standard next step is
wrapping this same Next.js app with **[Capacitor](https://capacitorjs.com)**,
which packages a web app into a native iOS/Android shell without a rewrite.
Happy to generate that wrapper project too if you get to that point.

## Using it on a phone

This is a website, not something you install from an app store. Once it's deployed (step 5 below) it works in **Chrome on Android** and **Safari or Chrome on iOS** exactly like any other page — open the URL and sign in.

It's also set up as an installable web app, so it can look and feel like a native app if you want:

- **Android (Chrome):** open the site → menu (⋮) → **Add to Home screen**.
- **iOS (Safari):** open the site → Share icon → **Add to Home Screen**. (On iOS this only works from Safari, not Chrome, due to an Apple platform restriction — Chrome on iOS can still be used normally, just can't create the home-screen icon.)

Once added, it opens full-screen with its own icon and no browser address bar, and a small service worker (`public/sw.js`) shows a friendly offline page if you open it with no connection — your actual progress data still requires a connection to load/save, since it lives in Supabase.

## How the data is structured

- **`lib/subjects.js`** is the single source of truth for subjects, colors, and topic lists — edit this file to add/rename subjects or topics; the UI adapts automatically.
- **`topic_progress`** stores one row per `(user, subject, topic index, status)`. Status is one of `not_started`, `in_progress`, `mastered`, `relearning`.
- **`schedule_blocks`** stores one row per `(user, day, hour)` painted on the weekly scheduler.
- Every read/write goes through the Supabase client using the signed-in user's session — Row Level Security guarantees Postgres itself rejects any query that isn't scoped to `auth.uid()`, so there's no way for one account to read or write another's rows even if the app code had a bug.

## Project structure

```
app/
  page.js                 # Dashboard (server component, protected by middleware)
  scheduler/page.js        # Scheduler (server component, protected by middleware)
  login/page.js            # Google sign-in button
  auth/callback/route.js   # Exchanges OAuth code for a session
  auth/signout/route.js    # Signs the user out
  globals.css               # Shared design system
components/
  Header.js                 # Nav + sign-out
  DashboardClient.js         # Subject cards, progress bars, status cyclers
  SchedulerClient.js         # Paint-the-week scheduler
lib/
  subjects.js                # Subject/topic/color data model
  supabase/client.js         # Browser Supabase client
  supabase/server.js         # Server Supabase client
middleware.js                # Refreshes session, redirects unauthenticated users to /login
supabase/schema.sql          # Tables + Row Level Security policies
```
