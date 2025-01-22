/* eslint-env node */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: ['prettier'],
  rules: {
    //缩进采用两空格
    indent: 'off',
    'function-paren-newline': 'off',
    //代码结尾分号校验
    semi: 'error',
    //尾逗号
    'comma-dangle': 'off',
    // 换行是否校验换行符
    'linebreak-style': 'off',
    // const 替代 let
    'prefer-const': 'warn',
    // 是否校验操作符
    'operator-linebreak': 'off',
    //函数声明时括号与函数名间加空格
    //不能有var声明
    'no-var': 'error',
    'space-before-function-paren': 'off',
    'object-curly-newline': 'off',
    //禁止 var 声明 与外层作用域的变量同名
    'no-shadow': 'off',
    //不允许在变量定义之前使用它们
    'no-use-before-define': 'warn',
    //禁止出现未使用过的表达式
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'default-case': 'off',
    'implicit-arrow-linebreak': 'off',
    //嵌套的三元表达式
    'no-nested-ternary': 'off',
    'no-magic-numbers': [
      'warn',
      { ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000, 1024] },
    ],
    //取消对文件扩展名的验证
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    //vue规则
    'vue/html-indent': ['off', 2],
    'vue/order-in-components': 'off',
    'vue/this-in-template': 'off',
    'vue/no-html': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/max-attributes-per-line': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['off', { properties: 'never' }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'no-restricted-globals': 'off',
    'no-confusing-arrow': 'off',
    'no-return-assign': ['error', 'except-parens'],
  },
};
