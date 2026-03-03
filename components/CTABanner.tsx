import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-midnight-50 py-20">
      {/* Decorative */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-[80px]" />

      <div className="container-narrow relative z-10 px-5 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-midnight-900 sm:text-4xl lg:text-5xl">
          ¿Lista para transformar{' '}
          <span className="italic text-brand-600">tu sonrisa</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-midnight-300">
          Tu primera consulta es sin cargo y sin compromiso. Escribinos y empezá
          hoy.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5491131793649?text=Hola!%20Quiero%20agendar%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-midnight-900 px-8 py-3.5 text-base font-semibold text-midnight-50 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Agendar Consulta Gratis
            <ArrowRight size={18} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-midnight-900/20 px-8 py-3 text-base font-semibold text-midnight-900 transition-all duration-300 hover:bg-midnight-900/5"
          >
            Enviar Mensaje
          </a>
        </div>
      </div>
    </section>
  )
}
