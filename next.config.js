/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'i.scdn.co'],
    unoptimized: true,
  },
  transpilePackages: ['geist'],

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async rewrites() {
    return [{ source: '/ingest/:path*', destination: 'https://app.posthog.com/:path*' }];
  },
};

module.exports = nextConfig;
