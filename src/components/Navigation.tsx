'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: scrolled ? '18px' : '20px',
            fontWeight: 500,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: scrolled ? 'var(--color-dark)' : 'white',
            transition: 'all 0.4s',
          }}>
            The Big Day
          </span>
          <span style={{
            fontSize: '9px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: scrolled ? 'var(--color-gold)' : 'rgba(255,255,255,0.7)',
            transition: 'all 0.4s',
          }}>
            Corsica
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '40px',
          margin: 0,
          padding: 0,
          alignItems: 'center',
        }}>
          {[
            { label: 'The Big Day', href: '#the-big-day' },
            { label: 'The Gathering', href: '#the-gathering' },
            { label: 'Galerie', href: '#galerie' },
            { label: 'À propos', href: '#about' },
            { label: 'FAQ', href: '#faq' },
          ].map(link => (
            <li key={link.href} style={{ display: 'none' }} className="nav-desktop-item">
              <a href={link.href} style={{
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: scrolled ? 'var(--color-dark)' : 'rgba(255,255,255,0.85)',
                transition: 'color 0.3s',
                position: 'relative',
              }}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="#contact" className="btn btn-gold" style={{ padding: '10px 28px', fontSize: '10px' }}>
              Contact
            </Link>
          </li>
        </ul>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop-item { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
