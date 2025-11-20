import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b95b26cb348242c59499397cac963ab5.r2.dev",
        port: "",
      },
    ],
  },
};

export default nextConfig;
