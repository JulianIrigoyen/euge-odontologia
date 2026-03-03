'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tratamiento', href: '#tratamientos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-midnight-900/80 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="container-narrow mx-auto flex items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold italic tracking-tight text-midnight-50">
            unseen
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-midnight-200 transition-colors duration-300 hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5491131793649?text=Hola!%20Quiero%20consultar%20por%20alineadores%20invisibles"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand/10 px-6 py-2.5 text-sm font-semibold text-brand ring-1 ring-brand/30 transition-all duration-300 hover:bg-brand hover:text-midnight-900 hover:ring-brand md:inline-flex"
        >
          Agendar Consulta
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-midnight-200 transition-colors hover:text-brand md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-[28rem] border-t border-white/5' : 'max-h-0'
        )}
      >
        <div className="bg-midnight-900/95 px-5 pb-6 pt-2 backdrop-blur-xl">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-midnight-200 transition-colors hover:bg-white/5 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5491131793649?text=Hola!%20Quiero%20consultar%20por%20alineadores%20invisibles"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full text-center"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  )
}
