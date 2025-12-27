import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://assets.rohitdhakane.in",
        port: "",
      },
    ],
  },
};

export default nextConfig;
