"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import WhyWorkWithUs from "@/components/why-work-with-us"
import OurClients from "@/components/our-clients"
import ClientFeedback from "@/components/client-feedback"
import ContactForm from "@/components/contact-form"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <WhyWorkWithUs />
      <OurClients />
      <ClientFeedback />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}
