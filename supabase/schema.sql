-- PNLE Coverage Tracker — Supabase schema
-- Run this in the Supabase dashboard: SQL Editor -> New query -> paste -> Run

-- 1. Topic progress: one row per (user, subject, topic)
create table if not exists public.topic_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_id text not null,
  topic_idx int not null,
  status text not null default 'not_started'
    check (status in ('not_started','in_progress','mastered','relearning')),
  updated_at timestamptz not null default now(),
  unique (user_id, subject_id, topic_idx)
);

-- 2. Weekly schedule blocks: one row per (user, day, hour)
create table if not exists public.schedule_blocks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  day text not null,
  hour int not null,
  kind text not null check (kind in ('subject','fixed')),
  subject_id text,
  label text,
  updated_at timestamptz not null default now(),
  unique (user_id, day, hour)
);

-- 3. Row Level Security: every user can only ever see/write their own rows
alter table public.topic_progress enable row level security;
alter table public.schedule_blocks enable row level security;

create policy "select own topic progress"
  on public.topic_progress for select
  using (auth.uid() = user_id);

create policy "insert own topic progress"
  on public.topic_progress for insert
  with check (auth.uid() = user_id);

create policy "update own topic progress"
  on public.topic_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "delete own topic progress"
  on public.topic_progress for delete
  using (auth.uid() = user_id);

create policy "select own schedule"
  on public.schedule_blocks for select
  using (auth.uid() = user_id);

create policy "insert own schedule"
  on public.schedule_blocks for insert
  with check (auth.uid() = user_id);

create policy "update own schedule"
  on public.schedule_blocks for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "delete own schedule"
  on public.schedule_blocks for delete
  using (auth.uid() = user_id);

-- 4. Helpful index for scheduler lookups
create index if not exists schedule_blocks_user_idx on public.schedule_blocks(user_id);
create index if not exists topic_progress_user_idx on public.topic_progress(user_id);
