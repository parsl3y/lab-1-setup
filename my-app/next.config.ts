import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: 'export' } : {}),
  
  images: {
    unoptimized: true, 
  },

  basePath: isGithubActions ? '/lab-1-setup' : '',

  reactStrictMode: true,
};

export default nextConfig;