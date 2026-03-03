'use client'

import { Eye, Shield, Clock, Smile, Cpu, Zap } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Invisible',
    description:
      'Alineadores transparentes que nadie nota. Seguí tu vida con total confianza.',
  },
  {
    icon: Shield,
    title: 'Cómodo',
    description:
      'Sin brackets ni alambres. Material suave que se adapta a tus dientes.',
  },
  {
    icon: Clock,
    title: 'Removible',
    description:
      'Sacalos para comer y cepillarte. Higiene total sin restricciones.',
  },
  {
    icon: Smile,
    title: 'Resultados Reales',
    description:
      'Planificación digital 100% personalizada con resultados predecibles.',
  },
  {
    icon: Cpu,
    title: 'Tecnología 3D',
    description:
      'Escáner digital. Podés ver tu resultado final antes de empezar.',
  },
  {
    icon: Zap,
    title: 'Rápido',
    description:
      'Resultados visibles desde los primeros meses. Tratamientos desde 3 meses.',
  },
]

export default function Services() {
  return (
    <section id="tratamientos" className="section-padding bg-midnight-50">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            ¿Por qué elegirnos?
          </p>
          <h2 className="heading-lg-dark">
            Alineadores que{' '}
            <span className="italic text-brand-600">transforman</span>
          </h2>
          <p className="body-lg-dark mt-4">
            Tecnología de última generación para una sonrisa perfecta, sin
            cambiar tu estilo de vida.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-midnight-900/5 bg-white p-8 transition-all duration-500 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-900 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-midnight-900">
                <feature.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-midnight-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-midnight-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
