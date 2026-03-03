import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Unseen Alineadores Invisibles | Ortodoncia Invisible en Recoleta, Buenos Aires',
  description:
    'Transformá tu sonrisa con alineadores invisibles. Tratamiento de ortodoncia moderna, cómoda y discreta en Recoleta, Buenos Aires. Consultá sin compromiso. Matrícula 42.671.',
  keywords: [
    'alineadores invisibles',
    'ortodoncia invisible',
    'alineadores invisibles Recoleta',
    'ortodoncia invisible Buenos Aires',
    'ortodoncista Recoleta',
    'Unseen alineadores',
    'alineadores transparentes',
    'ortodoncia estética',
  ],
  authors: [{ name: 'Unseen Alineadores' }],
  openGraph: {
    title: 'Unseen Alineadores Invisibles | Ortodoncia Moderna en Recoleta',
    description:
      'Transformá tu sonrisa con alineadores invisibles. Tratamiento cómodo, discreto y efectivo en Recoleta, Buenos Aires.',
    url: 'https://unseen-aligners.vercel.app',
    siteName: 'Unseen Alineadores',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unseen Alineadores Invisibles',
    description: 'Ortodoncia invisible en Recoleta, Buenos Aires.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://unseen-aligners.vercel.app',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Unseen Alineadores Invisibles',
  description:
    'Tratamiento de ortodoncia invisible con alineadores transparentes en Recoleta, Buenos Aires.',
  url: 'https://unseen-aligners.vercel.app',
  telephone: '+5491131793649',
  email: 'unseenaligners@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Recoleta',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.5875,
    longitude: -58.3934,
  },
  sameAs: ['https://www.instagram.com/unseenalineadores'],
  priceRange: '$$',
  medicalSpecialty: 'Orthodontics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="geo.region" content="AR-C" />
        <meta name="geo.placename" content="Recoleta, Buenos Aires" />
        <meta name="geo.position" content="-34.5875;-58.3934" />
        <meta name="ICBM" content="-34.5875, -58.3934" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
