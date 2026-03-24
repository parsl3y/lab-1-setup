import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: '/lab-1-setup', 
  reactStrictMode: true,
};

export default nextConfig;