"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="NexaCode Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
            Our Services
          </Link>
          <Link href="#projects" className="text-sm text-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#why-us" className="text-sm text-foreground hover:text-primary transition-colors">
            Why Us
          </Link>
          <Link href="#clients" className="text-sm text-foreground hover:text-primary transition-colors">
            Clients
          </Link>
          <Link href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => window.open("https://calendar.google.com/", "_blank")}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Get In Touch
        </Button>
      </nav>
    </header>
  )
}
