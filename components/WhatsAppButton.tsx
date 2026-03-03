'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import clsx from 'clsx'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    const tooltipTimer = setTimeout(() => setTooltip(false), 8000)
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {tooltip && (
        <div className="relative flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-xl animate-fade-in">
          ¿Tenés alguna consulta? Escribinos
          <button
            onClick={() => setTooltip(false)}
            className="ml-1 text-slate-400 hover:text-slate-600"
          >
            <X size={14} />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white shadow-xl" />
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/5491131793649?text=Hola!%20Quiero%20consultar%20por%20alineadores%20invisibles"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          'flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40',
          'animate-fade-in'
        )}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  )
}
