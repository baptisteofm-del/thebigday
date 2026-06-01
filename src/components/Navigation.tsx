'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-dark/5">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif font-bold text-xl text-dark">The Big Day</span>
          <span className="text-xs text-gold uppercase tracking-wider">Corsica</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/#univers" className="text-dark hover:text-gold transition font-medium">
              Univers
            </Link>
          </li>
          <li>
            <Link href="/galerie" className="text-dark hover:text-gold transition font-medium">
              Galerie
            </Link>
          </li>
          <li>
            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-dark/5 bg-white/95">
          <div className="container-max py-4 space-y-4">
            <Link href="/#univers" className="block text-dark hover:text-gold transition py-2">
              Univers
            </Link>
            <Link href="/galerie" className="block text-dark hover:text-gold transition py-2">
              Galerie
            </Link>
            <Link href="/contact" className="block btn btn-primary w-full text-center">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
