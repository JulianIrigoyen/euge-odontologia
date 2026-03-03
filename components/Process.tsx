'use client'

import { MessageCircle, ScanLine, Package, PartyPopper } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consulta Inicial',
    description:
      'Agendá tu consulta gratuita. Evaluamos tu caso y te contamos todo sobre el tratamiento.',
  },
  {
    number: '02',
    icon: ScanLine,
    title: 'Escaneo Digital 3D',
    description:
      'Escaneamos tus dientes en 3D. Diseñamos tu plan y te mostramos el resultado final.',
  },
  {
    number: '03',
    icon: Package,
    title: 'Tus Alineadores',
    description:
      'Recibís tus alineadores a medida. Los cambiás cada 2 semanas con seguimiento profesional.',
  },
  {
    number: '04',
    icon: PartyPopper,
    title: 'Sonrisa Nueva',
    description:
      'Disfrutá tu nueva sonrisa. Resultados visibles desde los primeros meses.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-midnight-900">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Simple y efectivo
          </p>
          <h2 className="heading-lg">
            ¿Cómo <span className="italic text-gradient">funciona</span>?
          </h2>
          <p className="body-lg mt-4">
            En 4 pasos simples empezás tu camino hacia la sonrisa que siempre
            quisiste.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="group text-center">
              {/* Icon */}
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-brand/30 group-hover:bg-brand/10 group-hover:shadow-lg group-hover:shadow-brand/10">
                <step.icon size={28} className="text-brand transition-colors" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-midnight-900">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-midnight-50">
                {step.title}
              </h3>
              <p className="body-md mt-2">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5491131793649?text=Hola!%20Quiero%20agendar%20una%20consulta%20inicial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Empezá Hoy
          </a>
        </div>
      </div>
    </section>
  )
}
