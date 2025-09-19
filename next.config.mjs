/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // Improve SSR performance
  swcMinify: true,
  // Ensure proper hydration
  reactStrictMode: true,
}

export default nextConfig
