/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  sassOptions: { includePaths: [path.join(__dirname, "styles")] },
  env: { API_URL: process.env.API_URL },
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
}

module.exports = nextConfig
