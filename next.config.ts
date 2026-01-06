import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.ecirkapisi.org.tr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tevhiddergisi.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kiblegah.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
