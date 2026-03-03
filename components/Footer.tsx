import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-midnight-950">
      <div className="container-narrow section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold italic text-midnight-50">
              unseen
            </span>
            <p className="mt-4 text-sm leading-relaxed text-midnight-200/60">
              Alineadores invisibles diseñados a medida. Transformamos sonrisas
              en Recoleta, Buenos Aires.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-midnight-200/40">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-midnight-200/60">
              <li>
                <a
                  href="https://wa.me/5491131793649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <Phone size={14} />
                  +54 9 11 3179-3649
                </a>
              </li>
              <li>
                <a
                  href="mailto:unseenaligners@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <Mail size={14} />
                  unseenaligners@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/unseenalineadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <Instagram size={14} />
                  @unseenalineadores
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                Recoleta, Buenos Aires
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-midnight-200/40">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-midnight-200/60">
              {[
                ['Inicio', '#inicio'],
                ['Tratamiento', '#tratamientos'],
                ['Proceso', '#proceso'],
                ['Planes', '#planes'],
                ['Nosotros', '#sobre-mi'],
                ['Contacto', '#contacto'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-midnight-200/30 md:flex-row">
          <p>&copy; {year} Unseen Alineadores. Todos los derechos reservados.</p>
          <p>Mat. 42.671 | Recoleta, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
