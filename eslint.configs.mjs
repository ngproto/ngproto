// @ts-check
import nx from '@nx/eslint-plugin';
import angular from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import baseConfig from './eslint.config.mjs';

export const angularConfig = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/prefer-output-readonly': 'warn',
      '@angular-eslint/prefer-signals': 'warn',
      '@angular-eslint/prefer-standalone': 'warn',
      '@angular-eslint/no-input-rename': 'off',
      '@angular-eslint/no-output-rename': 'off',
    },
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@angular-eslint/directive-selector': 'off',
      '@angular-eslint/component-selector': 'off',
    },
  },
  {
    files: ['**/*.html'],
    ignores: ['**/index.html'],
    rules: {
      '@angular-eslint/template/attributes-order': [
        'warn',
        {
          alphabetical: true,
          order: [
            'STRUCTURAL_DIRECTIVE',
            'TEMPLATE_REFERENCE',
            'ATTRIBUTE_BINDING',
            'INPUT_BINDING',
            'TWO_WAY_BINDING',
            'OUTPUT_BINDING',
          ],
        },
      ],
      '@angular-eslint/template/button-has-type': 'off',
      '@angular-eslint/template/cyclomatic-complexity': ['warn', { maxComplexity: 15 }],
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-ngsrc': 'warn',
      '@angular-eslint/template/prefer-self-closing-tags': 'warn',
      '@angular-eslint/template/use-track-by-function': 'warn',
      '@angular-eslint/template/label-has-associated-control': 'off',
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
    },
  },
  {
    files: ['**/*.spec.*.html'],
    rules: {
      '@angular-eslint/template/button-has-type': 'off',
      '@angular-eslint/template/prefer-ngsrc': 'off',
    },
  },
];

export const prettierConfig = eslintConfigPrettier;
