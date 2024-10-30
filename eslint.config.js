import globals from 'globals';
export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended', // If you are using Prettier
  ],
  parser: '@babel/eslint-parser', // You can use a different parser if needed
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    // Custom rules can be added here
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/export': 'error',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  globals: {
    ...globals.browser, // Add browser globals
  },
};
