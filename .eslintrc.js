module.exports = {
  root: true,
  extends: ['./packages/lint/index.js'],
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    'vue/no-mutating-props': 'warn',
    'vue/html-closing-bracket-newline': 'off',
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    '@typescript-eslint/no-invalid-this': 'off',
    'arrow-body-style': 'off',
  },
};
