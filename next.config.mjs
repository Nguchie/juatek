/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site so Netlify can host it without the Next.js runtime plugin.
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
