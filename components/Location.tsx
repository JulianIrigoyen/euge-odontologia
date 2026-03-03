import { MapPin, Train, Bus, Navigation, ExternalLink } from 'lucide-react'

const GOOGLE_MAPS_QUERY = 'Facultad+de+Medicina+UBA,+Buenos+Aires'
const COORDS = { lat: -34.5988, lng: -58.3981 }

export default function Location() {
  return (
    <section id="ubicacion" className="section-padding bg-midnight-900">
      <div className="container-narrow">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Ubicación
          </p>
          <h2 className="heading-lg">
            Encontranos en{' '}
            <span className="italic text-gradient">Recoleta</span>
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-2xl">
            Estamos a pasos de la Facultad de Medicina, en el corazón de
            Recoleta.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-white/5 lg:col-span-3">
            <iframe
              title="Ubicación Unseen Alineadores"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${GOOGLE_MAPS_QUERY}&zoom=15&maptype=roadmap`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[350px] w-full lg:h-[420px]"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Address */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                  <MapPin size={20} className="text-brand" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-midnight-50">
                    Dirección
                  </h3>
                  <p className="text-sm text-midnight-200">
                    Zona Facultad de Medicina, Recoleta
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${COORDS.lat},${COORDS.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-midnight-50 transition-all hover:bg-white/10"
                >
                  Google Maps
                  <ExternalLink size={14} />
                </a>
                <a
                  href={`https://waze.com/ul?ll=${COORDS.lat},${COORDS.lng}&navigate=yes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-midnight-50 transition-all hover:bg-white/10"
                >
                  Waze
                  <Navigation size={14} />
                </a>
              </div>
            </div>

            {/* How to get there */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-midnight-200/40">
                Cómo llegar
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <Train size={16} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-midnight-50">
                      Subte
                    </p>
                    <p className="text-sm text-midnight-200">
                      Línea D — Est. Facultad de Medicina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Bus size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-midnight-50">
                      Colectivos
                    </p>
                    <p className="text-sm text-midnight-200">
                      Líneas por Av. Córdoba y Av. Santa Fe
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <MapPin size={16} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-midnight-50">
                      Referencias
                    </p>
                    <p className="text-sm text-midnight-200">
                      Hospital de Clínicas, Plaza Houssay
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5491131793649?text=Hola!%20Quiero%20consultar%20la%20direcci%C3%B3n%20exacta%20del%20consultorio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Pedir dirección exacta
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
