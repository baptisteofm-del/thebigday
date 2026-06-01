import React from 'react'

interface LogoBrandProps {
  light?: boolean   // true = blanc (sur hero), false = sombre (navbar scrollée)
  size?: 'sm' | 'lg'  // sm = navbar, lg = hero
}

export function LogoBrand({ light = false, size = 'sm' }: LogoBrandProps) {
  const color = light ? 'rgba(255,255,255,0.92)' : 'var(--color-dark)'
  const goldColor = light ? 'rgba(201,169,110,0.75)' : 'var(--color-gold)'

  if (size === 'lg') {
    // Version Hero — grand format centré
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
        {/* "The" */}
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '13px',
          fontStyle: 'italic',
          letterSpacing: '8px',
          textTransform: 'lowercase',
          color: light ? 'rgba(255,255,255,0.55)' : 'rgba(42,33,24,0.5)',
          marginBottom: '-8px',
          fontWeight: 300,
          opacity: 0.6,
        }}>
          The
        </span>

        {/* B + ig sur la même ligne */}
        <div style={{ display: 'flex', alignItems: 'flex-end', lineHeight: 1 }}>
          {/* B géant en Playfair Display */}
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(110px, 15vw, 200px)',
            fontStyle: 'italic',
            fontWeight: 800,
            color,
            lineHeight: 0.78,
            letterSpacing: '0px',
          }}>
            B
          </span>
          {/* ig */}
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            fontStyle: 'italic',
            fontWeight: 400,
            color,
            lineHeight: 1,
            marginBottom: '12px',
            letterSpacing: '0px',
          }}>
            ig
          </span>
        </div>

        {/* Day */}
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(20px, 3vw, 40px)',
          fontStyle: 'italic',
          fontWeight: 300,
          letterSpacing: '12px',
          color: goldColor,
          marginTop: '-8px',
          textTransform: 'lowercase',
        }}>
          Day
        </span>
      </div>
    )
  }

  // Version Navbar — compacte
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', userSelect: 'none', lineHeight: 1 }}>
      {/* "The" */}
      <span style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '9px',
        fontStyle: 'italic',
        letterSpacing: '5px',
        color: light ? 'rgba(255,255,255,0.5)' : 'rgba(42,33,24,0.45)',
        marginBottom: '-3px',
        fontWeight: 300,
      }}>
        The
      </span>

      {/* B + ig */}
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '56px',
          fontStyle: 'italic',
          fontWeight: 800,
          color,
          lineHeight: 0.82,
          letterSpacing: '0px',
        }}>
          B
        </span>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '20px',
          fontStyle: 'italic',
          fontWeight: 400,
          color,
          marginBottom: '4px',
          letterSpacing: '0px',
        }}>
          ig
        </span>
      </div>

      {/* Day */}
      <span style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '11px',
        fontStyle: 'italic',
        fontWeight: 300,
        letterSpacing: '5px',
        color: goldColor,
        marginTop: '-6px',
        textTransform: 'lowercase',
      }}>
        Day
      </span>
    </div>
  )
}
