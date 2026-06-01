-- ================================
-- THE BIG DAY — Schéma base de données
-- À exécuter dans Supabase SQL Editor
-- ================================

-- Extensions
create extension if not exists "uuid-ossp";

-- ================================
-- AGENCIES (structure multi-tenant)
-- ================================
create table if not exists agencies (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text,
  email text,
  phone text,
  address text,
  logo_url text,
  banner_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ================================
-- PROFILES (équipe)
-- ================================
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  agency_id uuid references agencies(id) on delete cascade,
  full_name text,
  avatar_url text,
  role text default 'viewer', -- owner, admin, viewer
  created_at timestamptz default now()
);

-- ================================
-- EVENT_TYPES (catégories)
-- ================================
create table if not exists event_types (
  id uuid primary key default uuid_generate_v4(),
  agency_id uuid references agencies(id) on delete cascade not null,
  name text not null, -- "Mariage", "Anniversaire", etc.
  slug text not null,
  description text,
  icon text,
  color text, -- couleur badge
  created_at timestamptz default now(),
  unique(agency_id, slug)
);

-- ================================
-- EVENTS (mariages & événements)
-- ================================
create table if not exists events (
  id uuid primary key default uuid_generate_v4(),
  agency_id uuid references agencies(id) on delete cascade not null,
  event_type_id uuid references event_types(id) on delete set null,
  title text not null,
  slug text not null,
  description text,
  date timestamp,
  location text,
  featured boolean default false,
  status text default 'draft', -- draft, published, archived
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(agency_id, slug)
);

-- ================================
-- PORTFOLIOS (galerie photos)
-- ================================
create table if not exists portfolios (
  id uuid primary key default uuid_generate_v4(),
  agency_id uuid references agencies(id) on delete cascade not null,
  event_id uuid references events(id) on delete cascade,
  title text not null,
  description text,
  image_url text not null,
  thumb_url text,
  alt_text text,
  position int default 0,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ================================
-- TESTIMONIALS (témoignages)
-- ================================
create table if not exists testimonials (
  id uuid primary key default uuid_generate_v4(),
  agency_id uuid references agencies(id) on delete cascade not null,
  author_name text not null,
  author_role text, -- "Mariée", "Maman", etc.
  content text not null,
  rating int default 5 check (rating >= 1 and rating <= 5),
  photo_url text,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ================================
-- BOOKINGS (demandes de réservation)
-- ================================
create table if not exists bookings (
  id uuid primary key default uuid_generate_v4(),
  agency_id uuid references agencies(id) on delete cascade not null,
  event_type_id uuid references event_types(id) on delete set null,
  name text not null,
  email text not null,
  phone text,
  event_date date,
  guest_count int,
  message text,
  status text default 'pending', -- pending, contacted, booked, rejected
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ================================
-- CONTACT_MESSAGES (formulaire contact)
-- ================================
create table if not exists contact_messages (
  id uuid primary key default uuid_generate_v4(),
  agency_id uuid references agencies(id) on delete cascade not null,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  read boolean default false,
  created_at timestamptz default now()
);

-- ================================
-- TEAM_MEMBERS (équipe prestataires)
-- ================================
create table if not exists team_members (
  id uuid primary key default uuid_generate_v4(),
  agency_id uuid references agencies(id) on delete cascade not null,
  name text not null,
  role text not null, -- "Fleuriste", "DJ", "Cuisinier", etc.
  bio text,
  photo_url text,
  email text,
  phone text,
  website text,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ================================
-- INDEXES (performance)
-- ================================
create index if not exists idx_profiles_agency on profiles(agency_id);
create index if not exists idx_events_agency on events(agency_id);
create index if not exists idx_events_type on events(event_type_id);
create index if not exists idx_portfolios_event on portfolios(event_id);
create index if not exists idx_testimonials_agency on testimonials(agency_id);
create index if not exists idx_bookings_agency on bookings(agency_id);
create index if not exists idx_contact_agency on contact_messages(agency_id);

-- ================================
-- ROW LEVEL SECURITY (à implémenter)
-- ================================
-- À faire: RLS policies pour multi-tenant

-- ================================
-- DEFAULT DATA
-- ================================
insert into agencies (name, slug, description, email)
values (
  'The Big Day Corsica',
  'thebigday',
  'Agence événementielle spécialisée en mariages et événements privés en Corse',
  'contact@thebigday.fr'
) on conflict (slug) do nothing;

-- Insert event types
insert into event_types (agency_id, name, slug, description, icon, color)
select 
  (select id from agencies where slug = 'thebigday'),
  name,
  slug,
  description,
  icon,
  color
from (
  values
    ('Mariage', 'mariage', 'Organisation complète de votre mariage', '💍', '#d4af8a'),
    ('Demande en mariage', 'demande', 'Célébration unique d''une demande en mariage', '💒', '#d4af8a'),
    ('Dîner privé', 'diner', 'Soirée gastronomique entre proches', '🍽️', '#8b9b8f'),
    ('Anniversaire', 'anniversaire', 'Célébration de vos années', '🎂', '#8b9b8f'),
    ('Baptême', 'bapteme', 'Un moment familial incontournable', '✨', '#8b9b8f'),
    ('Séminaire', 'seminaire', 'Événement professionnel haut de gamme', '📊', '#8b9b8f'),
    ('Événement sur mesure', 'custom', 'Votre vision, notre expertise', '🎯', '#8b9b8f')
) as evt(name, slug, description, icon, color)
on conflict do nothing;
