/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
