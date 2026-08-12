import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },

  poweredByHeader: false,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@react-three/drei",
    ],
  },
};

export default nextConfig;
