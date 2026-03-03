import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-midnight-900"
    >
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] hero-grid" />

      <div className="container-narrow relative z-10 px-5 pt-24 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-midnight-200 backdrop-blur-sm animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-soft" />
            Ortodoncia invisible en Recoleta
          </div>

          {/* Headline - serif display */}
          <h1 className="heading-xl text-balance animate-fade-in-up">
            Tu sonrisa perfecta,
            <br />
            <span className="text-gradient italic">sin que nadie lo note</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg mx-auto mt-8 max-w-2xl text-balance animate-fade-in-up [animation-delay:200ms]">
            Alineadores transparentes diseñados a medida. Tecnología 3D,
            seguimiento profesional y resultados que se ven{' '}
            <span className="text-accent">desde el primer mes</span>.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center gap-4 animate-fade-in-up [animation-delay:400ms] sm:flex-row sm:justify-center">
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
              Conocé el tratamiento
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-midnight-200/60 animate-fade-in [animation-delay:600ms]">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-brand/60" />
              Mat. 42.671
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent/60" />
              100% Personalizado
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-brand/60" />
              Recoleta, Buenos Aires
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent/60" />
              Medios de pago
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <div className="h-2 w-0.5 rounded-full bg-brand/60 animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  )
}
