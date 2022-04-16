require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
