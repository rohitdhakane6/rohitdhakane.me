import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.rohitdhakane.me",
        port: "",
      },
    ],
  }
};

export default nextConfig;
