/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/hackathon/' : '',
  images: {
    loader: "custom",
    // TODO: Use the new ACM ImgIX account for optimization
  }
}

module.exports = nextConfig
