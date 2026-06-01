import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabaseusercontent.com',
      },
    ],
  },
}

export default nextConfig
