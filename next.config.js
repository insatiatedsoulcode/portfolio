/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloud Storage deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
