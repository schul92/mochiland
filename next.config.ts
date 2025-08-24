import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
