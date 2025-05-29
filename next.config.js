/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['cdn.krfx.ru'],
  },
}

module.exports = nextConfig
