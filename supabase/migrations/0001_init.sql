-- Contact messages (Commit 6 already wires this; define here so RLS is explicit)
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  status text default 'unread',
  created_at timestamptz default now()
);

-- Activity gallery
create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  date date not null,
  type text check (type in ('image','video')) not null,
  media_urls text[] not null,
  likes integer default 0,
  created_at timestamptz default now()
);

-- Per-gallery comments
create table if not exists gallery_comments (
  id uuid primary key default gen_random_uuid(),
  gallery_id uuid references gallery(id) on delete cascade,
  name text not null,
  content text not null,
  created_at timestamptz default now()
);

-- Per-session likes (prevents duplicate likes from same browser session)
create table if not exists gallery_likes (
  gallery_id uuid references gallery(id) on delete cascade,
  session_id text not null,
  created_at timestamptz default now(),
  primary key (gallery_id, session_id)
);

-- RPC: atomic likes counter increment (called from app)
create or replace function increment_gallery_likes(row_id uuid)
returns void
language sql
as $$
  update gallery set likes = coalesce(likes, 0) + 1 where id = row_id;
$$;

-- RLS: enable Row Level Security
alter table contact_messages enable row level security;
alter table gallery enable row level security;
alter table gallery_comments enable row level security;
alter table gallery_likes enable row level security;

-- Policies: anon may insert + select on contact_messages, gallery, gallery_comments.
-- (anon insert into gallery_likes is optional — we use the RPC instead.)
drop policy if exists "anon insert contact_messages" on contact_messages;
create policy "anon insert contact_messages" on contact_messages
  for insert to anon, authenticated with check (true);

drop policy if exists "anon select gallery" on gallery;
create policy "anon select gallery" on gallery
  for select to anon, authenticated using (true);

drop policy if exists "anon insert gallery_comments" on gallery_comments;
create policy "anon insert gallery_comments" on gallery_comments
  for insert to anon, authenticated with check (true);

drop policy if exists "anon select gallery_comments" on gallery_comments;
create policy "anon select gallery_comments" on gallery_comments
  for select to anon, authenticated using (true);

-- Allow the RPC to bump likes from anon (SECURITY DEFINER skips RLS)
drop function if exists increment_gallery_likes(uuid) cascade;
create or replace function increment_gallery_likes(row_id uuid)
returns void
language sql
security definer
as $$
  update gallery set likes = coalesce(likes, 0) + 1 where id = row_id;
$$;
