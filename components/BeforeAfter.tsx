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
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500">
            Casos reales
          </p>
          <h2 className="heading-lg">
            Lo que dicen nuestros{' '}
            <span className="text-brand-600">pacientes</span>
          </h2>
          <p className="body-lg mt-4">
            Historias reales de sonrisas transformadas con Unseen.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <Quote size={32} className="mb-4 text-brand-200" />
              <p className="text-base leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-slate-500">
            Más casos y resultados en nuestro Instagram
          </p>
          <a
            href="https://www.instagram.com/unseenalineadores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-pink-300 px-6 py-3 text-sm font-semibold text-pink-600 transition-all hover:bg-pink-50"
          >
            <Instagram size={18} />
            @unseenalineadores
          </a>
        </div>
      </div>
    </section>
  )
}
