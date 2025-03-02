import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  env: { API_URL: process.env.API_URL, APP_URL: process.env.APP_URL },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dere.shikimori.one' },
      { protocol: 'https', hostname: 'nyaa.shikimori.one' },
      { protocol: 'https', hostname: 'shikimori.one' },
      { protocol: 'https', hostname: 'minio-storage.bisky.one' },
    ],
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
