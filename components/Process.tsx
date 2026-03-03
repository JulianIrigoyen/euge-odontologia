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
    title: 'Escaneo Digital',
    description:
      'Escaneamos tus dientes en 3D. Diseñamos tu plan de tratamiento y te mostramos el resultado final.',
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
      'Disfrutá tu nueva sonrisa. Resultados visibles desde los primeros meses de tratamiento.',
  },
]

export default function Process() {
  return (
    <section
      id="proceso"
      className="section-padding bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500">
            Simple y efectivo
          </p>
          <h2 className="heading-lg">
            ¿Cómo <span className="text-brand-600">funciona</span>?
          </h2>
          <p className="body-lg mt-4">
            En 4 pasos simples empezás tu camino hacia la sonrisa que siempre
            quisiste.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] right-[calc(-50%+40px)] top-10 hidden h-px bg-gradient-to-r from-brand-300 to-brand-100 lg:block" />
              )}

              {/* Icon circle */}
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 ring-4 ring-white">
                <step.icon size={32} className="text-brand-500" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="heading-md text-lg">{step.title}</h3>
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
