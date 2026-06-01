// ================================
// Database Types
// ================================

export interface Agency {
  id: string
  name: string
  slug: string
  description: string | null
  email: string | null
  phone: string | null
  address: string | null
  logo_url: string | null
  banner_url: string | null
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  agency_id: string | null
  full_name: string | null
  avatar_url: string | null
  role: 'owner' | 'admin' | 'viewer'
  created_at: string
}

export interface EventType {
  id: string
  agency_id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
  color: string | null
  created_at: string
}

export interface Event {
  id: string
  agency_id: string
  event_type_id: string | null
  title: string
  slug: string
  description: string | null
  date: string | null
  location: string | null
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
}

export interface Portfolio {
  id: string
  agency_id: string
  event_id: string | null
  title: string
  description: string | null
  image_url: string
  thumb_url: string | null
  alt_text: string | null
  position: number
  published: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  agency_id: string
  author_name: string
  author_role: string | null
  content: string
  rating: number
  photo_url: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export interface Booking {
  id: string
  agency_id: string
  event_type_id: string | null
  name: string
  email: string
  phone: string | null
  event_date: string | null
  guest_count: number | null
  message: string | null
  status: 'pending' | 'contacted' | 'booked' | 'rejected'
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  id: string
  agency_id: string
  name: string
  email: string
  subject: string | null
  message: string
  read: boolean
  created_at: string
}

export interface TeamMember {
  id: string
  agency_id: string
  name: string
  role: string
  bio: string | null
  photo_url: string | null
  email: string | null
  phone: string | null
  website: string | null
  published: boolean
  created_at: string
  updated_at: string
}
