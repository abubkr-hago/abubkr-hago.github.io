/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { unoptimized: true },
  experimental: { images: { unoptimized: true } },
  basePath: '',
  distDir: 'build',
  poweredByHeader: false,
  output: 'export'
};

module.exports = nextConfig;
