/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};

module.exports = withPWA(nextConfig);
