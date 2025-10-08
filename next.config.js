/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for App Engine deployment
  output: 'standalone',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
