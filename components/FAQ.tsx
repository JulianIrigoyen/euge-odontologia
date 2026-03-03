'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const faqs = [
  {
    q: '¿Los alineadores son realmente invisibles?',
    a: 'Sí, están fabricados con material transparente de alta calidad. Son prácticamente imperceptibles para los demás. Podés seguir tu rutina diaria sin que nadie note que estás en tratamiento.',
  },
  {
    q: '¿Duele usar alineadores?',
    a: 'Podés sentir una leve presión los primeros días de cada juego nuevo, que es señal de que están funcionando. Es mucho más cómodo que los brackets tradicionales y la molestia desaparece rápidamente.',
  },
  {
    q: '¿Cuánto tiempo dura el tratamiento?',
    a: 'Depende de la complejidad del caso. Un caso mini puede resolverse en 3-4 meses, mientras que un caso full puede tomar entre 10 y 18 meses. En tu consulta inicial te damos un estimado personalizado.',
  },
  {
    q: '¿Puedo comer de todo?',
    a: '¡Sí! A diferencia de los brackets, los alineadores se retiran para comer y tomar. No hay restricciones alimentarias. Solo recordá cepillarte antes de volver a colocarlos.',
  },
  {
    q: '¿Cada cuánto se cambian los alineadores?',
    a: 'Generalmente cada 2 semanas cambiás a un nuevo juego. Cada cambio mueve tus dientes un poco más cerca de la posición final planificada.',
  },
  {
    q: '¿Cuántas horas por día hay que usarlos?',
    a: 'Se recomienda usarlos entre 20 y 22 horas diarias para obtener resultados óptimos. Solo se retiran para comer, tomar bebidas que no sean agua, y para la higiene dental.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500">
              Preguntas frecuentes
            </p>
            <h2 className="heading-lg">
              Todo lo que necesitás{' '}
              <span className="text-brand-600">saber</span>
            </h2>
          </div>

          {/* FAQ items */}
          <div className="mt-12 divide-y divide-slate-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={clsx(
                      'flex-shrink-0 text-slate-400 transition-transform duration-200',
                      openIndex === i && 'rotate-180 text-brand-500'
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    'overflow-hidden transition-all duration-300',
                    openIndex === i ? 'max-h-60 pb-5' : 'max-h-0'
                  )}
                >
                  <p className="body-md pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
