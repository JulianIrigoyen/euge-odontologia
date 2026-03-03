'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import clsx from 'clsx'

interface FormData {
  name: string
  email: string
  phone: string
  reason: string
  message: string
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setStatus('loading')
    const lines = [
      `Hola! Soy *${data.name}*`,
      data.reason ? `Consulto por: ${data.reason}` : '',
      data.message ? `\n${data.message}` : '',
      `\nEmail: ${data.email}`,
      `Tel: ${data.phone}`,
    ].filter(Boolean)
    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/5491131793649?text=${text}`, '_blank')
    setStatus('success')
    reset()
  }

  const inputClasses = (hasError: boolean) =>
    clsx(
      'w-full rounded-xl border bg-white/5 px-4 py-3 text-base text-midnight-50 outline-none transition-all placeholder:text-midnight-200/30 focus:border-brand/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-brand/10',
      hasError ? 'border-red-400/50' : 'border-white/10'
    )

  return (
    <section id="contacto" className="section-padding bg-midnight-900">
      <div className="container-narrow">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Contacto
            </p>
            <h2 className="heading-lg">
              Empezá tu{' '}
              <span className="italic text-gradient">transformación</span>
            </h2>
            <p className="body-lg mt-4">
              Escribinos y te respondemos dentro de las 24hs. La primera
              consulta es sin cargo y sin compromiso.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-midnight-200/40">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/5491131793649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-lg font-medium text-midnight-50 transition-colors hover:text-brand"
                >
                  +54 9 11 3179-3649
                </a>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-midnight-200/40">
                  Email
                </h3>
                <a
                  href="mailto:unseenaligners@gmail.com"
                  className="mt-1 text-lg font-medium text-midnight-50 transition-colors hover:text-brand"
                >
                  unseenaligners@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-midnight-200/40">
                  Ubicación
                </h3>
                <p className="mt-1 text-lg font-medium text-midnight-50">
                  Recoleta, Buenos Aires
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-midnight-200/40">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/unseenalineadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-lg font-medium text-midnight-50 transition-colors hover:text-brand"
                >
                  @unseenalineadores
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 lg:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="mb-4 text-brand" />
                <h3 className="heading-md">¡Mensaje enviado!</h3>
                <p className="body-md mt-2">
                  Te respondemos dentro de las 24hs.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-6"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-midnight-200">
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Ingresá tu nombre' })}
                    className={inputClasses(!!errors.name)}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-midnight-200">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Ingresá tu email',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
                    })}
                    className={inputClasses(!!errors.email)}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-midnight-200">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Ingresá tu teléfono' })}
                    className={inputClasses(!!errors.phone)}
                    placeholder="+54 9 11 ..."
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-midnight-200">
                    Motivo de consulta
                  </label>
                  <select
                    id="reason"
                    {...register('reason')}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-midnight-50 outline-none transition-all focus:border-brand/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-brand/10"
                  >
                    <option value="" className="bg-midnight-900">Seleccioná una opción</option>
                    <option value="Consulta inicial" className="bg-midnight-900">Consulta inicial</option>
                    <option value="Presupuesto" className="bg-midnight-900">Pedir presupuesto</option>
                    <option value="Info sobre alineadores" className="bg-midnight-900">Info sobre alineadores</option>
                    <option value="Otro" className="bg-midnight-900">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-midnight-200">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    {...register('message')}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-midnight-50 outline-none transition-all placeholder:text-midnight-200/30 focus:border-brand/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-brand/10"
                    placeholder="Contanos brevemente qué necesitás..."
                  />
                </div>


                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Consulta
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
