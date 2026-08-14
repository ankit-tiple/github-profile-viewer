import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
};

module.exports = {
  output: "standalone",
};

export default nextConfig;
