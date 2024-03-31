import baseConfig from '@horologium-config/eslint/base.js';

export default [
  ...baseConfig,
  {
    ignores: ['apps/', 'configs/', 'packages/'],
  },
];
