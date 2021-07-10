module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-parens': 0,
    'comma-dangle': ['warn', 'always-multiline'],
    'func-names': 0,
    'guard-for-in': 0,
    'implicit-arrow-linebreak': 0,
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-param-reassign': ['warn', { props: false }],
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-shadow': ['warn'],
    'no-return-assign': ['warn', 'except-parens'],
    'no-use-before-define': 0,
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 4, consistent: true },
      ObjectPattern: { multiline: true, minProperties: 4, consistent: true },
      ImportDeclaration: { multiline: true, minProperties: 8, consistent: true },
      ExportDeclaration: { multiline: true, minProperties: 4, consistent: true },
    }],
    'operator-linebreak': 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-max-props-per-line': ['warn', { maximum: 3 }],
    'react/prop-types': 0,
  },
};
