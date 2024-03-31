import { eslintFix, prettier } from '../commands.js';
import { all, javascript, typescript } from '../globs.js';

const prettierAllSubtask = {
  [all]: [prettier],
};

const eslintJavascriptSubtask = {
  [javascript]: [eslintFix],
};

const eslintTypescriptSubtask = {
  [typescript]: [eslintFix],
};

export const noCodeProjectConfig = {
  ...prettierAllSubtask,
};

export const javascriptProjectConfig = {
  ...prettierAllSubtask,
  ...eslintJavascriptSubtask,
};

export const typescriptProjectConfig = {
  ...prettierAllSubtask,
  ...eslintJavascriptSubtask,
  ...eslintTypescriptSubtask,
};
