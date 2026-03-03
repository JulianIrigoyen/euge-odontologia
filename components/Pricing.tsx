'use client'

import { Check, ArrowRight, Star } from 'lucide-react'
import clsx from 'clsx'

const plans = [
  {
    name: 'Mini',
    price: '650.000',
    description: 'Correcciones leves y ajustes menores',
    features: [
      'Casos de complejidad leve',
      'Hasta 10 alineadores',
      'Escaneo digital 3D',
      'Seguimiento incluido',
      'Consulta inicial gratis',
    ],
    popular: false,
  },
  {
    name: 'Mid',
    price: '1.400.000',
    description: 'El más elegido para resultados completos',
    features: [
      'Casos de complejidad media',
      'Hasta 24 alineadores',
      'Escaneo digital 3D',
      'Seguimiento quincenal',
      'Consulta inicial gratis',
      'Refinamientos incluidos',
    ],
    popular: true,
  },
  {
    name: 'Full',
    price: '1.750.000',
    description: 'Tratamiento integral sin límites',
    features: [
      'Casos complejos',
      'Alineadores ilimitados',
      'Escaneo digital 3D',
      'Seguimiento personalizado',
      'Consulta inicial gratis',
      'Refinamientos ilimitados',
      'Retención incluida',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="planes" className="section-padding bg-white">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500">
            Planes y precios
          </p>
          <h2 className="heading-lg">
            Un plan para cada{' '}
            <span className="text-brand-600">sonrisa</span>
          </h2>
          <p className="body-lg mt-4">
            Medios de pago disponibles. Descuento especial en efectivo.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'relative rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl',
                plan.popular
                  ? 'border-brand-300 bg-gradient-to-b from-brand-50 to-white shadow-lg shadow-brand-500/10 md:scale-105'
                  : 'border-slate-200 bg-white hover:border-brand-200'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md">
                    <Star size={14} fill="currentColor" />
                    Más Elegido
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Caso {plan.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-sm text-slate-500">$</span>
                  <span className="font-display text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500"> ARS</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-brand-500"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5491131793649?text=Hola!%20Me%20interesa%20el%20plan%20${plan.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  'mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300',
                  plan.popular
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600'
                    : 'border-2 border-brand-500 text-brand-600 hover:bg-brand-50'
                )}
              >
                Consultar
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <p className="mt-10 text-center text-sm text-slate-500">
          Todos los planes incluyen consulta inicial sin cargo. Aceptamos
          múltiples medios de pago. Consultá por descuento en efectivo.
        </p>
      </div>
    </section>
  )
}
