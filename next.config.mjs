/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images at up to 4K width (3840px) and full quality
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
