import tseslint from 'typescript-eslint';

import { getTypescriptProject } from '../utils.js';
import baseConfig from './base.js';

const project = getTypescriptProject();

export const typescript = tseslint.config({
  files: ['**/*.{ts,tsx}'],
  extends: [...tseslint.configs.recommended],
  languageOptions: {
    parserOptions: {
      project: project,
    },
  },
});

export default tseslint.config(...baseConfig, ...typescript);
