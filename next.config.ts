import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slash issues on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
