import { NextRequest, NextResponse } from 'next/server'
import { createClient as createServerClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, eventType, date, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to Supabase — utiliser SERVICE_ROLE_KEY pour accès serveur
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )

    const { data: agency, error: agencyError } = await supabase
      .from('agencies')
      .select('id')
      .eq('slug', 'thebigday')
      .single()

    if (agencyError || !agency) {
      console.error('Agency lookup error:', agencyError)
      return NextResponse.json(
        { error: 'Agency not found', details: agencyError?.message },
        { status: 404 }
      )
    }

    const { error: dbError } = await supabase
      .from('bookings')
      .insert({
        agency_id: agency.id,
        name,
        email,
        event_date: date || null,
        message,
      })

    if (dbError) {
      console.error('DB Error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save booking' },
        { status: 500 }
      )
    }

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'TheBigDay <contact@thebigday.fr>',
        to: 'contact@thebigday.fr',
        replyTo: email,
        subject: `Nouvelle demande de contact — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #c9a96e 0%, #8b7355 100%); padding: 20px; color: white; border-radius: 4px 4px 0 0;">
              <h2 style="margin: 0; font-size: 24px;">Nouvelle demande de contact</h2>
            </div>
            <div style="background: #f9f7f4; padding: 30px; border-radius: 0 0 4px 4px; border: 1px solid #e0d5c7;">
              <p style="margin-top: 0; font-size: 16px;"><strong>Nom:</strong> ${name}</p>
              <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${eventType ? `<p style="font-size: 16px;"><strong>Type d'événement:</strong> ${eventType}</p>` : ''}
              ${date ? `<p style="font-size: 16px;"><strong>Date estimée:</strong> ${new Date(date).toLocaleDateString('fr-FR')}</p>` : ''}
              <hr style="border: none; border-top: 1px solid #d4c5b9; margin: 20px 0;">
              <p style="font-size: 16px;"><strong>Message:</strong></p>
              <p style="font-size: 16px; white-space: pre-wrap; color: #333;">${message}</p>
              <hr style="border: none; border-top: 1px solid #d4c5b9; margin: 20px 0;">
              <p style="font-size: 12px; color: #999; margin-bottom: 0;">
                Demande reçue via TheB igDay contact form
              </p>
            </div>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Email send error:', emailError)
      // Don't fail the booking if email fails — booking is still saved
    }

    return NextResponse.json(
      { success: true, message: 'Booking created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
