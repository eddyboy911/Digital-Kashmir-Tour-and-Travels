/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    /**
     * Pre-bundles lucide-react (and clsx) so each icon is its own module.
     * Fixes the HMR "icons flash as raw objects" bug in `next dev` when
     * saving files, and trims the production bundle since only the icons
     * actually imported end up shipped.
     */
    optimizePackageImports: ['lucide-react', 'clsx'],
  },
};

module.exports = nextConfig;
