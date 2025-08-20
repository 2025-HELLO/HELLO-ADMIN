import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import parser from '@typescript-eslint/parser';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';

export default [
  globalIgnores(['node_modules', 'dist', 'dist-ssr']),

  js.configs.recommended,

  prettierConfig,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier: prettier,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tseslintPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['*.config.js', '*.config.ts'],
    rules: {
      'react/react-in-jsx-scope': 'off',

      'no-console': 'off',
      'no-unused-vars': 'warn',
      curly: 'error',

      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],

      'react/self-closing-comp': 'warn',
      'react/jsx-pascal-case': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      '@typescript-eslint/no-explicit-any': 'warn',

      'prettier/prettier': 'error',
    },
  },
];
