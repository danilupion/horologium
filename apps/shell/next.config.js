/* global process */
import NextFederationPlugin from '@module-federation/nextjs-mf';

const CLIENT_APP_URL = process.env.NEXT_CLIENT_APP_URL || 'http://localhost:3001';

const remotes = () => {
  return {
    client: `client@${CLIENT_APP_URL}/_next/static/chunks/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'shell',
          filename: 'static/chunks/remoteEntry.js',
          remotes: remotes(),
          exposes: {
            './home': './src/pages/index.tsx',
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};
