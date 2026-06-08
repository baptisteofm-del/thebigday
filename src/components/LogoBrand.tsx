import React from 'react'

interface LogoBrandProps {
  light?: boolean   // true = sur fond sombre (hero), false = sur fond clair (navbar scrollée)
  size?: 'sm' | 'lg'
}

export function LogoBrand({ light = false, size = 'sm' }: LogoBrandProps) {
  const fill   = '#d4b896'                                     // champagne doré
  const stroke = light ? 'rgba(42,33,24,0.85)' : '#2a2118'   // contour brun foncé

  if (size === 'lg') {
    return (
      <svg
        viewBox="0 0 460 500"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The Big Day"
        style={{ width: 'clamp(200px, 28vw, 400px)', height: 'auto', overflow: 'visible' }}
      >
        {/* "The" */}
        <text
          x="230" y="82"
          textAnchor="middle"
          style={{
            fontFamily: "'Pinyon Script', cursive",
            fontSize: '76px',
            fill,
            stroke,
            strokeWidth: '5px',
            paintOrder: 'stroke fill',
          }}
        >The</text>

        {/* Grand "B" */}
        <text
          x="30" y="400"
          style={{
            fontFamily: "'Pinyon Script', cursive",
            fontSize: '370px',
            fill,
            stroke,
            strokeWidth: '9px',
            paintOrder: 'stroke fill',
          }}
        >B</text>

        {/* "ig" */}
        <text
          x="298" y="358"
          style={{
            fontFamily: "'Pinyon Script', cursive",
            fontSize: '100px',
            fill,
            stroke,
            strokeWidth: '6px',
            paintOrder: 'stroke fill',
          }}
        >ig</text>

        {/* "Day" */}
        <text
          x="230" y="485"
          textAnchor="middle"
          style={{
            fontFamily: "'Pinyon Script', cursive",
            fontSize: '100px',
            fill,
            stroke,
            strokeWidth: '6px',
            paintOrder: 'stroke fill',
          }}
        >Day</text>
      </svg>
    )
  }

  // Version navbar — compacte
  return (
    <svg
      viewBox="0 0 185 205"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Big Day"
      style={{ height: '68px', width: 'auto', overflow: 'visible' }}
    >
      {/* "The" */}
      <text
        x="92" y="35"
        textAnchor="middle"
        style={{
          fontFamily: "'Pinyon Script', cursive",
          fontSize: '31px',
          fill,
          stroke,
          strokeWidth: '2px',
          paintOrder: 'stroke fill',
        }}
      >The</text>

      {/* Grand "B" */}
      <text
        x="12" y="162"
        style={{
          fontFamily: "'Pinyon Script', cursive",
          fontSize: '152px',
          fill,
          stroke,
          strokeWidth: '4px',
          paintOrder: 'stroke fill',
        }}
      >B</text>

      {/* "ig" */}
      <text
        x="122" y="144"
        style={{
          fontFamily: "'Pinyon Script', cursive",
          fontSize: '40px',
          fill,
          stroke,
          strokeWidth: '2px',
          paintOrder: 'stroke fill',
        }}
      >ig</text>

      {/* "Day" */}
      <text
        x="92" y="198"
        textAnchor="middle"
        style={{
          fontFamily: "'Pinyon Script', cursive",
          fontSize: '40px',
          fill,
          stroke,
          strokeWidth: '2px',
          paintOrder: 'stroke fill',
        }}
      >Day</text>
    </svg>
  )
}
