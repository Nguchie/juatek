"use client"

import type React from "react"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 space-y-2">
          <h2 className="text-lg font-semibold text-accent">Get In Touch</h2>
          <p className="text-foreground/70 text-sm">Let's discuss how we can help your business grow</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-foreground">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Your company"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-foreground">
                Service
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleSelectChange("service", value)}
                required
              >
                <SelectTrigger className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom-software">Custom Software</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium text-foreground">
                Budget
              </label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleSelectChange("budget", value)}
                required
              >
                <SelectTrigger className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1000">Under $1,000</SelectItem>
                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5000-plus">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
