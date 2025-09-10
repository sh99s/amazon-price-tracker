import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
      "www.amazon.com",
    ],
    // Alternative approach using remotePatterns (recommended for better security)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.amazon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
