"use client"

import { CheckCircle } from "lucide-react"

export default function WhyWorkWithUs() {
  const reasons = [
    {
      title: "Expert Team",
      description:
        "Our specialists bring years of experience in software development, web design, and SEO optimization",
    },
    {
      title: "Custom Solutions",
      description: "We don't believe in one-size-fits-all. Every project is tailored to your unique business needs",
    },
    {
      title: "Results-Driven",
      description: "We focus on measurable outcomes and ROI, ensuring your investment delivers real value",
    },
    {
      title: "24/7 Support",
      description: "Our team is always available to support your project and answer any questions",
    },
    {
      title: "Cutting-Edge Tech",
      description: "We stay ahead of industry trends and use the latest technologies to build future-proof solutions",
    },
    {
      title: "Long-Term Partnership",
      description: "We see ourselves as an extension of your team, committed to your continued growth and success",
    },
  ]

  return (
    <section id="why-us" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-2">
          <h2 className="text-lg font-semibold text-accent">Why Work With Us</h2>
          <p className="text-foreground/70 text-sm">We are the next-gen business experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
