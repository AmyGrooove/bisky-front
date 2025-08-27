import createMDX from '@next/mdx'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
    IS_DEVELOPMENT: process.env.IS_DEVELOPMENT,
  },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    minimumCacheTTL: 86400,
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
