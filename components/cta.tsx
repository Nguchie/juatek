"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg text-primary-foreground/90 leading-relaxed">
          Let's discuss how our solutions can drive growth for your business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            onClick={() => window.open("https://calendar.google.com/", "_blank")}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base font-semibold"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-semibold bg-transparent"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
