/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  sassOptions: { includePaths: [path.join(__dirname, "styles")] },
  env: { API_URL: process.env.API_URL },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
}

module.exports = nextConfig
