/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  env: { API_URL: process.env.API_URL, APP_URL: process.env.APP_URL },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dere.shikimori.one' },
      { protocol: 'https', hostname: 'nyaa.shikimori.one' },
      { protocol: 'https', hostname: 'shikimori.one' },
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ],
    },
  ],
}

module.exports = nextConfig
