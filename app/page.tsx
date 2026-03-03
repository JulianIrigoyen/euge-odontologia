import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import BeforeAfter from '@/components/BeforeAfter'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import ContactForm from '@/components/ContactForm'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <BeforeAfter />
        <Team />
        <FAQ />
        <CTABanner />
        <ContactForm />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
