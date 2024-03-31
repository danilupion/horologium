import nextPlugin from '@next/eslint-plugin-next';
import { config as tsConfig } from 'typescript-eslint';

import baseTypescriptReactConfig from './typescript-react.js';

export const next = tsConfig(
  {
    ignores: ['.next/*'],
  },

  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
);

export default tsConfig(...baseTypescriptReactConfig, ...next);
