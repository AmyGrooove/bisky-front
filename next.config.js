/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_URL: process.env.API_URL,
    SHKIMORI_URL: process.env.SHKIMORI_URL,
    KODIK_API_URL: process.env.KODIK_API_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    VK_CLIENT_ID: process.env.VK_CLIENT_ID,
    VK_CLIENT_SECRET: process.env.VK_CLIENT_SECRET,
    SHIKIMORI_CLIENT_ID: process.env.SHIKIMORI_CLIENT_ID,
    SHIKIMORI_CLIENT_SECRET: process.env.SHIKIMORI_CLIENT_SECRET,
    SHIKIMORI_REDIRECT_URI: process.env.SHIKIMORI_REDIRECT_URI,
  },
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
