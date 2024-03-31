import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const getTypescriptProject = () => {
  let project = resolve(process.cwd(), 'tsconfig.lint.json');

  if (!existsSync(project)) {
    project = resolve(process.cwd(), 'tsconfig.json');
  }

  return project;
};
