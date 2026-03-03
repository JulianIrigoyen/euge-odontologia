'use client'

import { Eye, Shield, Clock, Smile, Star, Zap } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Invisible',
    description:
      'Alineadores transparentes que nadie nota. Seguí tu vida normal con total confianza.',
  },
  {
    icon: Shield,
    title: 'Cómodo',
    description:
      'Sin brackets ni alambres. Material suave que se adapta perfectamente a tus dientes.',
  },
  {
    icon: Clock,
    title: 'Removible',
    description:
      'Sacalos para comer y cepillarte. Higiene total, sin restricciones alimentarias.',
  },
  {
    icon: Smile,
    title: 'Resultados Reales',
    description:
      'Tratamiento 100% personalizado con planificación digital para resultados predecibles.',
  },
  {
    icon: Star,
    title: 'Tecnología 3D',
    description:
      'Escáner digital y planificación por software. Podés ver tu resultado antes de empezar.',
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
    <section id="tratamientos" className="section-padding bg-white">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500">
            ¿Por qué elegirnos?
          </p>
          <h2 className="heading-lg">
            Alineadores invisibles que{' '}
            <span className="text-brand-600">transforman</span>
          </h2>
          <p className="body-lg mt-4">
            Tecnología de última generación para una sonrisa perfecta, sin
            cambiar tu estilo de vida.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <feature.icon size={24} />
              </div>
              <h3 className="heading-md text-xl">{feature.title}</h3>
              <p className="body-md mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
