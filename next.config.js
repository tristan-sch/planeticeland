/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wp.planeticeland.is", "images.unsplash.com"],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
