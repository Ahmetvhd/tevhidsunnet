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
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
