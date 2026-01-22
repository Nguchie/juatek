"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Digital Solutions for Growth
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md">
              Transform your business with expert software development, web design, and SEO strategies tailored for your
              success.
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
              <a href="https://calendar.google.com/">
                <Button className="bg-accent hover:bg-accent/90 text-foreground px-7 py-5 text-sm font-semibold rounded-lg">
                  Get In Touch
                </Button>
              </a>
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground/5 px-7 py-5 text-sm font-semibold rounded-lg bg-transparent"
                >
                  Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:flex justify-end">
            <div className="w-full h-80 bg-secondary rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero-image.jpg"
                alt="Team working on software development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
