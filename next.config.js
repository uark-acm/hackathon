/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/hackathon/' : '',
  images: {
    loader: "imgix",
    path: "https://uark-acm.imgix.net"
  }
}

module.exports = nextConfig
