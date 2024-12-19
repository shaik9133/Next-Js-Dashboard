import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.js
module.exports = {
  webpack: (config: { externals: any; }, { isServer }: any) => {
    if (!isServer) {
      // Exclude @mapbox/node-pre-gyp from the client-side build
      config.externals = {
        ...config.externals,
        '@mapbox/node-pre-gyp': 'commonjs @mapbox/node-pre-gyp',
      };
    }
    return config;
  },
};
