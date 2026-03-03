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
    <section id="planes" className="section-padding bg-midnight-50">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Planes y precios
          </p>
          <h2 className="heading-lg-dark">
            Un plan para cada{' '}
            <span className="italic text-accent-dark">sonrisa</span>
          </h2>
          <p className="body-lg-dark mt-4">
            Medios de pago disponibles. Descuento especial en efectivo.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'relative rounded-3xl border p-8 transition-all duration-500',
                plan.popular
                  ? 'border-midnight-900 bg-midnight-900 text-midnight-50 shadow-2xl md:scale-[1.03]'
                  : 'border-midnight-900/10 bg-white hover:border-midnight-900/20 hover:shadow-xl'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-midnight-900 shadow-lg">
                    <Star size={14} fill="currentColor" />
                    Más Elegido
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3
                  className={clsx(
                    'font-display text-xl font-semibold',
                    plan.popular ? 'text-midnight-50' : 'text-midnight-900'
                  )}
                >
                  Caso {plan.name}
                </h3>
                <p
                  className={clsx(
                    'mt-1 text-sm',
                    plan.popular ? 'text-midnight-200' : 'text-midnight-300'
                  )}
                >
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span
                    className={clsx(
                      'text-sm',
                      plan.popular ? 'text-midnight-200' : 'text-midnight-300'
                    )}
                  >
                    $
                  </span>
                  <span
                    className={clsx(
                      'font-display text-4xl font-bold',
                      plan.popular ? 'text-midnight-50' : 'text-midnight-900'
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={clsx(
                      'text-sm',
                      plan.popular ? 'text-midnight-200' : 'text-midnight-300'
                    )}
                  >
                    {' '}
                    ARS
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={clsx(
                      'flex items-start gap-3 text-sm',
                      plan.popular ? 'text-midnight-200' : 'text-midnight-300'
                    )}
                  >
                    <Check
                      size={18}
                      className={clsx(
                        'mt-0.5 flex-shrink-0',
                        plan.popular ? 'text-brand' : 'text-brand-600'
                      )}
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
                    ? 'bg-brand text-midnight-900 hover:bg-brand-300'
                    : 'border border-midnight-900 text-midnight-900 hover:bg-midnight-900 hover:text-midnight-50'
                )}
              >
                Consultar
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <p className="mt-10 text-center text-sm text-midnight-300">
          Todos los planes incluyen consulta inicial sin cargo. Aceptamos
          múltiples medios de pago. Consultá por descuento en efectivo.
        </p>
      </div>
    </section>
  )
}
