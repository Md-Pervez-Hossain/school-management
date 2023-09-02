/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  plugins: [require("daisyui")],
};

module.exports = nextConfig;
