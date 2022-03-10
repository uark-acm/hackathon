/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const webpack = require('webpack');

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    reactStrictMode: true,
    images: {
      loader: "imgix",
      path: "https://uark-acm.imgix.net"
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...config,
      assetPrefix: ""
    }
  }

  return {
    ...config,
    assetPrefix: "/hackathon/"
  }
}
