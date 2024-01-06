/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    // image optimization is disabled because of exceeding the vercel hobby tier limit
    unoptimized: true,
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
