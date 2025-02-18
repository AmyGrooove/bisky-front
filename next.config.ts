import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: { API_URL: process.env.API_URL, APP_URL: process.env.APP_URL },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dere.shikimori.one' },
      { protocol: 'https', hostname: 'nyaa.shikimori.one' },
      { protocol: 'https', hostname: 'shikimori.one' },
      { protocol: 'https', hostname: 'minio-storage.bisky.one' },
    ],
  },
}

export default nextConfig
