const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    URL: process.env.URL,
  },
};

module.exports = nextConfig;
