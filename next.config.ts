import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nepal-dining',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
