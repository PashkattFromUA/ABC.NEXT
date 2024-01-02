/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats:['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.abcrypto.io',
            port: '',
            pathname: '/storage/items/images/**',
          },
        ],
      }
}

module.exports = nextConfig
