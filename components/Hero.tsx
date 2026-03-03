'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-white"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-brand-100/40 blur-3xl" />

      <div className="container-narrow relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center md:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 animate-fade-in">
          <Sparkles size={16} />
          Ortodoncia invisible en Recoleta
        </div>

        {/* Headline */}
        <h1 className="heading-xl max-w-4xl text-balance animate-fade-in-up">
          Tu sonrisa perfecta,{' '}
          <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
            sin que nadie lo note
          </span>
        </h1>

        {/* Subheadline */}
        <p className="body-lg mt-6 max-w-2xl text-balance animate-fade-in-up [animation-delay:200ms]">
          Alineadores transparentes diseñados a medida para transformar tu
          sonrisa de forma cómoda, discreta y efectiva. Tratamiento 100%
          personalizado.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up [animation-delay:400ms] sm:flex-row">
          <a
            href="https://wa.me/5491131793649?text=Hola!%20Quiero%20consultar%20por%20alineadores%20invisibles"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Consulta Gratis
            <ArrowRight size={18} />
          </a>
          <a href="#proceso" className="btn-secondary">
            ¿Cómo funciona?
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500 animate-fade-in [animation-delay:600ms]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            Mat. 42.671
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-brand-400" />
            100% Personalizado
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-brand-400" />
            Recoleta, Buenos Aires
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-brand-300 p-1">
            <div className="h-2 w-1 rounded-full bg-brand-400 animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  )
}
