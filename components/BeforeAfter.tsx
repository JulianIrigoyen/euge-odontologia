'use client'

import { Quote, Instagram } from 'lucide-react'

const testimonials = [
  {
    quote:
      'No puedo creer la diferencia. Nadie se dio cuenta que estaba en tratamiento y en 6 meses mi sonrisa cambió por completo.',
    name: 'María L.',
    detail: 'Caso Mid - 6 meses',
  },
  {
    quote:
      'Siempre me dio vergüenza sonreír en fotos. Ahora no puedo parar. El mejor tratamiento que hice en mi vida.',
    name: 'Luciana G.',
    detail: 'Caso Full - 10 meses',
  },
  {
    quote:
      'Super cómodo y rápido. En 3 meses ya se notaba la diferencia. Lo recomiendo 100%.',
    name: 'Tomás R.',
    detail: 'Caso Mini - 3 meses',
  },
]

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-midnight-900">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Casos reales
          </p>
          <h2 className="heading-lg">
            Lo que dicen nuestros{' '}
            <span className="italic text-gradient-rose">pacientes</span>
          </h2>
          <p className="body-lg mt-4">
            Historias reales de sonrisas transformadas con Unseen.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-500 hover:border-accent/20 hover:bg-white/[0.06]"
            >
              <Quote size={28} className="mb-4 text-accent/30" />
              <p className="text-base leading-relaxed text-midnight-200">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-midnight-50">
                    {t.name}
                  </p>
                  <p className="text-xs text-midnight-200/60">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-midnight-200/60">
            Más casos y resultados en nuestro Instagram
          </p>
          <a
            href="https://www.instagram.com/unseenalineadores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-midnight-50 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Instagram size={18} />
            @unseenalineadores
          </a>
        </div>
      </div>
    </section>
  )
}
