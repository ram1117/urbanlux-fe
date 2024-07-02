/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'urbantrendz.blob.core.windows.net',
      },
    ],
  },
};

export default nextConfig;
