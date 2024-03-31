import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { config as tsConfig } from 'typescript-eslint';

import baseTypescriptConfig from './typescript.js';

export const react = tsConfig(reactRecommended, {
  languageOptions: {
    ...reactRecommended.languageOptions,
  },
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    ...reactHooksPlugin.configs.recommended.rules,
  },
});

export default tsConfig(...baseTypescriptConfig, ...react);
