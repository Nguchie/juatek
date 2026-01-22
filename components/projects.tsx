"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "barizi-gardens",
    title: "Barizi Gardens Resort",
    category: "Web Development & Booking",
    image: "/barizigardens.png",
    slug: "barizi-gardens-resort",
  },
  {
    id: "silvergrafix",
    title: "Silver Grafix",
    category: "Printing & Graphics Advertising",
    image: "/silvergrafix.png",
    slug: "silvergrafix",
  },
  {
    id: "sofahub",
    title: "Sofa Hub",
    category: "E-Commerce",
    image: "/sofahub.png",
    slug: "sofahub",
  },
  {
    id: "stagefx",
    title: "Stage FX",
    category: "Portfolio & SEO",
    image: "/stagefx.png",
    slug: "stagefx",
  },
  {
    id: "dove-realestate",
    title: "Dove Real Estate",
    category: "E-Commerce",
    image: "/doverealestate.png",
    slug: "dove-realestate",
  },
  {
    id: "ssn-kitchen",
    title: "SSN Kitchen Products",
    category: "E-Commerce",
    image: "/ssnkitchen.png",
    slug: "ssn-kitchen-products",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-2">
          <h2 className="text-lg font-semibold text-accent">Our Work</h2>
          <p className="text-foreground/70 text-sm">Projects we've completed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div className="group cursor-pointer space-y-4">
                <div className="relative overflow-hidden h-64 bg-muted rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
