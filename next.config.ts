import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hafiz-ahsan-portfolio-v2",
  assetPrefix: "/hafiz-ahsan-portfolio-v2/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
