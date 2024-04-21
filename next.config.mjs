/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
          }
        ],
      },
      compiler: {
        styledComponents: true,
      },
      experimental: {
        missingSuspenseWithCSRBailout: false,
      }
};

export default nextConfig;
