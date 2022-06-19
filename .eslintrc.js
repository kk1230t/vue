module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    es6: true
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: ['vue'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': ['error', 'never']
  }
}
