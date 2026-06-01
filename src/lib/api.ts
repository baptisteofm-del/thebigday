import { createClient } from './supabase/server'
import { createAdminClient } from './supabase/server'

// ================================
// AGENCIES
// ================================

export async function getAgency(slug: string = 'thebigday') {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('agencies')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) console.error('Error fetching agency:', error)
  return data
}

// ================================
// EVENTS
// ================================

export async function getEvents(agencySlug: string = 'thebigday') {
  const supabase = await createClient()
  const agency = await getAgency(agencySlug)

  if (!agency) return []

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('agency_id', agency.id)
    .eq('status', 'published')
    .order('date', { ascending: false })

  if (error) console.error('Error fetching events:', error)
  return data || []
}

export async function getEventsByType(
  typeSlug: string,
  agencySlug: string = 'thebigday'
) {
  const supabase = await createClient()
  const agency = await getAgency(agencySlug)

  if (!agency) return []

  const { data: eventType } = await supabase
    .from('event_types')
    .select('id')
    .eq('slug', typeSlug)
    .eq('agency_id', agency.id)
    .single()

  if (!eventType) return []

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('event_type_id', eventType.id)
    .eq('status', 'published')
    .order('date', { ascending: false })

  if (error) console.error('Error fetching events by type:', error)
  return data || []
}

// ================================
// PORTFOLIOS
// ================================

export async function getPortfolios(agencySlug: string = 'thebigday') {
  const supabase = await createClient()
  const agency = await getAgency(agencySlug)

  if (!agency) return []

  const { data, error } = await supabase
    .from('portfolios')
    .select('*')
    .eq('agency_id', agency.id)
    .eq('published', true)
    .order('position')

  if (error) console.error('Error fetching portfolios:', error)
  return data || []
}

// ================================
// TESTIMONIALS
// ================================

export async function getTestimonials(agencySlug: string = 'thebigday') {
  const supabase = await createClient()
  const agency = await getAgency(agencySlug)

  if (!agency) return []

  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('agency_id', agency.id)
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) console.error('Error fetching testimonials:', error)
  return data || []
}

// ================================
// BOOKINGS & CONTACTS
// ================================

export async function submitBooking(bookingData: any) {
  const supabase = await createClient()
  const agency = await getAgency()

  if (!agency) throw new Error('Agency not found')

  const { data, error } = await supabase
    .from('bookings')
    .insert({
      ...bookingData,
      agency_id: agency.id,
    })
    .select()

  if (error) throw error
  return data
}

export async function submitContactMessage(messageData: any) {
  const supabase = await createClient()
  const agency = await getAgency()

  if (!agency) throw new Error('Agency not found')

  const { data, error } = await supabase
    .from('contact_messages')
    .insert({
      ...messageData,
      agency_id: agency.id,
    })
    .select()

  if (error) throw error
  return data
}
