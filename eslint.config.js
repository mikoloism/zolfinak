import antfu from '@antfu/eslint-config';
import * as ionicPrettierConfig from '@ionic/prettier-config';

export default antfu({
  test: true,

  typescript: {
    tsconfigPath: ['./tsconfig.json', './tsconfig.node.json'],
    parserOptions: { project: ['./tsconfig.json', './tsconfig.node.json'] },
    overrides: {
      'ts/no-this-alias': 'off',
      'ts/explicit-module-boundary-types': 'off',
      'ts/consistent-generic-constructors': 'error',
      'ts/adjacent-overload-signatures': 'warn',
      'ts/consistent-type-assertions': 'error',
      'ts/prefer-for-of': 'error',
      'ts/prefer-optional-chain': 'error',
      'ts/explicit-function-return-type': 'off',
      'ts/prefer-readonly': 'error',
      'ts/no-redeclare': 'off',
      'ts/no-explicit-any': ['error', { ignoreRestArgs: true }],
      'ts/unified-signatures': ['warn', { ignoreDifferentlyNamedParameters: true }],
      'ts/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
      'ts/consistent-type-imports': ['error', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
    },
  },

  react: {
    overrides: {
      'react/prop-types': 'off',
      'react/jsx-sort-props': 'error',
      'react-refresh/only-export-components': 'off',
    },
  },

  javascript: {
    overrides: {
      'no-fallthrough': 'off',
      'no-constant-condition': 'off',
    },
  },
  jsx: true,

  stylistic: false,
  formatters: {
    css: 'prettier',
    html: 'prettier',
    markdown: 'prettier',
    prettierOptions: ionicPrettierConfig,
  },

  jsonc: false,
  yaml: false,
  gitignore: true,

  files: ['src/**/*.ts', 'src/**/*.tsx'],
  ignores: [
    'node_modules',
    '**/*.config.{js,ts,mts,cts,mjs,cjs}',
    '**/*.json',
    '**/*.{yaml,yml}',
    '**/*.d.ts',
    '**/*.test.{ts,tsx,js,jsx}',
    'cypress/**/*.*',
    'tests/**/*.*',
  ],

  rules: {
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true, allowUnboundThis: true }],
    'object-shorthand': ['error', 'properties' /* { avoidQuotes: true, avoidExplicitReturnArrows: false } */],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'ignore',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
          orderImportKind: 'asc',
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreMemberSort: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
  },
});
