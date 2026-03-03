import { GraduationCap, Award, MapPin, Instagram } from 'lucide-react'

const doctors = [
  {
    name: 'Dra. Euge',
    initial: 'E',
    role: 'Ortodoncista',
    bio: 'Odontóloga especialista en ortodoncia con alineadores invisibles. Su misión es que cada paciente logre la sonrisa que siempre soñó, de manera cómoda y moderna.',
    credentials: [
      { icon: GraduationCap, text: 'Especialista en ortodoncia' },
      { icon: Award, text: 'Mat. 42.671' },
      { icon: MapPin, text: 'Recoleta, Buenos Aires' },
    ],
    instagram: 'https://www.instagram.com/unseenalineadores',
    instagramHandle: '@unseenalineadores',
    accentColor: 'brand' as const,
  },
  {
    name: 'Dra. [Nombre]',
    initial: '?',
    role: 'Especialidad',
    bio: 'Descripción de la doctora, su formación, enfoque y lo que la apasiona de la odontología. Completar con información real.',
    credentials: [
      { icon: GraduationCap, text: 'Especialidad' },
      { icon: Award, text: 'Mat. XXXXX' },
      { icon: MapPin, text: 'Ubicación' },
    ],
    instagram: '#',
    instagramHandle: '@completar',
    accentColor: 'accent' as const,
  },
]

export default function Team() {
  return (
    <section id="equipo" className="section-padding bg-midnight-900">
      <div className="container-narrow">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Equipo
          </p>
          <h2 className="heading-lg">
            Las profesionales detrás de{' '}
            <span className="italic text-gradient pr-[0.15em]">tu sonrisa</span>
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-2xl">
            Un equipo dedicado a transformar sonrisas con tecnología de última
            generación y atención personalizada.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="group rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05]"
            >
              {/* Photo placeholder */}
              <div className="mx-auto mb-6 aspect-[3/4] max-w-[280px] overflow-hidden rounded-2xl bg-midnight-800">
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div
                    className={`mb-3 flex h-20 w-20 items-center justify-center rounded-full font-display text-3xl font-bold ${
                      doc.accentColor === 'brand'
                        ? 'bg-brand/10 text-brand'
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    {doc.initial}
                  </div>
                  <p className="text-sm text-midnight-200/40">
                    Foto próximamente
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold text-midnight-50">
                  {doc.name}
                </h3>
                <p
                  className={`mt-1 text-sm font-medium ${
                    doc.accentColor === 'brand' ? 'text-brand' : 'text-accent'
                  }`}
                >
                  {doc.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-midnight-200">
                  {doc.bio}
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-6 space-y-3">
                {doc.credentials.map((cred) => (
                  <div
                    key={cred.text}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2.5"
                  >
                    <cred.icon
                      size={16}
                      className={
                        doc.accentColor === 'brand'
                          ? 'text-brand'
                          : 'text-accent'
                      }
                    />
                    <span className="text-sm text-midnight-200">
                      {cred.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Instagram */}
              <a
                href={doc.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-midnight-200/60 transition-colors hover:text-brand"
              >
                <Instagram size={16} />
                {doc.instagramHandle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
