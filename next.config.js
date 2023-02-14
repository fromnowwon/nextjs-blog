/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  awcMinify: true,
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
