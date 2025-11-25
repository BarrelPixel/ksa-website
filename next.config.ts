import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: '/ksa-website',
  assetPrefix: '/ksa-website',
  trailingSlash: true,
};

export default nextConfig;
