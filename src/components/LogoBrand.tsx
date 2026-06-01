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
          fontFamily: 'var(--font-serif)',
          fontSize: '13px',
          fontStyle: 'italic',
          letterSpacing: '10px',
          textTransform: 'lowercase',
          color: light ? 'rgba(255,255,255,0.55)' : 'rgba(42,33,24,0.5)',
          marginBottom: '-8px',
          fontWeight: 300,
        }}>
          The
        </span>

        {/* B + ig sur la même ligne */}
        <div style={{ display: 'flex', alignItems: 'flex-end', lineHeight: 1 }}>
          {/* B géant */}
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(100px, 14vw, 180px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color,
            lineHeight: 0.82,
            letterSpacing: '-4px',
          }}>
            B
          </span>
          {/* ig */}
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(34px, 5vw, 64px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color,
            lineHeight: 1,
            marginBottom: 'clamp(8px, 1.2vw, 18px)',
            letterSpacing: '2px',
          }}>
            ig
          </span>
        </div>

        {/* Day */}
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(18px, 3vw, 36px)',
          fontStyle: 'italic',
          fontWeight: 300,
          letterSpacing: 'clamp(8px, 2vw, 20px)',
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
        fontFamily: 'var(--font-serif)',
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
          fontFamily: 'var(--font-serif)',
          fontSize: '52px',
          fontStyle: 'italic',
          fontWeight: 300,
          color,
          lineHeight: 0.82,
          letterSpacing: '-1px',
        }}>
          B
        </span>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          fontStyle: 'italic',
          fontWeight: 300,
          color,
          marginBottom: '3px',
          letterSpacing: '1px',
        }}>
          ig
        </span>
      </div>

      {/* Day */}
      <span style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '10px',
        fontStyle: 'italic',
        fontWeight: 300,
        letterSpacing: '6px',
        color: goldColor,
        marginTop: '-6px',
        textTransform: 'lowercase',
      }}>
        Day
      </span>
    </div>
  )
}
