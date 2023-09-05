/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "i.ibb.co"],
  },
  plugins: [require("daisyui")],
};

module.exports = nextConfig;
