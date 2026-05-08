import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "www.ifan-solution.com"
      },
      {
        protocol: "https",
        hostname: "ifan-solution.com"
      },
      {
        protocol: "https",
        hostname: "img01.v15cdn.com"
      }
    ]
  }
};

export default nextConfig;
