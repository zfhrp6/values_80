module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/button-has-type': 'off',
    'react/style-prop-object': 'off',
  },
};
