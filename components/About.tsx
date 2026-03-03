'use client'

import { GraduationCap, Award, MapPin, Heart } from 'lucide-react'

const credentials = [
  {
    icon: GraduationCap,
    label: 'Odontóloga',
    detail: 'Especialista en ortodoncia',
  },
  {
    icon: Award,
    label: 'Mat. 42.671',
    detail: 'Matrícula verificada',
  },
  {
    icon: MapPin,
    label: 'Recoleta',
    detail: 'Buenos Aires, Argentina',
  },
  {
    icon: Heart,
    label: 'Pasión',
    detail: 'Por las sonrisas perfectas',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-midnight-50">
      <div className="container-narrow">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-midnight-900">
              {/* Placeholder */}
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 font-display text-4xl font-bold text-brand">
                  E
                </div>
                <p className="text-sm font-medium text-midnight-200">
                  Foto de la Dra. Euge
                </p>
                <p className="mt-1 text-xs text-midnight-200/40">
                  (Se reemplaza con foto real)
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-accent/10" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
              Sobre mí
            </p>
            <h2 className="heading-lg-dark">Dra. Euge</h2>
            <p className="body-lg-dark mt-4">
              Odontóloga especialista en ortodoncia con alineadores invisibles.
              Mi misión es que cada paciente logre la sonrisa que siempre soñó,
              de manera cómoda, moderna y sin complicaciones.
            </p>
            <p className="mt-4 text-base leading-relaxed text-midnight-300">
              Trabajo con tecnología de última generación para diseñar
              tratamientos 100% personalizados. Cada sonrisa es única y merece
              un plan a medida.
            </p>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-3 rounded-xl border border-midnight-900/5 bg-white p-4"
                >
                  <c.icon
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-brand-600"
                  />
                  <div>
                    <p className="text-sm font-semibold text-midnight-900">
                      {c.label}
                    </p>
                    <p className="text-xs text-midnight-300">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
