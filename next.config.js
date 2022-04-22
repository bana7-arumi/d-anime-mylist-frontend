/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  nextConfig,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ["cs1.animestore.docomo.ne.jp"],
  },
};
