/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/**/*',
          },
          {
            protocol: 'http',
            hostname: 'placehold.co',
          },{
            protocol: 'http',
            hostname: 'supportive-boat-43618c4336.media.strapiapp.com',
            
          }
        ],
      },
};

export default nextConfig;
