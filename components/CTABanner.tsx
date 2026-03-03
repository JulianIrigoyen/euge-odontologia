import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-600 to-brand-700 py-16">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-brand-400/20 blur-3xl" />

      <div className="container-narrow relative z-10 px-5 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          ¿Lista para transformar tu sonrisa?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
          Tu primera consulta es sin cargo y sin compromiso. Escribinos y empezá
          hoy.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5491131793649?text=Hola!%20Quiero%20agendar%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Agendar Consulta Gratis
            <ArrowRight size={18} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Enviar Mensaje
          </a>
        </div>
      </div>
    </section>
  )
}
