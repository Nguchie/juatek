"use client"

export default function OurClients() {
  const clients = [
    {
      name: "Startups",
      description: "Seeking scalable and innovative solutions",
    },
    {
      name: "Enterprises",
      description: "Requiring high-performance, secure software",
    },
    {
      name: "E-Commerce",
      description: "Businesses needing online growth and SEO",
    },
    {
      name: "Agencies",
      description: "Looking for development and design partners",
    },
  ]

  return (
    <section id="clients" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-2">
          <h2 className="text-lg font-semibold text-accent">Who Are Our Clients</h2>
          <p className="text-foreground/70 text-sm">The future of strategic businesses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="space-y-3 p-8 rounded-lg border border-foreground/10 bg-foreground/5 transition-all hover:bg-foreground/8"
            >
              <h3 className="font-semibold text-foreground text-base">{client.name}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
