'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import clsx from 'clsx'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    const tooltipTimer = setTimeout(() => setTooltip(false), 9000)
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
        <div className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-midnight-600 px-4 py-3 text-sm font-medium text-midnight-50 shadow-2xl animate-fade-in backdrop-blur-md">
          ¿Tenés alguna consulta?
          <button
            onClick={() => setTooltip(false)}
            className="ml-1 text-midnight-200/40 hover:text-midnight-50"
          >
            <X size={14} />
          </button>
          <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-white/10 bg-midnight-600" />
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
