module.exports = {

  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
  },
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-use-before-define': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'comma-dangle': 'off',
    'prettier/prettier': ['error'],
    'no-console': ['error', { allow: ['tron', 'disableYellowBox'] }],
    semi: [0, 'never']
  },
  globals: {
    fetch: false,
    __DEV__: true
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        'rootPathSuffix': 'src'
      }
    }
  }
}
