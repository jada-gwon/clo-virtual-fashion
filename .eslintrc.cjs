// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  settings: {
    'import/resolver': {
      typescript: {},
      // vite: {},
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:css-import-order/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'css-import-order'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/naming-convention': ['warn'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        distinctGroup: false,
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '"**/*.svg',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/prefer-default-export': ['warn'],
    'react/function-component-definition': ['off'],
    'react-refresh/only-export-components': 'warn',
  },
};
