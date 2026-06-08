'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { LogoBrand } from './LogoBrand'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo typographique */}
        <Link href="/">
          <LogoBrand light={!scrolled} size="sm" />
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
            { label: 'The Big Day',    href: '#the-big-day' },
            { label: 'The Gathering',  href: '#the-gathering' },
            { label: 'Galerie',        href: '#galerie' },
            { label: 'À propos',       href: '#about' },
            { label: 'FAQ',            href: '#faq' },
          ].map(link => (
            <li key={link.href} className="nav-desktop-item" style={{ display: 'none' }}>
              <a href={link.href} style={{
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: scrolled ? 'var(--color-dark)' : 'rgba(255,255,255,0.8)',
                transition: 'color 0.3s',
              }}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-gold" style={{ padding: '10px 28px', fontSize: '10px' }}>
              Contact
            </a>
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
