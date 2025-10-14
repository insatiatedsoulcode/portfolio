/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloud Storage deployment
  output: 'export',
  trailingSlash: true,
  assetPrefix: '',
  images: {
    unoptimized: true
  },
  // Disable all linting for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
