import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'client',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {},
          exposes: {
            './Login': './src/pages/login.tsx',
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};
