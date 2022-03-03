/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    reactStrictMode: true,
    images: {
      loader: "imgix",
      path: "https://uark-acm.imgix.net"
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
