'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import clsx from 'clsx'

interface FormData {
  name: string
  email: string
  phone: string
  reason: string
  message: string
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xpwdjqgk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-narrow">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500">
              Contacto
            </p>
            <h2 className="heading-lg">
              Empezá tu{' '}
              <span className="text-brand-600">transformación</span>
            </h2>
            <p className="body-lg mt-4">
              Escribinos y te respondemos dentro de las 24hs. La primera
              consulta es sin cargo y sin compromiso.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/5491131793649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-lg font-medium text-slate-800 transition-colors hover:text-brand-600"
                >
                  +54 9 11 3179-3649
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </h3>
                <a
                  href="mailto:unseenaligners@gmail.com"
                  className="mt-1 text-lg font-medium text-slate-800 transition-colors hover:text-brand-600"
                >
                  unseenaligners@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Ubicación
                </h3>
                <p className="mt-1 text-lg font-medium text-slate-800">
                  Recoleta, Buenos Aires
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/unseenalineadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-lg font-medium text-slate-800 transition-colors hover:text-brand-600"
                >
                  @unseenalineadores
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 lg:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="mb-4 text-green-500" />
                <h3 className="heading-md">¡Mensaje enviado!</h3>
                <p className="body-md mt-2">
                  Te respondemos dentro de las 24hs. ¡Gracias!
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
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Ingresá tu nombre' })}
                    className={clsx(
                      'w-full rounded-xl border bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100',
                      errors.name ? 'border-red-300' : 'border-slate-200'
                    )}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Ingresá tu email',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Email inválido',
                      },
                    })}
                    className={clsx(
                      'w-full rounded-xl border bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100',
                      errors.email ? 'border-red-300' : 'border-slate-200'
                    )}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required: 'Ingresá tu teléfono',
                    })}
                    className={clsx(
                      'w-full rounded-xl border bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100',
                      errors.phone ? 'border-red-300' : 'border-slate-200'
                    )}
                    placeholder="+54 9 11 ..."
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="reason"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Motivo de consulta
                  </label>
                  <select
                    id="reason"
                    {...register('reason')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="Consulta inicial">Consulta inicial</option>
                    <option value="Presupuesto">Pedir presupuesto</option>
                    <option value="Info sobre alineadores">
                      Info sobre alineadores
                    </option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    {...register('message')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                    placeholder="Contanos brevemente qué necesitás..."
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle size={18} />
                    Hubo un error. Intentá de nuevo o escribinos por WhatsApp.
                  </div>
                )}

                {/* Submit */}
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
