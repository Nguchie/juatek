"use client"

import { Code2, Globe, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom applications designed for scalability, performance, and your unique business needs. From MVPs to enterprise solutions.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites that engage your audience and convert visitors into customers. Built with latest technologies.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Strategic SEO implementation to boost your visibility, drive organic traffic, and dominate search rankings.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-2">
          <h2 className="text-lg font-semibold text-accent">What We Deliver</h2>
          <p className="text-foreground/70 text-sm max-w-2xl">
            Comprehensive digital services to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
              >
                <div className="mb-6 inline-block p-3 bg-accent/10 rounded-lg">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
