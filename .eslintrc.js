module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'eslint-config-mantine', // Use eslint-config-mantine here
    ],
    rules: {
      // Add any custom rules here if needed.
    },
  };