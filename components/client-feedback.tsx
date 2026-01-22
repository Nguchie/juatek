"use client"

export default function ClientFeedback() {
  const testimonials = [
    {
      name: "Madam Agatha",
      company: "Barizi Gardens Resort",
      role: "Manager",
      feedback:
        "NexaCode transformed our business by creating a seamless booking platform. Our reservations increased by 150% within the first three months.",
      rating: 5,
    },
    {
      name: "Stephen Mwangi",
      company: "Silver Grafix",
      role: "Owner",
      feedback:
        "The marketing strategy and website redesign exceeded our expectations. Our leads have tripled since launch.",
      rating: 5,
    },
    {
      name: "Dan",
      company: "Sofa Hub",
      role: "Owner",
      feedback:
        "The e-commerce platform NexaCode built is user-friendly and has significantly improved our online sales performance.",
      rating: 5,
    },
    {
      name: "Rose",
      company: "Dove Real Estate",
      role: "Manager",
      feedback:
        "The property platform has revolutionized how we showcase our listings. Property inquiries have increased dramatically, and the user experience is exceptional.",
      rating: 5,
    },
  ]

  return (
    <section id="feedback" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-2">
          <h2 className="text-lg font-semibold text-accent">Client Feedback</h2>
          <p className="text-foreground/70 text-sm">What our partners say about us</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4 p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed italic">{testimonial.feedback}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-foreground/60 text-xs">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
