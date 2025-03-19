/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wp.planeticeland.is", "images.unsplash.com"],
    // TODO: fix this
    // Temporary fix until a solution is found for the image optimization issue
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
