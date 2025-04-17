import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pokharauae.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.vatsalya.com.np",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dubai-approval.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gladstone-cleaning.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.100",
        port: "5000",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
