import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-white">
      <div className="container-narrow section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-brand-400">
              unseen
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Alineadores invisibles diseñados a medida. Transformamos sonrisas
              en Recoleta, Buenos Aires.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://wa.me/5491131793649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand-400"
                >
                  <Phone size={16} />
                  +54 9 11 3179-3649
                </a>
              </li>
              <li>
                <a
                  href="mailto:unseenaligners@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-brand-400"
                >
                  <Mail size={16} />
                  unseenaligners@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/unseenalineadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand-400"
                >
                  <Instagram size={16} />
                  @unseenalineadores
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                Recoleta, Buenos Aires
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                ['Inicio', '#inicio'],
                ['Tratamientos', '#tratamientos'],
                ['Proceso', '#proceso'],
                ['Planes', '#planes'],
                ['Sobre Mí', '#sobre-mi'],
                ['Contacto', '#contacto'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition-colors hover:text-brand-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
          <p>&copy; {year} Unseen Alineadores. Todos los derechos reservados.</p>
          <p>Mat. 42.671 | Recoleta, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
