import Link from "next/link"
import { ChevronLeft, ExternalLink, Globe, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const projectDetails = {
  "barizi-gardens-resort": {
    title: "Barizi Gardens Resort",
    category: "Web Development & Booking",
    image: "/barizigardens.png",
    website: "#",
    hasSEO: true,
    background:
      "Barizi Gardens Resort needed a digital transformation to reach more customers and streamline their booking process. As a premier resort destination, they required a platform that could showcase their facilities, manage reservations efficiently, and provide an exceptional user experience for potential guests.",
    solution:
      "We built a responsive website with integrated online booking system, gallery showcases, and package management. The platform features real-time availability checking, secure payment processing, and a user-friendly interface that works seamlessly across all devices. Combined with strategic SEO optimization, the site ranks prominently for key resort and booking-related keywords.",
    results: "300% increase in online bookings, reduced administrative workload, 24/7 availability for customers, improved search engine visibility.",
    features: [
      "Online Booking System",
      "Real-time Availability",
      "Payment Integration",
      "Gallery Showcase",
      "Package Management",
      "SEO Optimization",
      "Mobile Responsive Design",
    ],
    technologies: ["Next.js", "React", "Payment Gateway", "CMS Integration"],
  },
  silvergrafix: {
    title: "Silver Grafix",
    category: "Printing & Graphics Advertising",
    image: "/silvergrafix.png",
    website: "https://silvergrafix.co.ke/",
    hasSEO: true,
    background:
      "Silver Grafix is a leading printing and graphics company serving Kajiado County, Kenya. They needed a comprehensive online presence to showcase their extensive range of services including billboard printing, shop branding, banners, stickers, and custom branding solutions. The website needed to serve customers across Ongata Rongai, Kiserian, Masai Lodge, Twala, and Karen.",
    solution:
      "We developed a comprehensive portfolio website with detailed service listings, pricing information, and direct inquiry integration. The site features an extensive portfolio gallery showcasing their work across various printing services. Strategic SEO implementation ensures the site ranks for local search terms like 'printing services near me', 'banner printing in Kiserian', and 'shop branding in Karen'.",
    results: "50+ new clients through online channels, established market credibility, improved local search visibility, increased inquiries from target areas.",
    features: [
      "Service Portfolio Showcase",
      "Local SEO Optimization",
      "Inquiry & Contact Forms",
      "Service Category Pages",
      "Portfolio Gallery",
      "Mobile-First Design",
      "Location-Based Content",
    ],
    technologies: ["Next.js", "SEO Optimization", "CMS", "Contact Forms"],
  },
  sofahub: {
    title: "Sofa Hub",
    category: "E-Commerce",
    image: "/sofahub.png",
    website: "https://sofahub.co.ke/",
    hasSEO: true,
    background:
      "Sofa Hub needed a professional e-commerce platform to sell furniture online with a seamless shopping experience. As a furniture retailer, they required a platform that could showcase their product catalog effectively, handle transactions securely, and provide customers with an intuitive shopping experience from browsing to checkout.",
    solution:
      "We built a full e-commerce store with comprehensive product catalog, shopping cart functionality, secure payment integration, and inventory management system. The platform includes advanced filtering, product search, detailed product pages with multiple images, and a streamlined checkout process. SEO optimization ensures the site ranks for furniture-related keywords and local searches.",
    results: "First month sales exceeded expectations, streamlined operations, national reach, improved customer experience, increased online visibility.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Integration",
      "Inventory Management",
      "Product Search & Filters",
      "Order Management",
      "SEO Optimization",
    ],
    technologies: ["E-Commerce Platform", "Payment Gateway", "Inventory System", "SEO"],
  },
  stagefx: {
    title: "Stage FX",
    category: "Portfolio & SEO",
    image: "/stagefx.png",
    website: "https://stagefx.us/",
    hasSEO: false,
    background:
      "StageFX is a premier digital agency in Boston, Massachusetts, specializing in strategic SEO solutions and high-performance web development. Founded in 2015, they needed a strong online presence to reach the US market and showcase their expertise in SEO and web development services. The site needed to demonstrate their track record of generating $15M+ in revenue through SERP funnelling and achieving 15K+ top 10 keyword rankings.",
    solution:
      "We developed a professional SEO-optimized portfolio website with detailed case studies, comprehensive service descriptions, client testimonials, and performance metrics. The site showcases their expertise in keyword research, technical SEO, link building, and custom web development. The design emphasizes credibility and results, featuring analytics dashboards and success stories.",
    results: "Ranked #3 for target keywords, 200% increase in US inquiries, improved brand credibility, enhanced client acquisition.",
    features: [
      "Case Studies Showcase",
      "Service Pages",
      "Client Testimonials",
      "Performance Metrics",
      "SEO Analytics Display",
      "Contact & Scheduling",
      "Portfolio Gallery",
    ],
    technologies: ["Next.js", "Analytics Integration", "CMS", "Contact Forms"],
  },
  "dove-realestate": {
    title: "Dove Real Estate",
    category: "E-Commerce",
    image: "/doverealestate.png",
    website: "https://doverealestateltd.com/",
    hasSEO: false,
    background:
      "Dove Real Estate Ltd is a luxury real estate company based in Nairobi, Kenya, specializing in premium properties. They needed an elegant online platform to showcase their exclusive listings including residential and commercial properties, penthouses, and luxury developments. The platform needed to reflect their commitment to excellence and provide potential clients with an exceptional browsing experience.",
    solution:
      "We created a sophisticated e-commerce platform with advanced property search functionality, comprehensive filters, virtual tour capabilities, and an inquiry system. The site features their signature collection including luxury properties in Karen, Naivasha, and Westlands. The design emphasizes elegance and professionalism, matching their brand positioning in the luxury real estate market.",
    results: "Increased property inquiries 5x, faster sales cycles, improved customer experience, enhanced brand perception, better property visibility.",
    features: [
      "Property Listings",
      "Advanced Search & Filters",
      "Property Details Pages",
      "Inquiry System",
      "Signature Collection Showcase",
      "Location-Based Browsing",
      "Responsive Design",
    ],
    technologies: ["Next.js", "Property Management", "Search Functionality", "Contact Forms"],
  },
  "ssn-kitchen-products": {
    title: "SSN Kitchen Products",
    category: "E-Commerce",
    image: "/ssnkitchen.png",
    website: "https://ssnkitchenproducts.com/",
    hasSEO: false,
    background:
      "SSN Kitchen Products specializes in steel fabrication and kitchen product manufacturing. They needed a professional website to showcase their products to both B2B and retail customers. The platform needed to display detailed product specifications, support bulk ordering, and facilitate quote requests from corporate clients.",
    solution:
      "We built a comprehensive product showcase website with detailed specifications, high-quality product images, bulk ordering system, and quote request functionality. The site is organized by product categories, making it easy for customers to find what they need. The design emphasizes product quality and professionalism, suitable for both individual and corporate buyers.",
    results: "Enhanced credibility, 40+ new corporate clients, simplified ordering process, improved product visibility, increased inquiries.",
    features: [
      "Product Showcase",
      "Detailed Specifications",
      "Bulk Ordering System",
      "Quote Request Forms",
      "Product Catalog",
      "Category Organization",
      "Contact Integration",
    ],
    technologies: ["Next.js", "E-Commerce", "Product Management", "Contact Forms"],
  },
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params instanceof Promise ? await params : params
  const project = projectDetails[resolvedParams.slug as keyof typeof projectDetails]

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
          <Link href="/#projects">
            <Button className="bg-accent hover:bg-accent/90">Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-12 pt-24">
        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
          <ChevronLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden h-96 bg-muted">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Title and Category */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest">{project.category}</p>
            {project.hasSEO && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                <TrendingUp className="h-3 w-3" />
                SEO Optimized
              </span>
            )}
          </div>
          <h1 className="text-5xl font-bold text-foreground">{project.title}</h1>
          {project.website && project.website !== "#" && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Visit Live Website</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>

        {/* Background, Solution, Results */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-widest">Background</h2>
            <p className="text-foreground/80 leading-relaxed text-sm">{project.background}</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-widest">Solution</h2>
            <p className="text-foreground/80 leading-relaxed text-sm">{project.solution}</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-widest">Results</h2>
            <p className="text-foreground/80 leading-relaxed text-sm">{project.results}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="p-4 bg-card border border-border rounded-lg">
                <p className="text-foreground font-medium text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary border border-border rounded-lg text-foreground text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-lg p-8 text-center space-y-4 border border-border">
          <h2 className="text-2xl font-bold text-foreground">Ready to build something amazing?</h2>
          <p className="text-foreground/70 text-sm">Let's discuss how we can help transform your business</p>
          <div className="flex gap-4 justify-center">
            <a href="https://calendar.google.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent/90 px-8 py-6 text-base font-semibold">
                Schedule a Call
              </Button>
            </a>
            {project.website && project.website !== "#" && (
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-8 py-6 text-base font-semibold">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
