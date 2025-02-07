# @arch-design/arch-ui-vue

类 arco-design UI库

## 预览

文档：[https://arch-desgin.github.io/arch-ui-vue/docs/](https://arch-desgin.github.io/arch-ui-vue/docs/)

演练场：[https://arch-desgin.github.io/arch-ui-vue/playground](https://arch-desgin.github.io/arch-ui-vue/playground)

## TODO

1. 使用kebab-case命名组件
2. 实现popper组件
3. 实现虚拟滚动 table 组件
4. 其他一些亮点组件（待收集）

## 亮点

这里简单记一下，包括针对这些亮点可能的提问：

- 工程化和架构
  - 使用pnpm + monorepo
    - 一些可能的提问
      - 为什么使用pnpm + monorepo 而不是 yarn + lerna
      - npm、yarn、pnpm 有什么区别
      - 什么是 monorepo，为什么要使用 monorepo
    - 分包结构
      - components 组件包
      - core 核心包(一些工具和方法也在这)
      - lint 代码检查(ESLint、Prettier配置)
      - docs 文档 (vitepress)
      - playground (storybook)
  - 工程化配置
    - 工具
      - 代码检查和格式化
        - ESLint
          - 根目录的.eslintrc.js通过extends继承了`@arch-design/arch-ui-lint-config`
        - Prettier
          - 根目录的.prettierrc.js通过extends继承了`@arch-design/arch-ui-lint-config/prettier`
          - 通过拓展运算符实现了自定义配置
        - commitlint
          - 使用最基础的commit检查规则，配置在package.json中，避免过多配置文件
        - lint-staged
          - 对暂存区的文件进行代码检查和格式化，保证提交的代码没有问题
          - lint-staged配置在package.json中，`prettier --write` 诸如这类命令不需要配置路径，默认为暂存区的文件
        - husky
          - 通过git hooks实现在git操作前执行一些脚本，比如commit-msg、pre-commit等
          - 执行npm prepare(npm script生命周期)时修改.git下的config，添加hooksPath=.husky，来指定Git操作前执行的动作
          - 诸如commit-msg、pre-commit这些文件本质是shell脚本，因此需要注意它们的执行权限
      - npm script 运用
        - 使用 tsx xxx 运行 ts 脚本
        - 使用 useDevBuild.ts 切换 package.json 配置
        - 使用 createComponent.ts 自动创建组件
        - 知识点：npm script 生命周期
      - CI/CD
        - Github Action
          - push 后自动进行 lint、test检查
          - 打包 components 并 打包部署vitepress 和 storybook
          - 根据readme生成 index.html，并区分docs 和 playground 进行导航
- 组件库技术栈
  - 使用Vue3 + TypeScript + Sass 开发
    - 组件库类型提示良好
      - 提问1: 为啥使用interface 而不是 type
    - 组件支持高度定制化
      - 提问1: 为什么使用Design Token，能介绍下[Design Token](https://juejin.cn/post/7257708221360111675) 么
      - 提问2: sass 的作用是什么，为什么要配置统一的前缀prefix
